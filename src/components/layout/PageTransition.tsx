"use client";

import { animate, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type PageTransitionVariant = "fade" | "slide" | "fade-slide";

export type SlideDirection = "left" | "right";

export type PageTransitionConfig = {
  variant?: PageTransitionVariant;
  slideDirection?: SlideDirection;
  duration?: number;
  slideOffset?: number;
  respectReducedMotion?: boolean;
};

export type PageTransitionProps = PageTransitionConfig & {
  children: ReactNode;
  className?: string;
};

type PageTransitionContextValue = {
  navigate: (href: string) => Promise<void>;
  registerSurface: (element: HTMLDivElement | null) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

const DEFAULT_DURATION = 0.5;
const DEFAULT_SLIDE_OFFSET = 24;

function isSameRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return /^\/(en|ar)\/?$/.test(pathname);
  }

  return (
    pathname === href || pathname.endsWith(href) || pathname.endsWith(`${href}/`)
  );
}

function getMotionValues(
  variant: PageTransitionVariant,
  slideDirection: SlideDirection,
  slideOffset: number,
  phase: "enter" | "exit",
) {
  const offset = slideDirection === "right" ? slideOffset : -slideOffset;
  const enterX = offset;
  const exitX = -offset;

  if (phase === "enter") {
    switch (variant) {
      case "fade":
        return { opacity: [0, 1] as number[], x: [0, 0] as number[] };
      case "slide":
        return { opacity: [1, 1] as number[], x: [enterX, 0] as number[] };
      case "fade-slide":
      default:
        return { opacity: [0, 1] as number[], x: [enterX, 0] as number[] };
    }
  }

  switch (variant) {
    case "fade":
      return { opacity: [1, 0] as number[], x: [0, 0] as number[] };
    case "slide":
      return { opacity: [1, 1] as number[], x: [0, exitX] as number[] };
    case "fade-slide":
    default:
      return { opacity: [1, 0] as number[], x: [0, exitX] as number[] };
  }
}

export function usePageTransitionNavigate() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransitionNavigate must be used within PageTransitionProvider",
    );
  }

  return context;
}

export function PageTransitionProvider({
  children,
  variant = "fade-slide",
  slideDirection = "right",
  duration = DEFAULT_DURATION,
  slideOffset = DEFAULT_SLIDE_OFFSET,
  respectReducedMotion = true,
}: PageTransitionConfig & { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion() === true;
  const prefersReducedMotion = respectReducedMotion && reducedMotion;
  const isFirstRender = useRef(true);
  const isTransitioning = useRef(false);

  const registerSurface = useCallback((element: HTMLDivElement | null) => {
    surfaceRef.current = element;
  }, []);

  const runAnimation = useCallback(
    async (phase: "enter" | "exit") => {
      const element = surfaceRef.current;
      if (!element || prefersReducedMotion) {
        return;
      }

      const values = getMotionValues(
        variant,
        slideDirection,
        slideOffset,
        phase,
      );

      await animate(element, values, {
        duration,
        ease: [0.4, 0, 0.2, 1],
      }).finished;
    },
    [duration, prefersReducedMotion, slideDirection, slideOffset, variant],
  );

  const navigate = useCallback(
    async (href: string) => {
      if (isSameRoute(pathname, href) || prefersReducedMotion || isTransitioning.current) {
        if (!isSameRoute(pathname, href)) {
          router.push(href);
        }
        return;
      }

      isTransitioning.current = true;

      try {
        await runAnimation("exit");
        router.push(href);
      } finally {
        isTransitioning.current = false;
      }
    },
    [pathname, prefersReducedMotion, router, runAnimation],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    void runAnimation("enter");
  }, [pathname, prefersReducedMotion, runAnimation]);

  return (
    <PageTransitionContext.Provider value={{ navigate, registerSurface }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function PageTransitionSurface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "PageTransitionSurface must be used within PageTransitionProvider",
    );
  }

  const { registerSurface } = context;

  return (
    <div
      ref={registerSurface}
      className={cn("w-full will-change-transform will-change-opacity", className)}
    >
      {children}
    </div>
  );
}

/** @deprecated Use PageTransitionProvider + PageTransitionSurface */
export function PageTransition({
  children,
  className,
  ...config
}: PageTransitionProps) {
  return (
    <PageTransitionProvider {...config}>
      <PageTransitionSurface className={className}>
        {children}
      </PageTransitionSurface>
    </PageTransitionProvider>
  );
}

"use client";

import { Link } from "@/i18n/navigation";
import { usePageTransitionNavigate } from "@/components/layout/PageTransition";
import { type ComponentProps, type MouseEvent, useCallback } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

function getHrefString(href: TransitionLinkProps["href"]): string {
  if (typeof href === "string") {
    return href;
  }

  if (href && typeof href === "object" && "pathname" in href) {
    return href.pathname ?? "/";
  }

  return "/";
}

export function TransitionLink({
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigate } = usePageTransitionNavigate();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      void navigate(getHrefString(href));
    },
    [href, navigate, onClick],
  );

  return <Link href={href} onClick={handleClick} {...props} />;
}

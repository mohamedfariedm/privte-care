import Image from "next/image";
import { cn } from "@/lib/utils";

/** Figma: image 2 / image 6 — 85×115px in header and footer */
const LOGO_WIDTH = 85;
const LOGO_HEIGHT = 115;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "relative h-[115px] w-[85px] shrink-0 aspect-17/23",
        className,
      )}
    >
      <Image
        src="/images/logo.svg"
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-full w-full object-cover object-top"
        sizes={`${LOGO_WIDTH}px`}
        priority={priority}
      />
    </div>
  );
}

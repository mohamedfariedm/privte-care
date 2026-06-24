import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PageHeroVariant = "prices" | "services" | "about";

type PageHeroProps = {
  title: string;
  subtitle: string;
  variant?: PageHeroVariant;
  showCta?: boolean;
  ctaLabel?: string;
  className?: string;
};

const heroConfig: Record<
  PageHeroVariant,
  {
    src: string;
    contentMaxWidth: string;
    imageClassName: string;
    wrapperClassName?: string;
  }
> = {
  prices: {
    src: "/images/pages/hero-bg-prices.png",
    contentMaxWidth: "max-w-[379px]",
    wrapperClassName: "overflow-hidden",
    imageClassName:
      "absolute left-0 top-[-4.56%] h-[175.26%] w-full max-w-none object-cover",
  },
  services: {
    src: "/images/pages/hero-bg-services.png",
    contentMaxWidth: "max-w-[859px]",
    wrapperClassName: "overflow-hidden",
    imageClassName:
      "absolute left-[-37.53%] top-0 h-full w-[204.55%] max-w-none object-cover",
  },
  about: {
    src: "/images/pages/hero-bg-about.png",
    contentMaxWidth: "max-w-[859px]",
    imageClassName: "object-cover object-bottom",
  },
};

export function PageHero({
  title,
  subtitle,
  variant = "about",
  showCta = false,
  ctaLabel,
  className,
}: PageHeroProps) {
  const config = heroConfig[variant];

  return (
    <section
      className={cn("section-border-b relative h-[776px] overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 mx-auto h-full max-w-[1360px] opacity-20",
          config.wrapperClassName,
        )}
        aria-hidden
      >
        <Image
          src={config.src}
          alt=""
          fill
          className={config.imageClassName}
          priority
          sizes="1360px"
        />
      </div>

      <div className="container-page relative flex h-full flex-col items-center justify-center pt-[120px] text-center">
        <div
          className={cn(
            "flex flex-col items-center gap-[26px]",
            config.contentMaxWidth,
          )}
        >
          <h1 className="font-serif text-[60px] font-light italic leading-[70px] text-text-default">
            {title}
          </h1>

          <div className="h-[90px] w-px bg-border-muted" aria-hidden />

          <p className="font-serif text-[32px] leading-[42px] text-text-default">
            {subtitle}
          </p>

          {showCta && ctaLabel ? (
            <Button className="mt-2 h-11 w-[197px] gap-2">
              <Image
              src="/images/icons/download.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
              aria-hidden
            />
            {ctaLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle: string;
  showCta?: boolean;
  ctaLabel?: string;
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  showCta = false,
  ctaLabel,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative h-[776px] overflow-hidden", className)}>
      <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-[1360px]" aria-hidden>
        <Image
          src="/images/pages/hero-bg.png"
          alt=""
          fill
          className="object-cover object-bottom opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container-page relative flex h-full flex-col items-center justify-center pt-[120px] text-center">
        <div className="flex max-w-[859px] flex-col items-center gap-[26px]">
          <h1 className="font-serif text-[60px] font-light italic leading-[70px] text-text-default">
            {title}
          </h1>

          <div className="h-[90px] w-px bg-border-muted" aria-hidden />

          <p className="max-w-[859px] font-serif text-[32px] leading-[42px] text-text-default">
            {subtitle}
          </p>

          {showCta && ctaLabel ? (
            <Button className="mt-2 h-11 min-w-[197px] gap-2">
              <Download className="size-5" aria-hidden />
              {ctaLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

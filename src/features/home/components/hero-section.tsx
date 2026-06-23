import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, buttonVariants } from "@/components/ui/button";
import { HeroBackground } from "@/features/home/components/hero-background";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative h-[903px] overflow-hidden">
      <HeroBackground />

      <div className="container-page relative mt-[120px] flex h-full flex-col items-center justify-center text-center">
        <div className="mx-auto max-w-[499px] space-y-6">
          <h1 className="font-serif text-[54px] leading-[74px] text-text-default">
            {t("title")}
          </h1>
          <p className="text-[20px] leading-[30px] text-text-strong">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-10 h-[186px] w-px bg-border-muted" aria-hidden />

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button className="h-11 w-full min-w-[197px] gap-2 sm:w-[197px]">
            <Image
              src="/images/icons/download.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
              aria-hidden
            />
            {t("primaryCta")}
          </Button>
          <Link
            href="/#how-it-works"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 w-full min-w-[197px] sm:w-[197px]",
            )}
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

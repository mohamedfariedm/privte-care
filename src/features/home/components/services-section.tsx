import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";

const serviceKeys = [
  "savingBags",
  "clothesWashing",
  "shoeCleaning",
  "bagsCleaning",
  "carpetCleaning",
  "homeItems",
] as const;

export function ServicesSection() {
  const t = useTranslations("home.services");
  const tCommon = useTranslations("common");

  return (
    <section className="section-border-b py-16 md:py-20">
      <div className="container-page  space-y-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading title={t("title")} />
          <p className="text-lg text-start leading-relaxed text-text-strong text-[20px] leading-[30px]">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border-muted bg-border-muted md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => (
            <article
              key={key}
              className="flex min-h-[200px] flex-col justify-between bg-background-base p-6 md:p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-8 text-text-default">
                    {t(`items.${key}.title`)}
                  </h3>
                  <div className="h-14 w-14 shrink-0 rounded-md bg-background-secondary/80" aria-hidden />
                </div>
                <p className="text-base leading-relaxed text-text-strong">
                  {t(`items.${key}.description`)}
                </p>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm text-text-default transition-colors hover:text-button-cta"
              >
                {tCommon("knowMore")}
                <ArrowUpRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

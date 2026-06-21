import { CalendarClock, PackageCheck, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  { key: "schedule", icon: CalendarClock },
  { key: "care", icon: PackageCheck },
  { key: "delivery", icon: Truck },
] as const;

export function HowItWorksSection() {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="section-border-b py-16 md:py-24">
      <div className="container-page space-y-12">
        <SectionHeading title={t("title")} description={t("description")} align="center" />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.key}
                className="rounded-lg border border-border-muted bg-background-dark/30 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border-muted bg-background-secondary">
                  <Icon className="h-6 w-6 text-button-cta" aria-hidden />
                </div>
                <p className="mb-2 text-sm text-text-extra-strong">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-serif text-2xl text-text-default">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-base leading-relaxed text-text-strong">
                  {t(`steps.${step.key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Clock3, Leaf, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";

const items = [
  { key: "turnaround", icon: Clock3 },
  { key: "insured", icon: ShieldCheck },
  { key: "tracking", icon: MapPin },
  { key: "eco", icon: Leaf },
] as const;

export function WhySection() {
  const t = useTranslations("home.why");

  return (
    <section className="section-border-b py-16 md:py-24">
      <div className="container-page space-y-12">
        <SectionHeading
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.key}
                className="rounded-lg border border-border-muted bg-background-dark/30 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-8 w-8 items-center justify-center">
                  <Icon className="h-8 w-8 text-text-default" aria-hidden />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-text-default">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="mx-auto max-w-sm text-base leading-relaxed text-text-strong">
                  {t(`items.${item.key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { useTranslations } from "next-intl";

const items = [
  { key: "turnaround", icon: "/images/why/icon-turnaround.svg" },
  { key: "insured", icon: "/images/why/icon-insured.svg" },
  { key: "tracking", icon: "/images/why/icon-tracking.svg" },
  { key: "eco", icon: "/images/why/icon-eco.svg" },
] as const;

export function WhySection() {
  const t = useTranslations("home.why");

  return (
    <section className="section-border-b py-20 md:mt-[120px] md:pb-[100px]">
      <div className="container-page space-y-20">
        <div className="mx-auto flex max-w-[576px] flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
            {t("title")}
          </h2>
          <p className="font-serif text-xl leading-[30px] text-text-strong">
            {t("description")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[1062px] gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.key}
              className="flex min-h-[212px] flex-col items-center justify-center rounded-lg bg-[rgba(255,238,227,0.75)] p-8"
            >
              <div className="flex max-w-[337px] flex-col items-center gap-6 text-center">
                <div className="relative size-8 shrink-0" aria-hidden>
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl leading-8 text-text-on-primary">
                    {t(`items.${item.key}.title`)}
                  </h3>
                  <p className="font-serif text-lg leading-[26px] text-text-on-primary/80">
                    {t(`items.${item.key}.description`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

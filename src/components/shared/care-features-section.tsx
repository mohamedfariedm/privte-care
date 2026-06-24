import Image from "next/image";
import { useTranslations } from "next-intl";

const sideFeatures = [
  { key: "airDry", icon: "/images/about/icon-wind.svg" },
  { key: "steamPress", icon: "/images/about/icon-hanger.svg" },
] as const;

export function CareFeaturesSection() {
  const t = useTranslations("shared.careFeatures");

  return (
    <section className="section-border-y max-md:py-20">
      <div className="container-page">
        <div className="relative mx-auto grid md:min-h-[638px] md:grid-cols-2 md:grid-rows-2">
          <div
            className="pointer-events-none absolute inset-0 hidden md:block"
            aria-hidden
          >
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border-muted-2" />
            <div className="absolute top-1/2 left-1/2 h-px w-1/2 -translate-y-1/2 bg-border-muted-2" />
          </div>

          <article className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-16 text-center md:row-span-2 md:py-0">
            <div className="relative size-9" aria-hidden>
              <Image
                src="/images/about/icon-shield.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="max-w-[501px] space-y-3">
              <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
                {t("items.quality.title")}
              </h2>
              <p className="font-serif text-xl leading-[30px] text-text-strong">
                {t("items.quality.description")}
              </p>
            </div>
          </article>

          {sideFeatures.map((feature) => (
            <article
              key={feature.key}
              className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-12 text-center md:py-0"
            >
              <div
                className="relative flex size-11 items-center justify-center"
                aria-hidden
              >
                <div className="relative size-8">
                  <Image src={feature.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="max-w-[415px] space-y-3">
                <h3 className="font-serif text-[32px] leading-[42px] text-text-default">
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p className="font-serif text-xl leading-[30px] text-text-strong">
                  {t(`items.${feature.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

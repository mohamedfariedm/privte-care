import Image from "next/image";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "savingBags",
    icon: "/images/services/saving-bags.png",
    width: 65,
    height: 71,
  },
  {
    key: "clothesWashing",
    icon: "/images/services/clothes-washing.svg",
    width: 89,
    height: 52,
  },
  {
    key: "shoeCleaning",
    icon: "/images/services/shoe-cleaning.svg",
    width: 74,
    height: 71,
  },
  {
    key: "bagsCleaning",
    icon: "/images/services/bags-cleaning.png",
    width: 75,
    height: 70,
  },
  {
    key: "carpetCleaning",
    icon: "/images/services/carpet-cleaning.svg",
    width: 111,
    height: 59,
  },
  {
    key: "homeItems",
    icon: "/images/services/home-items.svg",
    width: 73,
    height: 58,
  },
] as const;

export function ServicesSection() {
  const t = useTranslations("home.services");
  const tCommon = useTranslations("common");

  return (
    <section className="section-border-b py-20 md:pt-[140px] md:pb-20">
      <div className="container-page space-y-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-start lg:justify-between">
          <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
            {t("title")}
          </h2>
          <p className="font-serif text-xl leading-[30px] text-text-strong lg:text-end">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border-muted-2 bg-border-muted-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.key}
              className="flex min-h-[201px] flex-col justify-between bg-background-base px-6 py-6 md:px-10 md:py-10"
            >
              <div className="space-y-[15px]">
                <div className="flex min-h-[60px] items-center justify-between gap-4 px-0 md:px-6">
                  <h3 className="font-serif text-2xl leading-8 text-text-default">
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <div
                    className="relative shrink-0"
                    style={{ width: service.width, height: service.height }}
                    aria-hidden
                  >
                    <Image
                      src={service.icon}
                      alt=""
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                </div>
                <div className="space-y-[15px] md:px-6">
                  <p className="font-serif text-lg leading-[26px] text-text-strong">
                    {t(`items.${service.key}.description`)}
                  </p>
                  <button
                    type="button"
                    className="font-serif text-base leading-[22px] text-button-cta underline decoration-solid underline-offset-2 transition-opacity hover:opacity-80"
                  >
                    {tCommon("knowMore")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const services = [
  {
    key: "savingBags",
    icon: "/images/services/saving-bags.png",
    width: 71,
    height: 77,
  },
  {
    key: "clothesWashing",
    icon: "/images/services/clothes-washing.svg",
    width: 98,
    height: 57,
  },
  {
    key: "shoeCleaning",
    icon: "/images/services/shoe-cleaning.svg",
    width: 82,
    height: 78,
  },
  {
    key: "bagsCleaning",
    icon: "/images/services/bags-cleaning.png",
    width: 83,
    height: 77,
  },
  {
    key: "carpetCleaning",
    icon: "/images/services/carpet-cleaning.svg",
    width: 122,
    height: 65,
  },
  {
    key: "homeItems",
    icon: "/images/services/home-items.svg",
    width: 80,
    height: 64,
  },
] as const;

export function ServicesDetailSection() {
  const t = useTranslations("pages.services");

  return (
    <section className="section-border-b">
      <div className="container-page">
        <div className="grid md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.key}
              className="flex flex-col gap-6 border-border-muted-2 px-6 py-12 md:px-12 md:py-16 md:odd:border-e md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-serif text-[32px] leading-[42px] text-text-default">
                  {t(`items.${service.key}.title`)}
                </h2>
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
              <p className="font-serif text-lg leading-[30px] text-text-strong">
                {t(`items.${service.key}.description`)}
              </p>
              <Link
                href="/prices"
                className="font-serif text-base leading-[22px] text-button-cta underline decoration-solid underline-offset-2"
              >
                {t("knowPrices")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

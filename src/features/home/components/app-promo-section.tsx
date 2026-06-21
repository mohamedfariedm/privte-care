import Image from "next/image";
import { useTranslations } from "next-intl";

export function AppPromoSection() {
  const t = useTranslations("home.appPromo");
  const tCommon = useTranslations("common");

  return (
    <section className="section-border-y mt-[60px]  ">
      <div className="container-page   grid min-h-[670px] items-center  py-12 lg:grid-cols-2 lg:justify-between lg:gap-[124px] lg:py-0">
        <div className="relative mx-auto aspect-[680/670] w-full max-w-[680px] lg:mx-0 lg:h-[670px] lg:max-w-none">
          <Image
            src="/images/app-promo/phone-mockup.png"
            alt=""
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 1024px) 100vw, 680px"
            priority
          />
        </div>

        <div className="mx-auto flex w-full max-w-[433px] flex-col items-center text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
              {t("title")}
            </h2>
            <p className="font-serif text-[19px] leading-[30px] text-text-strong">
              {t("description")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="transition-opacity hover:opacity-90"
              aria-label={tCommon("appStore")}
            >
              <Image
                src="/images/app-promo/app-store-button.png"
                alt=""
                width={180}
                height={63}
                className="h-[63px] w-[180px]"
              />
            </a>
            <a
              href="#"
              className="transition-opacity hover:opacity-90"
              aria-label={tCommon("playStore")}
            >
              <Image
                src="/images/app-promo/play-store-button.png"
                alt=""
                width={180}
                height={63}
                className="h-[63px] w-[180px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

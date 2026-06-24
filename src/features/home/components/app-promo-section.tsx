import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function AppPromoSection() {
  const t = useTranslations("home.appPromo");

  return (
    <section className="section-border-y">
      <div className="container-page grid min-h-[670px] items-center py-12 lg:grid-cols-2 lg:justify-between lg:gap-[124px] lg:py-0">
        <div className="relative mx-auto aspect-[680/670] max-w-[680px] lg:mx-0 lg:h-[670px] lg:max-w-none w-[680px]">
          <Image
            src="/images/app-promo/FreeiPhoneAirMockuponRock.svg"
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
            <p className="font-serif text-xl leading-[30px] text-text-extra-strong">
              {t("description")}
            </p>
          </div>

          <AppStoreButtons
            className="mt-10 justify-center"
            size="sm"
            variant="cta"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function AppPromoSection() {
  const t = useTranslations("home.appPromo");

  return (
    <section className="section-border-y">
      <div className="container-page grid items-center gap-10 py-12 md:gap-12 lg:min-h-[670px] lg:grid-cols-2 lg:justify-between lg:gap-[124px] lg:py-0">
        <div className="relative mx-auto aspect-[680/670] w-full max-w-[680px] lg:mx-0 lg:h-[670px] lg:max-w-none lg:w-[680px]">
          <Image
            src="/images/app-promo/FreeiPhoneAirMockuponRock.svg"
            alt=""
            fill
            className="object-contain opacity-90 lg:object-cover"
            sizes="(max-width: 1024px) 100vw, 680px"
            priority
          />
        </div>

        <div className="mx-auto flex w-full max-w-[433px] flex-col items-center text-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-6">
            <h2 className="font-serif text-3xl leading-tight text-text-default md:text-5xl md:leading-[60px] lg:text-[48px] lg:leading-[60px]">
              {t("title")}
            </h2>
            <p className="font-serif text-lg leading-relaxed text-text-extra-strong md:text-xl md:leading-[30px] lg:text-xl lg:leading-[30px]">
              {t("description")}
            </p>
          </div>

          <AppStoreButtons
            className="mt-8 max-lg:w-full max-lg:flex-col justify-center sm:max-lg:flex-row lg:mt-10"
            size="sm"
            variant="cta"
          />
        </div>
      </div>
    </section>
  );
}

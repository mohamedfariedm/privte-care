import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function DownloadAppSection() {
  const t = useTranslations("home.download");

  return (
    <section id="download" className="section-border-b py-20 md:mt-[100px] md:pb-[80px]">
      <div className="container-page">
        <div className="mx-auto grid max-w-[945px] items-center gap-12 lg:grid-cols-[411px_346px] lg:justify-between lg:gap-[188px]">
          <div className="flex w-full max-w-[411px] flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
                {t("title")}
              </h2>
              <p className="font-serif text-xl leading-[30px] text-text-default">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-3">
              <div className="w-full rounded-xl border border-border-muted px-4 py-3 lg:w-[407px]">
                <div className="flex items-center gap-4">
                  <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
                    <p className="font-serif text-2xl leading-8 text-text-default">
                      {t("scanTitle")}
                    </p>
                    <p className="font-serif text-lg leading-[26px] text-text-default">
                      {t("scanSubtitle")}
                    </p>
                  </div>
                  <div className="relative size-28 shrink-0">
                    <Image
                      src="/images/download/qr-code.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <AppStoreButtons size="md" variant="default" />
            </div>
          </div>

          <div className="relative mx-auto aspect-[346/700] w-full max-w-[346px] lg:mx-0">
            <Image
              src="/images/download/phone-mockup.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 346px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function DownloadAppSection() {
  const t = useTranslations("home.download");

  return (
    <section id="download" className="section-border-b py-20 md:mt-[100px] md:pb-[80px]">
      <div className="container-page">
        <div className="mx-auto grid max-w-[945px] items-center gap-12 lg:grid-cols-[411px_346px] lg:justify-between lg:gap-[188px]">
          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-start">
              <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
                {t("title")}
              </h2>
              <p className="font-serif text-xl leading-[30px] text-text-strong">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-3">
              <div className="w-full max-w-[407px] rounded-lg border border-border-muted p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl leading-8 text-text-default">
                      {t("scanTitle")}
                    </p>
                    <p className="font-serif text-lg leading-[26px] text-text-strong">
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

              <AppStoreButtons className="w-full" />
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

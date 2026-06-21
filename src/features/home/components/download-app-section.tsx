import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";

export function DownloadAppSection() {
  const t = useTranslations("home.download");

  return (
    <section className="section-border-b py-16 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl leading-tight text-text-default md:text-5xl md:leading-[60px]">
                {t("title")}
              </h2>
              <p className="text-lg text-text-strong md:text-xl">{t("description")}</p>
            </div>

            <div className="rounded-lg border border-border-muted bg-background-dark/40 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl text-text-default">{t("scanTitle")}</p>
                  <p className="text-text-strong">{t("scanSubtitle")}</p>
                </div>
                <div className="flex h-28 w-28 items-center justify-center rounded-md border border-border-muted bg-background-secondary">
                  <QrCode className="h-16 w-16 text-text-default" aria-hidden />
                </div>
              </div>
            </div>

            <AppStoreButtons />
          </div>

          <div className="mx-auto aspect-[346/700] w-full max-w-sm rounded-[2rem] border border-border-muted bg-background-secondary/60 shadow-card" aria-hidden />
        </div>
      </div>
    </section>
  );
}

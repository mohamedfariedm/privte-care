import { useTranslations } from "next-intl";
import { PageGridLayout } from "@/components/shared/page-grid-layout";
import { PageHero } from "@/components/shared/page-hero";
import { DownloadAppSection } from "@/features/home/components/download-app-section";
import { PricingCategories } from "@/features/prices/components/pricing-categories";

export function PricesPageContent() {
  const t = useTranslations("pages.prices");

  return (
    <PageGridLayout>
      <PageHero
        variant="prices"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <section className="section-border-b py-20 md:py-[100px]">
        <div className="container-page">
          <div className="mx-auto max-w-[1062px]">
            <PricingCategories />
          </div>
        </div>
      </section>
      <DownloadAppSection />
    </PageGridLayout>
  );
}

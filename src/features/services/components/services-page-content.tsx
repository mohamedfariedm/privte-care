import { useTranslations } from "next-intl";
import { AudienceSection } from "@/components/shared/audience-section";
import { HowItWorksHorizontal } from "@/components/shared/how-it-works-horizontal";
import { PageGridLayout } from "@/components/shared/page-grid-layout";
import { PageHero } from "@/components/shared/page-hero";
import { DownloadAppSection } from "@/features/home/components/download-app-section";
import { FaqSection } from "@/features/home/components/faq-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { ServicesDetailSection } from "@/features/services/components/services-detail-section";

export function ServicesPageContent() {
  const t = useTranslations("pages.services");
  const tCommon = useTranslations("common");

  return (
    <>
      <PageHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        showCta
        ctaLabel={tCommon("bookNow")}
      />
      <PageGridLayout>
        <ServicesDetailSection />
        <HowItWorksHorizontal />
        <AudienceSection />
        <TestimonialsSection />
        <DownloadAppSection />
        <FaqSection />
      </PageGridLayout>
    </>
  );
}

import { useTranslations } from "next-intl";
import { CareFeaturesSection } from "@/components/shared/care-features-section";
import { HowItWorksHorizontal } from "@/components/shared/how-it-works-horizontal";
import { PageGridLayout } from "@/components/shared/page-grid-layout";
import { PageHero } from "@/components/shared/page-hero";
import { AppPromoSection } from "@/features/home/components/app-promo-section";
import { DownloadAppSection } from "@/features/home/components/download-app-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { WhySection } from "@/features/home/components/why-section";

export function AboutPageContent() {
  const t = useTranslations("pages.about");
  const tNav = useTranslations("nav");

  return (
    <PageGridLayout>
      <PageHero
        variant="about"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        showCta
        ctaLabel={tNav("bookPickup")}
      />
      <CareFeaturesSection />
      <AppPromoSection />
      <HowItWorksHorizontal />
      <WhySection />
      <TestimonialsSection />
      <DownloadAppSection />
    </PageGridLayout>
  );
}

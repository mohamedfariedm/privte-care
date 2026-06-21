import { HeroSection } from "@/features/home/components/hero-section";
import { AppPromoSection } from "@/features/home/components/app-promo-section";
import { ServicesSection } from "@/features/home/components/services-section";
import { HowItWorksSection } from "@/features/home/components/how-it-works-section";
import { WhySection } from "@/features/home/components/why-section";
import { TestimonialsSection } from "@/features/home/components/testimonials-section";
import { DownloadAppSection } from "@/features/home/components/download-app-section";
import { FaqSection } from "@/features/home/components/faq-section";

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <AppPromoSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhySection />
      <TestimonialsSection />
      <DownloadAppSection />
      <FaqSection />
    </>
  );
}

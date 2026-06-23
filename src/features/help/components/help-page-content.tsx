import { useTranslations } from "next-intl";
import { CareFeaturesSection } from "@/components/shared/care-features-section";
import { ContactOptionsSection } from "@/components/shared/contact-options-section";
import { PageGridLayout } from "@/components/shared/page-grid-layout";
import { PageHero } from "@/components/shared/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { DownloadAppSection } from "@/features/home/components/download-app-section";

const faqKeys = ["separate", "pickup", "pricing", "insurance", "areas"] as const;

export function HelpPageContent() {
  const t = useTranslations("pages.help");
  const tFaq = useTranslations("home.faq");

  const faqItems = faqKeys.map((key) => ({
    id: key,
    question: tFaq(`items.${key}.question`),
    answer: tFaq(`items.${key}.answer`),
  }));

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <PageGridLayout>
        <ContactOptionsSection />
        <CareFeaturesSection />
        <section className="section-border-b py-10 md:py-[40px]">
          <div className="container-page">
            <div className="mx-auto grid max-w-[1174px] gap-10 lg:grid-cols-[426px_1fr] lg:gap-[120px]">
              <h2 className="font-serif text-[40px] leading-[52px] text-text-default">
                {tFaq("title")}
              </h2>
              <Accordion items={faqItems} defaultOpenId="separate" variant="gold" />
            </div>
          </div>
        </section>
        <DownloadAppSection />
      </PageGridLayout>
    </>
  );
}

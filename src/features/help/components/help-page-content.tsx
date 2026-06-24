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
    <PageGridLayout>
      <PageHero
        variant="about"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <ContactOptionsSection />
      <CareFeaturesSection />
      <section className="section-border-b">
        <div className="container-page pb-20 pt-10 md:pt-[40px]">
          <div className="mx-auto flex w-full max-w-[1174px] flex-col items-start gap-10 lg:flex-row lg:gap-[120px]">
            <h2 className="w-full shrink-0 font-serif text-[40px] leading-[52px] text-text-default lg:w-[426px]">
              {tFaq("title")}
            </h2>
            <Accordion
              items={faqItems}
              defaultOpenId="separate"
              variant="gold"
              className="w-full shrink-0 lg:w-[628px]"
            />
          </div>
        </div>
      </section>
      <DownloadAppSection />
    </PageGridLayout>
  );
}

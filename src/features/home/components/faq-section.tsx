import { useTranslations } from "next-intl";
import { Accordion } from "@/components/ui/accordion";

const faqKeys = ["separate", "pickup", "pricing", "insurance", "areas"] as const;

export function FaqSection() {
  const t = useTranslations("home.faq");

  const items = faqKeys.map((key) => ({
    id: key,
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section className="section-border-b py-10 md:mt-[120px] md:pb-[80px]">
      <div className="container-page">
        <div className="mx-auto grid max-w-[1174px] gap-10 lg:grid-cols-[426px_1fr] lg:gap-[120px]">
          <h2 className="font-serif text-[48px] leading-[52px] text-text-default">
            {t("title")}
          </h2>
          <Accordion items={items} defaultOpenId="separate" />
        </div>
      </div>
    </section>
  );
}

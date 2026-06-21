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
    <section className="section-border-b py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[426px_1fr] lg:gap-24">
          <h2 className="font-serif text-3xl leading-tight text-text-default md:text-5xl md:leading-[52px]">
            {t("title")}
          </h2>
          <Accordion items={items} defaultOpenId="separate" />
        </div>
      </div>
    </section>
  );
}

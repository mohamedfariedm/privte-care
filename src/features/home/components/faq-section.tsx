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
    <section className="section-border-b md:mt-[120px]">
      <div className="container-page pb-20">
        <div className="mx-auto flex w-full max-w-[1174px] flex-col items-start gap-10 lg:flex-row lg:gap-[120px]">
          <h2 className="w-full shrink-0 font-serif text-[40px] leading-[52px] text-text-default lg:w-[426px]">
            {t("title")}
          </h2>
          <Accordion
            items={items}
            defaultOpenId="separate"
            variant="gold"
            className="w-full shrink-0 lg:w-[628px]"
          />
        </div>
      </div>
    </section>
  );
}

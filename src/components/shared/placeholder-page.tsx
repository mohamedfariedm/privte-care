import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";

type PlaceholderPageProps = {
  namespace: "prices" | "services" | "about" | "help";
};

export function PlaceholderPage({ namespace }: PlaceholderPageProps) {
  const t = useTranslations(`pages.${namespace}`);

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading title={t("title")} description={t("description")} />
    </section>
  );
}

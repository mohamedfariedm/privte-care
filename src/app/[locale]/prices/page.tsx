import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PricesPageContent } from "@/features/prices/components/prices-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.prices");
  return { title: t("title"), description: t("description") };
}

export default function PricesPage() {
  return <PricesPageContent />;
}

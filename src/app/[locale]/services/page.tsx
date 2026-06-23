import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesPageContent } from "@/features/services/components/services-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.services");
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}

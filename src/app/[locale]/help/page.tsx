import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HelpPageContent } from "@/features/help/components/help-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.help");
  return { title: t("title"), description: t("description") };
}

export default function HelpPage() {
  return <HelpPageContent />;
}

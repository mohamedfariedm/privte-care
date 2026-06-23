import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutPageContent } from "@/features/about/components/about-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.about");
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return <AboutPageContent />;
}

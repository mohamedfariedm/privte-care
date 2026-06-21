import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.about");
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return <PlaceholderPage namespace="about" />;
}

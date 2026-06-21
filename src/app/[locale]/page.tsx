import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomePageContent } from "@/features/home/components/home-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return <HomePageContent />;
}

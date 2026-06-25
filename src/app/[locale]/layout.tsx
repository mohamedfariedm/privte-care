import localFont from "next/font/local";
import { Noto_Sans_Arabic, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { PageTransitionProvider, PageTransitionSurface } from "@/components/layout/PageTransition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { routing } from "@/i18n/routing";
import { getDirection } from "@/lib/locale";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const newsreader = localFont({
  src: [
    {
      path: "../../assets/fonts/newsreader/newsreader-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/newsreader/newsreader-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/newsreader/newsreader-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/newsreader/newsreader-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/newsreader/newsreader-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-arabic",
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${poppins.variable} ${newsreader.variable} ${notoSansArabic.variable} ${
          locale === "ar" ? "font-[family-name:var(--font-noto-arabic)]" : ""
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <PageTransitionProvider
            slideDirection={direction === "rtl" ? "left" : "right"}
            duration={0.25}
            slideOffset={20}
            respectReducedMotion={false}
          >
            <div className="min-h-screen">
              <SiteHeader />
              <main>
                <PageTransitionSurface>{children}</PageTransitionSurface>
              </main>
              <div className="grid-lines">
                <SiteFooter />
              </div>
            </div>
          </PageTransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


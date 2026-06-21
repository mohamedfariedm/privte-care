"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getLocaleCookieName } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    document.cookie = `${getLocaleCookieName()}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    localStorage.setItem(getLocaleCookieName(), nextLocale);
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className="h-4 w-4 text-text-strong" aria-hidden />
      <label htmlFor="language-switcher" className="sr-only">
        {t("switch")}
      </label>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => switchLocale(event.target.value as Locale)}
        className="rounded-full border border-border-muted bg-background-secondary px-3 py-1.5 text-sm text-text-default"
        aria-label={t("switch")}
      >
        {routing.locales.map((item) => (
          <option key={item} value={item}>
            {t(item)}
          </option>
        ))}
      </select>
    </div>
  );
}

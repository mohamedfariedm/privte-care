import { routing, type Locale } from "@/i18n/routing";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function isRtlLocale(locale: string): boolean {
  return locale === "ar";
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}

export function getLocaleCookieName() {
  return LOCALE_COOKIE;
}

export function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: "/about", label: t("links.about") },
    { href: "/services", label: t("links.services") },
    { href: "/prices", label: t("links.prices") },
  ];

  const supportLinks = [
    { href: "/help", label: t("links.help") },
    { href: "/contact", label: t("links.contact") },
  ];

  const legalLinks = [
    { href: "/privacy", label: t("links.privacy") },
    { href: "/terms", label: t("links.terms") },
  ];

  return (
    <footer className="section-border-y bg-background-dark/30">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <p className="font-serif text-2xl text-text-default">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-extra-strong">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-strong hover:text-text-default">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-extra-strong">
              {t("support")}
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-strong hover:text-text-default">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-extra-strong">
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-strong hover:text-text-default">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-muted pt-6 text-sm text-text-extra-strong">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}

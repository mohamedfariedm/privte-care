import Image from "next/image";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Link } from "@/i18n/navigation";

const socialLinks = [
  { href: "#", icon: "/images/footer/icon-snapchat.svg", label: "Snapchat" },
  { href: "#", icon: "/images/footer/icon-facebook.svg", label: "Facebook" },
  { href: "#", icon: "/images/footer/icon-twitter.svg", label: "X" },
] as const;

const contactIcons = {
  location: "/images/footer/icon-location.svg",
  phone: "/images/footer/icon-phone.svg",
  email: "/images/footer/icon-mail.svg",
} as const;

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/services", label: t("quickLinksList.services") },
    { href: "/#how-it-works", label: t("quickLinksList.howItWorks") },
    { href: "/#testimonials", label: t("quickLinksList.reviews") },
    { href: "/#download", label: t("quickLinksList.downloadApp") },
  ] as const;

  const serviceLinks = [
    { href: "/services", label: t("servicesList.washFold") },
    { href: "/services", label: t("servicesList.dryCleaning") },
    { href: "/services", label: t("servicesList.ironing") },
    { href: "/services", label: t("servicesList.express") },
  ] as const;

  return (
    <footer className="section-border-y">
      <div className="container-page flex flex-col items-center gap-[120px] pt-[120px]">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full max-w-[411px] flex-col items-center gap-6 text-center">
            <BrandLogo />
            <p className="max-w-[408px] font-serif text-[22px] italic leading-[30px] text-text-default">
              {t("tagline")}
            </p>
          </div>

          <div
            className="hidden h-[173px] w-px shrink-0 bg-border-muted-2 lg:block"
            aria-hidden
          />

          <div className="flex w-full max-w-[612px] flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className="font-serif text-xl leading-[30px] text-text-default">
                {t("quickLinks")}
              </p>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className="font-serif text-xl leading-[30px] text-text-default">
                {t("servicesTitle")}
              </p>
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className="font-serif text-xl leading-[30px] text-text-default">
                {t("contactTitle")}
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Image
                    src={contactIcons.location}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0"
                    aria-hidden
                  />
                  <span className="font-serif text-base leading-[22px] text-text-default">
                    {t("contact.location")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={contactIcons.phone}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0"
                    aria-hidden
                  />
                  <a
                    href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                    className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
                  >
                    {t("contact.phone")}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={contactIcons.email}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${t("contact.email")}`}
                    className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
                  >
                    {t("contact.email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 border-t border-border-muted-2 px-0 pt-6 pb-6 md:flex-row md:justify-between md:px-10">
          <p className="font-serif text-base leading-[22px] text-text-default">
            {t("copyright", { year })}
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-lg p-2.5 shadow-card transition-opacity hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
            >
              {t("links.terms")}
            </Link>
            <Link
              href="/privacy"
              className="font-serif text-base leading-[22px] text-text-default transition-opacity hover:opacity-80"
            >
              {t("links.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

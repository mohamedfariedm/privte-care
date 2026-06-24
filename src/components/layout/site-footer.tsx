import Image from "next/image";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Link } from "@/i18n/navigation";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0822313 0.408561C0.210452 0.157793 0.468356 0 0.750003 0H5.75C5.99083 0 6.21701 0.115648 6.35801 0.310882L11.294 7.14534L18.2197 0.21967C18.5126 -0.0732233 18.9874 -0.0732233 19.2803 0.21967C19.5732 0.512563 19.5732 0.987437 19.2803 1.28033L12.1836 8.37707L19.358 18.3109C19.5229 18.5392 19.546 18.8407 19.4178 19.0914C19.2896 19.3422 19.0317 19.5 18.75 19.5H13.75C13.5092 19.5 13.283 19.3844 13.142 19.1891L8.206 12.3547L1.28033 19.2803C0.98744 19.5732 0.512566 19.5732 0.219673 19.2803C-0.0732202 18.9874 -0.0732202 18.5126 0.219673 18.2197L7.31641 11.1229L0.141994 1.18912C-0.0229079 0.960793 -0.0459892 0.659328 0.0822313 0.408561ZM2.21682 1.5L14.1335 18H17.2832L5.36652 1.5H2.21682Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M10.25 0C14.93 0 17.2787 0.0003515 18.8887 1.61035C20.4996 3.22035 20.5 5.56903 20.5 10.25C20.5 14.931 20.4997 17.2806 18.8887 18.8906C17.2777 20.4996 14.93 20.5 10.25 20.5C5.57002 20.5 3.22133 20.4996 1.61133 18.8896C0.00032804 17.2796 0 14.931 0 10.25C0 5.56903 0.000358477 3.21937 1.61133 1.60938C3.22133 0.000374978 5.57 0 10.25 0ZM10.25 1.5C5.984 1.5 3.8429 1.4999 2.6709 2.6709C1.4999 3.8409 1.5 5.983 1.5 10.25C1.5 14.517 1.4999 16.6591 2.6709 17.8291C3.77127 18.9294 5.72919 18.995 9.50098 18.999L9.5459 13.001H8.33203C7.91803 13.001 7.58203 12.665 7.58203 12.251C7.58219 11.8371 7.91813 11.501 8.33203 11.501H9.55664L9.58203 8.15527C9.59203 6.70827 10.7814 5.53125 12.2324 5.53125H15.1758C15.5898 5.53125 15.9258 5.86725 15.9258 6.28125C15.9258 6.69525 15.5898 7.03125 15.1758 7.03125H12.2324C11.6025 7.03125 11.0861 7.5401 11.082 8.16602L11.0566 11.501H13.1348C13.5487 11.501 13.8846 11.8371 13.8848 12.251C13.8848 12.665 13.5488 13.001 13.1348 13.001H11.0459L11.001 18.998C14.7714 18.994 16.728 18.9292 17.8291 17.8291C19.0001 16.6591 19 14.517 19 10.25C19 5.983 19.0001 3.8409 17.8291 2.6709C16.6581 1.4999 14.516 1.5 10.25 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7507 21.5C11.9422 21.4999 12.7861 20.959 13.5183 20.4893C13.6319 20.4164 13.7432 20.3445 13.8523 20.2773C14.6764 19.7702 15.6519 19.2774 17.4168 19.2773C17.7608 19.2773 18.0617 19.0438 18.1453 18.71C18.4194 17.6135 18.6587 17.097 18.989 16.7666C19.3194 16.4362 19.8357 16.196 20.9324 15.9219C21.2437 15.844 21.471 15.5766 21.4978 15.2568C21.5059 15.16 21.4928 15.0657 21.4656 14.9766C21.5723 14.641 21.4299 14.2665 21.1091 14.0918C19.2237 13.0647 18.5864 12.2157 18.5095 11.4961C18.4296 10.7459 18.9051 9.74129 20.3328 8.27246C20.6212 7.97542 20.6141 7.50052 20.3171 7.21191C20.0201 6.92348 19.5452 6.93061 19.2566 7.22754C18.2635 8.24926 17.4999 9.25829 17.1736 10.2754C16.9606 9.20436 16.9246 7.88821 16.9246 6.1748C16.9246 2.76482 14.1607 0.000102997 10.7507 0C7.34069 0 4.57593 2.76475 4.57593 6.1748C4.57593 7.88777 4.5397 9.20353 4.32691 10.2744C4.0004 9.25759 3.23676 8.249 2.2439 7.22754C1.95519 6.93054 1.48037 6.92322 1.18335 7.21191C0.886403 7.50059 0.880122 7.97544 1.16871 8.27246C2.59641 9.74129 3.07192 10.7459 2.99195 11.4961C2.91507 12.2157 2.27681 13.0647 0.391361 14.0918C0.0709937 14.2666 -0.0716651 14.6412 0.034916 14.9766C0.00777202 15.0656 -0.0053793 15.1601 0.00268945 15.2568C0.029541 15.5766 0.257786 15.844 0.569096 15.9219C1.6654 16.196 2.18113 16.4363 2.51148 16.7666C2.84186 17.097 3.08203 17.6133 3.3562 18.71C3.43975 19.0437 3.73974 19.2773 4.08374 19.2773C5.84909 19.2773 6.8249 19.7701 7.64917 20.2773C7.75831 20.3445 7.86954 20.4164 7.98316 20.4893C8.71537 20.959 9.55934 21.5 10.7507 21.5ZM10.7507 20C10.0255 20 9.57164 19.7139 8.83081 19.2471C8.70782 19.1696 8.57668 19.087 8.43531 19C7.54694 18.4533 6.44094 17.8948 4.66382 17.7939C4.41363 16.9307 4.10554 16.2388 3.573 15.7061C3.30659 15.4396 2.99964 15.2296 2.6521 15.0547C3.981 14.2331 4.83915 13.2689 5.3562 12.0449C6.027 10.4568 6.07593 8.51823 6.07593 6.1748C6.07593 3.59318 8.16911 1.5 10.7507 1.5C13.3323 1.5001 15.4246 3.59324 15.4246 6.1748C15.4246 8.51823 15.4745 10.4568 16.1453 12.0449C16.6623 13.2688 17.5196 14.2332 18.8484 15.0547C18.501 15.2296 18.1948 15.4398 17.9285 15.7061C17.3958 16.2388 17.0879 16.9306 16.8377 17.7939C15.0606 17.8948 13.9545 18.4533 13.0662 19C12.9248 19.087 12.7936 19.1696 12.6707 19.2471C11.9298 19.7139 11.4759 20 10.7507 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  { href: "#", icon: SnapchatIcon, label: "Snapchat" },
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  { href: "#", icon: XIcon, label: "X" },
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
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-lg p-2.5 text-white shadow-card transition-opacity hover:opacity-80"
                >
                  <Icon className="size-6" />
                </a>
              );
            })}
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

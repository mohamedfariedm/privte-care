"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { href: "/", key: "home" },
  { href: "/prices", key: "prices" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/help", key: "help" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 md:grid-cols-[1fr_auto_1fr]"
      style={{maxWidth: "1360px"}}
      >
        <Link
          href="/"
          className="relative z-10 justify-self-start"
          aria-label={tCommon("brand")}
        >
          <BrandLogo priority />
        </Link>

        <nav
          className="hidden items-center justify-center gap-10 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "relative font-serif text-lg leading-[26px] text-text-default transition-colors hover:text-white",
                  active &&
                    "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-text-default",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-self-end md:flex">
          <Button className="h-11 w-[197px]">
            <Image
              src="/images/icons/download.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0"
              aria-hidden
            />
            {t("bookPickup")}</Button>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-border-muted text-text-default md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-b border-border-muted bg-background-base/95 backdrop-blur md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="container-page flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="font-serif text-xl text-text-default"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button className="h-11 w-full">{t("bookPickup")}</Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const dots = [0, 1, 2, 3];

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [active, setActive] = useState(0);

  return (
    <section className="section-border-b py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-extra-strong">
            {t("label")}
          </p>
          <blockquote className="font-serif text-2xl leading-relaxed text-text-default md:text-4xl md:leading-[64px]">
            {t("quote")}
          </blockquote>

          <div className="mx-auto mt-10 flex max-w-xs flex-col items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-background-secondary" aria-hidden />
            <div>
              <p className="text-lg text-text-default">{t("author")}</p>
              <p className="text-sm text-text-strong">{t("role")}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3" role="tablist" aria-label={t("label")}>
            {dots.map((index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  active === index ? "w-6 bg-button-cta" : "w-2 bg-border-muted",
                )}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

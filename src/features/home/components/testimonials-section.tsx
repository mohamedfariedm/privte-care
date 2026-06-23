"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const dots = [0, 1, 2, 3];

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-border-b py-[120px]">
      <div className="container-page">
        <div className="mx-auto flex max-w-[846px] flex-col items-center gap-14 text-center">
          <div className="flex w-full flex-col items-center gap-8">
            <p className="font-serif text-2xl font-light italic text-text-default">
              {t("label")}
            </p>

            <blockquote className="font-serif text-2xl leading-8 text-text-default">
              {t("quote")}
            </blockquote>

            <div className="rounded-lg border border-border-muted-2 px-6 py-[18px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative size-[54px] overflow-hidden rounded-full border border-black/10">
                  <Image
                    src="/images/testimonials/avatar.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="54px"
                  />
                </div>
                <div>
                  <p className="font-serif text-xl italic leading-[30px] text-text-default">
                    {t("author")}
                  </p>
                  <p className="font-serif text-base leading-[22px] text-text-extra-strong">
                    {t("role")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex w-[152px] items-center justify-center gap-4"
            role="tablist"
            aria-label={t("label")}
          >
            {dots.map((index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={cn(
                  "h-2 flex-1 rounded-full transition-all",
                  active === index
                    ? "bg-button-cta"
                    : "border border-border-muted-2 bg-transparent",
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

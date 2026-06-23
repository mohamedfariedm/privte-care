"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  pricingCategories,
  type PricingFilter,
} from "@/features/prices/data/pricing";

const filters: PricingFilter[] = ["all", "men", "women", "children"];

export function PricingCategories() {
  const t = useTranslations("pages.prices");
  const [openId, setOpenId] = useState("cleanPress");
  const [activeFilter, setActiveFilter] = useState<PricingFilter>("all");

  return (
    <div className="space-y-4">
      {pricingCategories.map((category) => {
        const isOpen = openId === category.id;
        const items =
          category.items?.filter(
            (item) =>
              !category.hasFilters ||
              !item.filters ||
              item.filters.includes(activeFilter),
          ) ?? [];

        return (
          <div
            key={category.id}
            className="overflow-hidden rounded-lg border border-border-muted-2"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-6 text-start"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? "" : category.id)}
            >
              <div className="flex items-center gap-3">
                {category.icon ? (
                  <div className="relative size-8 shrink-0" aria-hidden>
                    <Image src={category.icon} alt="" fill className="object-contain" />
                  </div>
                ) : null}
                <span className="font-serif text-2xl leading-8 text-text-default">
                  {t(`categories.${category.id}.title`)}
                </span>
              </div>
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-full border border-border-muted-2 transition-transform",
                  isOpen && "rotate-180",
                )}
              >
                <ChevronDown className="size-5 text-button-cta" aria-hidden />
              </span>
            </button>

            {isOpen && items.length > 0 ? (
              <div className="border-t border-border-muted-2 px-6 pb-6">
                {category.hasFilters ? (
                  <div className="mb-6 flex flex-wrap gap-6 pt-6">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                          "font-serif text-lg leading-[26px] transition-colors",
                          activeFilter === filter
                            ? "rounded-md bg-background-secondary px-3 py-1 text-text-default"
                            : "text-text-strong hover:text-text-default",
                        )}
                      >
                        {t(`filters.${filter}`)}
                      </button>
                    ))}
                  </div>
                ) : null}

                <div className="grid gap-px overflow-hidden rounded-lg border border-border-muted-2 bg-border-muted-2 md:grid-cols-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between bg-background-base px-4 py-3"
                    >
                      <span className="font-serif text-base leading-[22px] text-text-default">
                        {item.name}
                      </span>
                      <span className="font-serif text-base leading-[22px] text-text-strong">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

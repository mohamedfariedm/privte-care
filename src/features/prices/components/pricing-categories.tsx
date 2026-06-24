"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  chunkItems,
  pricingCategories,
  type PricingFilter,
  type PricingItem,
} from "@/features/prices/data/pricing";

const filters: PricingFilter[] = ["all", "men", "women", "children"];

function PricingItemRow({
  item,
  isFirst,
}: {
  item: PricingItem;
  isFirst: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-white/3 pb-3 last:border-b-0 last:pb-0",
        !isFirst && "pt-3",
      )}
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <div className="relative size-[34px] shrink-0 overflow-hidden rounded-sm bg-white" aria-hidden>
          <Image
            src={item.icon}
            alt=""
            fill
            className="object-contain p-0.5"
            sizes="34px"
          />
        </div>
        <span className="truncate font-serif text-base leading-[22px] text-text-default">
          {item.name}
        </span>
      </div>
      <span className="shrink-0 ps-3 font-serif text-base leading-[22px] text-text-default">
        {item.price}
      </span>
    </div>
  );
}

function PricingItemCard({ items }: { items: PricingItem[] }) {
  return (
    <div className="rounded-xl border border-border-muted-2 p-3">
      {items.map((item, index) => (
        <PricingItemRow key={item.id} item={item} isFirst={index === 0} />
      ))}
    </div>
  );
}

function CategoryToggle({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full bg-button-cta transition-transform duration-300",
        !isOpen && "rotate-180",
      )}
      aria-hidden
    >
      <Image
        src="/images/prices/icon-arrow.svg"
        alt=""
        width={20}
        height={20}
        className="-rotate-90"
      />
    </span>
  );
}

export function PricingCategories() {
  const t = useTranslations("pages.prices");
  const [openId, setOpenId] = useState("cleanPress");
  const [activeFilter, setActiveFilter] = useState<PricingFilter>("all");

  return (
    <div className="flex flex-col gap-6">
      {pricingCategories.map((category) => {
        const isOpen = openId === category.id;
        const items = category.items.filter(
          (item) =>
            !category.hasFilters ||
            !item.filters ||
            item.filters.includes(activeFilter),
        );
        const itemCards = chunkItems(items);

        return (
          <div key={category.id} className="rounded-2xl bg-[#0a112b] p-6">
            {isOpen ? (
              <div className="flex flex-col gap-6 pb-4">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-3 text-start",
                    category.hasFilters && "border-b border-border-muted-2 pb-4",
                  )}
                  aria-expanded={isOpen}
                  onClick={() => setOpenId("")}
                >
                  <div className="relative size-8 shrink-0" aria-hidden>
                    <Image
                      src={category.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="flex-1 font-serif text-2xl leading-8 text-text-default">
                    {t(`categories.${category.id}.title`)}
                  </span>
                  <CategoryToggle isOpen={isOpen} />
                </button>

                {category.hasFilters ? (
                  <div className="flex flex-wrap items-center gap-8">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                          "font-serif text-lg leading-[26px] transition-colors",
                          activeFilter === filter
                            ? "rounded-lg bg-[#111c47] px-3 py-1 text-text-default"
                            : "text-text-strong hover:text-text-default",
                        )}
                      >
                        {t(`filters.${filter}`)}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                type="button"
                className="flex w-full items-center gap-3 text-start"
                aria-expanded={isOpen}
                onClick={() => setOpenId(category.id)}
              >
                <div className="relative size-8 shrink-0" aria-hidden>
                  <Image
                    src={category.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="flex-1 font-serif text-2xl leading-8 text-text-default">
                  {t(`categories.${category.id}.title`)}
                </span>
                <CategoryToggle isOpen={isOpen} />
              </button>
            )}

            {isOpen && itemCards.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {itemCards.map((cardItems, index) => (
                  <PricingItemCard
                    key={`${category.id}-card-${index}`}
                    items={cardItems}
                  />
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

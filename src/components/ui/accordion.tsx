"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
  variant?: "default" | "gold";
};

export function Accordion({
  items,
  defaultOpenId,
  className,
  variant = "default",
}: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null,
  );

  return (
    <div className={cn("divide-y divide-border-muted", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="py-6 first:pt-0 last:pb-0">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-start"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-serif text-xl leading-8 text-text-default md:text-2xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-full",
                  variant === "gold"
                    ? "bg-button-cta"
                    : "border border-border-muted-2",
                )}
              >
                <Plus
                  className={cn(
                    "size-5 transition-transform duration-300",
                    variant === "gold" ? "text-text-on-primary" : "text-button-cta",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                />
              </span>
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-6 text-base leading-relaxed text-text-strong md:max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

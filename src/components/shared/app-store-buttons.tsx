"use client";

import { Apple, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type AppStoreButtonsProps = {
  className?: string;
  size?: "sm" | "md";
  variant?: "default" | "cta";
};

export function AppStoreButtons({
  className,
  size = "md",
  variant = "default",
}: AppStoreButtonsProps) {
  const t = useTranslations("common");

  const isSm = size === "sm";
  const isCta = variant === "cta";

  const variantClass = isCta
    ? "border-button-cta text-button-cta bg-transparent hover:bg-button-cta/10"
    : "border-border-muted bg-transparent text-text-default hover:bg-background-dark/60";

  const textClass = isCta ? "text-button-cta" : "text-text-default";

  const baseButtonClass = cn(
    "inline-flex rounded-xl border transition-colors",
    variantClass,
  );

  const smButtonClass =
    "h-[63px] shrink-0 items-center justify-center gap-2 px-5 py-2";
  const mdButtonClass =
    "h-[141px] min-w-0 flex-1 flex-col items-start justify-between p-4";

  return (
    <div className={cn("flex gap-3", !isSm && "w-full", className)}>
      <a
        href="#"
        className={cn(
          baseButtonClass,
          isSm ? cn(smButtonClass, "w-[180px]") : mdButtonClass,
        )}
        aria-label={t("appStore")}
      >
        <Apple
          className={cn("shrink-0", isSm ? "size-[27.75px]" : "size-[30px]")}
          aria-hidden
        />
        <span className="flex flex-col items-start text-start">
          <span className={cn("text-xs font-light leading-4", textClass)}>
            {t("availableNow")}
          </span>
          <span className={cn("text-lg font-normal", textClass)}>
            {t("appStore")}
          </span>
        </span>
      </a>
      <a
        href="#"
        className={cn(
          baseButtonClass,
          isSm ? cn(smButtonClass, "w-[181px]") : mdButtonClass,
        )}
        aria-label={t("playStore")}
      >
        <Play
          className={cn(
            "shrink-0 fill-current",
            isSm ? "size-[23.125px]" : "size-[30px]",
          )}
          aria-hidden
        />
        <span className="flex flex-col items-start text-start">
          <span className={cn("text-xs font-light leading-4", textClass)}>
            {t("availableNow")}
          </span>
          <span className={cn("text-lg font-normal", textClass)}>
            {t("playStore")}
          </span>
        </span>
      </a>
    </div>
  );
}

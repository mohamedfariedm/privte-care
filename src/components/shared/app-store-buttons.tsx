"use client";

import { Apple, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type AppStoreButtonsProps = {
  className?: string;
  size?: "sm" | "md";
};

export function AppStoreButtons({
  className,
  size = "md",
}: AppStoreButtonsProps) {
  const t = useTranslations("common");

  const buttonClass =
    size === "sm"
      ? "h-[63px] min-w-[160px] px-5"
      : "h-[141px] min-w-[180px] flex-col items-start justify-between px-4 py-4";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href="#"
        className={cn(
          "inline-flex items-center gap-3 rounded-lg border border-border-muted bg-background-dark/60 transition-colors hover:bg-background-dark",
          buttonClass,
        )}
        aria-label={t("appStore")}
      >
        <Apple className="h-7 w-7 shrink-0" aria-hidden />
        <span className="flex flex-col text-start">
          <span className="text-xs text-text-strong">{t("availableNow")}</span>
          <span className="text-lg leading-none">{t("appStore")}</span>
        </span>
      </a>
      <a
        href="#"
        className={cn(
          "inline-flex items-center gap-3 rounded-lg border border-border-muted bg-background-dark/60 transition-colors hover:bg-background-dark",
          buttonClass,
        )}
        aria-label={t("playStore")}
      >
        <Play className="h-7 w-7 shrink-0 fill-current" aria-hidden />
        <span className="flex flex-col text-start">
          <span className="text-xs text-text-strong">{t("availableNow")}</span>
          <span className="text-lg leading-none">{t("playStore")}</span>
        </span>
      </a>
    </div>
  );
}

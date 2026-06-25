"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M17.0186 12.8452C17.0186 12.9536 16.856 16.1514 20.3789 17.8315C19.7285 19.8369 17.4521 24.2812 14.7964 24.2812C13.2788 24.2812 12.4116 23.3057 10.6772 23.3057C8.88867 23.3057 7.91309 24.2812 6.55811 24.2812C3.95654 24.3896 1.46338 19.5117 0.758789 17.5063C0.216797 15.9888 0 14.5254 0 13.1162C0 8.29248 3.19775 5.96191 6.23291 5.90771C7.69629 5.90771 9.53906 6.9375 10.3521 6.9375C11.1108 6.9375 13.2246 5.69092 15.1758 5.85352C17.1812 6.01611 18.6987 6.7749 19.7285 8.23828C17.9399 9.37646 17.0186 10.8398 17.0186 12.8452ZM13.9834 3.95654C12.8994 5.20312 11.5986 5.90771 10.1895 5.79932C10.0811 4.33594 10.623 2.98096 11.5986 1.89697C12.4658 0.921387 13.9834 0.108398 15.2842 0C15.2842 0.596191 15.4468 2.22217 13.9834 3.95654Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M13.5498 10.614L3.56812 0.587158L16.2598 7.90405L13.5498 10.614ZM0.993652 0L12.5562 11.5625L0.993652 23.125C0.406494 22.854 0 22.2668 0 21.5442V1.62598C0 0.90332 0.406494 0.316162 0.993652 0ZM20.1892 10.2075C21.0474 10.8398 21.0474 12.3303 20.2344 12.9626L17.5244 14.4983L14.5435 11.5625L17.5244 8.67188L20.1892 10.2075ZM3.56812 22.5378L13.5498 12.5562L16.2598 15.2661L3.56812 22.5378Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
    "h-[63px] shrink-0 items-center justify-center gap-2 px-5 py-2 duration-500 active:scale-[1.02]";
  const mdButtonClass =
    "h-[141px] min-w-0 flex-1 flex-col items-start justify-between p-4 hover:scale-[1.02]";

  return (
    <div className={cn("flex gap-3", !isSm && "w-full", className)}>
      <a
        href="#"
        className={cn(
          baseButtonClass,
          isSm ? cn(smButtonClass, "w-full sm:w-[180px]") : mdButtonClass,
        )}
        aria-label={t("appStore")}
      >
        <AppStoreIcon
          className={cn(
            "shrink-0",
            textClass,
            isSm ? "h-[25px] w-[21px]" : "h-[30px] w-[25px]",
          )}
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
          isSm ? cn(smButtonClass, "w-full sm:w-[181px]") : mdButtonClass,
        )}
        aria-label={t("playStore")}
      >
        <PlayStoreIcon
          className={cn(
            "shrink-0",
            textClass,
            isSm ? "h-[24px] w-[22px]" : "h-[30px] w-[27.5px]",
          )}
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

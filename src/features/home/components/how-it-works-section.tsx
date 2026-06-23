import Image from "next/image";
import { useTranslations } from "next-intl";

const steps = [
  { key: "schedule", icon: "/images/how-it-works/icon-schedule.png" },
  { key: "pickup", icon: "/images/how-it-works/icon-pickup.png" },
  { key: "delivery", icon: "/images/how-it-works/icon-delivery.png" },
  { key: "clean", icon: "/images/how-it-works/icon-clean.png" },
] as const;

export function HowItWorksSection() {
  const t = useTranslations("home.howItWorks");

  return (
    <section id="how-it-works" className="section-border-b relative overflow-hidden py-16 md:mt-[60px] md:py-[120px]">
      <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2" aria-hidden>
        <Image
          src="/images/how-it-works/background.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(8, 13, 34) 0%, rgba(8, 13, 34, 0) 7.67%), linear-gradient(90deg, rgba(8, 13, 34, 0.93) 0%, rgba(8, 13, 34, 0.93) 100%)",
          }}
        />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center gap-12 md:gap-[120px]">
        <div className="flex w-full max-w-[430px] flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
            {t("title")}
          </h2>
          <p className="font-serif text-xl leading-[30px] text-text-strong">
            {t("description")}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[953px]">
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            <div className="absolute top-[96px] left-1/2 h-px w-[132px] -translate-x-1/2 bg-border-muted-2" />
            <div className="absolute top-[420px] left-1/2 h-px w-[132px] -translate-x-1/2 bg-border-muted-2" />
            <div className="absolute top-[192px] left-[calc(50%+66px)] h-[132px] w-px bg-border-muted-2" />
          </div>

          <ol className="grid gap-8 md:grid-cols-2 md:gap-[132px]">
            {steps.map((step) => (
              <li
                key={step.key}
                className="relative z-10 flex flex-col items-center gap-[21px] rounded-lg border border-border-muted-2 px-3 py-4"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[rgba(20,32,82,0.4)] p-3">
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    aria-hidden
                  />
                </div>

                <div className="flex w-full max-w-[302px] flex-col gap-[7px] text-center">
                  <h3 className="font-serif text-2xl leading-8 text-text-default">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="font-serif text-lg leading-[26px] text-text-strong">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

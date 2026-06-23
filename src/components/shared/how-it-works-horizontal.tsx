import Image from "next/image";
import { useTranslations } from "next-intl";

const steps = [
  { key: "schedule", icon: "/images/how-it-works/icon-schedule.png", number: "01" },
  { key: "pickup", icon: "/images/how-it-works/icon-pickup.png", number: "02" },
  { key: "delivery", icon: "/images/how-it-works/icon-delivery.png", number: "03" },
  { key: "clean", icon: "/images/how-it-works/icon-clean.png", number: "04" },
] as const;

type HowItWorksHorizontalProps = {
  label?: string;
  title?: string;
};

export function HowItWorksHorizontal({ label, title }: HowItWorksHorizontalProps) {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="section-border-b py-20 md:py-[120px]">
      <div className="container-page space-y-16">
        <div className="mx-auto flex max-w-[635px] flex-col items-center gap-3 text-center">
          <p className="font-serif text-[22px] italic text-text-default">
            {label ?? t("title")}
          </p>
          <h2 className="font-serif text-[48px] leading-[60px] text-text-default">
            {title ?? "4 Simple steps to fresh & clean."}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.key}
              className="relative flex min-h-[282px] flex-col justify-end rounded-lg border border-border-muted-2 p-4"
            >
              <span className="absolute top-4 left-4 font-serif text-2xl leading-8 text-text-strong/50">
                {step.number}
              </span>
              <div className="absolute top-6 right-4 opacity-50" aria-hidden>
                <Image src={step.icon} alt="" width={22} height={22} />
              </div>
              <div className="space-y-2 px-3 pb-2">
                <h3 className="font-serif text-2xl leading-8 text-text-default">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="font-serif text-base leading-[22px] text-text-strong">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

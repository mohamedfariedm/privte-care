import Image from "next/image";
import { useTranslations } from "next-intl";

const options = [
  { key: "email", icon: "/images/help/icon-mail.svg" },
  { key: "whatsapp", icon: "/images/help/icon-whatsapp.svg" },
  { key: "phone", icon: "/images/help/icon-phone.svg" },
] as const;

export function ContactOptionsSection() {
  const t = useTranslations("pages.help.contact");

  return (
    <section className="section-border-y">
      <div className="container-page grid md:grid-cols-3">
        {options.map((option) => (
          <article
            key={option.key}
            className="flex flex-col items-center gap-6 border-border-muted-2 px-6 py-10 text-center md:border-x md:first:border-s-0 md:last:border-e-0"
          >
            <div className="relative size-8" aria-hidden>
              <Image src={option.icon} alt="" fill className="object-contain" />
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg leading-[26px] text-text-strong">
                {t(`items.${option.key}.label`)}
              </p>
              <p className="font-serif text-2xl leading-8 text-text-default">
                {t(`items.${option.key}.value`)}
              </p>
              <p className="font-serif text-sm leading-[26px] text-text-extra-strong">
                {t(`items.${option.key}.note`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

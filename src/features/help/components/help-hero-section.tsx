type HelpHeroSectionProps = {
  title: string;
  subtitle: string;
};

export function HelpHeroSection({ title, subtitle }: HelpHeroSectionProps) {
  return (
    <section className="relative h-[776px]">
      <div className="container-page flex flex-col items-center pt-[298px] text-center">
        <div className="flex w-full max-w-[859px] flex-col items-center gap-[26px]">
          <h1 className="h-[64px] font-serif text-[60px] font-light italic leading-[70px] text-text-default">
            {title}
          </h1>

          <div className="h-[90px] w-px bg-border-muted" aria-hidden />

          <p className="font-serif text-[32px] leading-[42px] text-text-default">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

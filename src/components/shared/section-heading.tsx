import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        isCenter && "items-center text-center",
        className,
      )}
    >
      <h2 className="font-serif text-3xl leading-tight text-text-default md:text-5xl md:leading-[60px]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-text-strong md:text-xl md:leading-[30px]",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

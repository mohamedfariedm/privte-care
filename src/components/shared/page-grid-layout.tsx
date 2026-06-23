import { cn } from "@/lib/utils";

type PageGridLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageGridLayout({ children, className }: PageGridLayoutProps) {
  return <div className={cn("grid-lines", className)}>{children}</div>;
}

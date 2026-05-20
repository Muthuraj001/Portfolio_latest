import { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  py?: "none" | "sm" | "md" | "lg" | "xl";
}

export function Section({ children, className, id, py = "md" }: SectionProps) {
  const paddingClasses = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-28",
    xl: "py-24 sm:py-36",
  };

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", paddingClasses[py], className)}
    >
      {children}
    </section>
  );
}

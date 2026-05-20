import { cn } from "../../lib/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, align = "left" }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-zinc-400 sm:text-lg font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-12 rounded bg-gradient-to-r from-emerald-500 to-teal-400",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}

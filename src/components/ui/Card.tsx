import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverGlow?: boolean;
}

export function Card({ children, className, hoverGlow = false, id, ...props }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md transition-all duration-300",
        hoverGlow &&
          "hover:border-emerald-500/30 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

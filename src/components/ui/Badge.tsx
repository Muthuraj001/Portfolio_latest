import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function Badge({ children, className, variant = "primary", id, ...props }: BadgeProps) {
  const baseStyle =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors duration-150 border";

  const variants = {
    primary: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    secondary: "bg-zinc-800 text-zinc-300 border-zinc-700/50",
    success: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    danger: "bg-red-500/10 text-red-400 border-red-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };

  return (
    <span
      id={id}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}

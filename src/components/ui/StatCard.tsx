import { ReactNode } from "react";
import { Card } from "./Card";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card hoverGlow className="flex items-center space-x-5 py-5 px-6 border-zinc-800/80 bg-zinc-900/30">
      {icon && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
          {icon}
        </div>
      )}
      <div className="space-y-1">
        <div className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {label}
        </div>
      </div>
    </Card>
  );
}

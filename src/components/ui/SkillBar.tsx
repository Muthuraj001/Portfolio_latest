import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { Badge } from "./Badge";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SkillBarProps {
  name: string;
  percentage: number;
  level: string;
}

export function SkillBar({ name, percentage, level }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    if (prefersReduced) {
      bar.style.width = `${percentage}%`;
      return;
    }

    // Set starting state
    bar.style.width = "0%";

    // Animate target filling using animejs
    animate(bar, {
      width: `${percentage}%`,
      ease: "easeOutQuad",
      duration: 1000,
      delay: 150
    });
  }, [percentage, prefersReduced]);

  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-200">{name}</span>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-2 py-0.2 text-[10px] scale-90">
            {level}
          </Badge>
          <span className="font-mono text-xs font-semibold text-emerald-400">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-950 border border-zinc-900">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          style={{ width: "0%" }} // starting width
        />
      </div>
    </div>
  );
}

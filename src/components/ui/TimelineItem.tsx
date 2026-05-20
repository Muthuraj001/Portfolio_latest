import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import { TimelineEvent } from "../../data/experience";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export function TimelineItem({ event, index }: TimelineItemProps) {
  // Select matching semantic vector icons
  const getIcon = () => {
    switch (event.type) {
      case "Work":
        return <Briefcase className="h-4.5 w-4.5" />;
      case "Education":
        return <GraduationCap className="h-4.5 w-4.5" />;
      default:
        return <ShieldCheck className="h-4.5 w-4.5" />;
    }
  };

  return (
    <div className="relative pl-8 sm:pl-10 text-left group">
      
      {/* Dynamic Connector Vertical Lines */}
      <div className="absolute top-0 bottom-0 left-3.5 w-[1.5px] bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 group-last:bottom-2 group-last:h-6" />

      {/* Floating Category Icon Node circles */}
      <div className="absolute top-1 left-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all duration-300">
        {getIcon()}
      </div>

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
              {event.role}
            </h3>
            <p className="text-xs font-semibold text-zinc-400">
              {event.company}
            </p>
          </div>
          <span className="inline-flex shrink-0 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-[10px] font-bold text-emerald-400/90 h-5 items-center sm:self-center">
            {event.year}
          </span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed max-w-4xl font-normal">
          {event.description}
        </p>

        {/* bullet elements */}
        {event.highlights.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2" role="list">
            {event.highlights.map((highlight, idx) => (
              <li key={idx} className="text-xs text-zinc-500 flex items-start leading-relaxed font-normal">
                <span className="mr-2 text-emerald-500 font-bold shrink-0">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

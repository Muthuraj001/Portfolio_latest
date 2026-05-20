import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverGlow className="flex flex-col h-full justify-between border-zinc-800/80 bg-zinc-900/25 p-6 text-left">
      <div className="space-y-4">
        {/* Visual identifier */}
        <div className="h-2 w-10 rounded bg-gradient-to-r from-emerald-500 to-teal-400" />
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
            {service.title}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        {/* Deliverables checklist */}
        <div className="space-y-2.5 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/90 block">
            Core Scope & Deliverables:
          </span>
          <ul className="space-y-1.5" role="list">
            {service.deliverables.map((item, index) => (
              <li key={index} className="flex items-start text-xs text-zinc-300 font-normal">
                <Check className="mr-2 h-3.5 w-3.5 shrink-0 text-emerald-500 pt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-zinc-800/65 space-y-3.5">
        <p className="text-[11px] text-zinc-500 italic leading-relaxed">
          <strong className="text-zinc-400 font-semibold not-italic">Ideal For:</strong> {service.idealClient}
        </p>
        <Link to="/contact" className="block w-full">
          <Button variant="outline" size="sm" className="w-full text-xs py-2">
            Inquire Package
            <ArrowRight className="ml-1.5 h-3 w-3" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}

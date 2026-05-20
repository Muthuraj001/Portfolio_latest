import { ShieldAlert, Terminal, Calendar, MapPin, Zap, Layers } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { TimelineItem } from "../components/ui/TimelineItem";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { experiences, securityRoadmap } from "../data/experience";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function Experience() {
  const listReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.1 });
  const cardReveal = useGSAPReveal<HTMLDivElement>({ direction: "left", delay: 0.2 });

  return (
    <div>
      <SEO title="Career Milestones" slug="experience" />

      {/* 1. Header Hero Page Intro */}
      <PageHeader
        title="Career Milestones"
        subtitle="Review my chronological career events, continuous DevOps tooling iterations, and cybersecurity learning maps."
        category="Professional Track"
      />

      {/* 2. Timeline Grid */}
      <Section py="md">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Main timeline listing */}
          <div ref={listReveal} className="lg:col-span-8 space-y-10">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Chronological Journey
              </h2>
              <p className="text-xs text-zinc-400">A detailed review of my engineering roles, deliverables, and contributions.</p>
            </div>

            <div className="space-y-8 relative">
              {experiences.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Right hand side elements: Cybersecurity roadmap */}
          <div className="lg:col-span-4 space-y-6">
            
            <div ref={cardReveal} className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  <h3 className="font-bold text-sm uppercase tracking-wider text-white">Security Roadmap</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  My structured curriculum for hardening endpoints and mastering defensive/offensive principles.
                </p>
              </div>

              {/* Roadmap list mapping */}
              <div className="space-y-4">
                {securityRoadmap.map((phase) => {
                  const isCompleted = phase.status === "Completed";
                  const isInProgress = phase.status === "In Progress";

                  return (
                    <Card
                      key={phase.phase}
                      className={`p-4 border-zinc-900 ${
                        isCompleted
                          ? "bg-emerald-500/3 border-emerald-500/10"
                          : isInProgress
                          ? "bg-yellow-500/3 border-yellow-500/10 scale-98"
                          : "bg-zinc-900/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-zinc-500 tracking-wider">
                          {phase.phase}
                        </span>
                        <Badge
                          variant={
                            isCompleted ? "success" : isInProgress ? "warning" : "secondary"
                          }
                          className="scale-85 text-[9px] tracking-wide"
                        >
                          {phase.status}
                        </Badge>
                      </div>
                      <h4 className="text-sm font-extrabold text-white pt-1">{phase.title}</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed pt-1.5 font-normal">
                        {phase.notes}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick interview hooks card */}
            <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-950 text-left space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00F5FF]">Interview Highlights</h4>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-normal">
                <li className="flex items-center">
                  <span className="text-emerald-400 font-bold mr-1.5">✓</span>
                  Chennai-based / Willing to travel
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-400 font-bold mr-1.5">✓</span>
                  Continuous delivery automation expert
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-400 font-bold mr-1.5">✓</span>
                  Ethical hacker mindset (OWASP audit ready)
                </li>
              </ul>
            </div>

          </div>

        </Container>
      </Section>
    </div>
  );
}

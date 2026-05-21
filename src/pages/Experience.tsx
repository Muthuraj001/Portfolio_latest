import { ShieldAlert } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { TimelineItem } from "../components/ui/TimelineItem";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { experiences, learningRoadmap } from "../data/timeline";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function Experience() {
  const listReveal = useGSAPReveal<HTMLDivElement>({
    direction: "up",
    delay: 0.1,
  });

  const cardReveal = useGSAPReveal<HTMLDivElement>({
    direction: "left",
    delay: 0.2,
  });

  return (
    <div>
      <SEO title="Career Milestones" slug="experience" />

      {/* 1. Header Hero Page Intro */}
      <PageHeader
        title="Career Milestones"
        subtitle="Review my internships, frontend development journey, software testing experience, and continuous learning roadmap."
        category="Professional Track"
      />

      {/* 2. Timeline Grid */}
      <Section py="md">
        <Container className="grid grid-cols-1 gap-10 text-left lg:grid-cols-12 lg:gap-12 xl:gap-14 items-start">
          {/* Main timeline listing */}
          <div ref={listReveal} className="lg:col-span-8 space-y-8">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
                Chronological Journey
              </h2>

              <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
                A detailed review of my internships, academic background,
                technical certifications, and practical frontend development
                experience.
              </p>
            </div>

            <div className="relative space-y-8">
              {experiences.map((event, index) => (
                <TimelineItem key={`${event.year}-${event.role}`} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Right hand side elements: Learning roadmap */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div ref={cardReveal} className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-emerald-400" />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Learning Roadmap
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-zinc-400">
                  My structured roadmap for frontend development, software
                  testing, API validation, and full stack learning.
                </p>
              </div>

              {/* Roadmap list mapping */}
              <div className="space-y-4">
                {learningRoadmap.map((phase) => {
                  const isCompleted = phase.status === "Completed";
                  const isInProgress = phase.status === "In Progress";

                  return (
                    <Card
                      key={phase.phase}
                      className={`p-4 border-zinc-900 ${
                        isCompleted
                          ? "bg-emerald-500/5 border-emerald-500/10"
                          : isInProgress
                          ? "bg-yellow-500/5 border-yellow-500/10"
                          : "bg-zinc-900/20"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                          {phase.phase}
                        </span>

                        <Badge
                          variant={
                            isCompleted
                              ? "success"
                              : isInProgress
                              ? "warning"
                              : "secondary"
                          }
                          className="text-[9px] tracking-wide"
                        >
                          {phase.status}
                        </Badge>
                      </div>

                      <h4 className="pt-2 text-sm font-extrabold leading-snug text-white">
                        {phase.title}
                      </h4>

                      <p className="pt-1.5 text-[11px] leading-relaxed text-zinc-400">
                        {phase.notes}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick interview hooks card */}
            <Card className="p-4 border-zinc-850 bg-zinc-950 text-left space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00F5FF]">
                Interview Highlights
              </h4>

              <ul className="space-y-2 text-xs font-normal text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                  <span>Chennai-based / Willing to travel</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                  <span>Frontend development and responsive UI skills</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                  <span>Software testing and API validation experience</span>
                </li>
              </ul>
            </Card>
          </aside>
        </Container>
      </Section>
    </div>
  );
}
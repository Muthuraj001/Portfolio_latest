import { useState } from "react";
import { Terminal, ShieldCheck, Cpu, Code, Database, Server, Compass } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { SkillBar } from "../components/ui/SkillBar";
import { skills, Skill } from "../data/skills";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

type CategoryFilter = "All" | "Frontend" | "Backend" | "Database" | "DevOps" | "Cybersecurity" | "Tools";

export function Skills() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");

  const headingReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.1 });

  // Get matching icons for decorative visual representation
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="h-5 w-5 text-emerald-400" />;
      case "Backend":
        return <Cpu className="h-5 w-5 text-[#00F5FF]" />;
      case "Database":
        return <Database className="h-5 w-5 text-cyan-400" />;
      case "DevOps":
        return <Server className="h-5 w-5 text-purple-400" />;
      case "Cybersecurity":
        return <ShieldCheck className="h-5 w-5 text-red-400" />;
      default:
        return <Terminal className="h-5 w-5 text-yellow-400" />;
    }
  };

  const categories: CategoryFilter[] = ["All", "Frontend", "Backend", "Database", "DevOps", "Cybersecurity", "Tools"];

  // Filter skills list based on user tab selection
  const filteredSkills = activeTab === "All"
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <div>
      <SEO title="Skills & Tech Stack" slug="skills" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Technical Arsenal"
        subtitle="Sift through my core tech competencies in DevOps pipelines, database design, secure programming, and web engineering."
        category="Tech Stack"
      />

      {/* 2. Interactive Skills explorer */}
      <Section py="md">
        <Container className="space-y-12">
          
          {/* Tab Selector Navs */}
          <div ref={headingReveal} className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-900 pb-6">
            {categories.map((cat) => {
              const active = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    active
                      ? "bg-emerald-600 font-extrabold text-white shadow-[0_4px_15px_rgba(16,185,129,0.15)] scale-102"
                      : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sub-header statistics mapping */}
          <div className="text-left max-w-xl text-zinc-500 text-xs font-mono">
            <span>Showing {filteredSkills.length} core profiles for: <strong>{activeTab}</strong></span>
          </div>

          {/* Skills Lists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(c => c !== "All" && (activeTab === "All" || activeTab === c)).map((categoryKey) => {
              const catSkills = filteredSkills.filter(s => s.category === categoryKey);
              if (catSkills.length === 0) return null;

              return (
                <div key={categoryKey} className="space-y-5 rounded-xl border border-zinc-900 bg-zinc-950/20 p-6 text-left hover:border-zinc-800 transition-colors duration-300">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zinc-900 shadow-sm">
                    <div className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-850">
                      {getCategoryIcon(categoryKey)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{categoryKey}</h3>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stack Scope</span>
                    </div>
                  </div>

                  {/* Skills container list mapping */}
                  <div className="space-y-4 pt-1">
                    {catSkills.map((sk) => (
                      <SkillBar
                        key={sk.name}
                        name={sk.name}
                        percentage={sk.percentage}
                        level={sk.level}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </Container>
      </Section>
    </div>
  );
}

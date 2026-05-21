import { useState } from "react";
import {
  Terminal,
  Code,
  Database,
  Compass,
  Palette,
  Bug,
  BookOpen,
  ServerCog,
} from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { SkillBar } from "../components/ui/SkillBar";
import { skills, Skill } from "../data/skills";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

type CategoryFilter = "All" | Skill["category"];

export function Skills() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");

  const headingReveal = useGSAPReveal<HTMLDivElement>({
    direction: "up",
    delay: 0.1,
  });

  const getCategoryIcon = (category: Skill["category"]) => {
    switch (category) {
      case "Frontend":
        return <Code className="h-5 w-5 text-emerald-400" />;
      case "Web Design":
        return <Palette className="h-5 w-5 text-pink-400" />;
      case "Testing":
        return <Bug className="h-5 w-5 text-yellow-400" />;
      case "Backend Basics":
        return <ServerCog className="h-5 w-5 text-[#00F5FF]" />;
      case "Database":
        return <Database className="h-5 w-5 text-cyan-400" />;
      case "Tools":
        return <Terminal className="h-5 w-5 text-purple-400" />;
      case "Learning":
        return <BookOpen className="h-5 w-5 text-orange-400" />;
      default:
        return <Compass className="h-5 w-5 text-zinc-400" />;
    }
  };

  const categories: CategoryFilter[] = [
    "All",
    "Frontend",
    "Web Design",
    "Testing",
    "Backend Basics",
    "Database",
    "Tools",
    "Learning",
  ];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const visibleCategories = categories.filter(
    (category): category is Skill["category"] =>
      category !== "All" && (activeTab === "All" || activeTab === category)
  );

  return (
    <div>
      <SEO title="Skills & Tech Stack" slug="skills" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Skills & Tech Stack"
        subtitle="A practical overview of my frontend development, responsive web design, software testing, API validation, database basics, and learning roadmap."
        category="Technical Profile"
      />

      {/* 2. Interactive Skills explorer */}
      <Section py="md">
        <Container className="space-y-12">
          {/* Tab Selector Navs */}
          <div
            ref={headingReveal}
            className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-900 pb-6"
          >
            {categories.map((cat) => {
              const active = activeTab === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    active
                      ? "scale-[1.02] bg-emerald-600 font-extrabold text-white shadow-[0_4px_15px_rgba(16,185,129,0.15)]"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sub-header statistics mapping */}
          <div className="max-w-xl text-left font-mono text-xs text-zinc-500">
            <span>
              Showing {filteredSkills.length} skills for:{" "}
              <strong className="text-zinc-300">{activeTab}</strong>
            </span>
          </div>

          {/* Skills Lists Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((categoryKey) => {
              const catSkills = filteredSkills.filter(
                (skill) => skill.category === categoryKey
              );

              if (catSkills.length === 0) return null;

              return (
                <div
                  key={categoryKey}
                  className="space-y-5 rounded-xl border border-zinc-900 bg-zinc-950/20 p-6 text-left transition-colors duration-300 hover:border-zinc-800"
                >
                  <div className="flex items-center space-x-3 border-b border-zinc-900 pb-3 shadow-sm">
                    <div className="rounded-lg border border-zinc-850 bg-zinc-900/50 p-2">
                      {getCategoryIcon(categoryKey)}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white">
                        {categoryKey}
                      </h3>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        Skill Group
                      </span>
                    </div>
                  </div>

                  {/* Skills container list mapping */}
                  <div className="space-y-4 pt-1">
                    {catSkills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        level={skill.level}
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
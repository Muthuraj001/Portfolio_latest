import { useState } from "react";
import { Search, Grid, Eye } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Badge } from "../components/ui/Badge";
import { projects, Project } from "../data/projects";
import { SEO } from "../components/seo/SEO";

type FilterCategory = "All" | "Full Stack" | "DevOps" | "Database/Backend" | "Security" | "Mobile";

export function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "Full Stack", "DevOps", "Database/Backend", "Security", "Mobile"];

  // Filter project arrays. Correct casing matches.
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.techStack.some((ts) => ts.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  const featuredList = filteredProjects.filter((p) => p.featured);
  const otherList = filteredProjects.filter((p) => !p.featured);

  return (
    <div>
      <SEO title="Project Showcases" slug="projects" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Engineering Showroom"
        subtitle="Sift through my active DevOps, security configurations, database architectures, and full-stack portfolios."
        category="Portfolio"
      />

      {/* 2. Portfolio Listing */}
      <Section py="md">
        <Container className="space-y-10">
          
          {/* Controls: Search & Category filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6 text-left">
            
            {/* Search Input field */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools, stacks..."
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-emerald-500/55 transition-colors duration-200"
              />
            </div>

            {/* Quick Category filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 outline-none ${
                      active
                        ? "bg-emerald-600 font-bold text-white shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
                        : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* If list is empty */}
          {filteredProjects.length === 0 && (
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-12 text-center space-y-3">
              <p className="text-sm text-zinc-400">No project matches your active queries.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="text-xs text-emerald-400 font-bold underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Catalog mapping: Featured Spotlights Group */}
          {featuredList.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-zinc-400 text-left">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Featured Releases</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredList.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Catalog mapping: Other release works */}
          {otherList.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center space-x-2 text-zinc-400 text-left">
                <span className="inline-block h-2 w-2 rounded-full bg-zinc-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Other Labs</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {otherList.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

        </Container>
      </Section>
    </div>
  );
}

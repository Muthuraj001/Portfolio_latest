import { useState } from "react";
import { Search } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects, Project } from "../data/projects";
import { SEO } from "../components/seo/SEO";

type FilterCategory = "All" | Project["category"];

export function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = [
    "All",
    "Frontend",
    "React",
    "Web Design",
    "Testing",
    "IoT",
  ];

  const filteredProjects = projects.filter((project) => {
    const normalizedSearch = search.toLowerCase().trim();

    const matchesSearch =
      normalizedSearch.length === 0 ||
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(normalizedSearch)
      );

    const matchesCategory =
      category === "All" || project.category === category;

    return matchesSearch && matchesCategory;
  });

  const featuredList = filteredProjects.filter((project) => project.featured);
  const otherList = filteredProjects.filter((project) => !project.featured);

  return (
    <div>
      <SEO title="Project Showcases" slug="projects" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Project Showcase"
        subtitle="Explore my frontend projects, React work, web design practice, software testing workflow, and IoT-based academic project."
        category="Portfolio"
      />

      {/* 2. Portfolio Listing */}
      <Section py="md">
        <Container className="space-y-10">
          {/* Controls: Search & Category filter */}
          <div className="flex flex-col items-start justify-between gap-4 border-b border-zinc-900 pb-6 text-left md:flex-row md:items-center">
            {/* Search Input field */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, stacks..."
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors duration-200 focus:border-emerald-500/55"
              />
            </div>

            {/* Quick Category filter buttons */}
            <div className="flex w-full flex-wrap items-center gap-1.5 md:w-auto md:justify-end">
              {categories.map((cat) => {
                const active = category === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide outline-none transition-all duration-200 ${
                      active
                        ? "bg-emerald-600 font-bold text-white shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
                        : "bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
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
            <div className="space-y-3 rounded-xl border border-zinc-900 bg-zinc-950/20 p-12 text-center">
              <p className="text-sm text-zinc-400">
                No project matches your current search.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="text-xs font-bold text-emerald-400 underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Catalog mapping: Featured Projects */}
          {featuredList.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-left text-zinc-400">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Featured Projects
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredList.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Catalog mapping: Other Projects */}
          {otherList.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center space-x-2 text-left text-zinc-400">
                <span className="inline-block h-2 w-2 rounded-full bg-zinc-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Other Projects
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
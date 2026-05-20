import { useState } from "react";
import { Search } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { BlogCard } from "../components/ui/BlogCard";
import { blogs, BlogPost } from "../data/blogs";
import { SEO } from "../components/seo/SEO";

type BlogCategoryFilter = "All" | "Security" | "DevOps" | "React" | "Auth";

export function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategoryFilter>("All");

  const categories: BlogCategoryFilter[] = ["All", "Security", "DevOps", "React", "Auth"];

  // Filter blog posts array based on search text & active category tab
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <SEO title="Technical Articles" slug="blog" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Technical Logbook"
        subtitle="Detailed architectural deep-dives, DevSecOps pipelines tutorials, authenticating, and clean frontend practices."
        category="Articles"
      />

      {/* 2. Blog Catalog Grid */}
      <Section py="md">
        <Container className="space-y-10">
          
          {/* Controls Panel: Search & Categorization tab bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6 text-left">
            
            {/* Search Input field */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles, tags..."
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-9 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-emerald-500/55 transition-colors duration-250"
              />
            </div>

            {/* Filter buttons list */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 outline-none ${
                      active
                        ? "bg-emerald-600 font-bold text-white shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
                        : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-805"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* If blogs empty */}
          {filteredBlogs.length === 0 && (
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-12 text-center space-y-3">
              <p className="text-sm text-zinc-400">No technical logs match your current search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="text-xs text-emerald-400 font-bold underline"
              >
                Reset Filter Values
              </button>
            </div>
          )}

          {/* Grid Layout of blogs list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

        </Container>
      </Section>
    </div>
  );
}

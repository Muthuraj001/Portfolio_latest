import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, ShieldAlert, Zap, Cpu, Server, Laptop } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { services } from "../data/services";
import { AnimatedHeroSvg } from "../components/animation/AnimatedHeroSvg";
import { CodeTerminalAnimation } from "../components/animation/CodeTerminalAnimation";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Frontend Developer",
    "Web Designer",
    "Software Tester Enthusiast",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // GSAP mounts reveals
  const titleReveal = useGSAPReveal<HTMLHeadingElement>({ direction: "up", delay: 0.1 });
  const buttonsReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.3 });
  const terminalReveal = useGSAPReveal<HTMLDivElement>({ direction: "left", delay: 0.4 });
  const featuredReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.2 });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const topSkills = skills.filter((s) => s.percentage >= 90).slice(0, 6);
  const coreServices = services.slice(0, 3);

  return (
    <div className="relative">
      <SEO title="Home - Professional Portfolio" />

      {/* 1. HERO SECTION */}
      <Section py="lg" className="min-h-[85vh] flex items-center pt-24 sm:pt-32 relative">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
              <Zap className="h-3.5 w-3.5 fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                Open for Hire & Contracts
              </span>
            </div>

            <div className="space-y-14">
              <h1
                ref={titleReveal}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sans"
              >
                Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00F5FF] bg-clip-text text-transparent">Muthuraj</span>
              </h1>
              
              {/* Rotating roles */}
              <div className="h-10 text-xl sm:text-2xl font-mono text-zinc-300 flex items-center">
                <span className="text-emerald-500 mr-2 font-semibold">❯</span>
                <span className="font-bold border-r-2 border-emerald-400 pr-1.5 animate-pulse">
                  {roles[roleIndex]}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                I am a Frontend Developer, Software Tester , and Web Designer based in Chennai, India. I write robust type-safe code, containerize environments with Docker-pipes, and implement OWASP-grade defenses.
              </p>
            </div>

            {/* CTAs */}
            <div ref={buttonsReveal} className="flex flex-wrap gap-4 pt-2">
              <Link to="/projects">
                <Button variant="sparkle" size="md">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md">
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="ghost" size="md" className="text-zinc-400 hover:text-white">
                  Resume
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero graphics & Terminal */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 relative items-center">
            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full -z-10 pointer-events-none" />
            
            <div ref={terminalReveal} className="w-full flex justify-center">
              <CodeTerminalAnimation />
            </div>
          </div>

        </Container>
      </Section>

      {/* 2. CORE STATS CREDIBILITY SECTION */}
      <Section py="sm" className="bg-zinc-950/60 border-y border-zinc-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "30+", label: "Projects Completed", desc: "Enterprise & Freelance" },
              { value: "15+", label: "Technologies Used", desc: "React, Node, Docker, Cloud" },
              { value: "3 Min", label: "Build Delivery Time", desc: "Fully automated CI/CD" },
              { value: "500+", label: "Security Learning hrs", desc: "OWASP & PortSwigger Labs" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`space-y-1 py-4 text-left pl-4 sm:pl-6 border-zinc-900 border-b md:border-b-0 md:border-r ${
                  idx >= 2 ? "border-b-0" : ""
                } ${idx === 3 ? "md:border-r-0" : ""}`}
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{stat.value}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-white">{stat.label}</p>
                <p className="text-[10px] text-zinc-500 font-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. FEATURED WORK */}
      <Section py="md" id="featured-projects">
        <Container className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 font-mono">Spotlight</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
              <p className="text-xs text-zinc-400 max-w-xl">A curated selection of dynamic, production-grade applications showing secure engineering practices.</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" size="sm" className="text-xs py-2">
                Browse All Portfolios
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div ref={featuredReveal} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. DESIGN PILLARS & VALUES (Mindset) */}
      <Section py="md" className="bg-zinc-950/40 relative border-t border-zinc-900">
        <Container className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Engineering Philosophy</span>
            <h2 className="text-3xl font-extrabold text-white">How I Orchestrate Architecture</h2>
            <div className="h-1 w-10 bg-emerald-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Security By Absolute Design",
                desc: "API inputs must go through parameters and schemas (Zod). Helmet-headers block framing, password algorithms cryptographically hash identifiers, avoiding standard credential exposures.",
                icon: <ShieldAlert className="h-6 w-6 text-[#ef4444]" />,
              },
              {
                title: "Automation as Core Mindset",
                desc: "Every release cycle must be automated. Committing files triggers GitHub Action lints, tests, and triggers multi-stage Docker container runs on standard VPS clusters.",
                icon: <Server className="h-6 w-6 text-[#00F5FF]" />,
              },
              {
                title: "Performant Client Experience",
                desc: "Light builds, aggressive static asset caching, lazy loading routes, and hardware-accelerated animations on the main-thread deliver 100/100 performance indexes.",
                icon: <Zap className="h-6 w-6 text-[#f59e0b]" />,
              },
            ].map((pillar, idx) => (
              <Card key={idx} hoverGlow className="p-6 border-zinc-800/60 bg-zinc-900/10 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. SERVICES CUT */}
      <Section py="md" className="border-t border-zinc-900">
        <Container className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF] font-mono">Expertise Packages</span>
            <h2 className="text-3xl font-extrabold text-white">Freelance Offerings</h2>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">Providing professional web application development, deployment, and security auditing consultations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            {coreServices.map((service, idx) => (
              <Card key={idx} hoverGlow className="flex flex-col justify-between p-6 bg-zinc-900/30 border-zinc-850">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-emerald-400">0{idx + 1} / PACKAGE</span>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-900">
                  <Link to="/services" className="text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center hover:text-white">
                    Learn more
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. CALL TO ACTION SECTION */}
      <Section py="lg" className="bg-gradient-to-b from-zinc-950 to-black relative">
        <div className="absolute inset-x-0 bottom-0 top-[20%] bg-emerald-950/5 pointer-events-none blur-[120px]" />
        
        <Container className="relative max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Let's Solidify Your Next Application</h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Seeking to containerize an Express API, security audit code repositories against OWASP threats, or deploy dynamic, gorgeous React SPAs?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button variant="sparkle" size="lg" className="uppercase text-xs tracking-wider font-bold">
                Get In Touch Direct
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="uppercase text-xs tracking-wider font-bold">
                Learn Delivery Scope
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

    </div>
  );
}

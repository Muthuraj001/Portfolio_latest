import { ShieldAlert, BookOpen, Clock, Heart, Award, Cpu, Server, Terminal, Laptop } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { Card } from "../components/ui/Card";
import { StatCard } from "../components/ui/StatCard";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function About() {
  const introReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.1 });
  const gridReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.2 });

  const values = [
    {
      title: "Clean Code Protocol",
      desc: "Code must speak, and types must validate. I structure folders symmetrically, document parameters, and write clean interfaces that reduce tech debt.",
      icon: <Laptop className="h-5 w-5 text-emerald-400" />
    },
    {
      title: "Secure by Design",
      desc: "Every route is checked. HELMET protection, strict rate-limit constraints, payload sanitizations, and OWASP guides ensure data safety.",
      icon: <ShieldAlert className="h-5 w-5 text-red-400" />
    },
    {
      title: "Performance First",
      desc: "No laggy frameworks. Route splits, custom lighter-animations, dynamic web asset formats, and reduced re-renders provide instantaneous loads.",
      icon: <Cpu className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "Automation Habit",
      desc: "If you run it twice, script it. Fully containerized local setups and webhook-dispatched build runs save thousands of manual dev-hours.",
      icon: <Server className="h-5 w-5 text-blue-400" />
    },
    {
      title: "Continuous Exploration",
      desc: "Web technology moves at breakneck speeds. I dedicate weekly hours reading security updates, compiler advances, and network optimizations.",
      icon: <BookOpen className="h-5 w-5 text-purple-400" />
    }
  ];

  return (
    <div>
      <SEO title="About" slug="about" />
      
      {/* 1. Header Hero Page Intro */}
      <PageHeader
        title="My Journey & Mindset"
        subtitle="Full Stack architect, automation writer, and cybersecurity researcher specializing in container deployments and security engineering."
        category="About Me"
      />

      {/* 2. Professional Biography */}
      <Section py="md">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div ref={introReveal} className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Who Is Thulasidharan?
            </h2>
            <div className="h-1 w-12 bg-emerald-500 rounded" />
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Based in beautiful Chennai, Tamil Nadu, India, I develop software at the intersection of application performance, automated configurations, and offensive framework safety. 
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              My engineering stance is defined by **integrity** and **unification**. I believe that writing a full-stack REST API of supreme speed is futile if weak sanitizations permit SQL injection attacks. Similarly, a beautiful web workspace is useless if the deployment pipeline takes 20 painful manual steps. My goal is to orchestrate secure, fully-automated deployments.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Outside of coding, you can find me exploring cybersecurity hacking Labs (such as PortSwigger Academy and OWASP threat models), configuring local Nginx server routes, and compiling helper Bash scripts to streamline local virtual storage configurations.
            </p>
          </div>

          {/* Stats Side Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 text-left font-mono">
              Empirical Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard value="30+" label="Projects Built" icon={<Award />} />
              <StatCard value="12+" label="Docker Containers" icon={<Server />} />
              <StatCard value="500+" label="Security Lab Hrs" icon={<Clock />} />
              <StatCard value="100%" label="Uptime Target" icon={<Cpu />} />
            </div>
          </div>

        </Container>
      </Section>

      {/* 3. Mindsets & Core Values */}
      <Section py="md" className="bg-zinc-950/60 border-t border-zinc-900">
        <Container className="space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]">Core Standards</span>
            <h2 className="text-3xl font-extrabold text-white">How I Orchestrate Codebases</h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">These benchmarks represent my daily work ethic, avoiding lazy shortcuts to build software correctly first time.</p>
          </div>

          <div ref={gridReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {values.map((v, i) => (
              <Card key={i} hoverGlow className="p-6 bg-zinc-900/15 border-zinc-850 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              </Card>
            ))}
          </div>

        </Container>
      </Section>
    </div>
  );
}

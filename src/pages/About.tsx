import { ShieldAlert, BookOpen, Clock, Award, Cpu, Server, Laptop } from "lucide-react";
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
      title: "Frontend Development",
      desc: "Strong foundation in React, TypeScript, JavaScript, HTML5, and CSS3 for building responsive and user-friendly web applications.",
      icon: <Laptop className="h-5 w-5 text-emerald-400" />
    },
    {
      title: "Software Testing",
      desc: "Experience in identifying frontend issues, validating API responses, analyzing UI/UX problems, and supporting stable application releases.",
      icon: <ShieldAlert className="h-5 w-5 text-red-400" />
    },
    {
      title: "Responsive UI Design",
      desc: "Skilled in creating clean layouts, structured navigation, mobile-friendly interfaces, and scalable page structures.",
      icon: <Cpu className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "API-Based Data Rendering",
      desc: "Worked with REST API concepts and dynamic data rendering to build interactive frontend applications and dashboards.",
      icon: <Server className="h-5 w-5 text-blue-400" />
    },
    {
      title: "Continuous Learning",
      desc: "Currently expanding skills in Full Stack Development, SharePoint Online, Microsoft Graph APIs, Python, SQL, and performance optimization.",
      icon: <BookOpen className="h-5 w-5 text-purple-400" />
    }
  ];

  return (
    <div>
      <SEO title="About" slug="about" />

      {/* 1. Header Hero Page Intro */}
      <PageHeader
        title="Frontend Developer & Software Tester"
        subtitle="Building responsive web applications with React, TypeScript, JavaScript, and modern frontend tooling."
        category="About Me"
      />

      {/* 2. Professional Biography */}
      <Section py="md">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div ref={introReveal} className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Who Is Muthuraj ?
            </h2>
            <div className="h-1 w-12 bg-emerald-500 rounded" />
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              I am Muthuraj P, a Frontend Developer with strong foundations in TypeScript, JavaScript ES6+, React, HTML5, CSS3, and responsive web design. I focus on building clean, scalable, and user-friendly web applications with modular UI components.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              I have hands-on experience in software testing, debugging frontend issues, validating API responses, analyzing UI/UX problems, and improving application usability. I enjoy working closely with developers to identify issues and deliver stable, reliable applications.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              My technical interests include modern frontend development, REST API integration, SharePoint Online concepts, Microsoft Graph APIs, performance optimization, and full stack development. I am passionate about continuously improving my skills and building practical real-world projects.
            </p>
          </div>

          {/* Stats Side Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 text-left font-mono">
              Profile Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard value="10+" label="Internships" icon={<Award />} />
              <StatCard value="30+" label="Projects Built" icon={<Server />} />
              <StatCard value="7.6" label="Academic Score" icon={<BookOpen />} />
              <StatCard value="2025" label="B.E CSE Graduate" icon={<Cpu />} />
            </div>
          </div>

        </Container>
      </Section>

      {/* 3. Skills & Core Strengths */}
      <Section py="md" className="bg-zinc-950/60 border-t border-zinc-900">
        <Container className="space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]">
              Core Skills
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              What I Bring as a Developer
            </h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">
              A practical mix of frontend development, software testing, responsive design, API integration, and continuous technical learning.
            </p>
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
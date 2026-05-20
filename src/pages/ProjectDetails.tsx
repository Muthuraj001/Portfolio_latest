import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Cpu, HardDrive, HelpCircle } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/projects";
import { SEO } from "../components/seo/SEO";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find exact matching project index by slug parameters
  const project = projects.find((p) => p.slug === slug);

  // If project is null, render clean 404 message block
  if (!project) {
    return (
      <Section py="lg">
        <Container className="text-center space-y-4">
          <HelpCircle className="mx-auto h-12 w-12 text-zinc-500" />
          <h2 className="text-2xl font-bold text-white">Case Study Not Found</h2>
          <p className="text-sm text-zinc-400">The requested project outline could not be compiled locally.</p>
          <Link to="/projects">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retract to Showcases
            </Button>
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <div className="relative">
      <SEO title={`${project.title} - Case Study`} description={project.description} slug={`projects/${project.slug}`} />

      {/* 1. Header Hero Page Intro */}
      <div className="relative border-b border-zinc-900 bg-zinc-950/40 py-16 text-left">
        <Container className="space-y-4">
          <Link
            to="/projects"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors duration-150"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Back to Catalog
          </Link>

          <div className="space-y-4 max-w-4xl py-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" className="font-mono text-[10px]">
                {project.category}
              </Badge>
              <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest uppercase">Verified Deployment</span>
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Detailed Technical Breakdown */}
      <Section py="md">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 text-left items-start">
          
          {/* Main Case review content columns */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Context blocks */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">Overview & Purpose</h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Problem vs. Solved */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <Card className="border-red-500/10 bg-red-500/3 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">The Bottleneck</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{project.problem}</p>
              </Card>
              <Card className="border-emerald-500/10 bg-emerald-500/3 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2">The Architecture Fix</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{project.solution}</p>
              </Card>
            </div>

            {/* Features Listing */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-white tracking-tight">Core Capabilities Implemented</h3>
              <ul className="space-y-2.5" role="list">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-zinc-300 font-normal">
                    <span className="mr-3 text-emerald-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-architectures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                  <h4 className="font-bold text-slate-100 text-sm uppercase tracking-wider">Security Integrations</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {project.security}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white">
                  <Cpu className="h-4 w-4 text-yellow-400" />
                  <h4 className="font-bold text-slate-100 text-sm uppercase tracking-wider">Performance Engineering</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {project.performance}
                </p>
              </div>

            </div>

            {/* Deploy and challenges */}
            <div className="space-y-6 pt-6 border-t border-zinc-900">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white">
                  <HardDrive className="h-4.5 w-4.5 text-purple-400" />
                  <h4 className="font-bold text-sm uppercase tracking-wider">Orchestration & Deployments</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {project.deployment}
                </p>
              </div>

              <div className="space-y-3 bg-zinc-900/10 p-5 rounded-lg border border-zinc-90 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00F5FF]">Challenges & Solutions Found</h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  {project.challenges}
                </p>
              </div>
            </div>

          </div>

          {/* Right hand metadata sidebar card panel */}
          <div className="lg:col-span-4 space-y-6">
            
            <Card className="p-6 bg-zinc-900/35 border-zinc-850 space-y-6">
              <div className="space-y-1 pb-4 border-b border-zinc-900">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Project Info</span>
                <span className="text-sm font-bold text-zinc-200">System Checklist</span>
              </div>

              {/* Stack items listing */}
              <div className="space-y-3 text-xs">
                
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-900/60">
                  <span className="text-zinc-500 font-medium">Category</span>
                  <span className="text-zinc-200 font-bold">{project.category}</span>
                </div>

                <div className="space-y-2 py-1.5">
                  <span className="text-zinc-500 font-medium block">Technologies</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-[9px] bg-zinc-950">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-zinc-900/60">
                  <span className="text-zinc-500 font-medium">Repository Role</span>
                  <span className="text-zinc-200 font-semibold text-[11px] font-mono">Lead / Architect</span>
                </div>

              </div>

              {/* Call to action links buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="sparkle" size="sm" className="w-full text-xs py-2.5 font-bold uppercase tracking-wider">
                    Visit Deployment
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full text-xs py-2.5 font-bold uppercase tracking-wider">
                    Inspect Repository
                    <Github className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </Card>

            <div className="text-left py-2 px-4 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-zinc-500 leading-relaxed font-normal">
              <strong>Recruiter Tip:</strong> You can clone any repository and test it inside your localized staging containers using Docker.
            </div>

          </div>

        </Container>
      </Section>
    </div>
  );
}

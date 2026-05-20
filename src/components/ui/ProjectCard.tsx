import { Link } from "react-router-dom";
import { Folder, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

// Inline decorative tech SVG wrappers representing each project slug
function ProjectOverlay({ slug }: { slug: string }) {
  if (slug === "secure-task-manager") {
    return (
      <svg className="h-full w-full opacity-20 p-6 text-emerald-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <rect x="25" y="15" width="50" height="70" rx="4" />
        <line x1="35" y1="30" x2="65" y2="30" />
        <line x1="35" y1="45" x2="55" y2="45" />
        <line x1="35" y1="60" x2="65" y2="60" />
        <circle cx="30" cy="45" r="1" fill="currentColor" />
        <circle cx="30" cy="60" r="1" fill="currentColor" />
        <rect x="58" y="42" width="6" height="6" rx="1" />
        <path d="M52 23l4 4 8-8" strokeWidth="2" />
      </svg>
    );
  }
  if (slug === "devops-deployment-dashboard") {
    return (
      <svg className="h-full w-full opacity-20 p-6 text-teal-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="10" />
        <circle cx="20" cy="30" r="6" />
        <circle cx="80" cy="30" r="6" />
        <circle cx="50" cy="90" r="6" />
        <line x1="25" y1="34" x2="42" y2="46" />
        <line x1="75" y1="34" x2="58" y2="46" />
        <line x1="50" y1="84" x2="50" y2="60" />
        <path d="M12 70h12v12H12zm64 0h12v12H76z" />
      </svg>
    );
  }
  if (slug === "college-management-system") {
    return (
      <svg className="h-full w-full opacity-20 p-6 text-cyan-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <path d="M15 80h70M25 40h10v40H25zm20-15h10v55H45zm20 20h10v35H65z" />
        <path d="M20 40l30-18 30 18" />
        <circle cx="50" cy="45" r="4" />
      </svg>
    );
  }
  if (slug === "secret-manager-lab") {
    return (
      <svg className="h-full w-full opacity-20 p-6 text-yellow-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <rect x="30" y="45" width="40" height="30" rx="3" />
        <path d="M38 45v-12a12 12 0 0124 0v12" />
        <circle cx="50" cy="60" r="4" fill="currentColor" />
        <path d="M50 64v6" strokeWidth="2" />
      </svg>
    );
  }
  if (slug === "voice-assistant-mobile-app") {
    return (
      <svg className="h-full w-full opacity-25 p-4 text-purple-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
        <path d="M10 50 C20 20, 30 80, 40 30 C50 70, 60 10, 70 90 C80 40, 90 60, 100 50" strokeWidth="1.5" />
        <path d="M10 50 C20 40, 30 60, 40 45 C50 55, 60 30, 70 70 C80 45, 90 55, 100 50" strokeDasharray="2 2" />
        <rect x="35" y="10" width="30" height="80" rx="8" />
      </svg>
    );
  }
  return (
    <svg className="h-full w-full opacity-20 p-6 text-blue-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="50" cy="50" r="30" />
      <polygon points="50,25 70,60 30,60" />
      <line x1="50" y1="20" x2="50" y2="80" />
      <line x1="20" y1="50" x2="80" y2="50" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverGlow className="flex flex-col h-full overflow-hidden border-zinc-800/80 bg-zinc-900/25 p-0">
      
      {/* Decorative SVG Screen mockups */}
      <div className="relative h-48 w-full border-b border-zinc-900 bg-zinc-950/40 flex items-center justify-center overflow-hidden group">
        <ProjectOverlay slug={project.slug} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        
        {/* Floating tech badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="primary" className="font-mono tracking-wider">
            {project.category}
          </Badge>
        </div>

        {/* Small tech grid background inside header card */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      </div>

      {/* Card Content parameters */}
      <div className="p-6 flex-1 flex flex-col justify-between text-left">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-zinc-400">
            <Folder className="h-4 w-4 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]/80">Demo Active</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-150">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Badges Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-2 py-0 h-5 text-[10px] bg-zinc-950 text-zinc-400 font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800/60 mt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors duration-150 group"
          >
            Case Study
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-150" />
          </Link>
          
          <div className="flex items-center space-x-3.5 text-zinc-400">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on Github`}
              className="hover:text-emerald-400 transition-colors duration-150"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} deployment live`}
              className="hover:text-emerald-400 transition-colors duration-150"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

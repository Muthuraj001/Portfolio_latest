import { Container } from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export function PageHeader({ title, subtitle, category }: PageHeaderProps) {
  return (
    <div className="relative border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-24 text-left overflow-hidden">
      
      {/* Visual background glows */}
      <div className="absolute top-0 left-[20%] h-[200px] w-[350px] rounded-full bg-emerald-500/3 blur-[80px]" />
      
      {/* Simple grid element inside header */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Container className="relative">
        <div className="space-y-4 max-w-3xl">
          {category && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              {category}
            </span>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-zinc-400 sm:text-lg lg:text-xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

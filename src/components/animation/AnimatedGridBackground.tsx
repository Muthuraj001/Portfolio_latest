export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-950 overflow-hidden">
      {/* 1. Base grid lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_60%,transparent_100%)]" 
        aria-hidden="true" 
      />

      {/* 2. Top-down glowing ambient spheres */}
      <div 
        className="absolute top-0 left-12 h-[300px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[20%] right-10 h-[250px] w-[400px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-[15%] h-[350px] w-[500px] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
    </div>
  );
}

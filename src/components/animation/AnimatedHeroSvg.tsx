import { useReducedMotion } from "../../hooks/useReducedMotion";

export function AnimatedHeroSvg() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center h-full w-full max-w-md mx-auto group">
      
      {/* 2. Primary Vector SVG Sandbox */}
      <svg
        className="w-full h-auto aspect-square text-emerald-500/80 drop-shadow-[0_0_35px_rgba(16,185,129,0.15)]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Orbital Ellipses */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 8"
          className={prefersReduced ? "" : "animate-[spin_40s_linear_infinite]"}
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="6 4"
          className={prefersReduced ? "" : "animate-[spin_25s_linear_infinite_reverse]"}
        />

        {/* Diagonal network linkage lines */}
        <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="87" y1="87" x2="313" y2="313" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="87" y1="313" x2="313" y2="87" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

        {/* Central Core Server Block */}
        <g className={prefersReduced ? "" : "animate-[bounce_6s_ease-in-out_infinite]"}>
          <rect
            x="140"
            y="140"
            width="120"
            height="120"
            rx="12"
            fill="#09090b"
            stroke="#10b981"
            strokeWidth="1.5"
            className="shadow-2xl"
          />
          {/* Inner details for Central Server */}
          <rect x="160" y="165" width="80" height="4" rx="2" fill="#3f3f46" />
          <circle cx="165" cy="178" r="2.5" fill="#10b981" className="animate-pulse" />
          <circle cx="175" cy="178" r="2.5" fill="#14b8a6" className="animate-pulse" />
          <rect x="160" y="195" width="80" height="4" rx="2" fill="#3f3f46" />
          <circle cx="165" cy="208" r="2.5" fill="#10b981" />
          <circle cx="175" cy="208" r="2.5" fill="#ef4444" className="animate-pulse" />
          
          <path d="M185 225h30" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Outer Orb Nodes */}
        {/* Node A: Code Bracket (Full Stack) */}
        <g transform="translate(200, 40)" className={prefersReduced ? "" : "animate-[pulse_3s_ease-in-out_infinite]"}>
          <circle r="22" fill="#09090b" stroke="#10b981" strokeWidth="1" />
          <path d="M-8 -6 l-6 6 l6 6 M8 -6 l6 6 l-6 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Node B: Database Storage (Backend) */}
        <g transform="translate(320, 200)" className={prefersReduced ? "" : "animate-[pulse_4s_ease-in-out_infinite_1s]"}>
          <circle r="22" fill="#09090b" stroke="#14b8a6" strokeWidth="1" />
          {/* DB stack symbol */}
          <path d="M-8 -6h16v3h-16zm0 5h16v3h-16zm0 5h16v3h-16z" stroke="#14b8a6" strokeWidth="1.2" />
        </g>

        {/* Node C: Security Shield (Cybersecurity) */}
        <g transform="translate(200, 360)" className={prefersReduced ? "" : "animate-[pulse_3.5s_ease-in-out_infinite_0.5s]"}>
          <circle r="22" fill="#09090b" stroke="#f59e0b" strokeWidth="1" />
          {/* Shield symbol */}
          <path d="M-6 -6v5c0 6 6 9 6 9s6-3 6-9v-5z" stroke="#f59e0b" strokeWidth="1.2" strokeLinejoin="round" />
        </g>

        {/* Node D: Cloud Server (DevOps) */}
        <g transform="translate(80, 200)" className={prefersReduced ? "" : "animate-[pulse_4.5s_ease-in-out_infinite_1.5s]"}>
          <circle r="22" fill="#09090b" stroke="#00F5FF" strokeWidth="1" />
          {/* Cloud symbol */}
          <path d="M-8 4a5 5 0 010-10a6 6 0 0110-3a4 4 0 016 4a3 3 0 01-2 5z" stroke="#00F5FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      {/* Floating neon glow overlays behind */}
      <div className="absolute h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Static cybersecurity / DevOps terminal output streams (declared static outside component to avoid closure issues)
const LOGS = [
  "git clone thulasidharan/portfolio.git",
  "Cloning repository... OK",
  "npm i && npm run lint",
  "Resolving package states... 2.1s",
  "Running static code sanitization checks... ⚡",
  "PASS: src/lib/security.ts - No key leakage detected.",
  "PASS: src/auth/roles.ts - RBAC integrity secure.",
  "docker build -t portfolio-prod:latest .",
  "STEP 1/3: FROM node:18-alpine AS builder ... OK",
  "STEP 2/3: RUN npm run build ... Compiled successfully",
  "STEP 3/3: serving inside lightweight Nginx... EXPOSE 3000",
  "Launching secure cluster on cloud ingress... OK",
  "STATUS: DEPLOYED (Active on: https://thulasidharan.live)"
];

export function CodeTerminalAnimation() {
  const [lines, setLines] = useState<string[]>([]);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setLines(LOGS);
      return;
    }

    setLines([LOGS[0]]);
    let index = 1;

    const interval = setInterval(() => {
      if (index < LOGS.length) {
        setLines((prev) => [...prev, LOGS[index]]);
        index++;
      } else {
        // Reset and cycle
        setLines([LOGS[0]]);
        index = 1;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [prefersReduced]);

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-black/80 font-mono shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden text-left max-w-lg">
      
      {/* OS Header Bars */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-zinc-400 font-semibold select-none scale-90">
          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
          <span>secure_shell_session.sh</span>
        </div>
        <div className="w-[32px]" /> {/* Spacer balance */}
      </div>

      {/* Code Text Panel */}
      <div className="p-5 h-64 overflow-y-auto text-xs space-y-2 relative">
        {lines.filter(Boolean).map((ln, idx) => {
          const isCommand = typeof ln === "string" && (ln.startsWith("git ") || ln.startsWith("npm ") || ln.startsWith("docker ") || ln.startsWith("STEP 1"));
          const isSuccess = typeof ln === "string" && (ln.startsWith("PASS:") || ln.startsWith("STATUS:") || ln.includes("OK"));
          
          return (
            <div key={idx} className="flex leading-relaxed font-normal">
              <span className="text-zinc-650 select-none mr-3 w-4 shrink-0 font-light">{idx + 1}</span>
              <span className="text-zinc-500 mr-2 shrink-0 select-none">$</span>
              <p
                className={`break-all whitespace-pre-wrap ${
                  isCommand
                    ? "text-[#00F5FF] font-semibold"
                    : isSuccess
                    ? "text-emerald-400 font-medium"
                    : "text-zinc-350"
                }`}
              >
                {ln}
              </p>
            </div>
          );
        })}
        
        {/* Blinking CLI pipe cursor */}
        <div className="flex leading-relaxed">
          <span className="text-zinc-650 select-none mr-3 w-4 shrink-0 font-light">{lines.length + 1}</span>
          <span className="text-zinc-500 mr-2 shrink-0 select-none">$</span>
          <span className="inline-block h-3.5 w-1.5 bg-emerald-400 animate-pulse mt-0.5" />
        </div>

        {/* Faint watermarks */}
        <div className="absolute right-4 bottom-4 text-[10px] text-zinc-700 font-bold uppercase select-none tracking-widest leading-none">
          CYBER LAB v5
        </div>
      </div>
    </div>
  );
}

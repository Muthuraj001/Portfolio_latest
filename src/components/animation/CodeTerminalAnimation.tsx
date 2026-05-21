import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// Resume-based frontend / testing terminal output streams
const LOGS = [
  "git clone Muthuraj001/portfolio.git",
  "Cloning portfolio workspace... OK",
  "npm install",
  "Installing React, TypeScript, and frontend tooling... OK",
  "npm run lint",
  "Checking TypeScript, JSX structure, and component quality... PASS",
  "npm run test:ui",
  "Validating responsive layouts across mobile, tablet, and desktop... PASS",
  "Running API response validation checks...",
  "PASS: REST API data rendering flow verified.",
  "PASS: UI components are reusable and modular.",
  "PASS: Navigation structure and accessibility checks completed.",
  "npm run build",
  "Creating optimized production build... Compiled successfully",
  "Deploying portfolio to GitHub Pages...",
  "STATUS: LIVE - Frontend Developer Portfolio deployed successfully"
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
    }, 2200);

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
          <span>frontend_quality_check.sh</span>
        </div>

        <div className="w-[32px]" />
      </div>

      {/* Code Text Panel */}
      <div className="p-5 h-64 overflow-y-auto text-xs space-y-2 relative">
        {lines.filter(Boolean).map((ln, idx) => {
          const isCommand =
            typeof ln === "string" &&
            (
              ln.startsWith("git ") ||
              ln.startsWith("npm ") ||
              ln.startsWith("Deploying")
            );

          const isSuccess =
            typeof ln === "string" &&
            (
              ln.startsWith("PASS:") ||
              ln.startsWith("STATUS:") ||
              ln.includes("OK") ||
              ln.includes("successfully")
            );

          const isProcess =
            typeof ln === "string" &&
            (
              ln.includes("Checking") ||
              ln.includes("Validating") ||
              ln.includes("Running") ||
              ln.includes("Creating") ||
              ln.includes("Installing")
            );

          return (
            <div key={idx} className="flex leading-relaxed font-normal">
              <span className="text-zinc-650 select-none mr-3 w-4 shrink-0 font-light">
                {idx + 1}
              </span>

              <span className="text-zinc-500 mr-2 shrink-0 select-none">
                $
              </span>

              <p
                className={`break-all whitespace-pre-wrap ${
                  isCommand
                    ? "text-[#00F5FF] font-semibold"
                    : isSuccess
                    ? "text-emerald-400 font-medium"
                    : isProcess
                    ? "text-yellow-300 font-medium"
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
          <span className="text-zinc-650 select-none mr-3 w-4 shrink-0 font-light">
            {lines.length + 1}
          </span>

          <span className="text-zinc-500 mr-2 shrink-0 select-none">
            $
          </span>

          <span className="inline-block h-3.5 w-1.5 bg-emerald-400 animate-pulse mt-0.5" />
        </div>

        {/* Faint watermark */}
        <div className="absolute right-4 bottom-4 text-[10px] text-zinc-700 font-bold uppercase select-none tracking-widest leading-none">
          FRONTEND LAB v1
        </div>
      </div>
    </div>
  );
}
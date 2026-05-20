import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatedGridBackground } from "../animation/AnimatedGridBackground";
import { usePageTransition } from "../../hooks/usePageTransition";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  // Bind router scroll resets and transition triggers
  usePageTransition();

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Absolute Tech grid lines rendering */}
      <AnimatedGridBackground />

      {/* Persistent global Navigation Header */}
      <Navbar />

      {/* Primary Page Canvas (Leaves room for Sticky navbar 16/20 tall) */}
      <main className="flex-1 pt-16 sm:pt-20 outline-none" id="main-content">
        {children}
      </main>

      {/* Persistent global Navigation Footer */}
      <Footer />
    </div>
  );
}

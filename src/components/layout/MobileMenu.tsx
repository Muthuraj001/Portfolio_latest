import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  routes: Array<{ name: string; path: string }>;
}

export function MobileMenu({ isOpen, onClose, routes }: MobileMenuProps) {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    if (!isOpen) {
      // Hide container
      gsap.to(parent, { opacity: 0, pointerEvents: "none", duration: 0.2 });
      return;
    }

    // Show container
    gsap.to(parent, { opacity: 1, pointerEvents: "auto", duration: 0.3 });

    if (prefersReduced) return;

    // Staggered slide in for links
    const links = linksRef.current?.children;
    if (links) {
      gsap.fromTo(
        Array.from(links),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen, prefersReduced]);

  // Handle ESC key to shut the drawer
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background page body from scrolling while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-zinc-950/98 backdrop-blur-lg opacity-0 pointer-events-none transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Header controls bar */}
      <div className="flex h-20 items-center justify-between px-6 border-b border-zinc-900">
        <Link to="/" onClick={onClose} className="text-xl font-bold font-mono tracking-tight text-white group outline-none">
          <span className="text-emerald-500">{"<"}</span>
          THULASI
          <span className="text-emerald-400">{" />"}</span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation panel"
          className="rounded-lg p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Full height navigator list */}
      <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col justify-between">
        <nav ref={linksRef} className="space-y-6 flex flex-col text-left">
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                to={route.path}
                onClick={onClose}
                className={`text-2xl font-bold tracking-tight py-1 inline-block border-l-2 pl-4 outline-none transition-colors duration-150 ${
                  isActive
                    ? "border-emerald-500 text-white"
                    : "border-transparent text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer info inside menu */}
        <div className="space-y-4 pt-10 text-left">
          <p className="text-xs text-zinc-500 font-medium">
            © {new Date().getFullYear()} Thulasidharan. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

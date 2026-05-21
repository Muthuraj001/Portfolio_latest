import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";

export function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routes = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md h-16 shadow-lg shadow-black/20"
          : "bg-transparent h-20"
      }`}
    >
      <Container className="h-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center space-x-1.5 font-mono text-xl font-bold tracking-tight text-white outline-none group"
        >
          <span className="text-emerald-500 transform group-hover:-translate-x-0.5 transition-transform duration-150">{"<"}</span>
          Muthu
          <span className="text-emerald-400 transform group-hover:translate-x-0.5 transition-transform duration-150">{" />"}</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-1" role="navigation">
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                to={route.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 outline-none focus-visible:bg-zinc-800/40 focus-visible:text-emerald-400 ${
                  isActive
                    ? "text-emerald-400 bg-zinc-900/40"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/20"
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTION OR MOBILE PANEL */}
        <div className="flex items-center space-x-4">
          <Link to="/contact" className="hidden sm:block">
            <Button variant="outline" size="sm" className="border-emerald-500/20 hover:border-emerald-500 text-xs py-1.5 px-3 uppercase tracking-wider font-semibold">
              Hire Me
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </Button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open primary navigation drawer"
            className="flex items-center justify-center rounded-lg p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900/50 border border-zinc-800/20 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 lg:hidden"
          >
            <Menu className="h-5.5 w-5.5" />
          </button>
        </div>
      </Container>

      {/* MOBILE TRIGGER WRAPPER */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} routes={routes} />
    </header>
  );
}

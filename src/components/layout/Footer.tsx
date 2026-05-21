import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";
import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 sm:py-16">
      <Container className="space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-left">
          
          {/* Column A: Bio */}
          <div className="space-y-4 max-w-sm">
            <Link to="/" className="flex items-center space-x-1 font-mono text-lg font-bold tracking-tight text-white outline-none">
              <span className="text-emerald-500">{"<"}</span>
              Muthu
              <span className="text-emerald-400">{" />"}</span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              {siteConfig.bio}
            </p>
            <SocialLinks className="pt-2" iconSize={18} />
          </div>

          {/* Column B: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-14">
            <div className="space-y-3.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]/90">
                Me
              </span>
              <ul className="space-y-2.5" role="list">
                <li>
                  <Link to="/about" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Journey
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Milestones
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]/90">
                Work
              </span>
              <ul className="space-y-2.5" role="list">
                <li>
                  <Link to="/projects" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Showcases
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-xs text-zinc-400 hover:text-white transition-colors duration-150">
                    Articles
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column C: Address coordinates */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF]/90">
              Coordinates
            </span>
            <div className="space-y-1 text-xs text-zinc-400 font-normal">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.email}</p>
              <p className="text-[10px] text-emerald-400 font-mono pt-1.5 font-semibold">● Open for hire & collaboration</p>
            </div>
          </div>

        </div>

        {/* Divider bottom line */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-500 text-left font-normal">
          <p>© {currentYear} Muthuraj. All Rights Reserved.</p>
          <p className="flex items-center">
            Designed & Secured with
            <span className="mx-1 text-red-500">❤</span>
            in Chennai, TN, India
          </p>
        </div>

      </Container>
    </footer>
  );
}

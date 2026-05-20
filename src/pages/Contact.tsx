import { useEffect, useRef } from "react";
import { Mail, MapPin, Calendar, HelpCircle, Shield, ArrowUpRight } from "lucide-react";
import { animate } from "animejs";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { ContactForm } from "../components/forms/ContactForm";
import { SocialLinks } from "../components/ui/SocialLinks";
import { Card } from "../components/ui/Card";
import { siteConfig } from "../data/site";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { SEO } from "../components/seo/SEO";

export function Contact() {
  const visualRef = useRef<SVGSVGElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const svg = visualRef.current;
    if (!svg || prefersReduced) return;

    // Pulse connection lines dynamically using animejs
    const connectionLines = svg.querySelectorAll(".connection-line");
    const animation = animate(connectionLines, {
      strokeDashoffset: [(el: any) => el.getTotalLength ? el.getTotalLength() : 0, 0],
      opacity: [0.15, 0.45],
      ease: "easeInOutSine",
      duration: 3000,
      delay: (el: any, i: number) => i * 300,
      alternate: true,
      loop: true,
    });

    const nodeOrbits = svg.querySelectorAll(".node-orbit");
    const orbits = animate(nodeOrbits, {
      scale: [1, 1.15],
      opacity: [0.4, 0.8],
      duration: 2000,
      delay: (el: any, i: number) => i * 400,
      alternate: true,
      loop: true,
      ease: "easeInOutSine",
    });

    return () => {
      animation.pause();
      orbits.pause();
    };
  }, [prefersReduced]);

  return (
    <div className="relative">
      <SEO title="Get In Touch" slug="contact" />

      {/* 1. Header Banner */}
      <PageHeader
        title="Establish Connection"
        subtitle="Submit a secure payload containing your project details, budget goals, or scheduling coordinates."
        category="Contact"
      />

      {/* 2. Form & Coordinate Details dual layout */}
      <Section py="md">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Column A: Coordinates & Info cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white tracking-tight sm:text-2xl">
                Physical Coordinates
              </h2>
              <p className="text-xs text-zinc-400">Feel free to connect directly via social indices or email channels.</p>
            </div>

            {/* List coordinates cards */}
            <div className="space-y-4">
              
              <Card className="flex items-center space-x-4 p-5 bg-zinc-90 w-full border-zinc-850">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Direct Message</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-zinc-200 hover:text-emerald-400">
                    {siteConfig.email}
                  </a>
                </div>
              </Card>

              <Card className="flex items-center space-x-4 p-5 bg-zinc-90 w-full border-zinc-850">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Geographic Origin</span>
                  <p className="text-sm font-semibold text-zinc-200">
                    {siteConfig.location}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center space-x-4 p-5 bg-zinc-90 w-full border-zinc-850">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                  <Calendar className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Operational Availability</span>
                  <p className="text-sm font-semibold text-emerald-400">
                    {siteConfig.availability}
                  </p>
                </div>
              </Card>

            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Social Networks</span>
              <SocialLinks iconSize={20} />
            </div>

            {/* Micro decorative connected SVG orbits illustration for contact visual */}
            <div className="pt-4 flex items-center justify-center">
              <svg
                ref={visualRef}
                className="w-full max-w-[280px] h-auto text-emerald-500/70"
                viewBox="0 0 200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Connector lines pathways */}
                <line x1="40" y1="60" x2="100" y2="30" stroke="currentColor" strokeWidth="1" className="connection-line" />
                <line x1="40" y1="60" x2="100" y2="90" stroke="currentColor" strokeWidth="1" className="connection-line" />
                <line x1="100" y1="30" x2="160" y2="60" stroke="#14b8a6" strokeWidth="1" className="connection-line" />
                <line x1="100" y1="90" x2="160" y2="60" stroke="#14b8a6" strokeWidth="1" className="connection-line" />
                
                {/* Node Orbits */}
                <circle cx="40" cy="60" r="10" stroke="currentColor" strokeWidth="0.8" className="node-orbit" />
                <circle cx="40" cy="60" r="3" fill="currentColor" />

                <circle cx="100" cy="30" r="12" stroke="#10b981" strokeWidth="0.8" className="node-orbit" />
                <circle cx="100" cy="30" r="4" fill="#10b981" />

                <circle cx="100" cy="90" r="12" stroke="#14b8a6" strokeWidth="0.8" className="node-orbit" />
                <circle cx="100" cy="90" r="4" fill="#14b8a6" />

                <circle cx="160" cy="60" r="10" stroke="currentColor" strokeWidth="0.8" className="node-orbit" />
                <circle cx="160" cy="60" r="3" fill="currentColor" />
              </svg>
            </div>

          </div>

          {/* Column B: Active React Hook Form container */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white tracking-tight sm:text-2xl">
                Encrypted Transmission Dispatcher
              </h2>
              <p className="text-xs text-zinc-400">Fill in mandatory fields correctly before launching.</p>
            </div>

            <Card className="p-6 sm:p-8 bg-zinc-900/10 border-zinc-850 space-y-6 relative overflow-hidden">
              <ContactForm />
              
              <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-medium pt-3 border-t border-zinc-900 leading-normal select-none">
                <Shield className="h-4 w-4 shrink-0 text-emerald-500/60" />
                <span>Your information is encrypted on SSL transfer and used only to respond to your message.</span>
              </div>
            </Card>

          </div>

        </Container>
      </Section>
    </div>
  );
}

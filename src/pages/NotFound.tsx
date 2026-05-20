import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SEO } from "../components/seo/SEO";

export function NotFound() {
  return (
    <Section py="lg" className="min-h-[80vh] flex items-center justify-center relative">
      <SEO title="404 - Space Terminated" />
      
      <Container className="max-w-md text-center space-y-6">
        
        {/* Animated Compass */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_24px_rgba(16,185,129,0.15)] animate-bounce">
          <Compass className="h-8 w-8 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-black tracking-tight text-white font-sans">404</h1>
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Page Terminated
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto font-normal">
            The requested resource is missing, secure authentication rules has sandbox blocked, or the address pointer is empty.
          </p>
        </div>

        <Card className="p-4 border-zinc-90 bg-zinc-950/40 text-left text-[11px] font-mono text-zinc-500 max-w-sm mx-auto">
          <p>STATUS: EXPIRED_OR_NOT_FOUND</p>
          <p>HOST_URL: {window.location.host}</p>
          <p>PATH_REQUEST: {window.location.pathname}</p>
        </Card>

        <div className="pt-2">
          <Link to="/">
            <Button variant="sparkle" size="md" className="uppercase text-xs font-bold tracking-wider">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retreat to Home
            </Button>
          </Link>
        </div>

      </Container>
    </Section>
  );
}

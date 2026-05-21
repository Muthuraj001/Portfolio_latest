import { Printer, Download, BookOpen, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { siteConfig } from "../data/site";
import { experiences } from "../data/experience";
import { skills } from "../data/skills";
import { SEO } from "../components/seo/SEO";

export function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const expertSkills = skills.filter((s) => s.percentage >= 88);

  return (
    <div className="relative">
      <SEO title="Resume / CV" slug="resume" />

      {/* Style overrides for executive printing */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          header, footer, .no-print {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
          }
          .print-container {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
          }
          .print-text {
            color: black !important;
          }
          .print-muted {
            color: #4b5563 !important;
          }
          .print-border {
            border-color: #d1d5db !important;
          }
          .print-badge {
            border: 1px solid #9ca3af !important;
            background: transparent !important;
            color: black !important;
          }
        }
      `}</style>

      {/* 1. Header Banner */}
      <PageHeader
        title="Resume & Credentials"
        subtitle="Download my professional CV, or compile an executive print layout targeting talent reviewers directly."
        category="Credentials"
      />

      {/* 2. Controls & Printable sheet */}
      <Section py="md" className="relative">
        <Container className="space-y-8 print-container max-w-4xl mx-auto">
          
          {/* Printable Action triggers - Hide during prints */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900 pb-6 no-print text-left">
            <div className="space-y-1">
              <span className="text-xs text-zinc-500 font-semibold font-mono">Format: A4 Executive / DevSecOps profile</span>
              <p className="text-[11px] text-zinc-400">PDF download anchors fallback to the local print outputs.</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print CV
              </Button>
              <a
                href="/resume.pdf"
                download="Muthuraj_Resume.pdf"
                className="inline-block"
              >
                <Button variant="sparkle" size="sm" onClick={() => {
                  toast.error("Please place your actual resume.pdf inside the /public folder before deploying. Printing fallbacks are fully active.");
                }}>
                  <Download className="mr-2 h-4 w-4" />
                  PDF Download
                </Button>
              </a>
            </div>
          </div>

          {/* Core Printable CV Sheet */}
          <Card className="p-8 sm:p-12 border-zinc-90 bg-zinc-950 text-left print-container print-border print:text-black">
            <div className="space-y-8">
              
              {/* Header: Name, Title, Contacts */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-zinc-900 print-border">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-white tracking-tight print-text">{siteConfig.name}</h2>
                  <p className="text-base font-semibold text-emerald-400 print-text uppercase tracking-wide">
                    {siteConfig.role}
                  </p>
                  <p className="text-xs text-zinc-400 print-muted">
                    {siteConfig.bio}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-zinc-400 shrink-0 print-muted">
                  <span className="flex items-center"><Mail className="mr-2 h-3.5 w-3.5 text-emerald-400" /> {siteConfig.email}</span>
                  <span className="flex items-center"><MapPin className="mr-2 h-3.5 w-3.5 text-emerald-400" /> {siteConfig.location}</span>
                  <span className="flex items-center"><ExternalLink className="mr-2 h-3.5 w-3.5 text-emerald-400" /> {siteConfig.github}</span>
                </div>
              </div>

              {/* Grid A: Skills list highlights */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#00F5FF] print-text">Core Expertise Arsenal</h3>
                <div className="flex flex-wrap gap-2">
                  {expertSkills.map((sk) => (
                    <span
                      key={sk.name}
                      className="inline-flex items-center rounded px-2.5 py-1 text-xs font-mono font-medium border border-zinc-800 bg-zinc-900 text-zinc-300 print-badge"
                    >
                      {sk.name} ({sk.level})
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid B: Experience timelines */}
              <div className="space-y-5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#00F5FF] print-text">Professional Background</h3>
                <div className="space-y-6">
                  {experiences.map((exp, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-zinc-900/60 pb-1 print-border">
                        <div>
                          <h4 className="text-sm font-extrabold text-white print-text">{exp.role}</h4>
                          <span className="text-xs font-semibold text-zinc-400 print-muted">{exp.company}</span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-emerald-400 print-text">{exp.year}</span>
                      </div>
                      <p className="text-xs text-zinc-400 print-muted leading-relaxed font-normal">{exp.description}</p>
                      
                      <ul className="list-disc pl-5 text-xs text-zinc-400 print-muted space-y-1 font-normal">
                        {exp.highlights.map((hlt, idx) => (
                          <li key={idx}>{hlt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid C: Education milestones */}
              <div className="space-y-4 pt-4 border-t border-zinc-900 print-border">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#00F5FF] print-text">Academic Qualifications</h3>
                <div className="space-y-4">
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-zinc-200 print-text">
                      <strong className="font-bold">B.Sc. in Computer Science & Information Technology</strong>
                      <span className="font-mono font-semibold">2020 - 2022</span>
                    </div>
                    <p className="text-zinc-500 print-muted">Anna University Affiliate college | Chennai, India</p>
                  </div>
                </div>
              </div>

            </div>
          </Card>

        </Container>
      </Section>
    </div>
  );
}

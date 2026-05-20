import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { ServiceCard } from "../components/ui/ServiceCard";
import { services } from "../data/services";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function Services() {
  const serviceGridReveal = useGSAPReveal<HTMLDivElement>({ direction: "up", delay: 0.1 });

  return (
    <div>
      <SEO title="Services & Packages" slug="services" />

      {/* 1. Header Banner Page Intro */}
      <PageHeader
        title="Solutions & Consultations"
        subtitle="Leverage my DevOps automation, secure API structuring, and frontend React engineering to solidy your next cloud application."
        category="Consulting packages"
      />

      {/* 2. Services Grid */}
      <Section py="md">
        <Container className="space-y-12">
          
          <div className="text-left space-y-2 max-w-xl">
            <h2 className="text-xl font-bold text-white tracking-tight sm:text-2xl">
              Professional Catalog
            </h2>
            <p className="text-xs text-zinc-400">Discover packages tailored specifically for startups, SME agencies, or technical recruiters seeking precise execution.</p>
          </div>

          {/* grid cards layout mapping all 8 services */}
          <div ref={serviceGridReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {services.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>

        </Container>
      </Section>
    </div>
  );
}

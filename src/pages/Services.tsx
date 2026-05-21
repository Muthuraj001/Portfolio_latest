import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { ServiceCard } from "../components/ui/ServiceCard";
import { services } from "../data/services";
import { useGSAPReveal } from "../hooks/useGSAPReveal";
import { SEO } from "../components/seo/SEO";

export function Services() {
  const serviceGridReveal = useGSAPReveal<HTMLDivElement>({
    direction: "up",
    delay: 0.1,
  });

  return (
    <div>
      <SEO title="Services & Support" slug="services" />

      {/* 1. Header Banner Page Intro */}
      <PageHeader
        title="Frontend & Testing Support"
        subtitle="Practical support for responsive web design, React UI development, software testing, API validation, and portfolio website improvements."
        category="Services"
      />

      {/* 2. Services Grid */}
      <Section py="md">
        <Container className="space-y-12">
          <div className="max-w-xl space-y-2 text-left">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              What I Can Help With
            </h2>

            <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
              Services focused on clean frontend development, responsive layouts,
              web page improvements, testing support, and beginner-friendly
              project assistance.
            </p>
          </div>

          {/* Grid cards layout mapping all services */}
          <div
            ref={serviceGridReveal}
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
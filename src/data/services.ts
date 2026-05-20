export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealClient: string;
}

export const services: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full Stack Web Application Development",
    description: "Design and build production-grade end-to-end web architectures using React, Node.js, Express, and modern SQL or NoSQL databases.",
    deliverables: [
      "Responsive, clean UI in React & TypeScript.",
      "Scalable Express or Fastify back-end server.",
      "Optimized query architectures with secure transactions.",
      "Basic admin dashboard & user login workflow.",
      "Comprehensive test coverage & Git tracking."
    ],
    idealClient: "SMEs & Startups wanting to transform spreadsheet records or ideas into secure cloud web portals."
  },
  {
    id: "frontend-react",
    title: "Frontend Development with React and TypeScript",
    description: "Refactor slow, legacy interfaces into slick, fast, responsive setups with elegant, typing-safe components.",
    deliverables: [
      "Rigorous type safety using latest TypeScript guidelines.",
      "Pristine layouts styled with mobile-first Tailwind CSS.",
      "Smooth micro-interactions powered by GSAP & Framer Motion.",
      "Optimal code-splitting and state synchronization.",
      "Compliance with WCAG accessibility standards."
    ],
    idealClient: "Founders seeking to launch a polished MVP that is interactive, gorgeous, and ready for VC reviews."
  },
  {
    id: "backend-api",
    title: "Backend API Development",
    description: "Formulate REST APIs or GraphQL services designed for speed, throughput, and protection against security threats.",
    deliverables: [
      "Fast, compliant web services using Node.js.",
      "Automated payload filtering using schemas like Zod.",
      "Solid authentication via JWT tokens or Session cookies.",
      "Secure API integrations (Stripe, Twilio, Resend).",
      "Fully documented endpoints inside Postman."
    ],
    idealClient: "Mobile or web projects seeking a separate scalable server infrastructure to manage high transaction volumes."
  },
  {
    id: "devops-ci-cd",
    title: "DevOps Setup and Deployment",
    description: "Automate your release cycles. Set up CI/CD pipelines to build, test, and release code seamlessly across hosts.",
    deliverables: [
      "Custom GitHub Actions or GitLab Runner pipelines.",
      "Multi-environment stages (Dev, Staging, Prod).",
      "Automatic notification integration (Slack/Discord webhook).",
      "Infrastructure setup on Vercel, Netlify, or VPS nodes.",
      "Security parameters configuration away from repo files."
    ],
    idealClient: "Software engineering shops wanting to shift from manual drag-and-drop publishes to automated test-triggered releases."
  },
  {
    id: "dockerization",
    title: "Dockerization",
    description: "Encapsulate your runtime inside standard container services to resolve deployment inconsistencies across networks.",
    deliverables: [
      "Production-grade, secure multi-stage Dockerfiles.",
      "Local staging orchestration using Docker Compose files.",
      "Slightest possible runtime sizes based on alpine layers.",
      "Security-hardened configurations using non-root service profiles.",
      "Complete deployment integration instructions."
    ],
    idealClient: "Teams seeking to make system infrastructure portable and ready to run inside any cloud cluster."
  },
  {
    id: "web-portfolio",
    title: "Portfolio & Business Website Development",
    description: "Build custom-styled, ultra-fast online portals ensuring prospective high-paying clients choose you over standard portfolios.",
    deliverables: [
      "Uniquely customized styling matching your industry brand colors.",
      "Animated reveals and entrance transitions that draw client eyes.",
      "Clean SEO tags achieving 100/100 performance marks on Lighthouse.",
      "Contact forms integrating serverless delivery.",
      "Fully print-ready layouts tailored for easy file downloads."
    ],
    idealClient: "Freelancers, designers, and business owners looking for a premium online showroom."
  },
  {
    id: "security-review",
    title: "Security Review for Web Applications",
    description: "Mitigate threats. Secure your applications against OWASP Top 10 vulnerabilities like XSS, CSRF, and SQL injections.",
    deliverables: [
      "Systematic manual threat analysis of active code repositories.",
      "Automated scans focusing on outdated, vulnerable packages.",
      "Security configuration repairs for Express and React frameworks.",
      "Security hardening reports explaining found vulnerabilities and remediation.",
      "Best practices training for secure token storage."
    ],
    idealClient: "Applications preparing for audits, handling customer accounts, or transacting high-value financial payloads."
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Accelerate your page loads to improve conversion metrics and Google search ranking.",
    deliverables: [
      "Interactive audit and profiling of active bundle scopes.",
      "Comprehensive optimization of web assets, responsive SVGs, and web fonts.",
      "Elimination of blocking network processes.",
      "Enhanced rendering loops to avoid infinite re-renders.",
      "Detailed analysis showing load improvements."
    ],
    idealClient: "Websites facing high bounce rates or failing Core Web Vitals targets."
  }
];

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  type: "Work" | "Education" | "Security/DevOps";
}

export const experiences: TimelineEvent[] = [
  {
    year: "2024 - Present",
    role: "Freelance Full Stack Developer & DevOps Engineer",
    company: "Self-Employed / Dynamic Clients",
    description: "Architect and deliver secure full-stack applications for international clients while automating Docker configurations and deployment workflows.",
    highlights: [
      "Built and deployed secure client-facing administrative systems with MySQL and React.",
      "Engineered automated, multi-stage Docker builds reducing image sizes by up to 60%.",
      "Crafted custom continuous delivery flows using GitHub Actions, decreasing releases times to under 3 minutes.",
      "Mitigated threat surfaces on deployed Node/Express portals by implementing CORS scopes, JWT rotation, and rate-limiting middleware."
    ],
    type: "Work"
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Developer Trainee & Security Researcher",
    company: "DevSecOps Academy Chennai",
    description: "Deep-dived into systematic full-stack engineering, studying secure coding architectures, parameterization, authentication standards, and relational data structures.",
    highlights: [
      "Mastered React-Vite tooling, asynchronous backend design, and database normalization procedures.",
      "Designed and audited testing sandboxes replicating real-world OWASP Top 10 vulnerabilities.",
      "Configured secure local networks and self-hosted Nginx servers with custom SSL terminations.",
      "Built deep experience in Linux scripting and shell hardening procedures."
    ],
    type: "Education"
  },
  {
    year: "2022 - 2023",
    role: "DevOps & System Integration Specialist",
    company: "Chennai Cloud Solutions",
    description: "Introduced development teams to automated containerized architectures, assisting in migrating standard servers to cloud services.",
    highlights: [
      "Co-migrated monolithic projects to containerized Docker-compose infrastructures.",
      "Configured automated backup operations storing relational data in offline buckets.",
      "Managed local virtual machines, testing multi-region network connections.",
      "Refactored build assets to load lazily, enhancing performance metrics."
    ],
    type: "Work"
  },
  {
    year: "2020 - 2022",
    role: "B.Sc. in Computer Science / Information Technology",
    company: "Anna University Affiliate college",
    description: "Pursued academic foundation in Database Systems, Operating Systems, Linux Commands, and Software Architecture Principles.",
    highlights: [
      "Excelled in Data Structures, Relational DBMS, and Networking layers.",
      "Built student notification portals using PHP, HTML5, and MySQL database engines.",
      "Led high school web security and networking hobby groups."
    ],
    type: "Education"
  }
];

export const securityRoadmap = [
  {
    phase: "Phase 1: Foundation",
    title: "Linux & Network Hardening",
    status: "Completed",
    notes: "Mastered Linux permissions, firewall (UFW) logs, SSH key authentication configs, and DNS security mapping."
  },
  {
    phase: "Phase 2: Secure Apps",
    title: "OWASP Mitigation",
    status: "Completed",
    notes: "Implemented parameterization for MySQL, sanitization for input text against XSS, and strict CSRF mitigations for Express."
  },
  {
    phase: "Phase 3: Automation",
    title: "DevSecOps CI/CD Integration",
    status: "In Progress",
    notes: "Integrating Static Application Security Testing (SAST) tools like SonarQube or Snyk into continuous deployment runs."
  },
  {
    phase: "Phase 4: Advanced",
    title: "Container & Kubernetes Security",
    status: "Planned",
    notes: "Aiming to conduct comprehensive secure secrets configuration and ingress isolation tests in isolated local clusters."
  }
];

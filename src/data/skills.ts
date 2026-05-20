export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Cybersecurity" | "Tools";
  percentage: number;
  level: "Expert" | "Advanced" | "Intermediate" | "Familiar";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", percentage: 92, level: "Expert" },
  { name: "TypeScript", category: "Frontend", percentage: 90, level: "Expert" },
  { name: "JavaScript", category: "Frontend", percentage: 94, level: "Expert" },
  { name: "HTML5 & CSS3", category: "Frontend", percentage: 95, level: "Expert" },
  { name: "TailwindCSS", category: "Frontend", percentage: 92, level: "Expert" },
  { name: "Responsive UI/UX", category: "Frontend", percentage: 90, level: "Advanced" },
  { name: "Web Accessibility (A11y)", category: "Frontend", percentage: 85, level: "Advanced" },

  // Backend
  { name: "Node.js", category: "Backend", percentage: 88, level: "Advanced" },
  { name: "Express.js", category: "Backend", percentage: 90, level: "Advanced" },
  { name: "REST APIs", category: "Backend", percentage: 95, level: "Expert" },
  { name: "Session / Token Authentication", category: "Backend", percentage: 92, level: "Expert" },
  { name: "Database Design", category: "Backend", percentage: 85, level: "Advanced" },
  { name: "API Security Headers", category: "Backend", percentage: 88, level: "Advanced" },

  // Database
  { name: "MongoDB", category: "Database", percentage: 86, level: "Advanced" },
  { name: "PostgreSQL", category: "Database", percentage: 80, level: "Advanced" },
  { name: "MySQL", category: "Database", percentage: 84, level: "Advanced" },
  { name: "Redis Basics", category: "Database", percentage: 75, level: "Intermediate" },

  // DevOps
  { name: "Docker", category: "DevOps", percentage: 88, level: "Advanced" },
  { name: "GitHub Actions (CI/CD)", category: "DevOps", percentage: 85, level: "Advanced" },
  { name: "Linux Administration", category: "DevOps", percentage: 90, level: "Expert" },
  { name: "Nginx Hosting & TLS", category: "DevOps", percentage: 82, level: "Advanced" },
  { name: "Vercel & Netlify Deployments", category: "DevOps", percentage: 95, level: "Expert" },
  { name: "Cloud Networks (VPC/S3)", category: "DevOps", percentage: 80, level: "Advanced" },

  // Cybersecurity
  { name: "OWASP Top 10 Mitigation", category: "Cybersecurity", percentage: 86, level: "Advanced" },
  { name: "Secure Application Coding", category: "Cybersecurity", percentage: 90, level: "Expert" },
  { name: "HMAC / Vault / Hash Management", category: "Cybersecurity", percentage: 84, level: "Advanced" },
  { name: "API Security & Vulnerabilities", category: "Cybersecurity", percentage: 88, level: "Advanced" },
  { name: "Ethical Hacking Labs", category: "Cybersecurity", percentage: 82, level: "Advanced" },
  { name: "Vulnerability Scanning Tools", category: "Cybersecurity", percentage: 80, level: "Advanced" },
  { name: "Linux OS Security & Shell Hardening", category: "Cybersecurity", percentage: 85, level: "Advanced" },

  // Tools
  { name: "Git & GitHub Workflow", category: "Tools", percentage: 92, level: "Expert" },
  { name: "VS Code Core Configuration", category: "Tools", percentage: 95, level: "Expert" },
  { name: "Postman & Rest Client", category: "Tools", percentage: 90, level: "Expert" },
  { name: "Figma (Wireframing / Design)", category: "Tools", percentage: 75, level: "Intermediate" },
  { name: "Bun Package Manager", category: "Tools", percentage: 88, level: "Advanced" },
  { name: "npm / pnpm / yarn", category: "Tools", percentage: 90, level: "Expert" }
];

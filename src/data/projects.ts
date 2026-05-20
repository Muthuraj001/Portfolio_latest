export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "DevOps" | "Database/Backend" | "Security" | "Mobile";
  techStack: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  security: string;
  performance: string;
  deployment: string;
  challenges: string;
}

export const projects: Project[] = [
  {
    slug: "secure-task-manager",
    title: "Secure Task Manager",
    description: "A full-stack task management platform with robust JWT authentication, role-based access control, secure Restful APIs, and responsive dashboard analytics.",
    longDescription: "Secure Task Manager is designed to solve team collaboration challenges while maintaining high-grade security integrity. Many enterprise workflow tools leak data due to weak authentication and insecure direct object reference (IDOR) vulnerabilities. This project implements ironclad API security, secure cookie/tokens handling, and extensive audit logs.",
    category: "Full Stack",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    featured: true,
    githubUrl: "https://github.com/thulasidharankvp/secure-task-manager",
    liveUrl: "https://secure-tasks.demo-app.live",
    problem: "Collaboration platforms are primary targets for corporate threat actors. Standard task managers suffer from weak session controls and lack granular permission checks, risking exposure of confidential organizational roadmaps.",
    solution: "We built a multi-tenant task and workspace manager with RBAC (Role-Based Access Control), bcrypt-based password hashing, and encrypted JWT tokens. The database layers query strictly based on tenant scopes to thwart IDOR style attacks.",
    features: [
      "Secure JSON Web Token authentication with slide-expiration cookies.",
      "Granular role permissions (Owner, Admin, Member, Guest).",
      "Interactive analytics dashboard with SVG widgets depicting team velocity.",
      "Thorough API activity logs tracking all mutation requests.",
      "Responsive layout styled with custom CSS variables."
    ],
    architecture: "An Express-based MVC REST API talking to a sharded MongoDB database, consumed by a React-Vite front-end. The back-end is containerized and relies on an Nginx reverse proxy.",
    security: "Implements strict CORS restrictions, Helmet.js header security, query sanitization inputs against NoSQL injections, and rate-limiting using express-rate-limit.",
    performance: "Queries utilize MongoDB indexes on search text and tenant identifiers, delivering under-30ms response times. The React front-end employs memoization and lazy-loaded views to reduce bundle parsing costs.",
    deployment: "Fully containerized using Docker Compose, deployed inside a secure VPC on AWS ECS with automated SSL renewal using Let's Encrypt.",
    challenges: "Handling token invalidation upon password shifts. Solved by implementing a token blacklisting Redis-cache that invalidates older secret keys seamlessly."
  },
  {
    slug: "devops-deployment-dashboard",
    title: "DevOps Deployment Dashboard",
    description: "A dashboard for tracking deployments, build status, multi-env cluster health, and real-time CI/CD pipeline runs and agent logs.",
    longDescription: "The DevOps Deployment Dashboard acts as a single-pane-of-glass status board for multi-cloud deployment environments. It consolidates build workflows from GitHub Actions, GitLab CI, and AWS pipelines, offering DevOps engineers instantaneous metrics about error logs and delivery bottlenecks.",
    category: "DevOps",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "GitHub Actions", "Docker", "Nginx"],
    featured: true,
    githubUrl: "https://github.com/thulasidharankvp/devops-dashboard",
    liveUrl: "https://devops-dash.demo-app.live",
    problem: "Development teams lose precious hours hopping between separate clouds and continuous integration dashboards to spot why a pipeline failed or which environment hosts a buggy tag.",
    solution: "Constructed an Express service connecting directly to GitHub and Cloud provider hooks and APIs, returning a streamlined WebSocket-based live environment state map to a lightweight React grid.",
    features: [
      "Real-time pipeline progression animations matching active build logs.",
      "Global multi-region health status mapping with visual green/yellow/red indicators.",
      "Immediate error log aggregation surfacing failing commands right on screen.",
      "Interactive deployment trigger widgets with confirmation gates.",
      "Optimized responsiveness for mobile-first on-call duty engineers."
    ],
    architecture: "Vite + React UI accessing an Express back-end proxy with WebSockets. Pulls webhooks natively from repository managers and transforms payloads safely.",
    security: "Webhook payloads undergo signature verification checks using SHA256 HMAC tokens. Access to trigger buttons is audited and tied to user profiles.",
    performance: "React listing components optimize rendering using virtual lists for huge multi-thousand line build logs.",
    deployment: "Deployed inside a self-managed Dockerized Nginx sandbox that manages TLS Termination efficiently.",
    challenges: "WebSocket connections would drop or stutter during server recycles. Resolved by developing custom reconnection back-off schemes in standard React Hooks."
  },
  {
    slug: "college-management-system",
    title: "College Management System",
    description: "A secure role-based academic portal managing students, staff schedules, mark registers, and real-time announcements.",
    longDescription: "An academic administrative portal focusing on performance, clear relational database design, and fluid multi-role support. The College Management System streamlines course enrollment, schedule management, marks processing, and campus-wide notifications.",
    category: "Database/Backend",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "REST API", "Docker"],
    featured: false,
    githubUrl: "https://github.com/thulasidharankvp/college-system",
    liveUrl: "https://college.demo-app.live",
    problem: "Legacy educational portals are painfully sluggish, non-responsive, and prone to SQL injection vulnerabilities and cross-site scripting (XSS) in discussion boards.",
    solution: "Designed a clean, highly structured MySQL relational database with explicit indexes, alongside a Node.js parameterized query layer and a modern React control grid.",
    features: [
      "Separate dashboards tailored for Students, Professors, and System Admins.",
      "Interactive SVG-based timetable generator and virtual attendance checkers.",
      "Dynamic grade book with automated GPA calculation functions.",
      "Markdown-supported notice board with immediate real-time notifications.",
      "Printable document generator outputting official academic grade sheets."
    ],
    architecture: "Relational academic schema on MySQL, served by a structured Express routing layer utilizing Knex.js query building, with a React frontend.",
    security: "Strict parameterized input validation avoids SQL injections completely. Sanitized academic posts avoid XSS vulnerabilities under severe load.",
    performance: "Database queries utilize foreign key indexes and pre-compiled views to join registration sheets under 14ms.",
    deployment: "Deployed on a virtual private server, backed up daily to cloud object storage using automated cron jobs.",
    challenges: "Handling database locking during high-volume student enrollments. Solved by introducing Transaction isolations and database-level connection pool adjustments."
  },
  {
    slug: "secret-manager-lab",
    title: "Secret Manager Lab",
    description: "A self-hosted secure password and secret repository lab using Docker, Nginx, and customized cryptography controls.",
    longDescription: "An in-depth self-hosted cryptographic lab demonstrating zero-knowledge architecture. Crafted to securely store and share environment secrets, API keys, and sensitive tokens without relying on external SaaS platforms.",
    category: "Security",
    techStack: ["Docker", "Linux", "Nginx", "Security", "DevOps", "Cryptography", "Bash"],
    featured: true,
    githubUrl: "https://github.com/thulasidharankvp/secret-manager-lab",
    liveUrl: "https://secrets-lab.demo-app.live",
    problem: "Sharing cleartext environment files in internal channels like Slack or Git leads to critical credential leakages.",
    solution: "Built a self-hosted Secrets Vault wrapper utilizing AES-256 client-side encryption. Keys never reach the host database in plain text.",
    features: [
      "Zero-knowledge encryption model (encryption hashes generated on the user's browser).",
      "Automated environment file parser encrypting individual keys automatically.",
      "Password generator based on custom criteria (length, character groups).",
      "Self-terminating temporary sharing links with set read counts and expiration timers.",
      "Audit map showing geolocation of read attempts."
    ],
    architecture: "Client-side crypto libraries handle encryption. Back-end Node.js server receives only salt parameters and ciphertexts, saving them on SQLite.",
    security: "Fully compliant with OWASP storage principles. Prevents brute forcing by compiling PBKDF2 iterations for passwords before encryption.",
    performance: "Lightweight single-page build size (<150KB) which operates entirely offline for encryptions.",
    deployment: "Packaged inside a Docker Compose setup, restricted within private Linux subnets mapping TLS exclusively on port 443.",
    challenges: "Key-derivation calculations would freeze weak mobile phones. Optimized by porting heavy cryptography logic to background Web Workers."
  },
  {
    slug: "voice-assistant-mobile-app",
    title: "Voice Assistant Mobile App",
    description: "A mobile voice-command interface mockup displaying responsive audio wave animations, command flowcharts, and custom assistant workflow triggers.",
    longDescription: "A gorgeous frontend simulation for smart home and assistant flows. Translates spoken language syntax triggers into interactive UI actions, featuring fully micro-animated vector waveforms.",
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "Mobile UI", "GSAP", "SVG", "TailwindCSS"],
    featured: false,
    githubUrl: "https://github.com/thulasidharankvp/voice-assistant-ui",
    liveUrl: "https://voice-assist.demo-app.live",
    problem: "Most digital assistants feel disconnected due to laggy visual responses and opaque workflow status steps.",
    solution: "Designed a smooth, highly responsive, tactile mobile layout matching voice states to color ripples and responsive wave controls.",
    features: [
      "Soundwave animation driven dynamically by microphone input peaks.",
      "Action flowchart visualizing decision pathways in real time.",
      "Custom macro builder stringing smart-command variables together.",
      "Modern dark theme styled after cyberpunk and sci-fi computer interfaces."
    ],
    architecture: "Modular UI architecture centering design tokens. Animations are built on GSAP and SVG filters.",
    security: "Simulated audio captures process locally inside device storage without external outbound relays.",
    performance: "SVG waves run on hardware-accelerated transforms, avoiding Main Thread congestion during rendering.",
    deployment: "Built as a static web showcase using Expo Web for direct recruiting review.",
    challenges: "Rendering fluid waves on low-end screens. Resolved by replacing continuous calculation triggers with pre-mapped cubic bezier nodes."
  },
  {
    slug: "cybersecurity-learning-lab",
    title: "Cybersecurity Learning Lab",
    description: "A self-contained ethical hacking environment demonstrating OWASP vulnerabilities, safe exploitation, and defensive coding tutorials.",
    longDescription: "The Cybersecurity Learning Lab is a virtual environment designed to train developers to code with a defense-first mindset. It showcases 6 interactive hacking scenarios covering SQL Injection, XSS, CSRF, IDOR, path traversal, and weak hashing, backed by step-by-step secure code repairs.",
    category: "Security",
    techStack: ["Linux", "Docker", "OWASP", "Security Tools", "Node.js", "Secured API"],
    featured: true,
    githubUrl: "https://github.com/thulasidharankvp/security-lab",
    liveUrl: "https://security-lab.demo-app.live",
    problem: "Traditional cyber training focuses strictly on attack behaviors without teaching developers how to restructure code to avoid vulnerabilities at the source.",
    solution: "Created a dual-screen lab interface where users execute a mock exploit in a safe sandbox container, review the vulnerable source, and type code corrections to patch it.",
    features: [
      "Interactive command-line simulation executing safe proof-of-concept payloads.",
      "Vulnerable vs. patched side-by-side code editor panels with live validation lint keys.",
      "Interactive penetration testing checklist modeled after OWASP Top 10.",
      "Secure credential hashes visualization demonstrating salts/pepper combinations.",
      "Certificate of Completion generator upon resolving all vulnerabilities."
    ],
    architecture: "Node.js back-end running separate tiny sandboxed scopes mimicking flawed apps. UI communicates through REST APIs containing secure validation tests.",
    security: "The app is strictly defensive-oriented and hosted isolated from actual internal networks.",
    performance: "Static content is aggressively cached, ensuring instant loading of detailed training guides.",
    deployment: "Deployed as single-project Docker architectures behind isolated VPS networks.",
    challenges: "Allowing code editing while preventing users from writing malicious scripts that compromise the lab host itself. Solved using restrictive isolated sandboxed context VMs."
  }
];

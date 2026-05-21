export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Frontend" | "React" | "Testing" | "Web Design" | "Career";
  readTime: string;
  date: string;
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "building-responsive-frontend-apps",
    title: "Building Responsive Frontend Applications",
    excerpt:
      "A practical guide to creating clean, mobile-friendly web pages using HTML5, CSS3, JavaScript, and React.",
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    content: `## Why Responsive Design Matters

Modern users visit websites from mobile phones, tablets, laptops, and large desktop screens. A frontend developer must make sure the interface looks clean and works smoothly across all screen sizes.

Responsive design is not only about shrinking content. It is about creating layouts that adapt naturally to different devices.

---

### 1. Start with a Mobile-First Layout

A mobile-first approach means designing the smallest screen first and then improving the layout for larger screens.

This helps keep the design simple, readable, and accessible.

\`\`\`css
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}
\`\`\`

---

### 2. Use Flexible Layouts

CSS Grid and Flexbox make it easier to build layouts that adjust based on screen width.

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

---

### 3. Test on Multiple Screen Sizes

Testing is an important part of frontend development. Always check:

- Mobile view
- Tablet view
- Desktop view
- Navigation behavior
- Button spacing
- Text readability

A good responsive design improves usability and gives users a better experience.`
  },

  {
    slug: "react-component-structure",
    title: "How I Structure React Components",
    excerpt:
      "A beginner-friendly explanation of building reusable and maintainable React components for frontend projects.",
    date: "April 28, 2026",
    readTime: "6 min read",
    category: "React",
    tags: ["React", "Components", "TypeScript", "Frontend"],
    content: `## Why Component Structure Is Important

React applications become easier to maintain when components are small, reusable, and clearly named.

Instead of writing all UI code inside one file, we can divide the interface into separate components.

---

### 1. Create Reusable UI Components

Reusable components help reduce duplicate code.

\`\`\`tsx
type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
\`\`\`

---

### 2. Keep Components Focused

Each component should have one clear responsibility.

For example:

- \`Navbar\` handles navigation
- \`Card\` displays grouped content
- \`ContactForm\` handles form input
- \`ProjectCard\` displays project details

This makes the project easier to understand and update.

---

### 3. Use TypeScript for Safer Props

TypeScript helps catch mistakes before runtime.

\`\`\`tsx
type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
};

export function ProjectCard({ title, description, techStack }: ProjectCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
\`\`\`

A clean component structure helps developers build scalable React applications.`
  },

  {
    slug: "software-testing-for-frontend",
    title: "Software Testing Basics for Frontend Developers",
    excerpt:
      "A simple overview of how frontend developers can test UI behavior, API responses, and user workflows.",
    date: "April 15, 2026",
    readTime: "6 min read",
    category: "Testing",
    tags: ["Software Testing", "Debugging", "API Testing", "UI Testing"],
    content: `## Why Frontend Testing Matters

Frontend testing ensures that a web application works correctly for users. It helps identify layout issues, broken buttons, invalid form behavior, and API response problems.

As a software testing intern, testing frontend behavior helps improve application quality and user experience.

---

### 1. UI Testing

UI testing checks whether the interface behaves as expected.

Important things to test:

- Buttons are clickable
- Forms show validation errors
- Navigation links work correctly
- Layout is responsive
- Text is readable
- Images load properly

---

### 2. API Response Validation

Many frontend applications depend on REST APIs. If API data is incorrect or missing, the UI may break.

Example checks:

\`\`\`ts
type User = {
  id: number;
  name: string;
  email: string;
};

function validateUserResponse(user: User) {
  return Boolean(user.id && user.name && user.email);
}
\`\`\`

---

### 3. Debugging Frontend Issues

Browser DevTools are very useful for debugging.

Common tools:

- Console tab for JavaScript errors
- Network tab for API requests
- Elements tab for CSS/layout issues
- Lighthouse for performance and accessibility checks

Testing is not only about finding bugs. It is about improving reliability and delivering a better user experience.`
  },

  {
    slug: "api-data-rendering-in-react",
    title: "Rendering API Data in React",
    excerpt:
      "Learn the basic flow of fetching REST API data and displaying it inside a React component.",
    date: "April 02, 2026",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "REST API", "JavaScript", "Frontend"],
    content: `## API Integration in Frontend Applications

Modern web applications often display dynamic data from APIs. React makes it easier to fetch, store, and render this data inside components.

---

### 1. Fetch Data Using useEffect

The \`useEffect\` hook can be used to load data when a component mounts.

\`\`\`tsx
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
};

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

---

### 2. Handle Loading and Error States

A good frontend should handle all states:

- Loading
- Success
- Empty data
- Error

\`\`\`tsx
if (loading) return <p>Loading...</p>;
if (error) return <p>Something went wrong.</p>;
if (!products.length) return <p>No products found.</p>;
\`\`\`

---

### 3. Keep API Logic Organized

For better maintainability, API logic can be separated into a service file.

\`\`\`ts
export async function getProducts() {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
\`\`\`

API rendering is an important skill for building interactive frontend applications and dashboards.`
  },

  {
    slug: "web-design-internship-learnings",
    title: "What I Learned from Web Design Internship",
    excerpt:
      "Key lessons from designing clean layouts, improving visual hierarchy, and building responsive web pages.",
    date: "March 18, 2026",
    readTime: "4 min read",
    category: "Web Design",
    tags: ["Web Design", "UI Design", "Responsive Design", "Internship"],
    content: `## Learning Web Design Through Practice

During a web design internship, I learned how important clean layouts and structured navigation are for a good user experience.

A website should not only look good. It should also be easy to use.

---

### 1. Visual Hierarchy

Visual hierarchy helps users understand what is important on a page.

Common techniques include:

- Larger headings
- Proper spacing
- Clear buttons
- Consistent colors
- Grouped content sections

---

### 2. Structured Navigation

Navigation should help users move through the website easily.

A good navigation system should be:

- Simple
- Consistent
- Easy to understand
- Mobile-friendly

---

### 3. Responsive Compatibility

A web page should work properly on both mobile and desktop screens.

Responsive design improves accessibility and gives users a better browsing experience.

Web design helped me understand how frontend development connects with usability and user experience.`
  },

  {
    slug: "building-my-developer-portfolio",
    title: "Building My Developer Portfolio",
    excerpt:
      "How a personal portfolio helps showcase frontend skills, projects, internships, and technical growth.",
    date: "March 05, 2026",
    readTime: "5 min read",
    category: "Career",
    tags: ["Portfolio", "Career", "Frontend", "Projects"],
    content: `## Why a Developer Portfolio Is Important

A resume explains skills and experience, but a portfolio shows practical work. It helps recruiters, developers, and companies understand what a candidate can build.

A good portfolio should clearly show:

- Skills
- Projects
- Internship experience
- Contact details
- Technical interests

---

### 1. Show Real Projects

Projects help prove practical knowledge.

Examples:

- Personal portfolio website
- Air quality monitoring dashboard
- Tamil cinema website
- Web application UI development

Each project should explain:

- What was built
- Technologies used
- Main features
- What was learned

---

### 2. Keep the Design Clean

A portfolio should be simple, readable, and professional.

Important points:

- Clear sections
- Good spacing
- Mobile responsiveness
- Easy navigation
- Fast loading

---

### 3. Keep Improving

A portfolio is never fully finished. It can be updated with new projects, certifications, internships, and technical skills.

Building my portfolio helps me present my frontend development journey and continuous learning clearly.`
  }
];
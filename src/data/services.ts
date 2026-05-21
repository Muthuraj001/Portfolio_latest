export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealClient: string;
}

export const services: Service[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Build responsive and user-friendly web pages using React, TypeScript, JavaScript, HTML5, CSS3, and modern frontend practices.",
    deliverables: [
      "Responsive frontend pages for mobile, tablet, and desktop.",
      "Reusable React components with clean structure.",
      "TypeScript-supported UI development.",
      "Clean page layouts with proper spacing and navigation.",
      "Basic performance-focused frontend improvements."
    ],
    idealClient:
      "Startups, small businesses, and teams looking for clean frontend pages or junior frontend development support."
  },
  {
    id: "react-typescript-ui",
    title: "React & TypeScript UI Development",
    description:
      "Create modular React interfaces with TypeScript support, reusable components, and maintainable frontend architecture.",
    deliverables: [
      "Reusable UI components such as cards, forms, buttons, and sections.",
      "Component-based page structure.",
      "Typed props and safer frontend code using TypeScript.",
      "Dynamic rendering from structured data files.",
      "Clean folder structure for easier project maintenance."
    ],
    idealClient:
      "Teams or individuals who need React-based UI screens, portfolio pages, dashboards, or frontend feature development."
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    description:
      "Design clean and mobile-friendly website layouts with structured navigation, readable content, and improved visual hierarchy.",
    deliverables: [
      "Mobile-first responsive layouts.",
      "Clean visual hierarchy for headings, sections, and cards.",
      "Structured navigation for better user experience.",
      "Improved spacing, alignment, and readability.",
      "Cross-device layout testing for common screen sizes."
    ],
    idealClient:
      "Businesses, students, creators, and professionals who need a simple, clean, and responsive website."
  },
  {
    id: "software-testing",
    title: "Software Testing Support",
    description:
      "Support web application quality by testing UI behavior, validating forms, checking API responses, and reporting frontend issues clearly.",
    deliverables: [
      "Manual UI testing for web pages and workflows.",
      "Frontend issue identification and bug reporting.",
      "Form validation and user flow testing.",
      "API response validation using browser DevTools or testing tools.",
      "Usability suggestions for better user experience."
    ],
    idealClient:
      "Development teams that need testing support for frontend features, web application workflows, and UI quality checks."
  },
  {
    id: "api-validation",
    title: "API Validation & Frontend Debugging",
    description:
      "Check how frontend applications handle API data, loading states, error states, and dynamic content rendering.",
    deliverables: [
      "API response checking and frontend behavior validation.",
      "Debugging using browser DevTools Network and Console tabs.",
      "Validation of loading, success, empty, and error UI states.",
      "Basic REST API integration review.",
      "Clear issue notes for developers."
    ],
    idealClient:
      "Frontend teams, students, and small projects that need help validating API-based UI behavior."
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website Development",
    description:
      "Build a clean personal portfolio website to showcase skills, projects, internships, certifications, and contact details.",
    deliverables: [
      "Modern personal portfolio layout.",
      "About, Skills, Experience, Projects, and Contact sections.",
      "Responsive design for mobile and desktop.",
      "Project cards with clear descriptions and tech stack.",
      "Contact form setup for professional opportunities."
    ],
    idealClient:
      "Students, freshers, developers, and job seekers who want a professional online portfolio."
  },
  {
    id: "web-page-improvement",
    title: "Web Page Improvement",
    description:
      "Improve existing web pages by fixing layout issues, spacing problems, responsiveness, readability, and basic frontend bugs.",
    deliverables: [
      "Layout alignment fixes.",
      "Responsive design improvements.",
      "Button, form, and navigation UI fixes.",
      "CSS cleanup and component structure improvements.",
      "Basic performance and usability improvements."
    ],
    idealClient:
      "Anyone with an existing website or project that needs frontend cleanup, better alignment, and improved user experience."
  },
  {
    id: "internship-fresher-support",
    title: "Internship & Fresher Project Support",
    description:
      "Assist with beginner-friendly frontend projects, academic project UI, portfolio sections, and practical web development improvements.",
    deliverables: [
      "Academic project frontend pages.",
      "Simple dashboard or landing page UI.",
      "Project documentation support.",
      "Frontend code structure guidance.",
      "Basic debugging and improvement suggestions."
    ],
    idealClient:
      "Students, freshers, and beginners who need support building or improving frontend-based academic and portfolio projects."
  }
];
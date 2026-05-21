export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Frontend" | "React" | "Web Design" | "Testing" | "IoT";
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
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase skills, internships, projects, certifications, and contact information.",
    longDescription:
      "The Personal Portfolio Website is designed to present Muthuraj's frontend development journey in a clean and professional way. It highlights technical skills, internship experience, academic background, certifications, and practical projects using a modern responsive interface.",
    category: "React",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    featured: true,
    githubUrl: "https://github.com/Muthuraj001/Portfolio_latest",
    liveUrl: "https://muthuraj001.github.io/Portfolio_latest/",
    problem:
      "A resume alone does not fully show practical frontend skills, project structure, UI design ability, or real development experience.",
    solution:
      "Built a professional portfolio website with dedicated sections for About, Experience, Projects, Blog, and Contact to clearly showcase skills and career progress.",
    features: [
      "Responsive layout for mobile, tablet, and desktop screens.",
      "Modern React component-based page structure.",
      "Animated sections for better user engagement.",
      "Dedicated project showcase with detailed project information.",
      "Contact form for professional opportunities and collaboration."
    ],
    architecture:
      "Built with a Vite React frontend using reusable components, structured data files, layout components, and responsive Tailwind CSS utility classes.",
    security:
      "Form input validation is handled using schema-based validation to reduce invalid submissions and improve data quality.",
    performance:
      "Vite provides fast development builds, optimized production output, and smooth page loading with reusable lightweight components.",
    deployment:
      "Deployed as a static frontend portfolio using GitHub Pages.",
    challenges:
      "Aligning resume content with portfolio sections while keeping the UI clean, responsive, and professional."
  },
  {
    slug: "air-quality-monitoring-system",
    title: "IoT Air Quality Monitoring System",
    description:
      "An IoT-based system using Arduino and MQ135 sensor to collect air quality data and display readings through a web interface.",
    longDescription:
      "The Air Quality Monitoring System is an IoT project designed to collect environmental air quality data using Arduino and an MQ135 sensor. The collected sensor readings are sent to a web interface where users can monitor air quality values remotely through a simple dashboard.",
    category: "IoT",
    techStack: ["Arduino", "MQ135 Sensor", "HTML", "CSS", "JavaScript", "Dashboard UI"],
    featured: true,
    githubUrl: "https://github.com/Muthuraj001/air-quality-monitoring",
    liveUrl: "#",
    problem:
      "Air quality data is difficult to understand without a simple visual interface that displays sensor readings clearly.",
    solution:
      "Created an IoT monitoring flow where sensor data is collected from hardware and displayed through a web-based dashboard for easier monitoring.",
    features: [
      "Collected environmental data using Arduino and MQ135 sensor.",
      "Displayed sensor readings on a simple web interface.",
      "Designed dashboard-style UI for monitoring air quality values.",
      "Supported remote viewing of collected data.",
      "Improved understanding of IoT-to-web data flow."
    ],
    architecture:
      "Sensor data is collected using Arduino and MQ135, then displayed through a frontend dashboard built with HTML, CSS, and JavaScript.",
    security:
      "Focused on safe local data handling and simple controlled display of sensor readings.",
    performance:
      "Lightweight frontend interface designed for quick loading and simple visualization of sensor values.",
    deployment:
      "Designed as an academic/project demonstration with local hardware and web interface integration.",
    challenges:
      "Connecting hardware sensor readings with a readable frontend dashboard and presenting data in a simple user-friendly format."
  },
  {
    slug: "tamil-cinema-website",
    title: "Tamil Cinema Website",
    description:
      "A responsive entertainment website concept for displaying Tamil cinema content with clean layout and structured navigation.",
    longDescription:
      "The Tamil Cinema Website is a frontend web design project focused on creating a clean and engaging layout for cinema-related content. It demonstrates responsive design, visual hierarchy, navigation structure, and interactive frontend elements.",
    category: "Web Design",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Design"],
    featured: false,
    githubUrl: "https://github.com/Muthuraj001/tamil-cinema-website",
    liveUrl: "#",
    problem:
      "Entertainment websites need clean content organization, easy navigation, and responsive layouts to work well across different devices.",
    solution:
      "Designed a structured frontend layout with organized content sections, responsive behavior, and interactive UI elements.",
    features: [
      "Responsive web pages for mobile and desktop screens.",
      "Structured navigation for better content browsing.",
      "Clean visual hierarchy for movie-related sections.",
      "Interactive frontend elements using JavaScript.",
      "User-friendly layout with readable content sections."
    ],
    architecture:
      "Built as a static frontend website using HTML, CSS, and JavaScript with separate sections for content and navigation.",
    security:
      "Uses static frontend pages with no sensitive data handling.",
    performance:
      "Optimized with simple HTML, CSS, and JavaScript for fast loading and smooth browsing.",
    deployment:
      "Can be deployed on GitHub Pages, Netlify, or any static hosting platform.",
    challenges:
      "Maintaining a clean layout while presenting multiple content sections in a responsive format."
  },
  {
    slug: "web-application-ui-development",
    title: "Web Application UI Development",
    description:
      "A frontend UI development project focused on reusable components, responsive layouts, navigation flow, and API-based data display.",
    longDescription:
      "This project demonstrates frontend development skills through responsive UI screens, modular components, improved page navigation, and dynamic API-based data display. It reflects practical experience gained through web development and frontend-focused internship work.",
    category: "Frontend",
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "REST API"],
    featured: true,
    githubUrl: "https://github.com/Muthuraj001/web-application-ui",
    liveUrl: "#",
    problem:
      "Many web applications become difficult to maintain when UI code is not modular, responsive, or clearly structured.",
    solution:
      "Built reusable frontend components and structured page layouts to improve maintainability, responsiveness, and user experience.",
    features: [
      "Responsive frontend using HTML, CSS, and JavaScript.",
      "Reusable UI components for scalable page structure.",
      "Improved page navigation and layout consistency.",
      "API-based data rendering for dynamic content.",
      "Clean coding practices for better maintainability."
    ],
    architecture:
      "Frontend-first architecture using reusable UI components, page-level sections, and REST API data rendering concepts.",
    security:
      "Focused on safe frontend rendering and basic validation of displayed API data.",
    performance:
      "Improved loading behavior through clean code, optimized structure, and lightweight UI components.",
    deployment:
      "Suitable for deployment as a static frontend or React-based web application.",
    challenges:
      "Designing reusable UI blocks while keeping the interface simple, responsive, and easy to update."
  },
  {
    slug: "software-testing-workflow",
    title: "Software Testing Workflow",
    description:
      "A testing-focused project demonstrating frontend issue tracking, UI/UX validation, API response checks, and debugging workflow.",
    longDescription:
      "The Software Testing Workflow project represents hands-on testing experience with web applications. It focuses on identifying frontend issues, validating API responses, analyzing UI/UX problems, and supporting stable application releases through structured testing practices.",
    category: "Testing",
    techStack: ["Software Testing", "API Testing", "Debugging", "Browser DevTools", "Issue Tracking"],
    featured: false,
    githubUrl: "#",
    liveUrl: "#",
    problem:
      "Frontend applications can have hidden issues such as broken UI states, incorrect API responses, layout problems, and poor usability.",
    solution:
      "Applied structured testing practices to identify issues, validate behavior, report bugs, and collaborate with developers for improvements.",
    features: [
      "Frontend issue identification and debugging.",
      "API response validation for web application behavior.",
      "UI/UX problem analysis and usability suggestions.",
      "Issue tracking and developer collaboration.",
      "Support for stable and reliable application workflows."
    ],
    architecture:
      "Testing workflow based on manual UI testing, API response checking, browser debugging tools, and issue tracking systems.",
    security:
      "Focused on identifying incorrect behavior, validation issues, and potential frontend data handling problems.",
    performance:
      "Helped improve user experience by identifying slow, broken, or confusing frontend behavior.",
    deployment:
      "Used as part of real-time web application testing and production workflow support.",
    challenges:
      "Understanding application workflows, reproducing issues correctly, and communicating bugs clearly to developers."
  }
];
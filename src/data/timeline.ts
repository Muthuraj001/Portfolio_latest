export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  type: "Work" | "Education" | "Certification";
}

export const experiences: TimelineEvent[] = [
  {
    year: "Jan 2026 - Present",
    role: "Software Testing Intern",
    company: "Salesqueen Software Solution, Chennai",
    description:
      "Working on web application testing, frontend issue validation, API response checks, and usability improvements in real-time application workflows.",
    highlights: [
      "Collaborated with developers to identify, debug, and resolve frontend issues.",
      "Analyzed UI/UX problems and suggested improvements for better usability.",
      "Validated API responses and frontend behavior in web applications.",
      "Gained hands-on exposure to debugging tools, issue tracking, and application workflows."
    ],
    type: "Work"
  },
  {
    year: "Sep 2024",
    role: "Web Design Intern",
    company: "IPCS Global Technology, Tirunelveli",
    description:
      "Designed user-friendly web interfaces with clean layouts, structured navigation, and responsive design principles for mobile and desktop compatibility.",
    highlights: [
      "Created clean and user-friendly interface layouts.",
      "Improved visual hierarchy and usability across different screen sizes.",
      "Applied responsive design principles for mobile and desktop views.",
      "Worked on structured navigation and better page readability."
    ],
    type: "Work"
  },
  {
    year: "May 2024 - Jun 2024",
    role: "Web Development Intern",
    company: "Buleline Tech Solution, Kovilpatti",
    description:
      "Developed responsive web pages using HTML, CSS, and JavaScript while improving page structure, interactive elements, and frontend performance.",
    highlights: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Built reusable UI components and improved page structure for scalability.",
      "Implemented interactive elements to enhance user experience.",
      "Optimized loading time and frontend performance through clean coding practices.",
      "Worked with API-based data rendering concepts."
    ],
    type: "Work"
  },
  {
    year: "2025",
    role: "B.E Computer Science and Engineering",
    company: "Unnamalai Institute of Technology, Kovilpatti",
    description:
      "Completed undergraduate studies in Computer Science and Engineering with academic exposure to programming, software development, databases, and computer science fundamentals.",
    highlights: [
      "Graduated with 7.6 academic score.",
      "Built foundation in programming, database concepts, and software development.",
      "Completed academic and practical project work related to web and IoT systems.",
      "Developed interest in frontend development, testing, and full stack technologies."
    ],
    type: "Education"
  },
  {
    year: "2024 - 2026",
    role: "Technical Certifications",
    company: "Professional Learning",
    description:
      "Completed training and certifications in software testing, full stack development, Python, and Microsoft Office 365 productivity tools.",
    highlights: [
      "Software Testing certification completed from Jan 2026 to Apr 2026.",
      "Full Stack Development certification completed from Oct 2024 to Dec 2024.",
      "Python certification completed in Aug 2023.",
      "Completed Digital Training and Advanced Microsoft Office 365 Productive Suite offerings in Nov 2022."
    ],
    type: "Certification"
  }
];

export const learningRoadmap = [
  {
    phase: "Phase 1: Frontend Foundation",
    title: "HTML, CSS, JavaScript & Responsive Design",
    status: "Completed",
    notes:
      "Built a strong foundation in HTML5, CSS3, JavaScript, clean layouts, structured navigation, and responsive web design."
  },
  {
    phase: "Phase 2: React Development",
    title: "React, TypeScript & Component-Based UI",
    status: "Completed",
    notes:
      "Focused on building reusable UI components, modular page structures, React-based interfaces, and TypeScript-supported frontend development."
  },
  {
    phase: "Phase 3: Software Testing",
    title: "UI Testing, API Validation & Debugging",
    status: "In Progress",
    notes:
      "Gaining hands-on experience in frontend issue debugging, validating API responses, analyzing UI/UX problems, and improving application quality."
  },
  {
    phase: "Phase 4: Full Stack Growth",
    title: "SharePoint, Microsoft Graph APIs & Backend Concepts",
    status: "Planned",
    notes:
      "Planning to strengthen full stack development skills with SharePoint Online concepts, Microsoft Graph APIs, backend integration, SQL, and performance optimization."
  }
];
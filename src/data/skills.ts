export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Web Design"
    | "Testing"
    | "Backend Basics"
    | "Database"
    | "Tools"
    | "Learning";
  percentage: number;
  level: "Advanced" | "Intermediate" | "Familiar" | "Learning";
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    percentage: 88,
    level: "Advanced",
  },
  {
    name: "CSS3",
    category: "Frontend",
    percentage: 86,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 82,
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    percentage: 76,
    level: "Intermediate",
  },
  {
    name: "React",
    category: "Frontend",
    percentage: 80,
    level: "Intermediate",
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    percentage: 84,
    level: "Advanced",
  },

  // Web Design
  {
    name: "UI Layout Design",
    category: "Web Design",
    percentage: 82,
    level: "Intermediate",
  },
  {
    name: "Visual Hierarchy",
    category: "Web Design",
    percentage: 78,
    level: "Intermediate",
  },
  {
    name: "Structured Navigation",
    category: "Web Design",
    percentage: 80,
    level: "Intermediate",
  },
  {
    name: "Mobile-Friendly Design",
    category: "Web Design",
    percentage: 84,
    level: "Advanced",
  },

  // Testing
  {
    name: "Software Testing",
    category: "Testing",
    percentage: 82,
    level: "Intermediate",
  },
  {
    name: "Frontend Bug Debugging",
    category: "Testing",
    percentage: 80,
    level: "Intermediate",
  },
  {
    name: "API Response Validation",
    category: "Testing",
    percentage: 78,
    level: "Intermediate",
  },
  {
    name: "UI/UX Issue Analysis",
    category: "Testing",
    percentage: 76,
    level: "Intermediate",
  },
  {
    name: "Issue Tracking Workflow",
    category: "Testing",
    percentage: 74,
    level: "Familiar",
  },

  // Backend Basics
  {
    name: "REST API Concepts",
    category: "Backend Basics",
    percentage: 76,
    level: "Intermediate",
  },
  {
    name: "API-Based Data Rendering",
    category: "Backend Basics",
    percentage: 78,
    level: "Intermediate",
  },
  {
    name: "SharePoint Online Concepts",
    category: "Backend Basics",
    percentage: 62,
    level: "Familiar",
  },
  {
    name: "Microsoft Graph APIs",
    category: "Backend Basics",
    percentage: 58,
    level: "Learning",
  },

  // Database
  {
    name: "Basic SQL",
    category: "Database",
    percentage: 68,
    level: "Familiar",
  },
  {
    name: "Database Concepts",
    category: "Database",
    percentage: 66,
    level: "Familiar",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    percentage: 78,
    level: "Intermediate",
  },
  {
    name: "GitLab",
    category: "Tools",
    percentage: 72,
    level: "Familiar",
  },
  {
    name: "VS Code",
    category: "Tools",
    percentage: 88,
    level: "Advanced",
  },
  {
    name: "npm / Package Management",
    category: "Tools",
    percentage: 76,
    level: "Intermediate",
  },
  {
    name: "Browser DevTools",
    category: "Tools",
    percentage: 80,
    level: "Intermediate",
  },

  // Learning
  {
    name: "Full Stack Development",
    category: "Learning",
    percentage: 70,
    level: "Learning",
  },
  {
    name: "Python",
    category: "Learning",
    percentage: 68,
    level: "Familiar",
  },
  {
    name: "Performance Optimization",
    category: "Learning",
    percentage: 66,
    level: "Familiar",
  },
  {
    name: "Cybersecurity Basics",
    category: "Learning",
    percentage: 60,
    level: "Learning",
  },
];
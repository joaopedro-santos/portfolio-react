import type {
  AboutFeature,
  HeroMetric,
  ProcessStep,
  Project,
  TechSkill,
  TimelinePoint,
} from "@/app/lib/types/portfolio";

export const heroMetrics: HeroMetric[] = [
  { value: "5+", label: "Years in Frontend" },
  { value: "Angular", label: "Enterprise UI" },
  { value: "Next.js", label: "Server-first apps" },
  { value: "Design", label: "Product-led systems" },
  { value: "Architecture", label: "Scalable platforms" },
];

export const aboutFeatures: AboutFeature[] = [
  { label: "Projects", value: "30+ delivered" },
  { label: "Experience", value: "Enterprise & scale" },
  { label: "Technologies", value: "Angular, React, Next.js" },
];

export const timelinePoints: TimelinePoint[] = [
  {
    title: "Early craft",
    period: "2019",
    description: [
      "Started by shaping interfaces in Angular and refined product thinking with user-centric features.",
    ],
  },
  {
    title: "Enterprise growth",
    period: "2021",
    description: [
      "Delivered high-availability dashboards, design systems and modular frontend architecture for large teams."],
  },
  {
    title: "Full-stack design",
    period: "2023",
    description: [
      "Focused on end-to-end experience with Next.js, performance, and high-quality UI engineering."],
  },
  {
    title: "Leadership path",
    period: "Now",
    description: [
      "Building polished systems, mentoring engineers, and elevating product experience as a senior technical collaborator."],
  },
];

export const techSkills: TechSkill[] = [
  { id: "angular", name: "Angular", description: "Enterprise UI with structured architecture.", category: "Framework", accent: "#DD0031", icon: "SiAngular" },
  { id: "react", name: "React", description: "Reactive interfaces for modern products.", category: "Library", accent: "#61DAFB", icon: "SiReact" },
  { id: "nextjs", name: "Next.js", description: "Hybrid rendering and page-level performance.", category: "Framework", accent: "#ffffff", icon: "SiNextdotjs" },
  { id: "typescript", name: "TypeScript", description: "Typed code with predictable developer experience.", category: "Language", accent: "#3178C6", icon: "SiTypescript" },
  { id: "javascript", name: "JavaScript", description: "Flexible application logic and integrations.", category: "Language", accent: "#F7DF1E", icon: "SiJavascript" },
  { id: "tailwind", name: "Tailwind", description: "Utility-first styling with clean cadence.", category: "Styling", accent: "#38BDF8", icon: "SiTailwindcss" },
  { id: "docker", name: "Docker", description: "Containers for consistent delivery.", category: "DevOps", accent: "#2496ED", icon: "SiDocker" },
  { id: "git", name: "Git", description: "Source control and collaboration workflows.", category: "Tooling", accent: "#F05032", icon: "SiGit" },
  { id: "node", name: "Node.js", description: "API composition and backend tooling.", category: "Platform", accent: "#539E43", icon: "SiNodedotjs" },
  
];

export const projects: Project[] = [
  {
    id: "scale-dashboard",
    name: "Scale Dashboard",
    description: "A responsive enterprise analytics workspace built with modular components and live data updates.",
    category: "Productivity",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    year: 2025,
    status: "In progress",
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/scale-dashboard.jpg",
  },
  {
    id: "platform-ui",
    name: "Platform UI",
    description: "An adaptive interface for internal tooling with strong accessibility and polished motion.",
    category: "Design System",
    stack: ["Angular", "NgRx", "Tailwind"],
    year: 2024,
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/platform-ui.jpg",
  },
  {
    id: "growth-portal",
    name: "Growth Portal",
    description: "A customer-facing portal built to scale with performance optimizations and clean experience.",
    category: "Web App",
    stack: ["React", "Node.js", "Docker"],
    year: 2024,
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/growth-portal.jpg",
  },
];

export const processSteps: ProcessStep[] = [
  { id: "discovery", title: "Discovery", description: "Aligning goals, user needs and business context." },
  { id: "planning", title: "Planning", description: "Defining architecture, backlog and technical risks." },
  { id: "architecture", title: "Architecture", description: "Designing scalable UI systems and performance-first structure." },
  { id: "development", title: "Development", description: "Building resilient interfaces with clean code and components." },
  { id: "quality", title: "Quality", description: "Ensuring accessibility, tests and review-driven polish." },
  { id: "deploy", title: "Deploy", description: "Launching fast, secure and observable web experiences." },
];

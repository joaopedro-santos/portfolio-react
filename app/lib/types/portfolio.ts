export interface HeroMetric {
  value: string;
  label: string;
}

export interface TimelinePoint {
  title: string;
  period: string;
  description: string[];
}

export interface AboutFeature {
  label: string;
  value: string;
}

export interface TechSkill {
  id: string;
  name: string;
  description: string;
  category: string;
  accent: string;
  icon: string;
  level?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  stack: string[];
  year: number;
  status: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
  value: string;
}

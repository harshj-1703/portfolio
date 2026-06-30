import type { Theme } from "./types";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface GitHubUser {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  label: string;
  color: string;
  glow: string;
  img: HTMLImageElement | null;
  isCenter: boolean;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface TechItem {
  name: string;
  logo: string;
  doc: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string | null;
  expiry: string | null;
  downloadLink: string | null;
  verifyLink: string | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  dateLabel: string;
  endLabel: string;
  location: string;
  points: string[];
  tags: string[];
}

export interface IndustrialProject {
  name: string;
  period: string;
  points: string[];
  tags: string[];
}

export interface Patent {
  title: string;
  type: string;
  description: string;
  number: string | null;
  link: string | null;
  download: string | null;
  downloadLabel: string | null;
}

export interface SocialMediaLink {
  name: string;
  url: string;
  logo: string;
}

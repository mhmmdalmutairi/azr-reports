export type Locale = "ar" | "en";

export interface Service {
  id: string;
  icon: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  outcome: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
}

export interface Project {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  client: { ar: string; en: string };
  category: { ar: string; en: string };
  categorySlug: string;
  description: { ar: string; en: string };
  result: { ar: string; en: string };
  image: string;
}

export interface TeamMember {
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  bio: { ar: string; en: string };
  image: string;
}

export interface Testimonial {
  quote: { ar: string; en: string };
  author: { ar: string; en: string };
  role: { ar: string; en: string };
  project: { ar: string; en: string };
}

export interface MethodologyPhase {
  id: string;
  number: string;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  description: { ar: string; en: string };
  activities: { ar: string[]; en: string[] };
  outputs: { ar: string; en: string };
}

export interface BlogPost {
  slug: string;
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  date: string;
  category: { ar: string; en: string };
  author: { ar: string; en: string };
  readTime: string;
}

export interface Stat {
  value: number;
  suffix: { ar: string; en: string };
  label: { ar: string; en: string };
}

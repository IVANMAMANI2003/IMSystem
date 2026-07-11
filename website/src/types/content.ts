import type { ReactNode } from 'react';

export interface Person {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: string;
  languages: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
  essential?: boolean;
}

export type Social = SocialLink[];

export interface Home {
  path: string;
  image: string;
  label: string;
  title: string;
  description: string;
  headline: ReactNode;
  subline: ReactNode;
  featured: {
    display: boolean;
    title: ReactNode;
    href: string;
  };
}

export interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: ReactNode[];
  images: { src: string; alt: string; width: number; height: number }[];
}

export interface Institution {
  name: string;
  description: ReactNode;
}

export interface Skill {
  title: string;
  description: ReactNode;
  tags: { name: string; icon: string }[];
  images: { src: string; alt: string; width: number; height: number }[];
}

export interface About {
  path: string;
  label: string;
  title: string;
  description: string;
  tableOfContent: { display: boolean; subItems: boolean };
  avatar: { display: boolean };
  intro: { display: boolean; title: string; description: ReactNode };
  work: { display: boolean; title: string; experiences: WorkExperience[] };
  studies: { display: boolean; title: string; institutions: Institution[] };
  technical: { display: boolean; title: string; skills: Skill[] };
}

export interface Blog {
  path: string;
  label: string;
  title: string;
  description: string;
}

export interface Work {
  path: string;
  label: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

export interface Gallery {
  path: string;
  label: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface Newsletter {
  display: boolean;
  title: ReactNode;
  description: ReactNode;
}

export interface BlogPostMetadata {
  title: string;
  subtitle?: string;
  summary: string;
  image?: string;
  publishedAt: string;
  tag: string;
  team?: { name: string; avatar: string }[];
}

export interface WorkProjectMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  images?: { src: string; alt: string; width: number; height: number }[];
  team?: { name: string; avatar: string }[];
  link?: string;
}

export interface RoutesConfig {
  '/': boolean;
  '/about': boolean;
  '/work': boolean;
  '/blog': boolean;
  '/gallery': boolean;
  '/contact': boolean;
}

export interface DisplayConfig {
  location: boolean;
  time: boolean;
  themeSwitcher: boolean;
}

export interface StyleConfig {
  theme: 'dark' | 'light' | 'system';
  neutral: string;
  brand: string;
  accent: string;
}

export interface EffectsConfig {
  mask: { cursor: boolean; x: number; y: number; radius: number };
  gradient: { display: boolean; opacity: number; x: number; y: number; width: number; height: number; colorStart: string; colorEnd: string };
  dots: { display: boolean; opacity: number; size: string; color: string };
  grid: { display: boolean; opacity: number; color: string; width: string; height: string };
  lines: { display: boolean; opacity: number; color: string; size: string; thickness: number; angle: number };
}

export interface SchemaConfig {
  logo: string;
  type: string;
  name: string;
  description: string;
  email: string;
}

export interface SocialSharingConfig {
  display: boolean;
  platforms: {
    x: boolean;
    linkedin: boolean;
    facebook: boolean;
    whatsapp: boolean;
    email: boolean;
    copyLink: boolean;
  };
}

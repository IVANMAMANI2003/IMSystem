import type { RoutesConfig, DisplayConfig, StyleConfig, EffectsConfig, SchemaConfig, SocialSharingConfig } from '@/types';

const baseURL = 'https://imsystem.com';

const routes: RoutesConfig = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
  '/gallery': true,
  '/contact': true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const style: StyleConfig = {
  theme: 'system',
  neutral: 'gray',
  brand: 'red',
  accent: 'red',
};

const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: { display: false, opacity: 100, x: 50, y: 60, width: 100, height: 50, colorStart: 'accent-background-strong', colorEnd: 'page-background' },
  dots: { display: true, opacity: 40, size: '2', color: 'brand-background-strong' },
  grid: { display: false, opacity: 100, color: 'neutral-alpha-medium', width: '0.25rem', height: '0.25rem' },
  lines: { display: false, opacity: 100, color: 'neutral-alpha-weak', size: '16', thickness: 1, angle: 45 },
};

const schema: SchemaConfig = {
  logo: '',
  type: 'Organization',
  name: 'IMSystem',
  description: 'Programming services including app development, website building, and general-purpose coding.',
  email: 'email@example.com',
};

const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    whatsapp: true,
    email: true,
    copyLink: true,
  },
};

export { display, routes, baseURL, style, schema, effects, socialSharing };

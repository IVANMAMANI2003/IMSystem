import type { Person, Social, Home, About, Blog, Work, Gallery, Newsletter } from '@/types';

const person: Person = {
  firstName: 'IMSystem',
  lastName: '',
  name: 'IMSystem',
  role: 'Programming Company',
  avatar: 'https://s3.ca-central-1.amazonaws.com/logojoy/logos/229512367/noBgColor.png',
  email: 'email@example.com',
  location: 'America/Toronto',
  languages: ['English', 'Spanish'],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated with our latest programming insights and services</>,
};

const social: Social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com',
    essential: true,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com',
    essential: true,
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://instagram.com',
    essential: false,
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name} - Programming Services`,
  description: `${person.name} provides innovative programming services including app development, website building, and general-purpose coding.`,
  headline: <>Innovative &amp; empowering.</>,
  featured: {
    display: true,
    title: (
      <span>
        <strong>IMSystem</strong> Featured Work
      </span>
    ),
    href: '/work/imsystem-platform',
  },
  subline: (
    <>
      The modern world runs on the power of programming. We build{' '}
      <strong>apps</strong>, <strong>websites</strong>, and{' '}
      <strong>custom solutions</strong> for your business.
    </>
  ),
};

const about: About = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        IMSystem is a programming company dedicated to empowering businesses
        through innovative technology solutions. We specialize in app
        development, website building, and general-purpose coding. Our mission
        is to make the power of programming accessible to every business,
        helping them thrive in the digital age.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'IMSystem',
        timeframe: '2020 - Present',
        role: 'Lead Developer',
        achievements: [
          <>
            Developed over 50 custom web applications for clients across various
            industries, resulting in a 40% increase in operational efficiency.
          </>,
          <>
            Built a scalable SaaS platform serving 10,000+ users with 99.9%
            uptime.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Studies',
    institutions: [
      {
        name: 'University of Technology',
        description: <>Studied software engineering and computer science.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Frontend Development',
        description: <>Building modern, responsive web applications.</>,
        tags: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Next.js', icon: 'nextjs' },
        ],
        images: [],
      },
      {
        title: 'Backend Development',
        description: <>Building robust APIs and server-side applications.</>,
        tags: [
          { name: 'Node.js', icon: 'nodejs' },
          { name: 'Python', icon: 'python' },
          { name: 'PostgreSQL', icon: 'postgresql' },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Blog – IMSystem',
  description: 'Read about programming, technology, and our latest projects',
};

const work: Work = {
  path: '/work',
  label: 'Work',
  title: 'Work – IMSystem',
  description: 'Our projects and case studies',
};

const gallery: Gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: 'Gallery – IMSystem',
  description: 'A visual collection of our work',
  images: [
    { src: '/images/gallery/horizontal-1.jpg', alt: 'Project screenshot', orientation: 'horizontal' },
    { src: '/images/gallery/vertical-1.jpg', alt: 'Project screenshot', orientation: 'vertical' },
    { src: '/images/gallery/horizontal-2.jpg', alt: 'Project screenshot', orientation: 'horizontal' },
    { src: '/images/gallery/vertical-2.jpg', alt: 'Project screenshot', orientation: 'vertical' },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

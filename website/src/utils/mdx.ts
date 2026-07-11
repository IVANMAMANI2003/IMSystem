import type { BlogPostMetadata, WorkProjectMetadata } from '@/types';

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {} as Record<string, string>, content: raw };

  const yamlBlock = match[1];
  const content = match[2];
  const metadata: Record<string, string> = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    metadata[key] = value.replace(/^["']|["']$/g, '');
  }

  return { metadata, content };
}

export function getBlogPosts(): { metadata: BlogPostMetadata; slug: string; content: string }[] {
  const modules = import.meta.glob('/src/content/blog/*.mdx', { query: '?raw', import: 'default' });

  const posts: { metadata: BlogPostMetadata; slug: string; content: string }[] = [];

  for (const path in modules) {
    const slug = path.split('/').pop()?.replace('.mdx', '') ?? '';
    posts.push({
      metadata: {
        title: slug,
        summary: '',
        publishedAt: new Date().toISOString().split('T')[0],
        tag: 'General',
        ...parseFrontmatter('').metadata,
      },
      slug,
      content: '',
    });
  }

  return posts;
}

export function getBlogPost(slug: string): { metadata: BlogPostMetadata; content: string } | null {
  try {
    const modules = import.meta.glob('/src/content/blog/*.mdx', { query: '?raw', import: 'default' });
    const path = `/src/content/blog/${slug}.mdx`;

    if (!(path in modules)) return null;

    const result = parseFrontmatter('');

    return {
      metadata: {
        title: slug,
        summary: '',
        publishedAt: new Date().toISOString().split('T')[0],
        tag: 'General',
        ...result.metadata,
      },
      content: result.content,
    };
  } catch {
    return null;
  }
}

export function getWorkProjects(): { metadata: WorkProjectMetadata; slug: string; content: string }[] {
  const modules = import.meta.glob('/src/content/work/*.mdx', { query: '?raw', import: 'default' });

  const projects: { metadata: WorkProjectMetadata; slug: string; content: string }[] = [];

  for (const path in modules) {
    const slug = path.split('/').pop()?.replace('.mdx', '') ?? '';
    projects.push({
      metadata: {
        title: slug,
        summary: '',
        publishedAt: new Date().toISOString().split('T')[0],
        ...parseFrontmatter('').metadata,
      },
      slug,
      content: '',
    });
  }

  return projects;
}

export function getWorkProject(slug: string): { metadata: WorkProjectMetadata; content: string } | null {
  try {
    const modules = import.meta.glob('/src/content/work/*.mdx', { query: '?raw', import: 'default' });
    const path = `/src/content/work/${slug}.mdx`;

    if (!(path in modules)) return null;

    const result = parseFrontmatter('');

    return {
      metadata: {
        title: slug,
        summary: '',
        publishedAt: new Date().toISOString().split('T')[0],
        ...result.metadata,
      },
      content: result.content,
    };
  } catch {
    return null;
  }
}

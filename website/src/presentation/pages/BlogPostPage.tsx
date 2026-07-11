import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';

const postsData: Record<string, {
  title: string;
  summary: string;
  tag: string;
  publishedAt: string;
  content: string;
  image: string;
}> = {
  'quick-start': {
    title: 'Quick Start with IMSystem',
    summary: 'Learn how to get started with our programming services.',
    tag: 'Tutorial',
    publishedAt: '2024-01-15',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/1.jpg',
    content: `
Getting started with IMSystem is easy. Our team of experienced developers is ready to help you bring your ideas to life.

## Our Process

1. **Discovery** - We learn about your business and goals
2. **Planning** - We create a roadmap for your project
3. **Development** - We build your solution using modern technologies
4. **Launch** - We deploy and ensure everything works perfectly
5. **Support** - We provide ongoing maintenance and support

## Technologies We Use

Our team is proficient in a wide range of technologies:

- **Frontend**: React, Next.js, Vue.js, TypeScript
- **Backend**: Node.js, Python, Go
- **Databases**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS, Google Cloud, Vercel

## Get Started

Ready to start your project? Contact us today and let's discuss how IMSystem can help your business grow.
    `,
  },
  'web-development-trends': {
    title: 'Web Development Trends 2024',
    summary: 'Explore the latest trends in web development and technology.',
    tag: 'Technology',
    publishedAt: '2024-01-10',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/2.jpg',
    content: `
The web development landscape is constantly evolving. Here are the key trends shaping 2024.

## AI-Powered Development

Artificial intelligence is transforming how we build software. From code generation to automated testing, AI tools are becoming essential for modern development workflows.

## Edge Computing

Moving computation closer to users improves performance and reduces latency. Edge functions and CDN-based computing are becoming standard practice.

## WebAssembly

WebAssembly enables running compiled code in the browser, opening new possibilities for high-performance web applications.

## Conclusion

Staying current with these trends ensures your applications remain competitive and performant.
    `,
  },
  'building-scalable-apps': {
    title: 'Building Scalable Applications',
    summary: 'Best practices for building applications that scale with your business.',
    tag: 'Engineering',
    publishedAt: '2024-01-05',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/3.jpg',
    content: `
Scalability is crucial for any growing business. Here's how to build applications that grow with you.

## Microservices Architecture

Breaking your application into smaller, independent services allows you to scale components individually and improves maintainability.

## Database Optimization

Proper indexing, query optimization, and caching strategies are essential for handling increased data loads.

## Load Balancing

Distributing traffic across multiple servers ensures high availability and prevents single points of failure.

## Monitoring and Logging

Comprehensive monitoring helps you identify bottlenecks and issues before they impact users.
    `,
  },
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="mb-4 font-heading text-4xl">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.summary}
        canonical={`/blog/${slug}`}
        image={post.image}
      />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <RevealOnScroll>
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-primary dark:text-neutral-400"
          >
            ← Back to blog
          </Link>

          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.tag}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {post.publishedAt}
            </span>
          </div>

          <h1 className="mb-4 font-heading text-3xl sm:text-4xl">{post.title}</h1>
          <p className="mb-8 text-lg text-neutral-500 dark:text-neutral-400">{post.summary}</p>

          <div
            className="mb-8 h-64 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
              if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
              if (line.startsWith('- **')) {
                const match = line.match(/^- \*\*(.+?)\*\*(.+)$/);
                if (match) return <li key={i}><strong>{match[1]}</strong>{match[2]}</li>;
              }
              if (line.startsWith('- ')) return <li key={i}>{line.slice(2)}</li>;
              if (line.match(/^\d+\. /)) return <li key={i}>{line.replace(/^\d+\. /, '')}</li>;
              if (line.trim() === '') return <br key={i} />;
              return <p key={i}>{line}</p>;
            })}
          </div>
        </RevealOnScroll>
      </article>
    </>
  );
};

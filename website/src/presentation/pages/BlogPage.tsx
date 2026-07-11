import { Link } from 'react-router-dom';
import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { blog } from '@/resources';

const posts = [
  {
    slug: 'quick-start',
    title: 'Quick Start with IMSystem',
    summary: 'Learn how to get started with our programming services.',
    tag: 'Tutorial',
    publishedAt: '2024-01-15',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/1.jpg',
  },
  {
    slug: 'web-development-trends',
    title: 'Web Development Trends 2024',
    summary: 'Explore the latest trends in web development and technology.',
    tag: 'Technology',
    publishedAt: '2024-01-10',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/2.jpg',
  },
  {
    slug: 'building-scalable-apps',
    title: 'Building Scalable Applications',
    summary: 'Best practices for building applications that scale with your business.',
    tag: 'Engineering',
    publishedAt: '2024-01-05',
    image: 'https://cdn.looka.com/assets-db/industry_photos/programming/3.jpg',
  },
];

export const BlogPage = () => {
  return (
    <>
      <SEO
        title="Blog"
        description={blog.description}
        canonical="/blog"
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <RevealOnScroll>
          <h1 className="mb-8 font-heading text-4xl sm:text-5xl">{blog.title}</h1>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.tag}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {post.publishedAt}
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-lg">{post.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {post.summary}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};

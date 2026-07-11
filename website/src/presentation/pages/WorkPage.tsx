import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { work } from '@/resources';

export const WorkPage = () => {
  return (
    <>
      <SEO
        title="Work"
        description={work.description}
        canonical="/work"
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <RevealOnScroll>
          <h1 className="mb-8 font-heading text-4xl sm:text-5xl">{work.title}</h1>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          <RevealOnScroll delay={100}>
            <div className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <h3 className="mb-2 font-heading text-xl">IMSystem Platform</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                A scalable web platform for managing programming services and client projects.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">Node.js</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">PostgreSQL</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5"></div>
              <h3 className="mb-2 font-heading text-xl">E-Commerce Solution</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Custom e-commerce platform with inventory management and payment processing.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">Next.js</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">Stripe</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">MongoDB</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5"></div>
              <h3 className="mb-2 font-heading text-xl">Mobile App</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Cross-platform mobile application for business management on the go.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">React Native</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">Firebase</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5"></div>
              <h3 className="mb-2 font-heading text-xl">API Integration</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Custom API integrations connecting multiple third-party services seamlessly.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">Python</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">REST</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-800">GraphQL</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
};

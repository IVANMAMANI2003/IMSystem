import { Link } from 'react-router-dom';
import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { SplineScene } from '@/components/ui/splite';
import { home, about, person } from '@/resources';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description={home.description}
        canonical="/"
      />

      {/* Hero Banner con Spline 3D */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-neutral-100 dark:from-[#090b17] dark:via-transparent dark:to-[#0d1117] opacity-80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <RevealOnScroll>
              <h1 className="font-heading text-5xl leading-tight sm:text-7xl">
                {home.headline}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="max-w-lg text-lg text-neutral-500 dark:text-neutral-400 sm:text-xl">
                {home.subline}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <Link
                to={about.path}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 w-fit"
              >
                {about.avatar.display && (
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="h-6 w-6 rounded-full"
                  />
                )}
                {about.title}
                <span>→</span>
              </Link>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={300}>
            <div className="w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/20 to-transparent dark:from-[#090b17]/30 dark:to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <RevealOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 text-3xl">📱</div>
              <h3 className="mb-2 font-heading text-xl">App Development</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Apps empower your business to tap into the booming mobile market.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 text-3xl">🌐</div>
              <h3 className="mb-2 font-heading text-xl">Website Building</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                A website is essential to remaining competitive in the digital age.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="mb-2 font-heading text-xl">General-Purpose Coding</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                No matter your coding needs, IMSystem can tackle any job easily.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Testimonial */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-16 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <RevealOnScroll>
          <blockquote className="mx-auto mb-4 max-w-3xl font-serif text-2xl leading-relaxed sm:text-4xl">
            Whenever I need any help with programming, IMSystem is the place I go.
          </blockquote>
          <p className="font-serif text-neutral-500 dark:text-neutral-400">
            - Jane Smith
          </p>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <RevealOnScroll>
          <h2 className="mx-auto mb-6 max-w-xl text-2xl font-normal leading-relaxed">
            If you need programming services or have any interest in IMSystem, get in touch with us.
          </h2>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Contact us
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
};

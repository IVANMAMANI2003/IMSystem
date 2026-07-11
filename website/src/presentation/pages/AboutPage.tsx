import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { about, person } from '@/resources';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        description={about.description}
        canonical="/about"
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <RevealOnScroll>
          <h1 className="mb-8 font-heading text-4xl sm:text-5xl">{about.title}</h1>
        </RevealOnScroll>

        {about.avatar.display && (
          <RevealOnScroll delay={100}>
            <div className="mb-12 flex items-center gap-6">
              <img
                src={person.avatar}
                alt={person.name}
                className="h-20 w-20 rounded-full border-2 border-neutral-200 dark:border-neutral-700"
              />
              <div>
                <p className="font-heading text-xl">{person.name}</p>
                <p className="text-neutral-500 dark:text-neutral-400">{person.role}</p>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {about.intro.display && (
          <RevealOnScroll delay={200}>
            <section className="mb-12">
              <h2 className="mb-4 font-heading text-2xl">{about.intro.title}</h2>
              <div className="prose prose-neutral max-w-none text-neutral-600 dark:prose-invert dark:text-neutral-400">
                {about.intro.description}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {about.work.display && (
          <RevealOnScroll delay={300}>
            <section className="mb-12">
              <h2 className="mb-6 font-heading text-2xl">{about.work.title}</h2>
              <div className="space-y-8">
                {about.work.experiences.map((exp, i) => (
                  <div key={i} className="border-l-2 border-neutral-200 pl-6 dark:border-neutral-700">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="font-heading text-lg">{exp.company}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {exp.timeframe}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-primary">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {about.studies.display && (
          <RevealOnScroll delay={400}>
            <section className="mb-12">
              <h2 className="mb-6 font-heading text-2xl">{about.studies.title}</h2>
              <div className="space-y-4">
                {about.studies.institutions.map((inst, i) => (
                  <div key={i}>
                    <p className="font-heading text-lg">{inst.name}</p>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {inst.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {about.technical.display && (
          <RevealOnScroll delay={500}>
            <section className="mb-12">
              <h2 className="mb-6 font-heading text-2xl">{about.technical.title}</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {about.technical.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <h3 className="mb-2 font-heading text-lg">{skill.title}</h3>
                    <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}
      </div>
    </>
  );
};

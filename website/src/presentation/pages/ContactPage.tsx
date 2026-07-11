import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { person, social } from '@/resources';

export const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with IMSystem for programming services and inquiries."
        canonical="/contact"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <RevealOnScroll>
          <h1 className="mb-6 font-heading text-4xl sm:text-5xl">Contact Us</h1>
          <p className="mb-12 text-lg text-neutral-500 dark:text-neutral-400">
            If you need programming services or have any interest in IMSystem, get in touch with us.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2">
          <RevealOnScroll delay={100}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="mb-4 font-heading text-lg">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase text-primary">Email</p>
                  <p className="text-neutral-600 dark:text-neutral-400">{person.email}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase text-primary">Phone</p>
                  <p className="text-neutral-600 dark:text-neutral-400">416 887 5555</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase text-primary">Address</p>
                  <p className="text-neutral-600 dark:text-neutral-400">123 address st.</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase text-primary">Website</p>
                  <p className="text-neutral-600 dark:text-neutral-400">yourwebsite.com</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="mb-4 font-heading text-lg">Social Links</h3>
              <div className="space-y-3">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                      {item.icon === 'github' && '⌘'}
                      {item.icon === 'linkedin' && 'in'}
                      {item.icon === 'instagram' && '◎'}
                      {item.icon === 'email' && '✉'}
                    </span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.link.replace(/https?:\/\//, '').slice(0, 30)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
};

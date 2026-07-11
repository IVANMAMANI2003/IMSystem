import { SEO } from '@/presentation/components/SEO';
import { RevealOnScroll } from '@/presentation/components/RevealOnScroll';
import { gallery } from '@/resources';

export const GalleryPage = () => {
  return (
    <>
      <SEO
        title="Gallery"
        description={gallery.description}
        canonical="/gallery"
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <RevealOnScroll>
          <h1 className="mb-8 font-heading text-4xl sm:text-5xl">{gallery.title}</h1>
        </RevealOnScroll>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.images.map((img, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="mb-4 break-inside-avoid">
                <div
                  className={`w-full rounded-2xl bg-cover bg-center ${
                    img.orientation === 'vertical' ? 'h-80' : 'h-56'
                  }`}
                  style={{ backgroundImage: `url('${img.src}')` }}
                />
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {img.alt}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};

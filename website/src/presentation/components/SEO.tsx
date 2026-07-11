import { Helmet } from 'react-helmet-async';
import { baseURL, schema } from '@/resources';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  canonical = '/',
  image = '/images/og/home.jpg',
}: SEOProps) => {
  const fullTitle = `${title} | ${schema.name}`;
  const url = `${baseURL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseURL}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={schema.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseURL}${image}`} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': schema.type,
          name: schema.name,
          description: schema.description,
          url: url,
          email: schema.email,
        })}
      </script>
    </Helmet>
  );
};

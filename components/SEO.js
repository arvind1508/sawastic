import { NextSeo } from 'next-seo';

export default function SEO({ title, description }) {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        url: 'https://your-site-url.com',
        type: 'website',
      }}
    />
  );
}

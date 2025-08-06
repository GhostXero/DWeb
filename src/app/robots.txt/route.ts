import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.deberventilation.dk';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      disallow: '/admin/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
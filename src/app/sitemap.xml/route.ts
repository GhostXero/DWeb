import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.deberventilation.dk';
  
  const staticPages = [
    '',
    '/about',
    '/about/history',
    '/about/team',
    '/about/cases',
    '/services',
    '/services/boligventilation',
    '/services/komfortventilation',
    '/services/industriventilation',
    '/services/energioptimering',
    '/services/affugtning-befugtning',
    '/services/projektering',
    '/services/indregulering',
    '/services/service-vedligehold',
    '/resources',
    '/resources/faq',
    '/resources/blog',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));

  return sitemap;
}
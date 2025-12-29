import { MetadataRoute } from 'next';
import { builder } from '@/lib/builder';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = await builder.getAll('page', {
        options: { noTargeting: true },
        fields: 'data.url,data.noindex,lastUpdated',
        limit: 1000,
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return pages
        .filter(page => !page.data?.noindex) // Exclude pages marked as noindex
        .map(page => ({
            url: `${siteUrl}${page.data?.url || ''}`,
            lastModified: page.lastUpdated ? new Date(page.lastUpdated) : new Date(),
            changeFrequency: 'weekly',
            priority: (page.data?.url === '/' || page.data?.url === '') ? 1 : 0.8,
        }));
}

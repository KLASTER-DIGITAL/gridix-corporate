import { MetadataRoute } from 'next';
import { builder } from '@/lib/builder';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Fetch pages
    let pages: any[] = [];
    try {
        pages = await builder.getAll('page', {
            options: { noTargeting: true },
            fields: 'data.url,data.noindex,lastUpdated',
            limit: 1000,
        });
    } catch (error) {
        console.error('Sitemap: Failed to fetch pages:', error);
    }

    // Fetch case studies
    let cases: any[] = [];
    try {
        cases = await builder.getAll('case-study', {
            options: { noTargeting: true },
            fields: 'data.slug,lastUpdated',
            limit: 100,
        });
    } catch (error) {
        console.error('Sitemap: Failed to fetch case studies:', error);
    }

    const pageEntries: MetadataRoute.Sitemap = pages
        .filter(page => !page.data?.noindex)
        .map(page => ({
            url: `${siteUrl}${page.data?.url || ''}`,
            lastModified: page.lastUpdated ? new Date(page.lastUpdated) : new Date(),
            changeFrequency: 'weekly',
            priority: (page.data?.url === '/' || page.data?.url === '') ? 1 : 0.8,
        }));

    const caseEntries: MetadataRoute.Sitemap = cases.map(item => ({
        url: `${siteUrl}/cases/${item.data?.slug}`,
        lastModified: item.lastUpdated ? new Date(item.lastUpdated) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Add static list page
    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/cases`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    ];

    return [...pageEntries, ...caseEntries, ...staticEntries];
}

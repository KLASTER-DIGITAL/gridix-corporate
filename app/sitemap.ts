import { MetadataRoute } from 'next';
import { builder } from '@/lib/builder';

interface BuilderSitemapItem {
    data?: {
        url?: string;
        slug?: string;
        noindex?: boolean;
    };
    lastUpdated?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gridix.live';
    const locales = ['ru', 'en'];

    // Fetch pages
    let builderPages: BuilderSitemapItem[] = [];
    try {
        builderPages = (await builder.getAll('page', {
            options: { noTargeting: true },
            fields: 'data.url,data.noindex,lastUpdated',
            limit: 1000,
        })) as unknown as BuilderSitemapItem[];
    } catch (error) {
        console.error('Sitemap: Failed to fetch pages:', error);
    }

    // Fetch case studies
    let cases: BuilderSitemapItem[] = [];
    try {
        cases = (await builder.getAll('case-study', {
            options: { noTargeting: true },
            fields: 'data.slug,lastUpdated',
            limit: 100,
        })) as unknown as BuilderSitemapItem[];
    } catch (error) {
        console.error('Sitemap: Failed to fetch case studies:', error);
    }

    // Fetch blog posts
    let blogPosts: BuilderSitemapItem[] = [];
    try {
        blogPosts = (await builder.getAll('blog-post', {
            options: { noTargeting: true },
            fields: 'data.slug,lastUpdated',
            limit: 100,
        })) as unknown as BuilderSitemapItem[];
    } catch (error) {
        console.error('Sitemap: Failed to fetch blog posts:', error);
    }

    // Fetch comparisons
    let comparisons: BuilderSitemapItem[] = [];
    try {
        comparisons = (await builder.getAll('comparison', {
            options: { noTargeting: true },
            fields: 'data.slug,lastUpdated',
            limit: 100,
        })) as unknown as BuilderSitemapItem[];
    } catch (error) {
        console.error('Sitemap: Failed to fetch comparisons:', error);
    }

    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        // Builder Pages
        builderPages.filter(page => !page.data?.noindex).forEach(page => {
            const urlPath = page.data?.url === '/' ? '' : page.data?.url;
            sitemapEntries.push({
                url: `${siteUrl}/${locale}${urlPath}`,
                lastModified: new Date(page.lastUpdated || Date.now()),
                changeFrequency: 'weekly',
                priority: (urlPath === '' || urlPath === '/') ? 1.0 : 0.8,
            });
        });

        // Case Studies
        cases.forEach(item => {
            sitemapEntries.push({
                url: `${siteUrl}/${locale}/cases/${item.data?.slug}`,
                lastModified: new Date(item.lastUpdated || Date.now()),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Blog Posts
        blogPosts.forEach(item => {
            sitemapEntries.push({
                url: `${siteUrl}/${locale}/blog/${item.data?.slug}`,
                lastModified: new Date(item.lastUpdated || Date.now()),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Comparisons
        comparisons.forEach(item => {
            sitemapEntries.push({
                url: `${siteUrl}/${locale}/compare/${item.data?.slug}`,
                lastModified: new Date(item.lastUpdated || Date.now()),
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });

        // Static List Pages
        sitemapEntries.push({
            url: `${siteUrl}/${locale}/cases`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
        sitemapEntries.push({
            url: `${siteUrl}/${locale}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    return sitemapEntries;
}

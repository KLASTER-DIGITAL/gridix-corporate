import { builder } from '@/lib/builder';
import { notFound } from 'next/navigation';
import { RenderBuilderContent } from '@/components/builder-renderer';
import type { Metadata } from 'next';

// ISR Revalidation
export const revalidate = 60;

interface PageProps {
    params: Promise<{ locale: string; slug?: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    const locales = ['en', 'ru'];

    // If no API key is set, return empty params to avoid build error
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return locales.map(locale => ({ locale, slug: [] }));
    }

    try {
        const pages = await builder.getAll('page', {
            options: { noTargeting: true },
            fields: 'data.url',
            limit: 100,
        });

        const paths: { locale: string; slug: string[] }[] = [];
        for (const locale of locales) {
            for (const page of pages) {
                const url = page.data?.url;
                if (!url || url === '/') {
                    paths.push({ locale, slug: [] });
                } else {
                    paths.push({
                        locale,
                        slug: url.split('/').filter((x: string) => x && x !== ''),
                    });
                }
            }
        }

        // Ensure homepages are present
        locales.forEach(locale => {
            if (!paths.some(p => p.locale === locale && p.slug.length === 0)) {
                paths.push({ locale, slug: [] });
            }
        });

        return paths;
    } catch (error) {
        console.warn('Failed to fetch builder pages for static params:', error);
        return locales.map(locale => ({ locale, slug: [] }));
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const urlPath = '/' + (resolvedParams?.slug?.join('/') || '');

    let content = null;
    try {
        content = await builder.get('page', {
            userAttributes: { urlPath, locale },
        }).promise();
    } catch (error) {
        console.error('Failed to fetch builder content for metadata:', error);
    }

    if (!content) {
        return {
            title: 'Not Found',
        };
    }

    const data = content.data || {};
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const canonicalPath = data.canonical || (siteUrl + urlPath);

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            images: data.ogImage ? [{ url: data.ogImage }] : undefined,
            url: siteUrl + urlPath,
        },
        alternates: {
            canonical: canonicalPath,
        },
        robots: data.noindex ? { index: false, follow: false } : undefined,
    };
}

import { HomePage } from '@/components/templates/HomePage';
import { SolutionsDeveloperPage } from '@/components/templates/SolutionsDeveloperPage';
import { SolutionsAgencyPage } from '@/components/templates/SolutionsAgencyPage';
import { SolutionsBrokerPage } from '@/components/templates/SolutionsBrokerPage';
import { SolutionsClientPage } from '@/components/templates/SolutionsClientPage';
import { PartnerProgramPage } from '@/components/templates/PartnerProgramPage';

export default async function Page({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const resolvedSearchParams = await searchParams;
    const urlPath = '/' + (resolvedParams?.slug?.join('/') || '');

    let content = null;
    try {
        content = await builder.get('page', {
            userAttributes: { urlPath, locale },
        }).promise();
    } catch (error) {
        console.error('Failed to fetch builder content:', error);
    }

    // Check if we are in preview mode
    // Builder preview adds query params like 'builder.preview=...'
    const isPreviewing = !!(resolvedSearchParams?.['builder.preview']);

    if (urlPath === '/solutions/developers') {
        return <SolutionsDeveloperPage />;
    }
    if (urlPath === '/solutions/agencies') {
        return <SolutionsAgencyPage />;
    }
    if (urlPath === '/solutions/brokers') {
        return <SolutionsBrokerPage />;
    }
    if (urlPath === '/solutions/buyers') {
        return <SolutionsClientPage />;
    }
    if (urlPath === '/partners') {
        return <PartnerProgramPage />;
    }

    if (!content && !isPreviewing) {
        if (urlPath === '/') {
            return <HomePage />;
        }
        notFound();
    }

    return (
        <RenderBuilderContent content={content} model="page" />
    );
}

import { builder } from '@/lib/builder';
import { notFound } from 'next/navigation';
import { RenderBuilderContent } from '@/components/builder-renderer';
import type { Metadata } from 'next';

// ISR Revalidation
export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug?: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    // If no API key is set, return empty params to avoid build error
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return [];
    }

    try {
        const pages = await builder.getAll('page', {
            options: { noTargeting: true },
            fields: 'data.url',
            limit: 100,
        });

        return pages
            .map((page) => {
                const url = page.data?.url;
                // Homepage is usually '/' or empty string
                if (!url || url === '/') return { slug: [] };

                // Ensure strict slug array for catch-all
                return {
                    slug: url.split('/').filter((x: string) => x && x !== ''),
                };
            })
            // Unique urls
            .filter((v, i, a) => a.findIndex(t => t.slug.join('/') === v.slug.join('/')) === i);
    } catch (error) {
        console.warn('Failed to fetch builder pages for static params:', error);
        return [];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const urlPath = '/' + (resolvedParams?.slug?.join('/') || '');

    const content = await builder.get('page', {
        userAttributes: { urlPath },
    }).promise();

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
    const resolvedSearchParams = await searchParams;
    const urlPath = '/' + (resolvedParams?.slug?.join('/') || '');

    const content = await builder.get('page', {
        userAttributes: { urlPath },
    }).promise();

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

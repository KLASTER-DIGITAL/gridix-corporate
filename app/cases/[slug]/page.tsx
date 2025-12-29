import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";
import { RenderBuilderContent } from "@/components/builder-renderer";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BuilderCaseStudy } from "@/lib/types/case-study";
import { BuilderContent } from "@builder.io/sdk";
import { Metadata } from "next";

export const revalidate = 3600; // 1 hour instead of 60 seconds

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

async function getCaseStudy(slug: string) {
    return (await builder.get("case-study", {
        query: {
            "data.slug": slug,
        },
    }).promise()) as unknown as BuilderCaseStudy;
}

export async function generateStaticParams() {
    const cases = (await builder.getAll("case-study", {
        options: { noTargeting: true },
        fields: "data.slug",
    })) as unknown as BuilderCaseStudy[];

    return cases.map((item) => ({
        slug: item.data.slug,
    }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const content = await getCaseStudy(slug);

    if (!content) return {};

    const { data } = content;
    const title = data.seoTitle || `${data.title} | Кейсы GRIDIX`;
    const description = data.seoDescription || data.summary;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            images: data.image ? [{ url: data.image }] : [],
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/cases/${slug}`,
        }
    };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center">
                <p className="text-slate-400">Builder.io API key is missing. Please check your configuration.</p>
            </main>
        );
    }

    const content = await getCaseStudy(slug);

    if (!content) {
        notFound();
    }

    const { data } = content;

    // JSON-LD Schema.org
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.seoDescription || data.summary,
        "author": { "@type": "Organization", "name": "GRIDIX" },
        "image": data.image,
        "datePublished": data.date,
        "about": [
            { "@type": "SoftwareApplication", "name": "GRIDIX v1" },
            { "@type": "Thing", "name": "Продажи недвижимости" }
        ]
    };

    // If using Builder Layout, render full page without the legacy wrapper
    if (data.useBuilderLayout) {
        return (
            <main className="min-h-screen bg-white">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <RenderBuilderContent content={content as unknown as BuilderContent} model="case-study" />
            </main>
        );
    }

    // Legacy / Hybrid Layout
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container px-4 md:px-6 mx-auto">
                <Link href="/cases" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Назад к кейсам
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 text-blue-400 font-medium mb-4">
                            <span className="uppercase tracking-widest text-xs">Индустрия: Недвижимость</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                            <span className="text-sm">{data.company}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {data.title}
                        </h1>

                        <div className={`w-full aspect-video rounded-3xl mb-12 relative ${data.imageGradient || 'bg-slate-900'} border border-white/5 overflow-hidden`}>
                            {/* Placeholder for Main Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold text-white/5 select-none">{data.company}</span>
                            </div>
                        </div>

                        <div className="prose prose-invert prose-blue max-w-none">
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                {data.summary}
                            </p>

                            {content.data?.blocks && (
                                <RenderBuilderContent content={content as unknown as BuilderContent} model="case-study" />
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Stats Sidebar */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-lg font-bold text-white mb-6">Результаты в цифрах</h3>
                                <div className="space-y-6">
                                    {data.stats?.map((s, i) => (
                                        <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                            <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                                            <div className="text-sm text-slate-400">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Share & Info */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-6 text-slate-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {data.date ? new Date(data.date).toLocaleDateString('ru-RU') : 'Недавно'}
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>

                                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-6 h-auto">
                                    Обсудить внедрение
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

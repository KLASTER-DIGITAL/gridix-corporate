import { Metadata } from "next";
import { notFound } from "next/navigation";
import { builder } from "@/lib/builder";
import { CompareHero } from "@/components/sections/compare/CompareHero";
import { ComparisonTable } from "@/components/sections/compare/ComparisonTable";
import { CompareFeatureNarrative } from "@/components/sections/compare/CompareFeatureNarrative";
import { CompareRoadmap } from "@/components/sections/compare/CompareRoadmap";
import { WhySwitch } from "@/components/sections/compare/WhySwitch";
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA";
import { ComparisonData } from "@/lib/types/comparison";

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

const FALLBACK_DATA: Record<string, Record<string, ComparisonData>> = {
    "gridix-vs-flatris": {
        ru: {
            title: "GRIDIX vs Flatris (RU)",
            slug: "gridix-vs-flatris",
            heroBadge: "Сравнение платформ 2026",
            heroTitle: "GRIDIX: Эволюция управления недвижимостью",
            heroSubtitle: "Почему передовые девелоперы переходят с Flatris на GRIDIX? Сравнение функций, экономики и возможностей роста в одной таблице.",
            competitorName: "Flatris",
            whySwitchTitle: "Почему вы переросли Flatris?",
            whySwitchSubtitle: "Стандартные решения хороши для малого бизнеса. Но если ваша цель — масштабирование и международная экпансия, вам нужна экосистема.",
            painPoints: [
                {
                    title: "Фрагментация данных",
                    description: "У Flatris шахматка существует отдельно от маркетинга и внешних агентов. В GRIDIX — это единый живой организм."
                },
                {
                    title: "Упущенная выгода",
                    description: "Без динамического ценообразования вы теряете в среднем 5-7% маржи на каждом проданном объекте."
                },
                {
                    title: "Сложность интеграций",
                    description: "GRIDIX спроектирован как API-first платформа. Мы встраиваемся в ваш IT-ландшафт за дни, а не месяцы."
                }
            ],
            comparisonTable: [
                {
                    categoryName: "Основные возможности V1",
                    features: [
                        { featureName: "Интерактивная шахматка (2D/3D)", competitorValue: true, gridixV1Value: true, gridixV2Value: true },
                        { featureName: "Мультиязычность (RU/EN/AR)", competitorValue: "Limited", gridixV1Value: true, gridixV2Value: true },
                        { featureName: "API-first архитектура", competitorValue: false, gridixV1Value: true, gridixV2Value: true }
                    ]
                },
                {
                    categoryName: "GRIDIX V2: AI & Ecosystem",
                    features: [
                        { featureName: "AI Yield Management", competitorValue: false, gridixV1Value: false, gridixV2Value: true, isHighlighted: true },
                        { featureName: "Глобальная сеть агентов", competitorValue: false, gridixV1Value: false, gridixV2Value: true, isHighlighted: true }
                    ]
                }
            ]
        },
        en: {
            title: "GRIDIX vs Flatris (EN)",
            slug: "gridix-vs-flatris",
            heroBadge: "Platform Comparison 2026",
            heroTitle: "GRIDIX: Evolution of Real Estate Management",
            heroSubtitle: "Why leading developers switch from Flatris to GRIDIX? Compare features, economics, and growth potential.",
            competitorName: "Flatris",
            whySwitchTitle: "Why you've outgrown Flatris?",
            whySwitchSubtitle: "Standard solutions are fine for small businesses. But if you aim for scaling, you need an ecosystem.",
            painPoints: [
                { title: "Data Fragmentation", description: "In Flatris, inventory is separate from marketing. In GRIDIX, it's one balanced ecosystem." },
                { title: "Lost Profit", description: "Without dynamic pricing, you lose 5-7% margin on every unit." }
            ],
            comparisonTable: [
                {
                    categoryName: "Core Features V1",
                    features: [
                        { featureName: "Interactive Inventory (2D/3D)", competitorValue: true, gridixV1Value: true, gridixV2Value: true }
                    ]
                }
            ]
        }
    }
};

async function getComparisonData(slug: string, locale: string) {
    try {
        const content = await builder
            .get("comparison", {
                query: { "data.slug": slug },
                userAttributes: { locale },
                options: { includeDrafts: true, noCache: true }
            })
            .toPromise();

        if (content?.data) {
            return content.data as ComparisonData;
        }

        console.warn(`[ComparePage] No Builder content for ${slug}. Checking fallback.`);
        return FALLBACK_DATA[slug]?.[locale] || FALLBACK_DATA[slug]?.["ru"];
    } catch (error) {
        console.error("Error fetching comparison data:", error);
        return FALLBACK_DATA[slug]?.[locale] || FALLBACK_DATA[slug]?.["ru"];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const data = await getComparisonData(slug, locale);

    if (!data) {
        return { title: "Comparison Not Found | GRIDIX" };
    }

    return {
        title: data.seoTitle || `${data.title} | GRIDIX Comparison`,
        description: data.seoDescription,
        alternates: {
            languages: {
                'ru': `/ru/compare/${slug}`,
                'en': `/en/compare/${slug}`,
            },
        },
    };
}

export default async function ComparePage({ params }: PageProps) {
    const { locale, slug } = await params;
    const data = await getComparisonData(slug, locale);

    if (!data) {
        notFound();
    }

    return (
        <main className="flex flex-col w-full bg-slate-950 overflow-x-hidden min-h-screen">
            <CompareHero data={data} />
            <CompareFeatureNarrative data={data} />
            <CompareRoadmap />
            <ComparisonTable data={data} />
            <WhySwitch data={data} />
            <SectionFinalCTA />
        </main>
    );
}

export async function generateStaticParams() {
    try {
        const pages = await builder.getAll("comparison", {
            fields: "data.slug",
            options: { noTargeting: true, includeDrafts: true },
        });

        const dynamicSlugs = pages.map((page: any) => page.data.slug);
        const allSlugs = Array.from(new Set([...dynamicSlugs, ...Object.keys(FALLBACK_DATA)]));

        return allSlugs.flatMap((slug) => [
            { locale: "ru", slug },
            { locale: "en", slug },
        ]);
    } catch {
        return Object.keys(FALLBACK_DATA).flatMap((slug) => [
            { locale: "ru", slug },
            { locale: "en", slug },
        ]);
    }
}

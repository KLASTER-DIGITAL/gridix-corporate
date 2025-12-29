import { builder } from "@/lib/builder";
import { getCachedData, setCachedData } from "@/lib/cache";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { BuilderCaseStudy } from "@/lib/types/case-study";

export const revalidate = 3600; // 1 hour instead of 60 seconds

export default async function CasesPage() {
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center">
                <p className="text-slate-400">Builder.io API key is missing. Please check your configuration.</p>
            </main>
        );
    }

    let cases: BuilderCaseStudy[] = [];
    const cacheKey = 'cases-list-all';

    // Try to get from cache first
    const cached = getCachedData<BuilderCaseStudy[]>(cacheKey);
    if (cached) {
        cases = cached;
    } else {
        try {
            cases = (await builder.getAll("case-study", {
                options: { noTargeting: true },
                sort: {
                    createdDate: -1,
                },
            })) as unknown as BuilderCaseStudy[];

            if (cases.length > 0) {
                setCachedData(cacheKey, cases);
            }
        } catch (error) {
            console.error('Failed to fetch cases from Builder:', error);
            // Return empty array on error - page will still load
            cases = [];
        }
    }

    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Кейсы и истории успеха
                    </h1>
                    <p className="text-xl text-slate-400">
                        Узнайте, как GRIDIX помогает лидерам рынка недвижимости масштабировать бизнес и оптимизировать процессы.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <Link key={item.id} href={`/cases/${item.data.slug}`} className="group">
                            <Card className="border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 overflow-hidden h-full flex flex-col">
                                <div className={`h-48 w-full relative ${item.data.imageGradient || 'bg-slate-800'} border-b border-white/5 overflow-hidden`}>
                                    {/* Placeholder for Case Image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white/5 select-none">{item.data.company}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-400 border border-white/5">
                                        {item.data.company}
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                        {item.data.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                        {item.data.summary}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {item.data.date ? new Date(item.data.date).toLocaleDateString('ru-RU') : 'Недавно'}
                                        </div>
                                        <div className="text-blue-400 group-hover:translate-x-1 transition-transform">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {cases.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                        <p className="text-slate-500">Пока здесь ничего нет. Скоро добавим новые кейсы!</p>
                    </div>
                )}
            </div>
        </main>
    );
}

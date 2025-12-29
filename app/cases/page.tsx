import { builder } from "@/lib/builder";
import { getCachedData, setCachedData } from "@/lib/cache";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { BuilderCaseStudy } from "@/lib/types/case-study";
import { OptimizedImage } from "@/components/OptimizedImage";

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
            cases = [];
        }
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Кейсы и истории успеха
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Узнайте, как GRIDIX помогает лидерам рынка недвижимости масштабировать бизнес и оптимизировать процессы.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <Link key={item.id} href={`/cases/${item.data.slug}`} className="group h-full">
                            <Card className="border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col rounded-[32px]">
                                <div className={`h-64 w-full relative ${item.data.imageGradient || 'bg-slate-50'} border-b border-slate-100 overflow-hidden`}>
                                    {item.data.image ? (
                                        <OptimizedImage 
                                            src={item.data.image} 
                                            alt={item.data.title} 
                                            fill 
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                                            <span className="text-4xl font-bold text-slate-200 select-none uppercase tracking-widest">GRIDIX</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                        {item.data.company}
                                    </div>
                                </div>
                                <CardContent className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {item.data.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {item.data.summary}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                            <Calendar className="w-4 h-4" />
                                            {item.data.date ? new Date(item.data.date).toLocaleDateString('ru-RU') : 'Недавно'}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {cases.length === 0 && (
                    <div className="text-center py-32 border-2 border-dashed border-slate-100 rounded-[40px] bg-slate-50">
                        <div className="max-w-xs mx-auto">
                            <p className="text-slate-400 font-medium">Пока здесь ничего нет. Скоро добавим новые кейсы!</p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

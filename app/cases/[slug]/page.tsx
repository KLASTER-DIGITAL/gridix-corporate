import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";
import { RenderBuilderContent } from "@/components/builder-renderer";
import { ArrowLeft, CheckCircle2, LayoutGrid, Info, Tag, Quote, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BuilderCaseStudy } from "@/lib/types/case-study";
import { BuilderContent } from "@builder.io/sdk";
import { Metadata } from "next";

export const revalidate = 60;

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

async function getCaseContent(slug: string) {
    const content = (await builder.get("case-study", {
        query: {
            "data.slug": slug,
        },
    }).promise()) as unknown as BuilderCaseStudy;
    return content;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const content = await getCaseContent(slug);

    if (!content) return {};

    const { data } = content;
    return {
        title: data.seoTitle || data.title,
        description: data.seoDescription || data.summary,
        alternates: {
            canonical: data.canonicalUrl,
        },
    };
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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center text-slate-400">
                Builder.io API key is missing.
            </main>
        );
    }

    const content = await getCaseContent(slug);

    if (!content) {
        notFound();
    }

    const { data } = content;

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            {/* Breadcrumbs */}
            <div className="pt-32 pb-8 border-b border-white/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Главная</Link>
                        <span>/</span>
                        <Link href="/cases" className="hover:text-blue-400 transition-colors">Кейсы</Link>
                        <span>/</span>
                        <span className="text-slate-300">{data.country || "Мир"}</span>
                        <span>/</span>
                        <span className="text-white truncate max-w-[200px]">{data.company}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="container px-4 md:px-6 mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                КЕЙС GRIDIX v1
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                                {data.heroH1 || data.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 font-medium">
                                {data.summary}
                            </p>

                            {/* Hero KPI Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                                {data.stats?.slice(0, 4).map((kpi, i) => (
                                    <div key={i} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md">
                                        <div className="text-2xl md:text-3xl font-black text-white mb-2">{kpi.value}</div>
                                        <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 h-14 rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                                    Записаться на демо
                                </Button>
                                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white font-bold px-8 h-14 rounded-2xl transition-all active:scale-95">
                                    Открыть демо Smart Catalog
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className={`aspect-square rounded-[2rem] relative overflow-hidden border border-white/10 shadow-2xl ${data.imageGradient || 'bg-slate-900'}`}>
                                {data.image ? (
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        fill
                                        priority
                                        className="object-cover opacity-80"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                                            <LayoutGrid className="w-10 h-10 text-white/20" />
                                        </div>
                                        <span className="text-3xl font-bold text-white/10">{data.company}</span>
                                    </div>
                                )}
                                <div className="absolute top-6 right-6 flex flex-col gap-2">
                                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-widest shadow-xl">
                                        {data.country}
                                    </div>
                                    <div className="bg-blue-600/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-widest shadow-xl">
                                        {data.segment || "Real Estate"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white/[0.02]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-24">
                            {/* Project Facts Table */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
                                <div className="p-8 md:p-12 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                                            <Info className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">Project Facts</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Локация</div>
                                                <div className="text-lg text-white font-medium">{data.country}{data.city ? `, ${data.city}` : ""}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Сегмент</div>
                                                <div className="text-lg text-white font-medium">{data.segment}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Портфель</div>
                                                <div className="text-lg text-white font-medium">{data.portfolio}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Срок запуска</div>
                                                <div className="text-lg text-white font-medium underline decoration-blue-500/50 underline-offset-4">{data.launchPeriod}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Модули GRIDIX v1</div>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {data.modulesList?.map((tag, i) => (
                                                        <span key={i} className="text-[10px] font-bold bg-white/5 text-slate-300 px-3 py-1 rounded-lg border border-white/5">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Context & Tasks */}
                            <div className="space-y-16">
                                <div className="max-w-2xl">
                                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                                        <span className="w-8 h-1 bg-blue-500 rounded-full" />
                                        Контекст / Проблема
                                    </h3>
                                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                                        {data.context}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.tasksList?.map((task, i) => (
                                        <div key={i} className="bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
                                            <div className="text-blue-500 font-black text-sm uppercase tracking-tighter mb-4 opacity-50">Задача №0{i + 1}</div>
                                            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{task.title}</h4>
                                            <ul className="space-y-4">
                                                {task.items.split('\n').map((item, j) => (
                                                    <li key={j} className="flex gap-3 text-slate-400 text-sm font-medium">
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution Section */}
                            <div className="space-y-12">
                                <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full" />
                                    Что сделали в GRIDIX v1
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {data.solutionList?.map((sol, i) => (
                                        <div key={i} className="group bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-900 transition-all">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                                                    <Tag className="w-5 h-5 text-slate-500 group-hover:text-blue-400" />
                                                </div>
                                                <div className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">{sol.feature}</div>
                                            </div>
                                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                {sol.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            {data.testimonialQuote && (
                                <div className="relative pt-12">
                                    <Quote className="absolute top-0 left-0 w-24 h-24 text-blue-500/10 -translate-x-8 -translate-y-4" />
                                    <div className="bg-blue-600 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl shadow-blue-600/20">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                        <blockquote className="text-2xl md:text-3xl font-bold text-white italic mb-12 relative">
                                            {data.testimonialQuote}
                                        </blockquote>
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-black text-white">
                                                {data.testimonialAuthor?.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-xl font-black text-white">{data.testimonialAuthor}</div>
                                                <div className="text-white/60 font-bold text-sm uppercase tracking-widest">{data.testimonialPosition}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Gridix Native Content (Blocks) */}
                            {content.data?.blocks && content.data.blocks.length > 0 && (
                                <div className="pt-24 border-t border-white/5">
                                    <h3 className="text-2xl font-bold text-white mb-12">Detail View</h3>
                                    <RenderBuilderContent content={content as unknown as BuilderContent} model="case-study" />
                                </div>
                            )}
                        </div>

                        {/* Sidebar Stats */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-32 space-y-6">
                                <div className="bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-2xl ring-1 ring-white/10">
                                    <h3 className="text-lg font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tighter">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        Результаты
                                    </h3>
                                    <div className="space-y-10">
                                        {data.stats?.map((s, i) => (
                                            <div key={i} className="group relative">
                                                <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter group-hover:text-blue-400 transition-colors">{s.value}</div>
                                                <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {data.resultsImpact && (
                                        <div className="mt-12 p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl">
                                            <div className="flex items-center gap-3 mb-4 text-blue-400">
                                                <HelpCircle className="w-5 h-5" />
                                                <span className="text-xs font-black uppercase">Влияние на доход</span>
                                            </div>
                                            <p className="text-sm text-slate-300 font-medium leading-relaxed italic">
                                                {data.resultsImpact}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Integrations sidebar card */}
                                <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-sm">
                                    <h3 className="text-xs font-black text-slate-500 mb-6 uppercase tracking-widest">Интеграции</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {data.integrationsList?.map((integ, i) => (
                                            <span key={i} className="bg-white/5 px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10">{integ}</span>
                                        ))}
                                    </div>
                                    <div className="mt-10 pt-10 border-t border-white/5 text-center">
                                        <Button className="w-full bg-white text-black hover:bg-slate-200 font-black rounded-2xl h-14 uppercase tracking-widest text-xs transition-all active:scale-95">
                                            Хочу такое же
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-600/30">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
                            Внедрите GRIDIX v1 в свой проект за 7 дней
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Начните продавать эффективнее с интерактивной шахматкой и автоматической синхронизацией в CRM.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Button className="bg-white text-blue-600 hover:bg-slate-100 font-black px-12 h-16 rounded-2xl text-lg transition-all active:scale-95">
                                Записаться на демо
                            </Button>
                            <Button variant="ghost" className="text-white hover:bg-white/10 font-black px-12 h-16 rounded-2xl text-lg transition-all border border-white/20">
                                Узнать цену
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Navigation */}
            <div className="container px-4 md:px-6 mx-auto pb-24 border-t border-white/5 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <Link href="/cases" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-black uppercase text-xs tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Все кейсы
                    </Link>
                    <div className="flex items-center gap-8">
                        <span className="text-slate-700 text-[10px] font-black uppercase tracking-widest">Свяжитесь с нами</span>
                        <a href="mailto:hi@gridix.live" className="text-white hover:text-blue-400 transition-colors font-black uppercase text-xs tracking-widest">hi@gridix.live</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

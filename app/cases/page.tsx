import { builder } from "@/lib/builder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BuilderCaseStudy } from "@/lib/types/case-study";

export const revalidate = 60;

export default async function CasesPage() {
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center text-slate-400">
                Builder.io API key is missing.
            </main>
        );
    }

    let cases: BuilderCaseStudy[] = [];

    try {
        cases = (await builder.getAll("case-study", {
            options: { noTargeting: true },
            sort: {
                createdDate: -1,
            },
        })) as unknown as BuilderCaseStudy[];
    } catch (error) {
        console.error("Failed to fetch cases:", error);
    }


    return (
        <main className="min-h-screen bg-slate-950 text-slate-200">
            {/* Hero Section */}
            <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent blur-[100px]" />
                <div className="container px-4 md:px-6 mx-auto relative">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
                            Success Stories
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Кейсы внедрения <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">GRIDIX v1</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                            Узнайте, как лидирующие девелоперы в ОАЭ, Грузии и СНГ автоматизируют продажи и увеличивают доход с нашими решениями.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-24 bg-white/[0.01]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((item) => (
                            <Link key={item.id} href={`/cases/${item.data.slug}`} className="group h-full">
                                <div className="h-full bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:bg-slate-900 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 backdrop-blur-sm group">
                                    {/* Card Header/Image */}
                                    <div className={`h-64 w-full relative ${item.data.imageGradient || 'bg-slate-900'} overflow-hidden`}>
                                        {item.data.image ? (
                                            <Image
                                                src={item.data.image}
                                                alt={item.data.title}
                                                fill
                                                priority={cases.indexOf(item) < 3}
                                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                                                <span className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-widest">{item.data.company}</span>
                                            </div>
                                        )}

                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">
                                                {item.data.country}
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
                                            <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">
                                                <Globe className="w-3 h-3" />
                                                {item.data.city || item.data.industry || "Global Project"}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                                            {item.data.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                                            {item.data.summary}
                                        </p>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {item.data.stats?.slice(0, 2).map((stat, i) => (
                                                <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                                                    <div className="text-lg font-black text-white">{stat.value}</div>
                                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                                                <Calendar className="w-3 h-3" />
                                                {item.data.date ? new Date(item.data.date).toLocaleDateString('ru-RU') : '2025 EDITION'}
                                            </div>
                                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {cases.length === 0 && (
                        <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]">
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <Building2 className="w-10 h-10 text-slate-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Кейсы скоро появятся</h3>
                            <p className="text-slate-500 max-w-sm mx-auto">
                                Мы готовим детальные описания наших последних внедрений. Заходите позже!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 border-t border-white/5">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 max-w-2xl">
                        Готовы повторить успех наших клиентов?
                    </h2>
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 h-16 rounded-[1.5rem] text-lg uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                        Обсудить ваш проект
                    </Button>
                </div>
            </section>
        </main>
    );
}

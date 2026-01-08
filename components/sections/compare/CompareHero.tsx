"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ComparisonData } from "@/lib/types/comparison";
import { ArrowRight, CheckCircle2, Globe, Shield, ShieldCheck, Zap } from "lucide-react";

interface Props {
    data: ComparisonData;
}

export function CompareHero({ data }: Props) {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-600/20 via-transparent to-transparent pointer-events-none blur-[120px]" />
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {data.heroBadge || "Сравнение платформ 2026"}
                    </motion.div>

                    {/* Logos Comparison */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 py-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-blue-500/20 border border-white/10 ring-4 ring-blue-500/10">
                                G
                            </div>
                            <span className="text-xl font-bold text-white tracking-widest uppercase">Gridix</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="text-slate-500 font-black text-2xl md:text-3xl italic"
                        >
                            VS
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 text-3xl font-bold border border-white/5">
                                F
                            </div>
                            <span className="text-xl font-bold text-slate-400 tracking-widest uppercase font-mono">{data.competitorName || "Flatris"}</span>
                        </motion.div>
                    </div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            {data.heroTitle || "GRIDIX: Эволюция управления недвижимостью"}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            {data.heroSubtitle || "Почему передовые девелоперы выбирают гибкость v1 и инновации v2 вместо наследия прошлого."}
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
                    >
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-14 px-8 text-lg font-semibold group flex-1 sm:flex-none shadow-xl shadow-blue-500/20 transition-all active:scale-95" asChild>
                            <Link href="/demo">
                                Забронировать демо
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 bg-transparent rounded-xl h-14 px-8 text-lg flex-1 sm:flex-none transition-all active:scale-95">
                            Скачать PDF-сравнение
                        </Button>
                    </motion.div>

                    {/* Trust Signals / Quick Highlights */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 w-full border-t border-white/5"
                    >
                        {[
                            { icon: CheckCircle2, label: "v1 Live", value: "Ready to deploy" },
                            { icon: Globe, label: "Multilingual", value: "EN / RU / KA / AR" },
                            { icon: ShieldCheck, label: "Security", value: "GDPR Compliant" },
                            { icon: Zap, label: "Future", value: "v2 Roadmap" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1 group">
                                <item.icon className="w-5 h-5 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-xs text-slate-500 uppercase tracking-widest">{item.label}</span>
                                <span className="text-sm font-medium text-slate-300">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

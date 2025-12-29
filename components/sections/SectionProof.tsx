"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const SectionProof = () => {
    // Enterprise logos placeholder (using text for now, should be SVGs)
    const clients = [
        "LSR Group", "PIK Group", "Etalon", "MR Group", "Donstroy", "Ingrad",
        "Setl Group", "Cortros", "A101", "Pioneer", "Sminex", "Stone Hedge"
    ];

    return (
        <section className="relative py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                            Результаты внедрения
                        </h2>
                        <p className="text-slate-400 max-w-xl text-lg">
                            Цифры, которые говорят сами за себя. Эффект от перехода на единую экосистему.
                        </p>
                    </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <ProofCard
                        value="+40%"
                        label="Целевых заявок"
                        desc="Рост конверсии благодаря интерактивному выбору лотов на сайте."
                        icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                    />
                    <ProofCard
                        value="x2"
                        label="Скорость сделки"
                        desc="Автоматическая генерация документов и бронирование без звонков."
                        icon={<Zap className="w-6 h-6 text-yellow-400" />}
                    />
                    <ProofCard
                        value="100%"
                        label="Точность данных"
                        desc="Полное исключение овербукинга и ошибок в ценах во всех каналах."
                        icon={<CheckCircle2 className="w-6 h-6 text-blue-400" />}
                    />
                </div>

                {/* LOGO WALL MARQUEE */}
                <div className="mb-24">
                    <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
                        Нам доверяют лидеры рынка
                    </p>
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                            {[...clients, ...clients, ...clients].map((client, i) => (
                                <span key={i} className="text-2xl font-bold text-slate-700 hover:text-slate-400 transition-colors cursor-default select-none">
                                    {client}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
                            {[...clients, ...clients, ...clients].map((client, i) => (
                                <span key={i} className="text-2xl font-bold text-slate-700 hover:text-slate-400 transition-colors cursor-default select-none">
                                    {client}
                                </span>
                            ))}
                        </div>
                        {/* Gradient Masks */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
                    </div>
                </div>


                {/* Testimonial Block */}
                <div className="relative rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/5 p-8 md:p-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
                        <div className="flex gap-6 max-w-3xl">
                            <Quote className="h-10 w-10 text-blue-500/30 shrink-0" />
                            <div>
                                <p className="text-xl md:text-2xl font-light text-slate-200 italic mb-6 leading-relaxed">
                                    &quot;Мы сократили время на актуализацию стоков для агентств с 3 дней до 5 минут. GRIDIX стал для нас единым источником правды.&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-400 ring-2 ring-slate-800">
                                        AI
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">Александр Иванов</div>
                                        <div className="text-sm text-slate-400">Коммерческий директор, Development Group</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 bg-transparent shrink-0" asChild>
                            <Link href="/cases">Все кейсы</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProofCard = ({ value, label, desc, icon }: { value: string, label: string, desc: string, icon: React.ReactNode }) => (
    <Card className="border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8 space-y-4">
            <div className="flex justify-between items-start">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tighter">
                    {value}
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/80">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-2">{label}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                    {desc}
                </p>
            </div>
        </CardContent>
    </Card>
);

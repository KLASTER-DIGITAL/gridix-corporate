"use client";

import { motion } from "framer-motion";
import { ComparisonData } from "@/lib/types/comparison";
import { CheckCircle2, Zap, Brain, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface Props {
    data: ComparisonData;
}

export function CompareFeatureNarrative({ data }: Props) {
    const sections = [
        {
            title: "GRIDIX v1: Тотальный контроль продаж",
            description: "Всё, что нужно застройщику здесь и сейчас. Прощайте, неактуальные остатки и потерянные лиды.",
            features: [
                "Интерактивная шахматка и плавные планировки",
                "Мгновенная PDF-презентация лота",
                "Двусторонняя синхронизация с amoCRM/Bitrix24",
                "Heatmap: аналитика спроса на основе реальных кликов"
            ],
            image: "/images/compare/v1-preview.png", // Fallback if no image in data
            reverse: false,
            color: "blue"
        },
        {
            title: "GRIDIX v2: AI и Глобальная экосистема",
            description: "Технологии будущего для масштабирования бизнеса. GRIDIX v2 объединяет застройщиков и агентов по всему миру.",
            features: [
                "AI Matchmaking: автоподбор идеального лота для клиента",
                "Yield Management: динамическое повышение цен через AI",
                "Commission Guarantee: защита вознаграждения агентов",
                "Certification Hub: работа с верифицированными партнерами"
            ],
            image: "/images/compare/v2-preview.png",
            reverse: true,
            color: "purple"
        }
    ];

    return (
        <section className="py-24 space-y-32">
            {sections.map((section, idx) => (
                <div key={idx} className="container mx-auto px-4">
                    <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                        <motion.div
                            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-8"
                        >
                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${section.color}-500/10 text-${section.color}-400 text-sm font-medium border border-${section.color}-500/20`}>
                                <Zap className="w-4 h-4" />
                                {idx === 0 ? "LIVE: v1" : "COMING SOON: v2"}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                {section.title}
                            </h2>
                            <p className="text-xl text-slate-400">
                                {section.description}
                            </p>
                            <ul className="space-y-4">
                                {section.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-slate-300">
                                        <CheckCircle2 className={`w-6 h-6 text-${section.color}-500 mt-0.5 shrink-0`} />
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-tr from-${section.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                            {/* In a real app, use optimized images. Using a placeholder for now. */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm">
                                <span className="text-slate-500 font-mono tracking-widest">{section.title} Preview</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    );
}

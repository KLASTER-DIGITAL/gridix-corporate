"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Rocket, Star, LayoutDashboard, Smartphone, Calculator, Brain, ShieldCheck } from "lucide-react";

const milestones = [
    {
        phase: "Q3 2025",
        status: "Live",
        title: "V1 Launch",
        items: ["Интерактивная визуализация", "Native CRM Sync", "Universal Widget"],
        icon: CheckCircle2,
        color: "emerald"
    },
    {
        phase: "Q1 2026",
        status: "In Development",
        title: "V2 Core",
        items: ["Agency CRM (Kanban)", "Agent Mobile App", "International Payments"],
        icon: LayoutDashboard,
        color: "blue"
    },
    {
        phase: "Q2 2026",
        status: "Planned",
        title: "AI & Trust",
        items: ["AI Matchmaking", "Certification Hub", "Client Lock"],
        icon: Brain,
        color: "purple"
    },
    {
        phase: "Q3-Q4 2026",
        status: "Roadmap",
        title: "Global Scale",
        items: ["Fintech Integrations", "Full Mobile Apps", "AI Yield Management"],
        icon: Rocket,
        color: "amber"
    }
];

export function CompareRoadmap() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Дорожная карта GRIDIX</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        От локального инструмента к глобальной экосистеме. Мы строим будущее недвижимости через AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {milestones.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-3xl border border-white/5 bg-slate-800/40 backdrop-blur-sm group hover:border-blue-500/30 transition-all"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className={`w-12 h-12 rounded-2xl bg-${m.color}-500/10 flex items-center justify-center text-${m.color}-500 group-hover:scale-110 transition-transform`}>
                                    <m.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{m.phase}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                            <div className={`text-[10px] font-bold uppercase tracking-wider mb-6 text-${m.color}-400 flex items-center gap-1.5`}>
                                <div className={`w-1 h-1 rounded-full bg-${m.color}-400 animate-pulse`} />
                                {m.status}
                            </div>

                            <ul className="space-y-3">
                                {m.items.map((item, iIdx) => (
                                    <li key={iIdx} className="text-sm text-slate-400 group-hover:text-slate-300 flex items-start gap-2">
                                        <div className="w-1 h-1 rounded-full bg-slate-700 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

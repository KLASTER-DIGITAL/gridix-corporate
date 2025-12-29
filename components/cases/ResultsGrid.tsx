"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { TrendingUp } from "lucide-react";

interface Kpi {
    value: string;
    label: string;
    description?: string;
}

interface ResultsGridProps {
    title?: string;
    kpis: Kpi[];
    moneyImpact?: string;
}

export const ResultsGrid = ({
    title = "Результаты внедрения",
    kpis = [],
    moneyImpact,
}: ResultsGridProps) => {
    return (
        <section className="bg-slate-900 py-20 lg:py-28 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {kpis.map((kpi, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors"
                                {...fadeInUpAnimation}
                                transition={{ delay: index * 0.1 }}
                                viewport={viewportSettings}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-105 transition-transform origin-left">{kpi.value}</div>
                                <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">{kpi.label}</div>
                                {kpi.description && <p className="text-xs text-slate-500 leading-relaxed">{kpi.description}</p>}
                            </motion.div>
                        ))}
                    </div>

                    {moneyImpact && (
                        <motion.div 
                            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 p-8 rounded-3xl"
                            {...fadeInUpAnimation}
                            viewport={viewportSettings}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-white mb-2">Влияние на доходность</h3>
                                    <p className="text-slate-300 leading-relaxed">{moneyImpact}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

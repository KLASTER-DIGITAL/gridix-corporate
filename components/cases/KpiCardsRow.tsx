"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";

interface Kpi {
    value: string;
    label: string;
}

interface KpiCardsRowProps {
    kpis: Kpi[];
}

export const KpiCardsRow = ({ kpis = [] }: KpiCardsRowProps) => {
    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {kpis.map((kpi, index) => (
                        <motion.div 
                            key={index}
                            className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center"
                            {...fadeInUpAnimation}
                            transition={{ delay: index * 0.1 }}
                            viewport={viewportSettings}
                        >
                            <div className="text-3xl font-bold text-blue-600 mb-1">{kpi.value}</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

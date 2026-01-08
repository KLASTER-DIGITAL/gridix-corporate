"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Globe2, Rocket, BarChart3, Users2, Zap, Layers } from "lucide-react";

import { ComparisonData } from "@/lib/types/comparison";

interface FeatureSpotlightProps {
    data: ComparisonData;
}

const icons = [
    <BrainCircuit key="ai" className="w-10 h-10 text-blue-500" />,
    <Globe2 key="globe" className="w-10 h-10 text-indigo-500" />,
    <Rocket key="rocket" className="w-10 h-10 text-cyan-500" />,
    <Layers key="layers" className="w-10 h-10 text-purple-500" />,
    <Zap key="zap" className="w-10 h-10 text-amber-500" />,
    <BarChart3 key="chart" className="w-10 h-10 text-emerald-500" />
];

const gradients = [
    "from-blue-500/10 to-indigo-500/10",
    "from-indigo-500/10 to-purple-500/10",
    "from-cyan-500/10 to-blue-500/10",
    "from-purple-500/10 to-pink-500/10",
    "from-amber-500/10 to-orange-500/10",
    "from-emerald-500/10 to-teal-500/10"
];

export const FeatureSpotlight = ({ data }: FeatureSpotlightProps) => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="space-y-24">
                    {data.spotlights?.map((spot, idx) => {
                        const icon = icons[idx % icons.length];
                        const gradient = gradients[idx % gradients.length];

                        return (
                            <motion.div
                                key={idx}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="flex-1 space-y-6">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-inner`}>
                                        {icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                        {spot.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {spot.description}
                                    </p>
                                    <div className="flex gap-8 pt-4">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">{spot.statValue}</div>
                                            <div className="text-sm text-slate-500 uppercase font-medium tracking-wide">{spot.statLabel}</div>
                                        </div>
                                        <div className="w-px h-12 bg-slate-200" />
                                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span>Доказано внедрением</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full max-w-xl">
                                    <div className={`aspect-square rounded-3xl bg-gradient-to-br ${gradient} border border-slate-200 shadow-2xl relative overflow-hidden group`}>
                                        {spot.image ? (
                                            <div className="absolute inset-0">
                                                <img
                                                    src={spot.image}
                                                    alt={spot.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-8 bg-white/80 backdrop-blur rounded-2xl border border-slate-100 shadow-lg p-6 flex flex-col gap-4">
                                                <div className="h-6 w-1/3 bg-slate-100 rounded" />
                                                <div className="flex-1 flex gap-4">
                                                    <div className="flex-[2] bg-slate-50 rounded-lg flex flex-col p-4 gap-2">
                                                        {[1, 2, 3, 4].map(i => <div key={i} className="h-4 bg-slate-100 rounded w-full" style={{ opacity: 1 - i * 0.2 }} />)}
                                                    </div>
                                                    <div className="flex-1 flex flex-col gap-4">
                                                        <div className="aspect-square bg-blue-100 rounded-lg animate-pulse" />
                                                        <div className="flex-1 bg-indigo-50 rounded-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

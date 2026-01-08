"use client";

import * as React from "react";
import { Check, X, Star, Zap, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComparisonData } from "@/lib/types/comparison";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface ComparisonTableProps {
    data: ComparisonData;
}

export function ComparisonTable({ data }: ComparisonTableProps) {
    if (!data.comparisonTable || data.comparisonTable.length === 0) return null;

    return (
        <section id="table" className="py-24 bg-slate-950 relative">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Матрица возможностей</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Детальное сравнение функционала GRIDIX v1 & v2 с классическими решениями.
                    </p>
                </div>

                <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                    <table className="w-full border-collapse text-left relative">
                        <thead className="sticky top-0 z-20 backdrop-blur-xl bg-slate-950/90 shadow-lg after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/10">
                            <tr>
                                <th className="p-8 text-slate-400 font-medium min-w-[280px] bg-slate-950/90">Функционал</th>
                                <th className="p-8 text-center min-w-[160px] bg-slate-950/90">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Legacy</span>
                                        <span className="text-xl font-bold text-slate-400">{data.competitorName || "Flatris"}</span>
                                    </div>
                                </th>
                                <th className="p-8 text-center min-w-[160px] bg-blue-500/10 backdrop-blur-md border-x border-blue-500/10">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Live Now</span>
                                        <span className="text-xl font-bold text-white">GRIDIX v1</span>
                                    </div>
                                </th>
                                <th className="p-8 text-center min-w-[180px] bg-blue-600/10 backdrop-blur-md relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/5 animate-pulse-slow pointer-events-none" />
                                    <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                                        <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/30">Next-Gen</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 relative z-10">
                                        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Coming Soon</span>
                                        <span className="text-xl font-bold text-blue-400 glow-text">GRIDIX v2</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.comparisonTable.map((section, idx) => (
                                <React.Fragment key={idx}>
                                    <tr className="bg-slate-950/50 sticky top-[100px] z-10 backdrop-blur-md">
                                        <td colSpan={4} className="px-8 py-4 text-xs font-black text-slate-500 uppercase tracking-[0.2em] bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent border-t border-b border-white/5">
                                            {section.categoryName}
                                        </td>
                                    </tr>
                                    {section.features?.map((item, itemIdx) => (
                                        <motion.tr
                                            key={itemIdx}
                                            className="group hover:bg-blue-500/[0.02] transition-colors"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                        >
                                            <td className="p-8 font-medium text-slate-300">
                                                <div className="flex items-center gap-2 group/info">
                                                    {item.featureName}
                                                    {item.isHighlighted && <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />}
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <Info className="w-3.5 h-3.5 text-slate-600 hover:text-slate-400 transition-colors" />
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-slate-800 border-white/10 text-slate-200">
                                                                <p className="text-xs">Подробнее в документации GRIDIX</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                            </td>
                                            <td className="p-8 text-center">
                                                <StatusCell value={item.competitorValue} type="competitor" />
                                            </td>
                                            <td className="p-8 text-center bg-blue-500/5">
                                                <StatusCell value={item.gridixV1Value} type="v1" />
                                            </td>
                                            <td className="p-8 text-center bg-blue-600/10">
                                                <StatusCell value={item.gridixV2Value} type="v2" />
                                            </td>
                                        </motion.tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function StatusCell({ value, type }: { value: string | boolean | null | undefined, type: string }) {
    if (typeof value === "string") {
        return (
            <span className={cn(
                "text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap",
                type === "v2" ? "bg-blue-400/10 text-blue-400 border border-blue-400/20" :
                    type === "v1" ? "bg-blue-500/10 text-blue-300 border border-blue-500/20" :
                        "bg-slate-800 text-slate-500 border border-white/5"
            )}>
                {value}
            </span>
        );
    }

    if (value === true) {
        return (
            <div className="flex justify-center">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                    type === "v2" ? "bg-blue-400/20 text-blue-400" :
                        type === "v1" ? "bg-blue-500/20 text-blue-500" :
                            "bg-emerald-500/20 text-emerald-500"
                )}>
                    <Check className="w-5 h-5" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center opacity-20 group-hover:opacity-40 transition-opacity">
            <X className="w-6 h-6 text-slate-500" />
        </div>
    );
}

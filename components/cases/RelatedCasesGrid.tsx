"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CaseCard {
    slug: string;
    title: string;
    country: string;
    kpi: string;
    image?: string;
}

interface RelatedCasesGridProps {
    title?: string;
    cases: CaseCard[];
}

export const RelatedCasesGrid = ({
    title = "Другие кейсы",
    cases = [],
}: RelatedCasesGridProps) => {
    return (
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <motion.h2 
                            className="text-3xl font-bold text-slate-900"
                            {...fadeInUpAnimation}
                            viewport={viewportSettings}
                        >
                            {title}
                        </motion.h2>
                        <motion.div
                            {...fadeInUpAnimation}
                            viewport={viewportSettings}
                        >
                            <Link href="/cases" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                                Все кейсы
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cases.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
                                {...fadeInUpAnimation}
                                transition={{ delay: index * 0.1 }}
                                viewport={viewportSettings}
                            >
                                <Link href={`/cases/${item.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                                    {item.image ? (
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-200 font-bold text-2xl uppercase tracking-widest bg-gradient-to-br from-slate-100 to-slate-200">
                                            GRIDIX
                                        </div>
                                    )}
                                    <Badge className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-slate-900 border-none shadow-sm py-1 px-3 rounded-full text-xs font-bold">
                                        {item.country}
                                    </Badge>
                                </Link>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 flex-grow">
                                        <Link href={`/cases/${item.slug}`} className="hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Ключевой результат</span>
                                            <span className="text-lg font-bold text-blue-600">{item.kpi}</span>
                                        </div>
                                        <Link href={`/cases/${item.slug}`} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

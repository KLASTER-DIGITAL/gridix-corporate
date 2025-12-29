"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "../OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { CtaButton } from "../CtaButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeInUpAnimation, fadeInAnimation } from "@/lib/motion-utils";
import { ChevronRight } from "lucide-react";

interface Kpi {
    value: string;
    label: string;
}

interface CaseHeroProps {
    title: string;
    subtitle: string;
    kpis?: Kpi[];
    image?: string;
    country?: string;
    city?: string;
    segment?: string;
    breadcrumbs?: { label: string; href: string }[];
}

export const CaseHero = ({
    title,
    subtitle,
    kpis = [],
    image,
    country,
    city,
    segment,
    breadcrumbs = [],
}: CaseHeroProps) => {
    return (
        <section className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Главная</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href="/cases" className="hover:text-blue-600 transition-colors">Кейсы</Link>
                    {(country || segment) && (
                        <>
                            <ChevronRight className="w-4 h-4 flex-shrink-0" />
                            <span className="text-slate-600">{country || segment}</span>
                        </>
                    )}
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-slate-900 font-medium truncate">{title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <motion.div {...fadeInUpAnimation}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                {title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                                {subtitle}
                            </p>
                        </motion.div>

                        {/* KPI Mini-cards */}
                        {kpis.length > 0 && (
                            <motion.div 
                                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                                {...fadeInUpAnimation}
                                transition={{ delay: 0.2 }}
                            >
                                {kpis.slice(0, 3).map((kpi, index) => (
                                    <div key={index} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md transition-shadow">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">{kpi.value}</div>
                                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{kpi.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* CTA Row */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            {...fadeInUpAnimation}
                            transition={{ delay: 0.3 }}
                        >
                            <CtaButton
                                label="Записаться на демо"
                                href="/demo"
                                className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20"
                            />
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-slate-200 bg-white hover:bg-slate-50 text-slate-900 rounded-xl" asChild>
                                <Link href="/smart-catalog-demo">Открыть демо Smart Catalog</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        className="relative"
                        {...fadeInAnimation}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-2xl relative bg-slate-50">
                            {image ? (
                                <OptimizedImage
                                    src={image}
                                    alt={title}
                                    fill
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-12">
                                        <div className="text-center space-y-4">
                                            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                                                <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin" />
                                            </div>
                                            <div className="text-slate-300 font-bold text-4xl uppercase tracking-widest opacity-20 select-none">GRIDIX v1</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Badges Overlay */}
                        <div className="absolute -bottom-6 -right-6 flex flex-col gap-2 p-2">
                            {country && (
                                <Badge className="bg-white text-slate-900 border border-slate-100 shadow-sm py-1.5 px-4 rounded-full text-sm font-semibold">
                                    {country}
                                </Badge>
                            )}
                            {city && (
                                <Badge className="bg-white text-slate-600 border border-slate-100 shadow-sm py-1.5 px-4 rounded-full text-xs font-medium">
                                    {city}
                                </Badge>
                            )}
                            {segment && (
                                <Badge className="bg-blue-600 text-white border-none shadow-sm py-1.5 px-4 rounded-full text-xs font-medium">
                                    {segment}
                                </Badge>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

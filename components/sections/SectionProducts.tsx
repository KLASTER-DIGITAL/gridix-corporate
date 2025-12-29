"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, Database, Key, Settings, Sparkles, BarChart3, Globe2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";

export const SectionProducts = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Экосистема GRIDIX</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Единая платформа продаж
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Замените зоопарк разрозненных сервисов одним мощным решением.
                        От интерактивного каталога до выдачи ключей.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                    {/* Item 1: Smart Catalog (Large Hero - Col Span 2) */}
                    <motion.div
                        {...fadeInUpAnimation}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <div className="relative z-10 p-10 flex flex-col h-full bg-gradient-to-br from-white via-white to-blue-50/50">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
                                <LayoutGrid className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Smart Catalog & Шахматка</h3>
                            <p className="text-slate-500 mb-6 max-w-md">
                                Интерактивная 3D-витрина для вашего сайта. Фильтры, планы этажей и pdf-презентации.
                            </p>

                            <div className="mt-auto">
                                <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold group-hover:translate-x-1 transition-transform" asChild>
                                    <Link href="/smart-catalog" className="flex items-center gap-2">
                                        Смотреть демо <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual Mockup for Catalog */}
                        <div className="absolute top-10 right-[-10%] w-[60%] h-full shadow-2xl rounded-tl-2xl overflow-hidden border border-slate-200 group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets%2F4a7eb3cb911244e88ce8d4620f4d3813%2Fd4388e63da5e492292f763bc72b5394a"
                                alt="Smart Catalog Interface"
                                fill
                                className="object-cover object-left-top opacity-90"
                                sizes="60vw"
                                priority={false}
                            />
                        </div>
                    </motion.div>


                    {/* Item 2: Developer Workspace (Vertical - Col Span 1) */}
                    <motion.div
                        {...fadeInUpAnimation}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.1 }}
                        className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />

                        <div className="relative z-10 p-8 flex flex-col h-full">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white mb-6">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Workspace</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Единый центр управления ценами, стоками и бронированием.
                            </p>

                            {/* Mini UI Representation */}
                            <div className="mt-auto w-full bg-slate-800/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="h-2 w-16 bg-slate-600 rounded"></div>
                                    <div className="h-2 w-8 bg-green-500/50 rounded"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-slate-700 rounded"></div>
                                    <div className="h-1.5 w-2/3 bg-slate-700 rounded"></div>
                                    <div className="h-1.5 w-3/4 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Item 3: Analytics (Landscape - Col Span 1) */}
                    <motion.div
                        {...fadeInUpAnimation}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.2 }}
                        className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Глобальная аналитика</h3>
                            <p className="text-slate-500 text-sm mb-4">
                                Сводные отчеты по продажам и динамике цен.
                            </p>
                            <div className="mt-auto relative h-24 w-full">
                                {/* Abstract Chart */}
                                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 gap-1 h-full">
                                    <div className="w-full bg-teal-50 h-[40%] rounded-t-sm group-hover:bg-teal-100 transition-colors"></div>
                                    <div className="w-full bg-teal-100 h-[70%] rounded-t-sm group-hover:bg-teal-200 transition-colors"></div>
                                    <div className="w-full bg-teal-500 h-[50%] rounded-t-sm group-hover:bg-teal-600 transition-colors"></div>
                                    <div className="w-full bg-teal-50 h-[80%] rounded-t-sm group-hover:bg-teal-100 transition-colors"></div>
                                    <div className="w-full bg-teal-200 h-[60%] rounded-t-sm group-hover:bg-teal-300 transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 4: CRM Sync (Small - Col Span 1) */}
                    <motion.div
                        {...fadeInUpAnimation}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.3 }}
                        className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <div className="p-8">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">CRM Коннектор</h3>
                            <p className="text-slate-500 text-sm mb-6">
                                2-way sync с Salesforce, Amo и Bitrix.
                            </p>
                            <div className="flex -space-x-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">Sf</div>
                                <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-700">Hs</div>
                                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">Bx</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 5: Aftersales (Small - Col Span 1) */}
                    <motion.div
                        {...fadeInUpAnimation}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.4 }}
                        className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    >
                        <div className="p-8">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                                <Key className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Цифровая приемка</h3>
                            <p className="text-slate-500 text-sm">
                                Запись на выдачу ключей через приложение.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

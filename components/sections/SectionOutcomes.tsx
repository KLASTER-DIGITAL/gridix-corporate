"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, LayoutGrid, Users, Zap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const SectionOutcomes = () => {
    const [activeTab, setActiveTab] = useState("sales");

    const tabs = [
        { id: "sales", label: "Продажи", icon: Zap },
        { id: "marketing", label: "Маркетинг", icon: LayoutGrid },
        { id: "management", label: "Управление", icon: BarChart3 },
    ];

    const content = {
        sales: {
            title: "Ускорение сделок в 2 раза",
            desc: "Менеджеры видят реальные статусы квартир. Бронирование в один клик. Автоматическая генерация договоров.",
            features: ["Шахматка в реальном времени", "Генерация оферт и ДДУ", "История взаимодействия"],
            image: "https://cdn.builder.io/api/v1/image/assets%2F4a7eb3cb911244e88ce8d4620f4d3813%2Fd4388e63da5e492292f763bc72b5394a" // Placeholder
        },
        marketing: {
            title: "Единое окно для всех каналов",
            desc: "Управляйте фидами для Циан и Авито из одного кабинета. Актуализируйте цены на сайте мгновенно.",
            features: ["Выгрузка на классифайды", "Интерактивный каталог на сайт", "Аналитика трафика"],
            image: "https://cdn.builder.io/api/v1/image/assets%2F4a7eb3cb911244e88ce8d4620f4d3813%2Fd4388e63da5e492292f763bc72b5394a" // Placeholder
        },
        management: {
            title: "Полный контроль выручки",
            desc: "Динамическое ценообразование на основе AI. Сводные отчеты по всем проектам и менеджерам.",
            features: ["План-факт продаж", "Управление ассортиментом", "Контроль дебиторки"],
            image: "https://cdn.builder.io/api/v1/image/assets%2F4a7eb3cb911244e88ce8d4620f4d3813%2Fd4388e63da5e492292f763bc72b5394a" // Placeholder
        }
    };

    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-600">Для всех департаментов</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        Единая среда работы
                    </h2>
                    <p className="text-lg text-slate-500">
                        Каждый отдел получает свой инструмент, работая с общими данными.
                    </p>
                </div>

                <Tabs defaultValue="sales" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-3 p-1 bg-slate-100/80 rounded-full">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="rounded-full px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <div className="relative min-h-[500px] rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 p-8 md:p-12 flex flex-col justify-center"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold mb-6 w-fit shadow-sm">
                                    {tabs.find(t => t.id === activeTab)?.icon && (
                                        <Zap className="w-3 h-3 text-blue-500" />
                                    )}
                                    {tabs.find(t => t.id === activeTab)?.label} Department
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                    {content[activeTab as keyof typeof content].title}
                                </h3>
                                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                    {content[activeTab as keyof typeof content].desc}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {content[activeTab as keyof typeof content].features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-fit bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8" asChild>
                                    <Link href={`/solutions/${activeTab}`}>
                                        Подробнее <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </AnimatePresence>

                        {/* Right Side: Image/Mockup Area */}
                        <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-slate-200/50 pattern-grid-lg opacity-20" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab + "-img"}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 w-full max-w-[90%] md:mr-[-50px] shadow-2xl rounded-xl overflow-hidden border border-slate-200"
                                >
                                    <div className="bg-white p-1 border-b border-slate-100 flex items-center gap-1.5 px-3 h-8">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    </div>
                                    <div className="bg-slate-50 h-[300px] md:h-[400px] flex items-center justify-center text-slate-300">
                                        {/* Placeholder for feature screenshot */}
                                        <div className="text-center">
                                            <LayoutGrid className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                            <span className="text-sm font-medium">Interface Preview: {activeTab}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section >
    );
};

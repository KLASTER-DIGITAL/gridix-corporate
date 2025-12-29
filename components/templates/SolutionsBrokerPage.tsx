"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Zap, Briefcase, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA"

export const SolutionsBrokerPage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-blue-100 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                <div className="container relative z-10 px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium mb-6"
                            >
                                <Briefcase className="w-4 h-4" />
                                <span>Для частных брокеров</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
                            >
                                Весь рынок новостроек <br /> в вашем смартфоне
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg text-slate-600 mb-8 leading-relaxed"
                            >
                                Закрывайте сделки быстрее. Единый доступ к базам застройщиков, моментальное бронирование прямо на встрече и гарантированные комиссии.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full">
                                    Начать продавать
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        </div>
                        {/* Mobile App Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative lg:h-[600px] flex items-center justify-center"
                        >
                            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[50px] p-4 shadow-2xl border-8 border-slate-900 overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                {/* Screen Content Placeholder */}
                                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                                    <div className="h-1/2 bg-slate-100 animate-pulse" /> {/* Map/Grid */}
                                    <div className="p-4 space-y-4">
                                        <div className="h-4 w-3/4 bg-slate-200 rounded" />
                                        <div className="h-4 w-1/2 bg-slate-200 rounded" />
                                        <div className="h-10 w-full bg-blue-600 rounded-xl mt-4" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating Badges */}
                            <div className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce delay-700">
                                <div className="flex items-center gap-2 text-green-600 font-bold">
                                    <Zap className="w-4 h-4" /> Комиссия подтверждена
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features for Brokers */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Smartphone className="w-8 h-8 text-blue-600" />}
                            title="Мобильный офис"
                            desc="Не нужно носить ноутбук. Отправляйте подборки клиентам и ставьте брони прямо с телефона в кафе или такси."
                        />
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-amber-500" />}
                            title="Быстрая бронь"
                            desc="Доступ к реальным остаткам. Никаких «уточню у застройщика». Видите свободную квартиру — бронируйте за секунду."
                        />
                        <FeatureCard
                            icon={<Award className="w-8 h-8 text-indigo-600" />}
                            title="Прямые договоры"
                            desc="Работайте с застройщиками напрямую через платформу. Прозрачная история сделок и защита ваших интересов."
                        />
                    </div>
                </div>
            </section>

            <SectionFinalCTA />
        </main>
    )
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-snug">
            {desc}
        </p>
    </div>
)

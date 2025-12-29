"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Globe, LayoutGrid, ShieldCheck, Users, Zap, CheckCircle2, DollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionIntegrations } from "@/components/sections/SectionIntegrations"
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA"

export const SolutionsAgencyPage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-white selection:bg-blue-100 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
                    >
                        <Building2 className="w-4 h-4" />
                        <span>Для агентств недвижимости</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-tight"
                    >
                        Продавайте объекты <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            десятков застройщиков
                        </span>{" "}
                        в едином окне
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        Получите доступ к эксклюзивным стокам, управляйте бронями и своей командой агентов в одной экосистеме. White-label решения для вашего агентства.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full w-full sm:w-auto text-base">
                            Стать партнером
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full w-full sm:w-auto text-base">
                            Узнать условия
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Proof Numbers */}
            <section className="py-12 bg-slate-900 border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Застройщиков в сети", value: "150+" },
                            { label: "Объектов в базе", value: "800+" },
                            { label: "Скорость брони", value: "2 мин" },
                            { label: "Рост комиссии", value: "до 30%" },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Value Props */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Ваш цифровой офис продаж
                        </h2>
                        <p className="text-lg text-slate-600">
                            GRIDIX объединяет объекты разных девелоперов в удобный интерфейс. Больше никаких Excel-таблиц и звонков для уточнения актуальности.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<LayoutGrid className="w-8 h-8 text-blue-600" />}
                            title="Единый сток (Aggregation)"
                            desc="Доступ к шахматкам всех подключенных застройщиков в реальном времени. Видите только актуальные статусы и цены."
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-indigo-600" />}
                            title="Управление командой"
                            desc="Добавляйте агентов, распределяйте лиды, ставьте планы продаж и отслеживайте эффективность каждого сотрудника."
                        />
                        <ValueCard
                            icon={<CheckCircle2 className="w-8 h-8 text-green-600" />}
                            title="Моментальное бронирование"
                            desc="Ставьте бронь на квартиру в один клик. Система автоматически уведомит застройщика и зафиксирует цену."
                        />
                    </div>
                </div>
            </section>

            {/* White Label Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                                <Globe className="w-4 h-4" />
                                <span>White-Label Решение</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Ваш бренд на первом месте
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Запустите собственную платформу подбора недвижимости на базе GRIDIX. Используйте наш движок, но показывайте клиентам только ваш домен, логотип и контакты.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Ваш домен (realestate-agency.com)",
                                    "Ваш логотип и фирменные цвета",
                                    "Скрытие контактов застройщика",
                                    "Прямые ссылки для клиентов"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                                Запросить демо
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl transform rotate-3" />
                            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                        <div className="h-8 w-32 bg-slate-100 rounded animate-pulse" /> {/* Logo placeholder */}
                                        <div className="flex gap-2">
                                            <div className="h-8 w-8 bg-slate-100 rounded-full" />
                                            <div className="h-8 w-8 bg-slate-100 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">Project A</div>
                                        <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">Project B</div>
                                        <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">Project C</div>
                                        <div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">Project D</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commission & Partners */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                        <DollarSign className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Гарантированные комиссии
                    </h2>
                    <p className="text-lg text-slate-600 mb-10">
                        Мы фиксируем клиента за вами в системе застройщика. Прозрачная система отслеживания сделок и выплат.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="font-semibold text-slate-900 mb-2">Фиксация клиента</div>
                            <div className="text-sm text-slate-500">Клиент, пришедший по вашей ссылке, закрепляется навсегда.</div>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="font-semibold text-slate-900 mb-2">Прозрачный трекинг</div>
                            <div className="text-sm text-slate-500">Статус сделки обновляется в реальном времени из CRM застройщика.</div>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="font-semibold text-slate-900 mb-2">Быстрые выплаты</div>
                            <div className="text-sm text-slate-500">Автоматический расчёт и уведомления о закрытии сделок.</div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionIntegrations />
            <SectionFinalCTA />
        </main>
    )
}

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">
            {desc}
        </p>
    </div>
)

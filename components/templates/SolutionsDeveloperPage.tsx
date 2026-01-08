"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, BarChart, Database, Zap, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionFinalCTA } from "../sections/SectionFinalCTA";
import { SectionIntegrations } from "../sections/SectionIntegrations";
import { SectionProof } from "../sections/SectionProof";

export const SolutionsDeveloperPage = () => {
    return (
        <main className="flex flex-col w-full bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <Badge variant="outline" className="mb-6 border-blue-500/30 text-blue-400 bg-blue-500/10 backdrop-blur-sm">
                        Enterprise Solution for Developers
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Превратите трафик <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">в реальные сделки</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Автоматизируйте продажи, исключите двойные бронирования и дайте клиентам возможность выбирать квартиры самостоятельно.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white h-12 px-8 min-w-[200px]" asChild>
                            <Link href="/demo">
                                Запросить демо <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 bg-transparent h-12 px-8 min-w-[200px]" asChild>
                            <Link href="/pricing">Смотреть тарифы</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Proof Strip */}
            <SectionProof />

            {/* Core Value Props */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Единая экосистема продаж</h2>
                        <p className="text-lg text-slate-500">
                            Все инструменты, необходимые современному девелоперу, в одной платформе. От управления стоком до закрытия сделки.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Database className="w-6 h-6 text-blue-600" />}
                            title="Смарт-Каталог и Шахматка"
                            desc="Интерактивные фасады и планировки, которые продают 24/7 без участия менеджера."
                        />
                        <FeatureCard
                            icon={<Zap className="w-6 h-6 text-indigo-600" />}
                            title="Авто-синхронизация"
                            desc="Моментальное обновление статусов (бронь/продано) из CRM на сайте и у всех партнеров."
                        />
                        <FeatureCard
                            icon={<BarChart className="w-6 h-6 text-cyan-600" />}
                            title="Сквозная аналитика"
                            desc="Тепловая карта спроса: знайте точно, какие лоты смотрят, но не покупают."
                        />
                    </div>
                </div>
            </section>

            {/* How it works (Process) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Запуск проекта <br />
                                <span className="text-blue-600">за 30 минут</span>
                            </h2>
                            <p className="text-lg text-slate-500 mb-8">
                                Вам не нужны разработчики. Наша платформа позволяет развернуть полноценный цифровой офис продаж самостоятельно.
                            </p>

                            <div className="space-y-6">
                                <Step number="01" title="Импорт данных" desc="Загрузите Excel со списком квартир и планировками." />
                                <Step number="02" title="Отрисовка зон" desc="Разметьте фасады в нашем визуальном редакторе за пару кликов." />
                                <Step number="03" title="Интеграция" desc="Подключите виджет на сайт одной строкой кода." />
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div
                                className="aspect-[4/3] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Placeholder for Admin Interface Mockup */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🖥️</div>
                                        <div className="text-slate-400 font-medium">Интерфейс Админ-панели</div>
                                        <div className="text-xs text-slate-600 mt-2">React Canvas Editor Demo</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Security */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-8">
                        <Lock className="w-4 h-4" /> Enterprise Grade Security
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Безопасность ваших данных</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <SecurityItem title="GDPR Compliant" />
                        <SecurityItem title="Data Encryption" />
                        <SecurityItem title="99.99% Uptime" />
                        <SecurityItem title="SSO / SAML" />
                    </div>
                </div>
            </section>

            <SectionIntegrations />
            <SectionFinalCTA />
        </main>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-slate-100">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

const Step = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="flex gap-4">
        <div className="text-xl font-bold text-blue-200">{number}</div>
        <div>
            <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
            <p className="text-sm text-slate-500">{desc}</p>
        </div>
    </div>
);

const SecurityItem = ({ title }: { title: string }) => (
    <div className="p-4 rounded-xl border border-slate-200 text-slate-700 font-medium flex items-center justify-center gap-2">
        <Check className="w-4 h-4 text-green-500" /> {title}
    </div>
);

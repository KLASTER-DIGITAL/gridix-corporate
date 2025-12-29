"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Coins, Handshake, LayoutGrid, Users, Zap, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const PartnerProgramPage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-blue-100 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />

                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
                    >
                        <Handshake className="w-4 h-4" />
                        <span>Партнерская Экосистема GRIDIX</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]"
                    >
                        Зарабатывайте до <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">50%</span> с каждой продажи
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light"
                    >
                        Помогите застройщикам продавать быстрее и технологичнее. Присоединяйтесь к самой быстрорастущей PropTech платформе.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" className="h-14 px-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-blue-600/20" asChild>
                            <Link href="https://app.gridix.live/ru/">
                                Стать партнером <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Link href="#pricing" className="text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-colors">
                            Посмотреть уровни участия <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-50">Преимущества</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Почему GRIDIX легко предлагать клиентам
                            </h2>
                        </div>
                        <p className="text-slate-500 text-lg max-w-md lg:text-right">
                            Мы решаем реальные боли застройщиков с помощью продукта, который создает мгновенный «Wow-эффект».
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-amber-500" />}
                            title="Мгновенная ценность"
                            desc="Застройщики видят разницу визуально. Это не просто список квартир, это цифровой шоурум."
                        />
                        <FeatureCard
                            icon={<LayoutGrid className="w-8 h-8 text-blue-500" />}
                            title="Глобальная масштабируемость"
                            desc="Подходит как для одного дома, так и для целых районов и кварталов по всему миру."
                        />
                        <FeatureCard
                            icon={<Coins className="w-8 h-8 text-green-500" />}
                            title="Растущий рынок"
                            desc="Спрос на автоматизацию продаж недвижимости растет на 40% ежегодно в мире."
                        />
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Как это работает</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Всего три простых шага от регистрации до получения первого вознаграждения
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-slate-800" />

                        <StepCard
                            step="01"
                            title="Регистрация"
                            icon={<Users className="w-6 h-6" />}
                            desc="Зарегистрируйтесь в личном кабинете партнера и получите доступ к материалам."
                        />
                        <StepCard
                            step="02"
                            title="Привлечение"
                            icon={<MessageSquare className="w-6 h-6" />}
                            desc="Передайте контакт потенциального клиента или проведите вводную встречу."
                        />
                        <StepCard
                            step="03"
                            title="Выплата"
                            icon={<Coins className="w-6 h-6" />}
                            desc="Мы берем на себя внедрение и поддержку. Вы получаете комиссию ежемесячно."
                        />
                    </div>
                </div>
            </section>

            {/* Tiers Section */}
            <section id="pricing" className="py-32 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Уровни партнерства</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Выберите формат, который лучше всего подходит вашему стилю работы или масштабу бизнеса
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Basic Partner */}
                        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="h-full border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden bg-white">
                                <CardHeader className="p-8 pb-4">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 ring-1 ring-blue-100">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-slate-900 mb-2">Агент-партнер</CardTitle>
                                    <CardDescription className="text-lg">Для маркетологов, агентов и консультантов</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-8">
                                    <div className="flex items-baseline gap-2 py-4">
                                        <span className="text-6xl font-extrabold text-slate-900">20%</span>
                                        <span className="text-slate-500 font-medium text-lg">от продаж</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <PartnerPoint text="Реферальная ссылка и кабинет" />
                                        <PartnerPoint text="Прозрачная статистика выплат" />
                                        <PartnerPoint text="Не требует технических знаний" />
                                        <PartnerPoint text="Готовые презентации и брифы" />
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-4">
                                    <Button className="w-full h-12 text-base rounded-xl" asChild>
                                        <Link href="https://app.gridix.live/ru/">Начать зарабатывать</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* Integrator Partner */}
                        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="h-full border-blue-600 shadow-2xl ring-1 ring-blue-600 relative overflow-hidden bg-white">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-bl-2xl">
                                    РЕКОМЕНДУЕМ ПОЛНУЮ МОДЕЛЬ
                                </div>
                                <CardHeader className="p-8 pb-4">
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-200">
                                        <LayoutGrid className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold text-slate-900 mb-2">Интегратор</CardTitle>
                                    <CardDescription className="text-lg">Для агентств и CRM-специалистов</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-8">
                                    <div className="flex items-baseline gap-2 py-4">
                                        <span className="text-6xl font-extrabold text-slate-900">50%</span>
                                        <span className="text-slate-500 font-medium text-lg">Revenue Share</span>
                                    </div>
                                    <div className="text-sm font-medium text-blue-600 px-3 py-1.5 bg-blue-50 rounded-lg inline-block">
                                        40% на старте → 50% после 10 клиентов
                                    </div>
                                    <ul className="space-y-4">
                                        <PartnerPoint text="Самостоятельное управление воркспейсами" />
                                        <PartnerPoint text="Статус Сертифицированного Партнера" />
                                        <PartnerPoint text="Доход от внедрения и поддержки" />
                                        <PartnerPoint text="Приоритетная дорожная карта фич" />
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-4">
                                    <Button className="w-full h-12 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-200" asChild>
                                        <Link href="https://app.gridix.live/ru/">Стать Интегратором</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Вопросы и ответы</h2>
                        <p className="text-slate-500 text-lg">Если у вас остались сомнения, мы ответили на самые частые вопросы</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-slate-200">
                            <AccordionTrigger className="text-left text-lg font-semibold py-6">Нужно ли мне настраивать систему для клиента?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                                Для Агента-партнера — нет. Мы берем всю техническую часть на себя. Интеграторы могут выбирать: настраивать самостоятельно и зарабатывать больше, или передать проект нашей команде.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-slate-200">
                            <AccordionTrigger className="text-left text-lg font-semibold py-6">Как быстро я получу свои выплаты?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                                Выплаты производятся ежемесячно в течение 10 рабочих дней после оплаты счета клиентом. Все транзакции прозрачно отражаются в вашем личном кабинете.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-slate-200">
                            <AccordionTrigger className="text-left text-lg font-semibold py-6">Где работает GRIDIX?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                                Платформа GRIDIX глобальна. Мы работаем с застройщиками в ОАЭ, Европе, СНГ и Юго-Восточной Азии. Система поддерживает любые валюты и языки.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-slate-200">
                            <AccordionTrigger className="text-left text-lg font-semibold py-6">Предоставляете ли вы материалы для обучения?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                                Да, каждый партнер получает доступ к Партнерскому порталу с презентациями, демо-стендами, шаблонами договоров и видео-уроками по платформе.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <SectionFinalCTA />
        </main>
    )
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col items-start p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group">
        <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed font-light">
            {desc}
        </p>
    </div>
)

const StepCard = ({ step, title, desc, icon }: { step: string, title: string, desc: string, icon: React.ReactNode }) => (
    <div className="flex flex-col items-center text-center group relative">
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900 group-hover:scale-110 transition-transform relative z-10">
            {icon}
        </div>
        <span className="absolute -top-4 text-6xl font-black text-white/5 select-none">{step}</span>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 font-light leading-relaxed px-4">{desc}</p>
    </div>
)

const PartnerPoint = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-slate-700">
        <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 ring-1 ring-blue-100">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
        </div>
        <span className="font-light">{text}</span>
    </li>
)


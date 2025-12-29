"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Home, Map, MousePointer2, Search, Smartphone, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA"

export const SolutionsClientPage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-white selection:bg-rose-100 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-blue-50 opacity-50" />
                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-8"
                    >
                        <Home className="w-4 h-4" />
                        <span>Для покупателей</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight"
                    >
                        Выбирайте квартиру, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                            а не кота в мешке
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
                    >
                        Забудьте про скучные списки. Исследуйте интерактивные планировки, гуляйте по 3D-турам и бронируйте квартиру мечты напрямую у застройщика.
                    </motion.p>
                </div>
            </section>

            {/* Visual Choice Demo */}
            <section className="py-12 border-y border-slate-100 bg-slate-50/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <BenefitItem
                            icon={<MousePointer2 className="w-6 h-6 text-rose-500" />}
                            title="Интерактивный выбор"
                            desc="Кликайте по фасаду здания, выбирайте этаж и вид из окна."
                        />
                        <BenefitItem
                            icon={<Eye className="w-6 h-6 text-blue-500" />}
                            title="Честные остатки"
                            desc="Зеленые квартиры свободны. Красные — проданы. Никаких фейков."
                        />
                        <BenefitItem
                            icon={<Smartphone className="w-6 h-6 text-indigo-500" />}
                            title="Всё онлайн"
                            desc="Цены, планировки и бронирование доступны 24/7 без звонков."
                        />
                        <BenefitItem
                            icon={<Heart className="w-6 h-6 text-red-500" />}
                            title="Избранное"
                            desc="Сохраняйте понравившиеся варианты и делитесь с семьей."
                        />
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Как это работает</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connector Lines (Desktop only) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 -z-10" />

                        <StepCard number="1" title="Выберите проект" desc="Найдите ЖК на карте или в каталоге, который подходит вам по району и цене." />
                        <StepCard number="2" title="Найдите планировку" desc="Используйте фильтры и визуальный подбор, чтобы найти идеальную квартиру." />
                        <StepCard number="3" title="Забронируйте" desc="Оставьте заявку или оплатите бронь онлайн. Квартира закрепится за вами." />
                    </div>
                </div>
            </section>

            <SectionFinalCTA />
        </main>
    )
}

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
            {icon}
        </div>
        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
    </div>
)

const StepCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl">
        <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-900/20">
            {number}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{desc}</p>
    </div>
)

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Building2, Users, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CtaButton } from "../CtaButton";
import { fadeInUpAnimation, fadeInAnimation, scaleInAnimation, viewportSettings } from "@/lib/motion-utils";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full -z-10 pointer-events-none mix-blend-screen" />
            <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[100px] rounded-full -z-10 pointer-events-none mix-blend-screen" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

                    {/* Animated Badge */}
                    <motion.div
                        {...fadeInUpAnimation}
                    >
                        <Badge variant="outline" className="px-4 py-1.5 rounded-full border-blue-500/30 bg-blue-500/5 text-blue-300 backdrop-blur-sm hover:bg-blue-500/10 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            GRIDIX Workspace 2.0 Available Now
                        </Badge>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                        {...fadeInUpAnimation}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.1 }}
                    >
                        Цифровая экосистема <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 animate-gradient-x">для девелопера</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                        {...fadeInUpAnimation}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.2 }}
                    >
                        Увеличьте выручку в среднем на <span className="text-white font-semibold">4.5%</span> и ускорьте цикл сделки до <span className="text-white font-semibold">2х раз</span>. <br className="hidden md:block" />
                        Единая платформа для управления ассортиментом, ценами и продажами.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        {...fadeInUpAnimation}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.3 }}
                    >
                        <CtaButton
                            label="Записаться на демо"
                            href="/demo"
                            className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5"
                        />
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                            <Link href="#solutions">Посмотреть решения</Link>
                        </Button>
                    </motion.div>

                    {/* Trust Strip */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400 pt-8"
                        {...fadeInAnimation}
                        transition={{ ...fadeInAnimation.transition, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-blue-500" />
                            <span>Быстрый старт за 2 недели</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-blue-500" />
                            <span>Бесшовная миграция данных</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-blue-500" />
                            <span>Команда внедрения (Onboarding)</span>
                        </div>
                    </motion.div>

                    {/* Role Tabs - Simplified for visual balance */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 w-full max-w-3xl"
                        {...fadeInUpAnimation}
                        transition={{ ...fadeInUpAnimation.transition, delay: 0.4 }}
                    >
                        <GlassCard icon={<Building2 className="w-5 h-5 text-blue-400" />} title="Застройщик" desc="Управление продажами" />
                        <GlassCard icon={<Users className="w-5 h-5 text-indigo-400" />} title="Агентство" desc="Единое окно подбора" comingSoon />
                        <GlassCard icon={<Code2 className="w-5 h-5 text-cyan-400" />} title="Разработчик" desc="API и интеграции" />
                    </motion.div>

                </div>

                {/* Abstract Dashboard Vis (Placeholder for now, but styled) */}
                <motion.div
                    className="mt-24 relative mx-auto max-w-6xl aspect-[16/9] rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur shadow-2xl overflow-hidden group"
                    {...scaleInAnimation}
                    transition={{ ...scaleInAnimation.transition, delay: 0.5 }}
                >
                    {/* Fake UI Header */}
                    <div className="h-12 border-b border-white/5 bg-slate-900/80 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="ml-4 h-6 w-64 bg-white/5 rounded-md" />
                    </div>
                    {/* Gradient Content Placeholders */}
                    <div className="p-8 grid grid-cols-12 gap-6 h-full">
                        <div className="col-span-3 space-y-4">
                            <div className="h-full bg-white/5 rounded-lg w-full animate-pulse delay-75" />
                        </div>
                        <div className="col-span-9 grid grid-rows-3 gap-6">
                            <div className="row-span-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg border border-white/5 flex items-center justify-center">
                                <span className="text-white/20 text-4xl font-bold tracking-widest uppercase">Smart Catalog Interface</span>
                            </div>
                            <div className="row-span-1 grid grid-cols-3 gap-6">
                                {[1, 2, 3].map(i => <div key={i} className="bg-white/5 rounded-lg border border-white/5" />)}
                            </div>
                        </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
};

// Helper Component for Role Cards
const GlassCard = ({ icon, title, desc, comingSoon }: { icon: React.ReactNode, title: string, desc: string, comingSoon?: boolean }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-left group cursor-default relative overflow-hidden">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">{title}</h3>
                {comingSoon && <span className="text-[10px] uppercase font-bold text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Soon</span>}
            </div>
            <p className="text-sm text-slate-400">{desc}</p>
        </div>
    </div>
);

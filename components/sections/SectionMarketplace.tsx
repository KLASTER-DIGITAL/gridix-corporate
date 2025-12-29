"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, CreditCard, FileText, Globe, MessageSquare, PieChart, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SectionMarketplace = () => {
    const modules = [
        { icon: CreditCard, name: "Ипотечный калькулятор" },
        { icon: FileText, name: "Генератор PDF" },
        { icon: Globe, name: "Интеграция с Циан/Авито" },
        { icon: MessageSquare, name: "Чат с жильцами" },
        { icon: PieChart, name: "Сквозная аналитика" },
        { icon: Shield, name: "Электронная регистрация" },
        { icon: Smartphone, name: "Мобильное приложение" },
        { icon: Box, name: "Управление ключами" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="secondary" className="mb-4 bg-orange-50 text-orange-600 hover:bg-orange-100">Marketplace</Badge>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                            Готовые модули расширения
                        </h2>
                        <p className="text-lg text-slate-500">
                            Подключайте дополнительные сервисы в один клик. Более 50+ готовых интеграций в маркетплейсе.
                        </p>
                    </div>
                    <Button variant="outline" asChild className="hidden md:flex">
                        <Link href="/marketplace">
                            Весь каталог <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {modules.map((m, i) => (
                        <motion.div
                            key={i}
                            className="p-6 rounded-xl border border-slate-100 bg-slate-50 flex flex-col items-center justify-center text-center gap-4 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all cursor-pointer group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <m.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                            </div>
                            <span className="font-medium text-slate-700 group-hover:text-slate-900">{m.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/marketplace">
                            Весь каталог <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

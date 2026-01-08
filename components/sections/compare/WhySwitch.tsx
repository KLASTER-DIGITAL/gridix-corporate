"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Cpu, Puzzle } from "lucide-react";

import { ComparisonData } from "@/lib/types/comparison";

interface WhySwitchProps {
    data: ComparisonData;
}

const icons = [
    <AlertTriangle className="w-6 h-6 text-red-500" />,
    <TrendingUp className="w-6 h-6 text-blue-500" />,
    <Puzzle className="w-6 h-6 text-indigo-500" />
];

export const WhySwitch = ({ data }: WhySwitchProps) => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative">
                {/* Visual Accent */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{data.whySwitchTitle}</h2>
                    <p className="text-slate-400 text-lg">
                        {data.whySwitchSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.painPoints?.map((point, idx) => (
                        <Card
                            key={idx}
                            icon={icons[idx % icons.length]}
                            title={point.title}
                            desc={point.description}
                        />
                    ))}
                </div>

                <motion.div
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <Cpu className="w-16 h-16 text-blue-200 opacity-50" />
                        <h3 className="text-2xl md:text-3xl font-bold max-w-2xl">
                            GRIDIX — это не просто новый инструмент. Это страховка вашего бизнеса от технологического отставания.
                        </h3>
                        <p className="text-blue-100 text-lg max-w-xl">
                            Перенесем вашу базу из {data.competitorName} или Excel за 48 часов с сохранением всей истории и статусов.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg">
                                Обсудить миграцию
                            </button>
                        </div>
                    </div>
                    {/* Background patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07]">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
);

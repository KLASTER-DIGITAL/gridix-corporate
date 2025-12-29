"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { CheckCircle2 } from "lucide-react";

interface Task {
    title: string;
    description?: string;
    bullets?: string[];
}

interface TasksCardsProps {
    tasks: Task[];
}

export const TasksCards = ({ tasks = [] }: TasksCardsProps) => {
    return (
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl font-bold text-slate-900">Задачи проекта</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                {...fadeInUpAnimation}
                                transition={{ delay: index * 0.1 }}
                                viewport={viewportSettings}
                            >
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <span className="font-bold text-sm">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{task.title}</h3>
                                {task.description && <p className="text-slate-600 mb-6 text-sm leading-relaxed">{task.description}</p>}
                                {task.bullets && task.bullets.length > 0 && (
                                    <ul className="space-y-3">
                                        {task.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

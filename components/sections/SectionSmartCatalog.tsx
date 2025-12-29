"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MoveRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SectionSmartCatalog = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/3" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge variant="outline" className="mb-6 border-blue-500 text-blue-400 bg-blue-500/10">Flagship Product</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Smart Catalog <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Интерактивная шахматка</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Превратите посетителей сайта в покупателей. Дайте клиентам возможность самим выбирать квартиру на фасаде, планировке или в 3D.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Выбор на 3D-генплане и фасадах",
                                "Интерактивные поэтажные планы",
                                "Фильтрация по 20+ параметрам",
                                "Автоматическая генерация PDF-презентаций"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white h-12 px-8" asChild>
                                <Link href="/catalog-demo">
                                    Открыть Демо <MoveRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 bg-transparent h-12 px-8" asChild>
                                <Link href="/smart-catalog">Узнать больше</Link>
                            </Button>
                        </div>
                    </div>

                    <motion.div
                        className="relative rounded-xl border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video group cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Placeholder for Video/Demo UI */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                            </div>
                        </div>

                        {/* Fake UI Structure */}
                        <div className="absolute top-4 left-4 right-4 flex gap-2">
                            <div className="w-full h-2 bg-white/10 rounded-full" />
                            <div className="w-1/3 h-2 bg-white/10 rounded-full" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 h-12 bg-white/5 rounded-lg border border-white/5" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { CtaButton } from "../CtaButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface CtaBannerProps {
    title?: string;
    description?: string;
}

export const CtaBanner = ({
    title = "Готовы оцифровать свои продажи?",
    description = "Запишитесь на демонстрацию GRIDIX v1 и узнайте, как мы можем помочь вашему бизнесу вырасти.",
}: CtaBannerProps) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div 
                    className="relative bg-blue-600 rounded-[40px] p-8 md:p-16 lg:p-20 overflow-hidden text-center"
                    {...fadeInUpAnimation}
                    viewport={viewportSettings}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                            Старт за 7 дней
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {title}
                        </h2>
                        
                        <p className="text-lg md:text-xl text-blue-100 opacity-90">
                            {description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <CtaButton
                                label="Записаться на демо"
                                href="/demo"
                                className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 rounded-2xl shadow-xl shadow-blue-950/20 font-bold"
                            />
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="h-14 px-10 text-lg border-white/30 bg-transparent hover:bg-white/10 text-white rounded-2xl backdrop-blur-sm font-bold"
                                asChild
                            >
                                <Link href="/smart-catalog-demo">Открыть демо Smart Catalog</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

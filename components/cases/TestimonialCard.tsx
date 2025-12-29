"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    position: string;
    company?: string;
}

export const TestimonialCard = ({
    quote,
    author,
    position,
    company,
}: TestimonialCardProps) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div 
                    className="max-w-4xl mx-auto relative"
                    {...fadeInUpAnimation}
                    viewport={viewportSettings}
                >
                    <div className="absolute -top-6 -left-6 text-blue-100 hidden md:block">
                        <Quote className="w-24 h-24 fill-current" />
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-100 p-8 lg:p-16 rounded-[40px] relative z-10">
                        <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-900 leading-relaxed mb-10 italic">
                            «{quote}»
                        </blockquote>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-blue-600 rounded-full" />
                            <div>
                                <div className="font-bold text-slate-900 text-lg">{author}</div>
                                <div className="text-slate-500">{position}{company ? `, ${company}` : ""}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

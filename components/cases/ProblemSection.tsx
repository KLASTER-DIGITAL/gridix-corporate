"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";

interface ProblemSectionProps {
    title?: string;
    content: string;
}

export const ProblemSection = ({
    title = "Контекст и проблема",
    content,
}: ProblemSectionProps) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <motion.div 
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
                        <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-4">
                            {content.split('\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

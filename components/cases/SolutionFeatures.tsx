"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { Check } from "lucide-react";

interface Feature {
    title: string;
    benefit: string;
}

interface SolutionFeaturesProps {
    title?: string;
    features: Feature[];
}

export const SolutionFeatures = ({
    title = "Что мы сделали в GRIDIX v1",
    features = [],
}: SolutionFeaturesProps) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        className="mb-12"
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                className="flex gap-4 group"
                                {...fadeInUpAnimation}
                                transition={{ delay: index * 0.05 }}
                                viewport={viewportSettings}
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                                    <Check className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.benefit}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

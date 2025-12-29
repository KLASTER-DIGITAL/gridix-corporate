"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { Badge } from "@/components/ui/badge";

interface ProjectFactsProps {
    country?: string;
    city?: string;
    segment?: string;
    portfolio?: string;
    launchDate?: string;
    modules?: string[];
    integrations?: string[];
}

export const ProjectFactsTable = ({
    country,
    city,
    segment,
    portfolio,
    launchDate,
    modules = [],
    integrations = [],
}: ProjectFactsProps) => {
    const facts = [
        { label: "Локация", value: city && country ? `${city}, ${country}` : city || country || "—" },
        { label: "Сегмент", value: segment || "—" },
        { label: "Портфель", value: portfolio || "—" },
        { label: "Срок запуска", value: launchDate || "—" },
    ];

    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div 
                    className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100"
                    {...fadeInUpAnimation}
                    viewport={viewportSettings}
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">О проекте</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Info List */}
                        <div className="space-y-6">
                            {facts.map((fact, index) => (
                                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                                    <span className="text-slate-500 font-medium">{fact.label}</span>
                                    <span className="text-slate-900 font-semibold text-right ml-4">{fact.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Modules & Integrations */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Модули GRIDIX v1</h3>
                                <div className="flex flex-wrap gap-2">
                                    {modules.length > 0 ? modules.map((m, i) => (
                                        <Badge key={i} variant="secondary" className="bg-white text-slate-700 border-slate-200 hover:bg-slate-100 px-3 py-1 rounded-full">
                                            {m}
                                        </Badge>
                                    )) : <span className="text-slate-400 text-sm">Стандартный пакет</span>}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Интеграции</h3>
                                <div className="flex flex-wrap gap-2">
                                    {integrations.length > 0 ? integrations.map((m, i) => (
                                        <Badge key={i} className="bg-blue-50 text-blue-600 border-none hover:bg-blue-100 px-3 py-1 rounded-full">
                                            {m}
                                        </Badge>
                                    )) : <span className="text-slate-400 text-sm">Собственная CRM / Excel</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

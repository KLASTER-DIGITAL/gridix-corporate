"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { 
    LayoutGrid, 
    FileText, 
    Filter, 
    Link as LinkIcon, 
    RefreshCw, 
    Globe, 
    Database, 
    BarChart3,
    Monitor
} from "lucide-react";

interface Module {
    name: string;
    icon?: string;
}

interface ModulesTagsProps {
    title?: string;
    modules?: string[];
}

const DEFAULT_MODULES = [
    { name: "Smart Catalog / Шахматка", icon: "LayoutGrid" },
    { name: "Карточка лота", icon: "Monitor" },
    { name: "PDF по лоту", icon: "FileText" },
    { name: "Фильтры", icon: "Filter" },
    { name: "CRM-интеграция", icon: "LinkIcon" },
    { name: "Синхронизация статусов", icon: "RefreshCw" },
    { name: "Мультиязычность", icon: "Globe" },
    { name: "Импорт Excel/Sheets", icon: "Database" },
    { name: "Heatmap спроса", icon: "BarChart3" },
];

const IconMap: Record<string, any> = {
    LayoutGrid,
    FileText,
    Filter,
    LinkIcon,
    RefreshCw,
    Globe,
    Database,
    BarChart3,
    Monitor
};

export const ModulesTags = ({
    title = "Использовали в GRIDIX v1",
    modules = [],
}: ModulesTagsProps) => {
    // If no modules provided, use defaults
    const displayModules = modules.length > 0 
        ? modules.map(m => {
            const found = DEFAULT_MODULES.find(d => d.name.toLowerCase().includes(m.toLowerCase()));
            return found || { name: m, icon: "LayoutGrid" };
        })
        : DEFAULT_MODULES;

    return (
        <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {displayModules.map((module, index) => {
                            const Icon = IconMap[module.icon || "LayoutGrid"] || LayoutGrid;
                            return (
                                <motion.div 
                                    key={index}
                                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                                    {...fadeInUpAnimation}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={viewportSettings}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 leading-tight">{module.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

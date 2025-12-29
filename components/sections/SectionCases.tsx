import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const SectionCases = () => {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                            Результаты внедрения
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl">
                            Реальные показатели девелоперов после перехода на экосистему GRIDIX за 3 месяца.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5 bg-transparent rounded-full">
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5 bg-transparent rounded-full">
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CaseCard
                        company="Pioneer Group"
                        title="Автоматизация продаж в 12 проектах"
                        stats={[
                            { label: "Рост конверсии", value: "+15%" },
                            { label: "Скорость сделки", value: "-4 дня" }
                        ]}
                        imageClass="bg-gradient-to-br from-blue-900 to-slate-900"
                    />
                    <CaseCard
                        company="Forma"
                        title="Запуск агентского канала за 2 недели"
                        stats={[
                            { label: "Агентов", value: "1,500+" },
                            { label: "Сделок/мес", value: "350+" }
                        ]}
                        imageClass="bg-gradient-to-br from-indigo-900 to-slate-900"
                    />
                    <CaseCard
                        company="Level Group"
                        title="Динамическое ценообразование"
                        stats={[
                            { label: "Рост выручки", value: "+4.5%" },
                            { label: "Экономия ФОТ", value: "30%" }
                        ]}
                        imageClass="bg-gradient-to-br from-cyan-900 to-slate-900"
                    />
                </div>
            </div>
        </section>
    );
};

const CaseCard = ({ company, title, stats, imageClass }: any) => (
    <Card className="border-0 bg-transparent overflow-hidden group">
        <div className={`h-48 w-full rounded-2xl mb-6 relative ${imageClass} border border-white/10 group-hover:border-white/20 transition-colors`}>
            {/* Placeholder for Case Image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white/10 select-none">{company}</span>
            </div>
        </div>
        <CardContent className="p-0">
            <div className="text-sm font-medium text-blue-400 mb-2">{company}</div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{title}</h3>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                {stats.map((s: any, i: number) => (
                    <div key={i}>
                        <div className="text-2xl font-bold text-white">{s.value}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

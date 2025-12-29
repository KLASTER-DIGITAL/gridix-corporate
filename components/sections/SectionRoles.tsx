import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const SectionRoles = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Gradient Separator */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />

            <div className="container px-4 md:px-6 mx-auto relative z-20">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Единая экосистема
                    </h2>
                    <p className="text-lg text-slate-400">
                        Инструменты для всех участников процесса продаж недвижимости в одном интерфейсе.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <RoleCard
                        title="Застройщик"
                        desc="Полный контроль над экспозицией, ценами и бронированием."
                        features={["Smart Catalog", "Dynamic Pricing", "CRM Sync"]}
                        icon={<Building2 className="w-6 h-6 text-blue-400" />}
                        href="/developer-workspace"
                        cta="Подробнее"
                    />
                    <RoleCard
                        title="Агентство"
                        desc="Единое окно для бронирования и фиксации клиентов."
                        features={["Актуальные стоки", "Фиксация клиента", "Обучение"]}
                        icon={<Users className="w-6 h-6 text-indigo-400" />}
                        href="/agency-workspace"
                        cta="Узнать первым"
                        soon
                    />
                    <RoleCard
                        title="Агент"
                        desc="Персональный инструмент продаж и презентаций."
                        features={["Быстрый подбор", "Презентации", "История заявок"]}
                        icon={<Code2 className="w-6 h-6 text-cyan-400" />}
                        href="/agent-workspace"
                        cta="Узнать первым"
                        soon
                    />
                </div>
            </div>
        </section>
    );
};

const RoleCard = ({ title, desc, features, icon, href, cta, soon }: any) => (
    <div className="group relative rounded-2xl border border-white/10 bg-slate-800/40 p-1 hover:bg-slate-800/60 transition-all duration-300">
        <div className="h-full rounded-xl bg-slate-900/80 p-6 md:p-8 flex flex-col backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors">
                    {icon}
                </div>
                {soon && <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border border-blue-500/20">Скоро</Badge>}
            </div>

            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-slate-400 mb-6 min-h-[48px]">{desc}</p>

            <ul className="space-y-3 mb-8 flex-1">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {f}
                    </li>
                ))}
            </ul>

            <Button variant={soon ? "ghost" : "default"} className={`w-full justify-between items-center group-hover:translate-x-1 transition-transform ${!soon ? 'bg-blue-600 hover:bg-blue-500' : 'text-slate-300 hover:text-white hover:bg-white/5'}`} asChild>
                <Link href={href}>
                    {cta}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
            </Button>
        </div>
    </div>
);

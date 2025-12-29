import { ArrowRight, Box, FileText, CheckSquare, User } from "lucide-react";

export const SectionProcessMap = () => {
    const steps = [
        {
            icon: Box,
            title: "Sales",
            points: ["Подбор лота", "Бронирование", "Фиксация цены"]
        },
        {
            icon: FileText,
            title: "Contract",
            points: ["Генерация договора", "Согласование", "Подписание"]
        },
        {
            icon: CheckSquare,
            title: "Aftersales",
            points: ["Приемка квартиры", "Выдача ключей", "Гарантия"]
        },
        {
            icon: User,
            title: "Client Workspace",
            points: ["Документы", "Сервисные заявки", "Уведомления"]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Сквозной процесс сделки</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Единая среда данных от первого касания до пост-продажного обслуживания жителя.</p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-14 h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 mb-6 shadow-sm transition-colors group-hover:border-blue-500 group-hover:text-blue-500 bg-white z-10">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{step.title}</h3>
                                <ul className="space-y-2">
                                    {step.points.map((pt, j) => (
                                        <li key={j} className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-100 inline-block shadow-sm">
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

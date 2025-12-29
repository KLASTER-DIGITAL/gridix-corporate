import { ShieldCheck, Server, FileText, Lock } from "lucide-react";

export const SectionSecurity = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Enterprise Grade Security</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        Безопасность и соответствие 152-ФЗ
                    </h2>
                    <p className="text-lg text-slate-500">
                        Мы понимаем требования служб безопасности крупных девелоперов.
                        Ваши данные и данные ваших клиентов под надежной защитой.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SecurityCard
                        icon={<Server className="w-8 h-8 text-blue-600" />}
                        title="Global Cloud Infrastructure"
                        desc="Servers distributed across AWS regions (EU/US/Asia) for low latency and high availability."
                    />
                    <SecurityCard
                        icon={<FileText className="w-8 h-8 text-green-600" />}
                        title="GDPR & ISO 27001"
                        desc="Fully compliant with international data protection regulations. Built-in consent management."
                    />
                    <SecurityCard
                        icon={<ShieldCheck className="w-8 h-8 text-indigo-600" />}
                        title="Data Encryption"
                        desc="End-to-end encryption for data in transit and at rest. SOC 2 Type II compliant."
                    />
                    <SecurityCard
                        icon={<Lock className="w-8 h-8 text-slate-600" />}
                        title="SLA 99.9%"
                        desc="Гарантированная доступность сервиса, прописанная в договоре. Финансовая ответственность за простой."
                    />
                </div>

                <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Нужен "Box" (On-premise)?</h3>
                        <p className="text-slate-600">
                            Для крупнейших экосистем мы предлагаем развертывание GRIDIX в вашем частном облаке (Private Cloud)
                            с полным контролем над инфраструктурой и исходным кодом.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        {/* Placeholder for a button or link if needed later, currently just information */}
                        <div className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm">
                            Доступно в Enterprise
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center p-6">
        <div className="mb-4 p-4 bg-slate-50 rounded-2xl">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
            {desc}
        </p>
    </div>
);

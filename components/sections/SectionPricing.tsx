import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import Link from "next/link";

export const SectionPricing = () => {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                        Прозрачные тарифы
                    </h2>
                    <p className="text-lg text-slate-500">
                        Функционал уровня Enterprise на любом этапе. Масштабируйтесь глобально.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    <PricingCard
                        name="Growth"
                        price="$490"
                        period="/ мес"
                        desc="Для бутиковых застройщиков (1-3 проекта)"
                        features={["Smart Catalog (до 500 лотов)", "Базовая CRM Синхронизация", "Email Поддержка", "Стандартный API"]}
                        cta="Начать бесплатно"
                        href="/start"
                    />
                    <PricingCard
                        name="Scale"
                        price="$1,490"
                        period="/ мес"
                        desc="Для активного международного роста"
                        features={["Все функции Growth", "Безлимит проектов", "Продвинутая CRM (Salesforce/HubSpot)", "Динамическое ценообразование", "Приоритетная поддержка"]}
                        cta="Выбрать план"
                        href="/pro"
                        popular
                    />
                    <PricingCard
                        name="Enterprise"
                        price="Custom"
                        period=""
                        desc="Для глобальных экосистем"
                        features={["Безлимит лотов и юзеров", "Кастомные интеграции", "On-premise / Private Cloud", "Выделенный Success Manager", "SLA 99.9%"]}
                        cta="Связаться с отделом продаж"
                        href="/contact"
                    />
                </div>

                {/* Implementation Trust Signal */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Внедрение под ключ & Техподдержка РФ</h3>
                        <p className="text-slate-600">
                            Команда внедрения работает в часовых поясах <strong>МСК</strong> и <strong>Екатеринбург</strong>.
                            Миграция данных из Excel/CRM, настройка шахматки и обучение менеджеров — берем на себя.
                        </p>
                    </div>
                    <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 whitespace-nowrap" asChild>
                        <Link href="/onboarding">Обсудить внедрение</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

interface PricingCardProps {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    cta: string;
    href: string;
    popular?: boolean;
}

const PricingCard = ({ name, price, period, desc, features, cta, href, popular }: PricingCardProps) => (
    <div className={`relative flex flex-col p-8 rounded-3xl bg-white border ${popular ? 'border-blue-600 shadow-xl ring-4 ring-blue-600/10' : 'border-slate-200 shadow-sm'} transition-all duration-300`}>
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Самый популярный
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-slate-900">{price}</span>
                <span className="text-slate-500">{period}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-sm text-slate-700">{f}</span>
                </li>
            ))}
        </ul>

        <Button variant={popular ? "default" : "outline"} className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'text-slate-900 border-slate-200 hover:bg-slate-50'}`} asChild>
            <Link href={href}>{cta}</Link>
        </Button>
    </div>
);

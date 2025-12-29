import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SectionIntegrations = () => {
    // Global Entreprise Integration Stack
    const logos = ["Salesforce", "HubSpot", "Microsoft Dynamics", "Zoho", "Pipedrive", "SAP", "Oracle", "Zapier"];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                    Работает в вашей глобальной экосистеме
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
                    Нативная двусторонняя интеграция с мировыми лидерами. <br className="hidden md:block" />
                    Синхронизируйте стоки, цены и сделки в <span className="font-semibold text-slate-900">Salesforce</span>, <span className="font-semibold text-slate-900">HubSpot</span> и <span className="font-semibold text-slate-900">Dynamics 365</span>.
                    <br className="mt-4 block" />
                    Еще 50+ модулей расширения доступны в нашем <b>Marketplace</b>.
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
                    {logos.map((logo, i) => (
                        <div key={i} className="text-xl md:text-2xl font-bold text-slate-400 select-none grayscale hover:grayscale-0 hover:text-slate-600 transition-all cursor-default">
                            {logo}
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button variant="link" className="text-blue-600" asChild>
                        <Link href="/integrations">Смотреть документацию API</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

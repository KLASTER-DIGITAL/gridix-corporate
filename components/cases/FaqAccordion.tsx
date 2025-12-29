"use client";

import { motion } from "framer-motion";
import { fadeInUpAnimation, viewportSettings } from "@/lib/motion-utils";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    title?: string;
    faqs?: FaqItem[];
}

const DEFAULT_FAQS: FaqItem[] = [
    {
        question: "Сколько занимает внедрение?",
        answer: "Стандартное внедрение занимает от 3 до 7 рабочих дней при наличии готовых данных в Excel или Google Sheets."
    },
    {
        question: "Как загружаются лоты?",
        answer: "Данные можно импортировать из Excel, Google Sheets или настроить автоматическую синхронизацию с вашей CRM системой (amoCRM, Bitrix24 и др.)."
    },
    {
        question: "Подходит ли для Tilda/WordPress/Next.js?",
        answer: "Да, GRIDIX v1 легко встраивается в любой сайт через iframe или API. У нас есть готовые плагины и примеры кода для всех популярных платформ."
    },
    {
        question: "Какие CRM поддерживаются?",
        answer: "Мы поддерживаем бесшовную интеграцию с amoCRM, Bitrix24. Также возможно подключение любой другой CRM через наш API или Webhooks."
    },
    {
        question: "Можно ли использовать мультиязычность?",
        answer: "Да, система полностью поддерживает мультиязычность. Вы можете перевести интерфейс каталога и данные лотов на любые языки для работы с иностранными клиентами."
    }
];

export const FaqAccordion = ({
    title = "Часто задаваемые вопросы",
    faqs = [],
}: FaqAccordionProps) => {
    const items = faqs.length > 0 ? faqs : DEFAULT_FAQS;

    return (
        <section className="bg-slate-50 py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        {...fadeInUpAnimation}
                        viewport={viewportSettings}
                    >
                        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                    </motion.div>

                    <motion.div
                        {...fadeInUpAnimation}
                        transition={{ delay: 0.1 }}
                        viewport={viewportSettings}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {items.map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="bg-white border border-slate-200 rounded-2xl px-6 py-1 overflow-hidden shadow-sm"
                                >
                                    <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

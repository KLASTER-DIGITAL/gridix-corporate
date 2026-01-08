"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const SectionFinalCTA = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative">
            <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Готовы трансформировать продажи?
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-md">
                            Оставьте заявку на демонстрацию, и мы покажем, как GRIDIX поможет вашему бизнесу расти.
                        </p>

                        <div className="flex flex-col gap-4 text-slate-300">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Бесплатный аудит ваших процессов</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Бриф на внедрение за 24 часа</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Демо-доступ к платформе на 14 дней</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <form className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Запишитесь на демо</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-slate-900">Имя</Label>
                                    <Input id="name" placeholder="Иван Петров" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company" className="text-slate-900">Компания</Label>
                                    <Input id="company" placeholder="Development Group" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-900">Email</Label>
                                <Input id="email" type="email" placeholder="ivan@company.com" className="bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500" />
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <Checkbox id="terms" className="mt-1" />
                                <Label htmlFor="terms" className="text-sm text-slate-500 font-normal leading-tight cursor-pointer">
                                    Я согласен на обработку персональных данных и получение рассылки о продуктах GRIDIX.
                                </Label>
                            </div>

                            <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-500 text-white font-medium" type="submit">
                                Отправить заявку <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

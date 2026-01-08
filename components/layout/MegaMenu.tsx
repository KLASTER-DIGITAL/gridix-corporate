"use client"
import * as React from "react"
import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Building2, Globe, LayoutGrid, Users, Zap } from "lucide-react"

export function MegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* Платформа (The Tech) */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-white/10 active:bg-white/10 font-medium">Платформа</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="flex flex-row w-[900px] bg-white rounded-xl shadow-2xl overflow-hidden">
                            {/* Main Columns */}
                            <div className="flex-1 p-6 grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                                        <LayoutGrid className="w-4 h-4" />
                                        <span className="text-sm uppercase tracking-wider">Основные модули</span>
                                    </div>
                                    <ul className="space-y-1">
                                        <MenuLink href="/smart-catalog" title="Smart Catalog & Showcase" desc="Interactive inventory for your website" />
                                        <MenuLink href="/developer-workspace" title="Developer Workspace" desc="Unified inventory & pricing control" />
                                        <MenuLink href="/crm-sync" title="CRM Connector" desc="2-way real-time synchronization" />
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-2">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-sm uppercase tracking-wider">Возможности</span>
                                    </div>
                                    <ul className="space-y-1">
                                        <MenuLink href="/pricing-engine" title="Динамическое ценообразование" desc="AI-алгоритмы управления выручкой" />
                                        <MenuLink href="/analytics" title="Глобальная аналитика" desc="Сводные отчеты по всем проектам" />
                                        <MenuLink href="/api" title="API и Webhooks" desc="Headless архитектура для IT-команд" />
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar Callout */}
                            <div className="w-64 bg-slate-50 p-6 flex flex-col justify-between border-l border-slate-100">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2">Новый релиз</h4>
                                    <p className="text-sm text-slate-500 mb-4">
                                        Представляем <strong>Global Feeds 2.0</strong>. Мгновенная выгрузка на международные порталы.
                                    </p>
                                    <Link href="/updates" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                                        История обновлений &rarr;
                                    </Link>
                                </div>
                                <div className="mt-8">
                                    <Button size="sm" className="w-full bg-slate-900 text-white hover:bg-slate-800" asChild>
                                        <Link href="/demo">Заказать демо</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Решения (The Value) */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 focus:bg-white/10 active:bg-white/10 font-medium">Решения</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid grid-cols-2 w-[600px] bg-white rounded-xl shadow-2xl p-6 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-slate-500" /> Для бизнеса
                                </h4>
                                <ul className="space-y-2">
                                    <SimpleLink href="/solutions/developers" title="Застройщикам" desc="Автоматизация и конверсия" />
                                    <SimpleLink href="/solutions/agencies" title="Агентствам недвижимости" desc="Единые стоки и бронирование" />
                                    <SimpleLink href="/solutions/brokers" title="Частным брокерам" desc="Мобильный кабинет продаж" />
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-slate-500" /> Для клиентов
                                </h4>
                                <ul className="space-y-2">
                                    <SimpleLink href="/solutions/buyers" title="Покупателям недвижимости" desc="Выбор квартиры без стресса" />
                                </ul>
                            </div>
                            <div className="col-span-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">Global Enterprise</div>
                                        <div className="text-xs text-slate-500">GDPR Compliant • Мультивалютность • Мультиязычность</div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50" asChild>
                                    <Link href="/enterprise">Подробнее &rarr;</Link>
                                </Button>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/cases" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-300 hover:text-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10 font-medium")}>
                            Интеграции
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/pricing" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-300 hover:text-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10 font-medium")}>
                            Тарифы
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/blog" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-300 hover:text-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10 font-medium")}>
                            Блог
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const MenuLink = ({ href, title, desc }: { href: string, title: string, desc: string }) => (
    <Link href={href} className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50">
        <div className="text-sm font-medium leading-none text-slate-900 group-hover:text-blue-700 transition-colors">
            {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-500 group-hover:text-slate-600">
            {desc}
        </p>
    </Link>
)

const SimpleLink = ({ href, title, desc }: { href: string, title: string, desc?: string }) => (
    <li>
        <Link href={href} className="group block text-sm hover:translate-x-1 transition-all">
            <div className="font-medium text-slate-700 group-hover:text-blue-600">{title}</div>
            {desc && <div className="text-xs text-slate-400 group-hover:text-slate-500">{desc}</div>}
        </Link>
    </li>
)

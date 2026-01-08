"use client";

import { Link } from '@/i18n/routing';
import { MegaMenu } from './layout/MegaMenu';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { LocaleSwitcher } from './LocaleSwitcher';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { } from 'react';

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-900/60 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="font-bold text-2xl tracking-tighter shrink-0 text-white flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
                        G
                    </div>
                    GRIDIX
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <MegaMenu />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Login - Desktop Only */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/partners" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Партнерская программа
                        </Link>

                        {/* Language Switcher */}
                        <LocaleSwitcher />

                        <div className="w-px h-6 bg-white/10" />

                        <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5">
                            Вход
                        </Button>
                    </div>

                    <Button className="h-9 px-4 text-sm bg-white text-slate-900 hover:bg-slate-200 font-medium transition-colors hidden sm:flex" asChild>
                        <Link href="/demo">
                            Заказать демо
                        </Link>
                    </Button>

                    {/* Mobile Menu Trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-slate-900 border-white/10 p-0">
                            <SheetHeader className="p-6 border-b border-white/10">
                                <SheetTitle className="text-left text-white flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">G</div>
                                    GRIDIX
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-6 gap-6">
                                <div className="flex flex-col gap-4">
                                    <MobileLink href="/smart-catalog">Смарт-каталог</MobileLink>
                                    <MobileLink href="/developer-workspace">Кабинет застройщика</MobileLink>
                                    <MobileLink href="/crm-sync">CRM и Лиды</MobileLink>
                                    <MobileLink href="/cases">Интеграции</MobileLink>
                                    <MobileLink href="/blog">Блог</MobileLink>
                                    <MobileLink href="/pricing">Тарифы</MobileLink>
                                    <MobileLink href="/partners">Партнерская программа</MobileLink>
                                </div>
                                <div className="h-px bg-white/10 w-full" />
                                <div className="flex flex-col gap-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white" asChild>
                                        <Link href="/demo">Заказать демо</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 bg-transparent" asChild>
                                        <Link href="/login">Вход</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

const MobileLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <SheetClose asChild>
        <Link href={href} className="text-lg font-medium text-slate-300 hover:text-white transition-colors">
            {children}
        </Link>
    </SheetClose>
);

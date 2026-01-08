"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/i18n/routing';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export const LocaleSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onLocaleChange(nextLocale: "en" | "ru") {
        router.replace(pathname, { locale: nextLocale });
    }

    const locales = [
        { code: 'en' as const, name: 'English', flag: '🌐' },
        { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' }
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/5 gap-2 px-2 h-9">
                    <Globe className="w-4 h-4" />
                    <span className="uppercase text-xs font-bold">{locale}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-slate-900 border-white/10 text-slate-300">
                {locales.map((loc) => (
                    <DropdownMenuItem
                        key={loc.code}
                        className={`hover:bg-white/10 hover:text-white cursor-pointer gap-2 ${locale === loc.code ? 'bg-white/5 text-white' : ''}`}
                        onClick={() => onLocaleChange(loc.code)}
                    >
                        <span className="text-base">{loc.flag}</span> {loc.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

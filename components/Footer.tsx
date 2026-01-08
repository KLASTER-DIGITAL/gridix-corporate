import { Link } from '@/i18n/routing';

export const Footer = () => {
    return (
        <footer className="border-t bg-slate-50 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Продукты</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/smart-catalog" className="hover:text-blue-600">Смарт-каталог</Link></li>
                            <li><Link href="/developer-workspace" className="hover:text-blue-600">Кабинет застройщика</Link></li>
                            <li><Link href="/solutions/agencies" className="hover:text-blue-600">Агентствам</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Решения</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/solutions/developers" className="hover:text-blue-600">Для застройщиков</Link></li>
                            <li><Link href="/solutions/agencies" className="hover:text-blue-600">Для агентств</Link></li>
                            <li><Link href="/solutions/brokers" className="hover:text-blue-600">Для брокеров</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Ресурсы</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/cases" className="hover:text-blue-600">Кейсы</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-600">Блог</Link></li>
                            <li><Link href="/help" className="hover:text-blue-600">Центр помощи</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Компания</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/about" className="hover:text-blue-600">О нас</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600">Карьера</Link></li>
                            <li><Link href="/partners" className="hover:text-blue-600 font-medium text-blue-700">Партнерская программа</Link></li>
                            <li><Link href="/contacts" className="hover:text-blue-600">Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Юридическая информация</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/privacy" className="hover:text-blue-600">Политика конфиденциальности</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-600">Условия использования</Link></li>
                            <li><Link href="/cookies" className="hover:text-blue-600">Настройки cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-slate-900">GRIDIX</span>
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} Gridix. All rights reserved.
                        </p>
                    </div>
                    <p className="text-sm text-slate-500 text-center md:text-right max-w-md">
                        Global HQ. Legal details available on Company page.
                    </p>
                </div>
            </div>
        </footer>
    );
}

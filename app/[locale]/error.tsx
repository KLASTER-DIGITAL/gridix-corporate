'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/routing';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Root Error Boundary caught:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center">
            <div className="max-w-md space-y-6">
                <h2 className="text-3xl font-bold text-white">Упс! Что-то пошло не так</h2>
                <p className="text-slate-400">
                    Произошла критическая ошибка приложения. Мы уже работаем над её исправлением.
                </p>
                <div className="rounded-lg bg-red-500/10 p-4 text-left font-mono text-xs text-red-400">
                    Error: {error.message || 'Unknown Error'}
                    {error.digest && <div className="mt-2 text-red-500/50">Digest: {error.digest}</div>}
                </div>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500"
                    >
                        Попробовать снова
                    </button>
                    <Link
                        href="/"
                        className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-700"
                    >
                        На главную
                    </Link>
                </div>
            </div>
        </div>
    );
}

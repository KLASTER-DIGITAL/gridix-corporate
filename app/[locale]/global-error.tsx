'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center font-sans">
                    <div className="max-w-md space-y-6">
                        <h2 className="text-3xl font-bold text-white">Критическая ошибка системы</h2>
                        <p className="text-slate-400">
                            Приложение не смогло загрузиться. Это может быть связано с конфигурацией сервера или временными сбоями API.
                        </p>
                        <div className="rounded-lg bg-red-500/10 p-4 text-left font-mono text-xs text-red-400">
                            {error.message || 'Fatal Runtime Error'}
                            {error.digest && <div className="mt-2 text-red-500/50">Digest: {error.digest}</div>}
                        </div>
                        <button
                            onClick={() => reset()}
                            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500"
                        >
                            Перезагрузить приложение
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center p-4 text-center">
            <h2 className="text-3xl font-bold mb-4">404 - Страница не найдена</h2>
            <p className="mb-8 text-gray-600">К сожалению, запрашиваемая страница не существует или была перемещена.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Вернуться на главную
            </Link>
        </div>
    );
}

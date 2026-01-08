import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export interface CtaButtonProps {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const CtaButton = ({ label, href, variant = 'primary', className }: CtaButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
        secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-gray-50 focus:ring-blue-500",
    };

    return (
        <Link
            href={href || '/'} // Fallback to root if empty
            className={cn(baseStyles, variants[variant], className)}
        >
            {label}
        </Link>
    );
};

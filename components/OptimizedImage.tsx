'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down';
    objectPosition?: string;
}

/**
 * Optimized Image component that wraps next/image with sensible defaults
 * Includes blur placeholder and lazy loading for better performance
 */
export const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    fill = false,
    objectFit = 'cover',
    objectPosition = 'center',
}: OptimizedImageProps) => {
    const [isLoading, setIsLoading] = useState(true);

    // Use fill layout for responsive containers
    if (fill) {
        return (
            <Image
                src={src}
                alt={alt}
                fill
                className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
                style={{ objectFit, objectPosition }}
                onLoadingComplete={() => setIsLoading(false)}
                priority={priority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
        );
    }

    // Use fixed dimensions for known sizes
    return (
        <div className="relative overflow-hidden">
            <Image
                src={src}
                alt={alt}
                width={width || 800}
                height={height || 600}
                className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
                onLoadingComplete={() => setIsLoading(false)}
                priority={priority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
        </div>
    );
};

/**
 * Motion utilities for optimized Framer Motion animations
 * Respects prefers-reduced-motion for accessibility
 */

import { useReducedMotion } from 'framer-motion';

/**
 * Simple fade + slide animation preset
 * Used for section reveals and entrance animations
 */
export const fadeInUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
};

/**
 * Fade only animation (no translate) - lighter weight
 * Used when scroll reveal is the main goal
 */
export const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
};

/**
 * Hover scale animation - should be light to avoid jank
 */
export const hoverScaleAnimation = {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
};

/**
 * Scale pop-in animation for important elements
 */
export const scaleInAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
};

/**
 * Hook to check if animations should be reduced
 * Returns true if user has prefers-reduced-motion enabled
 */
export const useMotionOptimized = () => {
    const prefersReducedMotion = useReducedMotion();
    return {
        shouldReduceMotion: prefersReducedMotion,
        fadeInUp: prefersReducedMotion ? { initial: {}, animate: {}, transition: { duration: 0 } } : fadeInUpAnimation,
        fadeIn: prefersReducedMotion ? { initial: {}, animate: {}, transition: { duration: 0 } } : fadeInAnimation,
        hoverScale: prefersReducedMotion ? {} : hoverScaleAnimation,
        scaleIn: prefersReducedMotion ? { initial: {}, animate: {}, transition: { duration: 0 } } : scaleInAnimation,
    };
};

/**
 * Viewport settings for whileInView - optimized for performance
 */
export const viewportSettings = {
    once: true, // Only animate once when scrolled into view
    amount: 0.2, // Trigger when 20% of element is visible
    margin: '0px 0px -100px 0px', // Start animation 100px before element is visible
} as const;

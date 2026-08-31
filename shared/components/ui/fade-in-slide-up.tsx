'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const EasingCubicBezier = [0.16, 1, 0.3, 1] as const;
// Matches the GSAP page-transition duration so hero elements
// don't animate in while the SVG overlay is still revealing.
export const TRANSITION_OFFSET = 0.55;

interface FadeInSlideUpProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    /** Set true on above-the-fold elements so they wait for the page transition to finish */
    aboveFold?: boolean;
}

export const FadeInSlideUp: React.FC<FadeInSlideUpProps> = ({
    children,
    delay = 0,
    duration = 0.7,
    yOffset = 30,
    className = '',
    aboveFold = false,
    ...props
}) => {
    const resolvedDelay = aboveFold ? TRANSITION_OFFSET + delay : delay;
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay: resolvedDelay,
                ease: EasingCubicBezier,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer: React.FC<{
    children: React.ReactNode;
    staggerDelay?: number;
    /** Extra seconds before stagger begins. Use TRANSITION_OFFSET on above-fold grids */
    delayStart?: number;
    className?: string;
}> = ({ children, staggerDelay = 0.15, delayStart = 0, className = '' }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayStart,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<{
    children: React.ReactNode;
    className?: string;
    yOffset?: number;
    duration?: number;
}> = ({ children, className = '', yOffset = 30, duration = 0.6 }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: yOffset },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                ease: EasingCubicBezier,
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

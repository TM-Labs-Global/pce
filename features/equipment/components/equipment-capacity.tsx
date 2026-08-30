'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export const OurCapabilities = () => {
    const images = [
        "/pictures/equipment/86c3ba14ac08b1e273a3104b60a24efc.jpg",
        "/pictures/equipment/8e21cc64655f27a26e938c224b26b924.jpg",
        "/pictures/equipment/908122977b82673480d072587ad56daf.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="w-full bg-[var(--color-canvas-tint)] section flex flex-col items-start gap-12 border-t border-[var(--color-hairline)]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* Left Column: Heading, Narrative, and CTA */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
                    {/* Header Group */}
                    <div className="flex flex-col items-start">
                        {/* Headline */}
                        <div className="max-w-[700px] mb-8">
                            <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                                Scale matters. Control matters more.
                            </Text>
                        </div>
                    </div>

                    {/* Narrative & CTA */}
                    <div className="flex flex-col items-start gap-8 w-full">
                        <div className="flex flex-col gap-6 max-w-[540px] w-full">
                            <p className="text-[var(--color-ink-muted-80)] text-sm md:text-base leading-relaxed">
                                Large equipment creates capacity. Disciplined engineering, guidance, drilling-fluid management and field coordination turn that capacity into a successful crossing.
                            </p>
                        </div>

                        {/* Mobile-Only Looping Slideshow (Placed inline between narrative and stats) */}
                        <div className="block lg:hidden relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden group border border-black/5 bg-black/5 w-full">
                            {images.map((imgUrl, index) => (
                                <div 
                                    key={imgUrl}
                                    className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
                                        index === currentImageIndex 
                                            ? 'opacity-100 scale-100 z-10' 
                                            : 'opacity-0 scale-105 z-0'
                                    }`}
                                    style={{ backgroundImage: `url("${imgUrl}")` }}
                                />
                            ))}
                        </div>

                        {/* Key Stats Block (Lines between them) */}
                        <div className="w-full flex flex-col max-w-[540px]">
                            {/* Stat 1 */}
                            <div className="py-4 border-b border-[var(--color-primary)]/10 flex justify-between items-baseline gap-4">
                                <span className="text-2xl font-extrabold text-[var(--color-primary)]">500t</span>
                                <span className="text-sm text-[var(--color-ink-muted-80)] font-semibold uppercase tracking-wider">
                                    HDD rig capacity
                                </span>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className="py-4 border-b border-[var(--color-primary)]/10 flex justify-between items-baseline gap-4">
                                <span className="text-2xl font-extrabold text-[var(--color-primary)]">500t</span>
                                <span className="text-sm text-[var(--color-ink-muted-80)] font-semibold uppercase tracking-wider">
                                    Pipe-handling capacity
                                </span>
                            </div>
                            
                            {/* Stat 3 */}
                            <div className="py-4 border-b border-[var(--color-primary)]/10 flex justify-between items-baseline gap-4">
                                <span className="text-2xl font-extrabold text-[var(--color-primary)]">3</span>
                                <span className="text-sm text-[var(--color-ink-muted-80)] font-semibold uppercase tracking-wider">
                                    ParaTrack 2 systems
                                </span>
                            </div>
                            
                            {/* Stat 4 */}
                            <div className="py-4 flex justify-between items-baseline gap-4">
                                <span className="text-2xl font-extrabold text-[var(--color-primary)]">3</span>
                                <span className="text-sm text-[var(--color-ink-muted-80)] font-semibold uppercase tracking-wider">
                                    F5 walkover systems
                                </span>
                            </div>
                        </div>

                        {/* CTA Link */}
                        <Link 
                            href="/capabilities" 
                            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-primary)] font-extrabold hover:text-[var(--color-accent)] transition-colors duration-300 mt-2"
                        >
                            Explore Our HDD CapabilitY
                            <ArrowRight size={14} className="text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Dynamic Looping Slideshow (Desktop Only) */}
                <div className="hidden lg:block lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden group border border-black/5 bg-black/5">
                    {images.map((imgUrl, index) => (
                        <div 
                            key={imgUrl}
                            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
                                index === currentImageIndex 
                                    ? 'opacity-100 scale-100 z-10' 
                                    : 'opacity-0 scale-105 z-0'
                            }`}
                            style={{ backgroundImage: `url("${imgUrl}")` }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

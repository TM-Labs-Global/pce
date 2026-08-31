'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';

export const OurApproach = () => {
    return (
        <section className="w-full bg-[var(--color-surface-tile-1)] section flex flex-col items-start gap-12 border-t border-[var(--color-surface-tile-3)]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-12 lg:gap-x-20 items-center">
                
                {/* Left Column: Tagline, Headline, Body & CTA */}
                <FadeInSlideUp className="lg:col-span-6 flex flex-col items-start gap-6">
                    {/* Tagline */}
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-white/80 font-semibold">
                            Our Approach
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight">
                            The route, the crossing and the line considered together.
                        </Text>
                    </div>

                    {/* Body Paragraph */}
                    <p className="!text-white/80 text-sm md:text-base leading-relaxed max-w-[540px]">
                        Complex pipeline projects rarely depend on one discipline.
                        Ground conditions affect engineering. Engineering determines equipment. Equipment affects execution. And every stage must work within the project&apos;s safety, quality and programme requirements.
                        PCE brings these considerations together from assessment through delivery.
                    </p>

                    {/* CTA Link */}
                    <div className="pt-2">
                        <Link 
                            href="/projects" 
                            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-accent)] font-extrabold hover:text-white transition-colors duration-300"
                        >
                            Explore Our Projects
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </FadeInSlideUp>

                {/* Right Column: Image */}
                <FadeInSlideUp delay={0.15} className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-xl overflow-hidden group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: 'url("/pictures/company/pipeline.jpg")' }}
                    />
                </FadeInSlideUp>

            </div>
        </section>
    );
};

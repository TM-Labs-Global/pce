import React from 'react';
import Link from 'next/link';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight } from '@phosphor-icons/react';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

export const FeaturedProject = () => {
    return (
        <section className="w-full min-h-screen bg-[var(--color-canvas-tint)] section flex flex-col items-start gap-12 border-t border-[var(--color-hairline)]">
            
            {/* Header Block */}
            <FadeInSlideUp className="w-full flex flex-col items-start">
                {/* Tagline */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                    <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                    <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                        FEATURED PROJECT • AKK RIVER NIGER HDD CROSSING
                    </span>
                </div>

                {/* Headline */}
                <div className="max-w-[900px]">
                    <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                        Across the River Niger. <span className="text-[var(--color-accent)]">1.565 km beneath a critical crossing.</span>
                    </Text>
                </div>
            </FadeInSlideUp>

            {/* 1. Standalone Featured Image */}
            <FadeInSlideUp delay={0.1} className="w-full h-[300px] md:h-[500px] relative overflow-hidden rounded-xl group border border-black/5">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                    style={{ backgroundImage: 'url("/pictures/home-page/akk-river-crossing.jpg")' }}
                />
                <div className="absolute inset-0 bg-black/5" />
            </FadeInSlideUp>
            
            {/* 2. Two-Column Details Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Column: Narrative */}
                <FadeInSlideUp delay={0.05} className="lg:col-span-7 flex flex-col items-start gap-8 max-w-[600px]">
                    <div className="flex flex-col gap-4">
                        <span className="text-base uppercase tracking-wider text-[var(--color-ink-muted-48)] font-semibold">
                            WHEN THE CROSSING IS CRITICAL, EXECUTION MATTERS.
                        </span>
                        <Text variant="lead-airy" intent="default" className="!text-[24px] leading-relaxed">
                            <span className="font-extrabold">Completed July 2025</span>, PCE completed the specialist HDD crossing for the 40-inch AKK gas pipeline beneath the River Niger through complex sand, gravel and rock strata.
                        </Text>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center">
                        <Link 
                            href="/projects/akk-river-niger" 
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-sm uppercase tracking-wider font-semibold group/link"
                        >
                            EXPLORE THE AKK PROJECT 
                            <ArrowRight weight="bold" className="text-[var(--color-accent)] group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </FadeInSlideUp>

                {/* Right Column: Stacked Stats */}
                <StaggerContainer delayStart={0.1} className="lg:col-span-5 flex flex-col gap-6 justify-center">
                    
                    {/* Stat 1 */}
                    <StaggerItem className="flex flex-col items-start gap-1">
                        <Text variant="display-md" className="font-extrabold text-[var(--color-accent)] leading-none !text-[32px] md:!text-[40px]">
                            1.565 km
                        </Text>
                        <span className="text-base text-[var(--color-ink)] opacity-70">
                            HDD crossing
                        </span>
                    </StaggerItem>
                    
                    <div className="w-full h-[1px] bg-[var(--color-hairline)]" />

                    {/* Stat 2 */}
                    <StaggerItem className="flex flex-col items-start gap-1">
                        <Text variant="display-md" className="font-extrabold text-[var(--color-accent)] leading-none !text-[32px] md:!text-[40px]">
                            40 in
                        </Text>
                        <span className="text-base text-[var(--color-ink)] opacity-70">
                            Pipeline diameter
                        </span>
                    </StaggerItem>

                </StaggerContainer>

            </div>

        </section>
    );
};

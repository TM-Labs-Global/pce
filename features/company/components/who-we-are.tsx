'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';

export const WhoWeAre = () => {
    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block */}
                <FadeInSlideUp className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            Who We Are
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                            Specialist capability for demanding pipeline HDD Crossing and EPC work.
                        </Text>
                    </div>
                </FadeInSlideUp>

                {/* 2. Image Column */}
                <FadeInSlideUp delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[280px] sm:h-[380px] lg:h-[600px]">
                    {/* Bottom-Left Image */}
                    <div className="relative lg:absolute lg:left-0 lg:bottom-0 w-full h-full lg:w-[70%] lg:h-[72%] rounded-xl overflow-hidden border border-black/5 shadow-sm">
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("/pictures/company/specialist-pipe-2.jpg")' }}
                        />
                    </div>

                    {/* Top-Right Image */}
                    <div 
                        className="hidden lg:block absolute lg:right-0 lg:top-0 lg:w-[58%] lg:h-[68%] rounded-xl overflow-hidden border border-black/5 z-10 shadow-md"
                    >
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("/pictures/company/specialist-pipe.jpg")' }}
                        />
                    </div>
                </FadeInSlideUp>

                {/* 3. Description & CTA Block */}
                <FadeInSlideUp delay={0.15} className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start lg:mt-8">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <p className="!text-[var(--color-ink-muted-48)] text-base md:text-lg font-semibold leading-relaxed">
                            Complex crossings leave little room for disconnected delivery.
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            PCE combines pipeline engineering and construction, specialist HDD capability, deep-pipeline location technology and technical resources to support projects from assessment through execution.
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Our approach is guided by safety, quality, efficiency and integrity.
                        </p>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center mt-8">
                        <Link 
                            href="/projects" 
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-sm uppercase tracking-wider font-semibold group/link no-underline"
                        >
                            Explore Our Projects
                            <ArrowRight weight="bold" className="text-[var(--color-accent)] group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </FadeInSlideUp>
            </div>
        </section>
    );
};

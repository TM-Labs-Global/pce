'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';

export const Experience = () => {
    return (
        <section className="w-full bg-white section flex flex-col items-start gap-12 border-t border-[var(--color-primary-dark)]/10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block */}
                <FadeInSlideUp className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            Experience
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight !text-[var(--color-ink)]">
                            Local execution backed by international project experience.
                        </Text>
                    </div>
                </FadeInSlideUp>

                {/* 2. Image Column */}
                <FadeInSlideUp delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: 'url("/pictures/company/experience.jpg")' }}
                    />
                </FadeInSlideUp>

                {/* 3. Description & CTA Block */}
                <FadeInSlideUp delay={0.15} className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start gap-8 lg:mt-8">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            PCE's project record brings together complex pipeline and HDD experience in Nigeria and international markets.
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            From major River Niger crossings in Nigeria to pipeline and HDD projects in Thailand and China, that experience informs how we approach difficult geology, critical infrastructure and demanding execution requirements.
                        </p>
                    </div>

                    {/* CTA Link */}
                    <Link 
                        href="/projects" 
                        className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-accent)] font-extrabold hover:text-[var(--color-primary-dark)] transition-colors duration-300"
                    >
                        Explore Our Projects
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </FadeInSlideUp>

            </div>
        </section>
    );
};

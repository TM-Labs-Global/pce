'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';

export const Certification = () => {
    return (
        <section className="w-full bg-white section flex flex-col items-start gap-12 border-t border-[var(--color-primary-dark)]/10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block */}
                <FadeInSlideUp className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            STANDARDS & CERTIFICATION
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight !text-[var(--color-ink)]">
                            Supporting compliant project delivery.
                        </Text>
                    </div>
                </FadeInSlideUp>

                {/* 2. Image Column */}
                <FadeInSlideUp delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: 'url("/pictures/safety/standards.jpg")' }}
                    />
                </FadeInSlideUp>

                {/* 3. Description Block */}
                <FadeInSlideUp delay={0.15} className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start gap-8 lg:mt-8">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            PCE's registrations and certifications support execution across the project lifecycle.
                        </p>

                        {/* Standards / Certifications Line with Vertical Dividers */}
                        <div className="flex flex-wrap items-center divide-x divide-[var(--color-hairline)] py-2 text-base md:text-[18px] font-normal tracking-wide text-[var(--color-primary)]">
                            {['NMDPRA', 'ISO', 'Technical Certification'].map((item, idx) => (
                                <span 
                                    key={item} 
                                    className={idx === 0 ? 'pr-4' : idx === 2 ? 'pl-4' : 'px-4'}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                         <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Specific certification details and applicable project documentation should be confirmed with PCE as part of the qualification or project-enquiry process.
                        </p>
                    </div>
                </FadeInSlideUp>

            </div>
        </section>
    );
};

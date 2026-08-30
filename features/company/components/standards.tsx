'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export const Standards = () => {
    return (
        <section className="w-full bg-[#f8fafc] section flex flex-col items-start gap-12 border-t border-[var(--color-primary-dark)]/10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            Standards & Responsibility
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight !text-[var(--color-ink)]">
                            Delivery guided by safety, quality and responsibility.
                        </Text>
                    </div>
                </div>

                {/* 2. Image Column */}
                <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: 'url("/pictures/company/standards.jpg")' }}
                    />
                </div>

                {/* 3. Description & Certifications & CTA Block */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start gap-8 lg:mt-8">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            PCE's registrations, certifications and operating standards support compliant execution across the project lifecycle.
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Our approach places safety, environmental care and social responsibility alongside technical performance and delivery.
                        </p>
                    </div>

                    {/* Certifications Row */}
                    <div className="w-full py-2 max-w-[540px]">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-extrabold uppercase tracking-widest text-[var(--color-primary-dark)]">
                            <span>NMDPRA</span>
                            <span className="h-4 w-[1px] bg-[var(--color-ink-muted-48)]/20 inline-block" />
                            <span>ISO</span>
                            <span className="h-4 w-[1px] bg-[var(--color-ink-muted-48)]/20 inline-block" />
                            <span>Technical Certification</span>
                        </div>
                    </div>

                    {/* CTA Link */}
                    <Link 
                        href="/safety-quality-responsibility" 
                        className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-accent)] font-extrabold hover:text-[var(--color-primary-dark)] transition-colors duration-300"
                    >
                        Explore Safety & Quality
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

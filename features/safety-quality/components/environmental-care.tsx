'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export const EnvironmentalCare = () => {
    return (
        <section className="w-full bg-white section flex flex-col items-start gap-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            Environmental Care
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight !text-[var(--color-ink)]">
                            Progress beneath the surface. Less disturbance above it.
                        </Text>
                    </div>
                </div>

                {/* 2. Image Column */}
                <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden group">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")' }}
                    />
                </div>

                {/* 3. Description & CTA Block */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start gap-8 lg:mt-8">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Horizontal Directional Drilling allows pipelines to cross beneath rivers, roads and other obstacles without continuous open-cut excavation across the crossing route.
                            For suitable projects, this can reduce direct surface disturbance while enabling the required pipeline connection
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Environmental considerations form part of PCE's wider commitment to responsible project delivery.
                        </p>
                    </div>

                    {/* CTA Link */}
                    <Link 
                        href="/projects" 
                        className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-accent)] font-extrabold hover:text-[var(--color-primary-dark)] transition-colors duration-300"
                    >
                        Explore HDD Capability
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

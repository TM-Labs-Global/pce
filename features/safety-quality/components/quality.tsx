'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight } from '@phosphor-icons/react';

export const Quality = () => {
    const stats = [
        {
            title: "Engineering",
            description: "Develop the technical basis, method and execution requirements."
        },
        {
            title: "Fabrication",
            description: "Prepare pipeline components and assemblies according to project requirements."
        },
        {
            title: "Welding & NDT",
            description: "Execute welding and non-destructive testing as part of pipeline construction."
        },
        {
            title: "Hydrotesting",
            description: "Test completed pipeline sections as required before operation."
        },
        {
            title: "Coating",
            description: "Protect pipeline surfaces and completed work according to project requirements."
        },
        {
            title: "Pre-Commissioning & Commissioning",
            description: "Verify and prepare completed systems for handover and operation."
        }
    ];

    return (
        <section className="w-full min-h-screen bg-[var(--color-canvas-tint)] section flex flex-col items-start gap-12 border-t border-[var(--color-hairline)]">
            
            {/* Header Block */}
            <div className="w-full flex flex-col items-start">
                {/* Tagline */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                    <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                    <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                        QUALITY
                    </span>
                </div>

                {/* Headline */}
                <div className="max-w-[900px]">
                    <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                       Quality from engineering through testing and handover.
                    </Text>
                </div>
            </div>

            {/* 1. Standalone Featured Image */}
            <div className="w-full h-[300px] md:h-[500px] relative overflow-hidden rounded-xl group border border-black/5">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-black/5" />
            </div>
            
            {/* 2. Two-Column Details Layout (Directly on white background) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Left Column: Narrative (6/12 width on desktop) */}
                <div className="lg:col-span-6 flex flex-col items-start gap-8 max-w-[600px]">
                    <div className="flex flex-col gap-4">
                        <Text variant="lead-airy" intent="default" className="!text-[24px] leading-relaxed">
                            Pipeline integrity depends on the quality of decisions and workmanship throughout the project lifecycle.
                            PCE's delivery scope incorporates the technical activities required to construct, test and prepare pipeline systems for operation.
                        </Text>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center">
                        <a 
                            href="#" 
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors text-sm uppercase tracking-wider font-semibold group/link"
                        >
                            EXPLORE PIPELINE EPC 
                            <ArrowRight weight="bold" className="text-[var(--color-accent)] group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right Column: 2x3 Grid Stats (6/12 width on desktop) */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 items-start">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-start gap-2">
                            <span className="text-[14px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                                0{index + 1}
                            </span>
                            <h4 className="text-base font-bold text-[var(--color-ink)] leading-snug">
                                {stat.title}
                            </h4>
                            <p className="text-xs text-[var(--color-ink-muted-48)] leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

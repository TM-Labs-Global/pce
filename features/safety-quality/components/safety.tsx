'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';

export const Safety = () => {
    const stats = [
        {
            title: "Understand the Work",
            description: "Consider project conditions, technical requirements and potential field risks before execution."
        },
        {
            title: "Prepare for Execution",
            description: "Align personnel, equipment and site requirements with the planned work."
        },
        {
            title: "Maintain Field Awareness",
            description: "Respond to changing site conditions and information as execution progresses."
        },
        {
            title: "Complete with Control",
            description: "Carry safety and technical requirements through testing, completion and handover."
        }
    ];

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-16 lg:gap-x-24 items-center">
                
                {/* 1. Heading Block (Top Left on Desktop, First on Mobile) */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            Safety
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[700px]">
                        <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                            Protecting people through every stage of delivery.
                        </Text>
                    </div>
                </div>

                {/* 2. Image Column (Right Column on Desktop, Second on Mobile) */}
                <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 order-2 lg:order-none relative w-full h-[280px] sm:h-[380px] lg:h-[600px]">
                    {/* Bottom-Left Image (Group photo scene - Main photo on mobile) */}
                    <div className="relative lg:absolute lg:left-0 lg:bottom-0 w-full h-full lg:w-[70%] lg:h-[72%] rounded-xl overflow-hidden border border-black/5 shadow-sm">
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")' }}
                        />
                    </div>

                    {/* Top-Right Image (Pipeline lifting scene - Hidden on mobile) */}
                    <div 
                        className="hidden lg:block absolute lg:right-0 lg:top-0 lg:w-[58%] lg:h-[68%] rounded-xl overflow-hidden border border-black/5 z-10 shadow-md"
                    >
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80")' }}
                        />
                    </div>
                </div>

                {/* 3. Description & CTA Block (Bottom Left on Desktop, Third on Mobile) */}
                <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 order-3 lg:order-none flex flex-col items-start lg:-mt-16">
                    {/* Body Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[540px]">
                         <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Complex pipeline work brings people, heavy equipment, technical interfaces and changing field conditions together.
                            PCE places safety across the project lifecycle—from assessment and engineering through mobilisation, construction, testing and commissioning.
                        </p>
                        <p className="!text-[var(--color-ink)] text-sm md:text-base leading-relaxed">
                            Safety is treated as part of how the work is planned and delivered—not as a separate activity at the end.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Stats / Principles Block with Hairline Dividers */}
            <div className="w-full pt-16 mt-8 border-t border-[var(--color-ink)]/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[var(--color-ink)]/15">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-start gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                        <span className="text-[14px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                            0{index + 1}
                        </span>
                        <h4 className="text-lg font-bold text-[var(--color-ink)] leading-snug">
                            {stat.title}
                        </h4>
                        <p className="text-sm text-[var(--color-ink-muted-48)] leading-relaxed">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

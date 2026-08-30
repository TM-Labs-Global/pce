import React from 'react';
import { Text } from '@/shared/components/ui/text';

export const PeopleScale = () => {
    const stats = [
        {
            number: "150+",
            label: "People across five construction teams"
        },
        {
            number: "8",
            label: "HDD experts"
        },
        {
            number: "20+",
            label: "International management personnel"
        },
        {
            number: "10+",
            label: "Technicians"
        },
        {
            number: "24+",
            label: "Operations staff"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-surface-tile-1)] section border-t border-[var(--color-surface-tile-3)]">
            <div className="w-full flex flex-col items-start gap-16 lg:gap-20">
                
                {/* Heading Block */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
                    {/* Left Column (Tagline & Heading) */}
                    <div className="lg:col-span-7 flex flex-col items-start max-w-[680px]">
                        {/* Tagline */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                            <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                            <span className="text-sm uppercase tracking-wider text-canvas-tint font-semibold">
                                People & Scale
                            </span>
                        </div>

                        {/* Headline */}
                        <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight">
                            The capability starts with the people behind it.
                        </Text>
                    </div>

                    {/* Right Column (Subtext) */}
                    <div className="lg:col-span-5">
                        <p className="text-base md:text-lg leading-relaxed !text-white/70 font-normal">
                            Specialist expertise, international management experience and field capacity support PCE's pipeline and HDD delivery.
                        </p>
                    </div>
                </div>

                {/* Clean Numbers Grid Layout */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-start gap-3 pt-6 border-t border-white/15"
                        >
                            <Text 
                                variant="display-lg" 
                                className="!text-[36px] sm:!text-[44px] lg:!text-[52px] font-extrabold text-[var(--color-accent)] leading-none"
                            >
                                {stat.number}
                            </Text>
                            <span className="text-sm sm:text-base text-white/85 font-medium leading-snug">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

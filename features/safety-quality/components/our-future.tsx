'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

export const OurFuture = () => {
    return (
        <section className="w-full bg-[#052237] section flex flex-col items-center gap-12 border-t border-[var(--color-primary-dark)]">
            
            {/* Centered Heading Block */}
            <FadeInSlideUp className="w-full flex flex-col items-center">
                {/* Headline */}
                <div className="max-w-[800px] text-center mx-auto">
                    <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight text-center">
                        Sustainable Impact Beyond the Project
                    </Text>
                </div>
            </FadeInSlideUp>

            {/* Cards Grid */}
            <StaggerContainer className="w-full max-w-[1200px] mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Card 1: Responsibility */}
                <StaggerItem className="flex flex-col items-start gap-4 p-8 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[14px] uppercase tracking-wider text-[var(--color-accent)] font-extrabold">
                        Responsibility
                    </span>
                    <h3 className="!text-[28px] font-bold !text-white leading-snug">
                        Protecting more than the project.
                    </h3>
                    <p className="text-sm md:text-base !text-white leading-relaxed">
                        PCE's approach to responsible delivery extends beyond technical completion. We recognise the importance of protecting people, respecting communities and considering the environments in which our projects are executed. Safety, environmental care and social responsibility remain part of the standards we seek to uphold across our work.
                    </p>
                </StaggerItem>

                {/* Card 2: Future Direction */}
                <StaggerItem className="flex flex-col items-start gap-4 p-8 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[14px] uppercase tracking-wider text-[var(--color-accent)] font-extrabold">
                        Future Direction
                    </span>
                    <h3 className="!text-[28px] font-bold !text-white leading-snug">
                        Growing with sustainable impact.
                    </h3>
                    <p className="text-sm md:text-base !text-white leading-relaxed">
                        PCE's future direction includes reducing its carbon footprint and developing more environmentally considerate storage solutions. As the company expands into new regions and broadens its capabilities, that growth should strengthen technical performance while continuing to consider people, communities and the environment.
                    </p>
                </StaggerItem>

            </StaggerContainer>

        </section>
    );
};

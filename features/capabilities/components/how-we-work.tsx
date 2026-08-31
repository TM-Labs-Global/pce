'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

interface BentoCard {
    number: string;
    title: string;
    description: string;
    image: string;
    className: string;
}

export const HowWeWork = () => {
    const cardsList: BentoCard[] = [
        {
            number: "01",
            title: "Understand",
            description: "Assess the route, ground conditions, crossing constraints and project requirements.",
            image: "/pictures/capabilities/survey.jpg",
            className: "lg:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-[580px]"
        },
        {
            number: "02",
            title: "Engineer",
            description: "Develop the technical method, crossing design, programme and execution plan.",
            image: "/pictures/capabilities/engineer-on-site.jpg",
            className: "lg:col-span-1 min-h-[280px]"
        },
        {
            number: "03",
            title: "Prepare",
            description: "Mobilise the people, equipment, tools and materials required for the work.",
            image: "/pictures/capabilities/prepare-equipment.jpg",
            className: "lg:col-span-1 min-h-[280px]"
        },
        {
            number: "04",
            title: "Deliver",
            description: "Execute construction with technical, safety and quality oversight.",
            image: "/pictures/capabilities/completed-project.jpg",
            className: "lg:col-span-1 min-h-[280px]"
        },
        {
            number: "05",
            title: "Verify",
            description: "Test, document, pre-commission, commission and hand over the completed work",
            image: "/pictures/capabilities/handover.jpg",
            className: "lg:col-span-2 min-h-[280px]"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-surface-tile-3)] section flex flex-col items-start gap-20 border-t border-[var(--color-surface-tile-3)]">
            
            {/* Header Block */}
            <FadeInSlideUp className="w-full flex flex-col items-start">
                {/* Tagline */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                    <span className="text-sm uppercase tracking-wider text-white/80 font-semibold">
                        How We Work
                    </span>
                </div>

                {/* Headline */}
                <div className="max-w-[1000px]">
                    <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight">
                        A clear path from <span className="text-[var(--color-accent)]">assessment to commissioning.</span>
                    </Text>
                </div>
            </FadeInSlideUp>

            {/* Bento Grid */}
            <StaggerContainer className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.6fr_1fr] gap-6 auto-rows-auto">
                {cardsList.map((card, index) => (
                    <StaggerItem key={index} className={card.className}>
                        <div 
                            className={`relative overflow-hidden rounded-xl flex flex-col justify-end p-8 group border border-white/5 transition-all duration-300 cursor-pointer lg:p-10 h-full`}
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                                style={{ backgroundImage: `url("${card.image}")` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 pointer-events-none" />

                            {/* Content Container */}
                            <div className="relative z-10 flex flex-col items-start gap-3">
                                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent)]">
                                    Step {card.number}
                                </span>

                                <div className="flex flex-col gap-2">
                                    <h3 className="!text-[24px] font-bold text-white leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed !text-white">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

        </section>
    );
};

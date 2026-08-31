'use client';

import React from 'react';
import Link from 'next/link';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight } from '@phosphor-icons/react';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

interface CapabilityCard {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const Capabilities = () => {
    const capabilitiesList: CapabilityCard[] = [
        {
            id: "hdd",
            number: "01",
            title: "Horizontal Directional Drilling",
            description: "Specialist HDD engineering and construction for complex river, road, coastal and hard-ground crossings.",
            image: "/pictures/home-page/horizontal-drilling-new.jpg",
            link: "/capabilities"
        },
        {
            id: "epc",
            number: "02",
            title: "Pipeline EPC",
            description: "Engineering, procurement and construction for pipeline projects, including construction, testing, pre-commissioning and commissioning support.",
            image: "/pictures/home-page/pipeline-drilling.jpg",
            link: "/capabilities"
        },
        {
            id: "bpds",
            number: "03",
            title: "BPDS Pipeline Location",
            description: "Three-dimensional location and depth measurement for deeply buried steel pipelines in complex environments.",
            image: "/pictures/home-page/pipeline-new.jpg",
            link: "/capabilities"
        },
        {
            id: "support",
            number: "04",
            title: "Equipment & Technical Support",
            description: "HDD rigs, drilling systems, specialist tools, materials and technical field support aligned to project requirements.",
            image: "/pictures/home-page/equipment.jpg",
            link: "/capabilities"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-20">
            
            {/* Header Block */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end">
                {/* Left Column: Heading */}
                <FadeInSlideUp className="lg:col-span-7 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            OUR CAPABILITIES
                        </span>
                    </div>

                    {/* Headline */}
                    <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                        Connected capability across the pipeline crossing lifecycle.
                    </Text>
                </FadeInSlideUp>

                {/* Right Column: Narrative */}
                <FadeInSlideUp delay={0.1} className="lg:col-span-5 flex justify-start lg:justify-end">
                    <Text variant="body" intent="default" className="text-[var(--color-ink-muted-48)] leading-relaxed lg:max-w-[420px] text-base md:text-lg">
                        From understanding the route to engineering the crossing and delivering the line, PCE combines four specialist capabilities around complex pipeline projects.
                    </Text>
                </FadeInSlideUp>
            </div>

            {/* Bento Grid of Cards */}
            <StaggerContainer className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
                {capabilitiesList.map((cap, index) => {
                    const colSpan = (index === 0 || index === 3) 
                        ? 'lg:col-span-7' 
                        : 'lg:col-span-5';

                    return (
                        <StaggerItem key={cap.id} className={`col-span-1 ${colSpan} w-full`}>
                            <Link href="/capabilities" className="no-underline block w-full h-full">
                                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-2xl border border-black/10 shadow-sm group cursor-pointer flex flex-col justify-end p-6 sm:p-8 md:p-10">
                                    {/* Background Image */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                        style={{ backgroundImage: `url("${cap.image}")` }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />
                                    
                                    {/* Content Overlay (Title + Number + Icon) */}
                                    <div className="relative z-10 flex flex-col items-start gap-3 w-full">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                                            {cap.number}
                                        </span>
                                        <div className="flex items-end justify-between w-full gap-4">
                                            <h3 className="!text-[22px] sm:!text-[28px] lg:!text-[32px] font-extrabold text-white leading-tight group-hover:text-[var(--color-accent)] transition-colors max-w-[480px]">
                                                {cap.title}
                                            </h3>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:translate-x-0.5 transition-all duration-300">
                                                <ArrowRight size={20} weight="bold" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>

        </section>
    );
};

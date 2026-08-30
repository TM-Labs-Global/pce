import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight } from '@phosphor-icons/react';

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
            link: "#"
        },
        {
            id: "epc",
            number: "02",
            title: "Pipeline EPC",
            description: "Engineering, procurement and construction for pipeline projects, including construction, testing, pre-commissioning and commissioning support.",
            image: "/pictures/home-page/pipeline-drilling.jpg",
            link: "#"
        },
        {
            id: "bpds",
            number: "03",
            title: "BPDS Pipeline Location",
            description: "Three-dimensional location and depth measurement for deeply buried steel pipelines in complex environments.",
            image: "/pictures/home-page/pipeline-new.jpg",
            link: "#"
        },
        {
            id: "support",
            number: "04",
            title: "Equipment & Technical Support",
            description: "HDD rigs, drilling systems, specialist tools, materials and technical field support aligned to project requirements.",
            image: "/pictures/home-page/equipment.jpg",
            link: "#"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-20">
            
            {/* Header Block */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end">
                {/* Left Column: Heading */}
                <div className="lg:col-span-7 flex flex-col items-start">
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
                </div>

                {/* Right Column: Narrative */}
                <div className="lg:col-span-5 flex justify-start lg:justify-end">
                    <Text variant="body" intent="default" className="text-[var(--color-ink-muted-48)] leading-relaxed lg:max-w-[420px] text-base md:text-lg">
                        From understanding the route to engineering the crossing and delivering the line, PCE combines four specialist capabilities around complex pipeline projects.
                    </Text>
                </div>
            </div>

            {/* Grid of Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {capabilitiesList.map((cap) => (
                    <div key={cap.id} className="w-full flex flex-col items-start gap-6">
                        
                        {/* 1. Standalone Image (No text, no gradient overlay) */}
                        <div className="w-full h-[280px] lg:h-[380px] relative overflow-hidden rounded-xl border border-black/5 group cursor-pointer">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                                style={{ backgroundImage: `url("${cap.image}")` }}
                            />
                        </div>

                        {/* 2. Text Panel */}
                        <div className="w-full flex flex-col items-start gap-4">
                            {/* Title & Description */}
                            <div className="flex flex-col gap-2">
                                <h3 className="!text-[24px] font-bold text-[var(--color-ink)] leading-tight">
                                    {cap.title}
                                </h3>
                                <p className="text-[var(--color-ink-muted-48)] text-sm md:text-base leading-relaxed max-w-[580px]">
                                    {cap.description}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

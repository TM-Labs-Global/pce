'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight } from '@phosphor-icons/react';
import { CAPABILITIES_CARDS } from '../data/capabilities-data';
import { CapabilityDrawer } from './capability-drawer';
import { useCapabilityDrawer } from '../hooks/use-capability-drawer';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

export const CoreCapabilities = () => {
    const { activeId, isDrawerVisible, openCapability, closeCapability } = useCapabilityDrawer();

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-20 relative">
            
            {/* Header Block */}
            <FadeInSlideUp className="w-full flex flex-col items-start">
                {/* Tagline */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                    <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                    <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                        OUR CAPABILITIES
                    </span>
                </div>

                {/* Headline */}
                <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight max-w-[720px]">
                    <span className="text-[var(--color-accent)]">Four Capabilities.</span> One Project Objective.
                </Text>
            </FadeInSlideUp>

            {/* Grid of Cards */}
            <StaggerContainer className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {CAPABILITIES_CARDS.map((cap) => (
                    <StaggerItem key={cap.id} className="w-full flex flex-col items-start gap-6">
                        
                        {/* 1. Standalone Image Frame */}
                        <div 
                            onClick={() => openCapability(cap.id)}
                            className="w-full h-[280px] lg:h-[380px] relative overflow-hidden rounded-xl border border-black/5 group cursor-pointer"
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                                style={{ backgroundImage: `url("${cap.image}")` }}
                            />
                        </div>

                        {/* 2. Text & Button Panel */}
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

                            {/* Read More Button */}
                            <button 
                                onClick={() => openCapability(cap.id)}
                                className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-focus)] text-white text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-md transition-colors mt-2 cursor-pointer"
                            >
                                Read More
                                <ArrowRight weight="bold" />
                            </button>
                        </div>

                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Reusable Capability Slide-Over Drawer */}
            <CapabilityDrawer 
                capabilityId={activeId}
                isVisible={isDrawerVisible}
                onClose={closeCapability}
            />

        </section>
    );
};

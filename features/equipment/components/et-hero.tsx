'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { Button } from '@/shared/components/ui/button';
import { ArrowRight } from '@phosphor-icons/react';

export const ETHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[var(--bg-tile-dark)]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url("/pictures/equipment/hero.jpg")' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-tile-dark)] via-[var(--bg-tile-dark)]/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-[var(--z-elevate)] w-full px-[var(--section-pad-x)] py-25 flex flex-col items-start">
                
                {/* Headline */}
                <div className="max-w-[1000px] mb-6">
                    <Text variant="hero" intent="inverse">
                        <span className="text-[var(--color-accent)]">The Right Equipment</span> Changes What Is Possible.
                    </Text>
                </div>

                {/* Sub-headline */}
                <div className="max-w-[800px] mb-10 flex flex-col gap-6">
                    <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed !text-white">
                        PCE deploys large-scale HDD rigs, pipe-handling equipment, drilling-fluid systems, guidance technology and supporting plant for demanding pipeline crossings.
                    </Text>
                    <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed !text-white">
                        Our resources are selected and configured around the route, ground conditions, pipeline and crossing method.
                    </Text>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary" rightIcon={<ArrowRight weight="bold" aria-hidden="true" />}>
                         Discuss Your Crossing
                    </Button>
                </div>
            </div>
        </section>
    );
};

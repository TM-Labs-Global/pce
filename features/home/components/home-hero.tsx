import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export const HomeHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[var(--bg-tile-dark)]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 pointer-events-none"
                    poster="/pictures/home-page/home-hero-new.jpg"
                >
                    <source
                        src="https://takeoutmediang-my.sharepoint.com/:v:/g/personal/r_amadi_takeoutmedia_xyz/IQAtbsD7crxUQazv-ipzS28fAeMXgDvf5iSn7o2OlQHjofk?download=1"
                        type="video/mp4"
                    />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-tile-dark)] via-[var(--bg-tile-dark)]/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-[var(--z-elevate)] w-full px-[var(--section-pad-x)] py-25 flex flex-col items-start">
                
                {/* Headline */}
                <div className="max-w-[1000px] mb-6">
                    <Text variant="hero" intent="inverse">
                        Engineering Complex <span className="text-[var(--color-accent)]">Pipeline</span> Crossings.
                    </Text>
                </div>

                {/* Sub-headline */}
                <div className="max-w-[800px] mb-10">
                    <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed">
                        Integrated HDD, pipeline EPC and deep-pipeline location capability from assessment and engineering through construction and commissioning.
                    </Text>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary" href="/capabilities" rightIcon={<ArrowRight weight="bold" aria-hidden="true" />}>
                        Explore Our Capabilities
                    </Button>

                    <Button variant="tertiary" href="/contact" rightIcon={<ArrowRight weight="bold" aria-hidden="true" />}>
                        Start a Project
                    </Button>
                </div>
            </div>
        </section>
    );
};



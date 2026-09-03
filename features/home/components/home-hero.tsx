import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { Button } from '@/shared/components/ui/button';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';
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
            <div className="relative z-[var(--z-elevate)] w-full px-[var(--section-pad-x)] pt-32 pb-24 md:pb-[12vh] lg:pb-[15vh] flex flex-col items-start">
                
                {/* Headline */}
                <FadeInSlideUp aboveFold delay={0} className="max-w-[1000px] mb-6">
                    <Text variant="hero" intent="inverse">
                        <span className="text-[var(--color-accent)]">HDD</span> Crossing. EPC for Pipeline.
                    </Text>
                </FadeInSlideUp>

                {/* Sub-headline: Capability list */}
                <FadeInSlideUp aboveFold delay={0.15} className="max-w-[800px] mb-10">
                    <ul className="flex flex-col gap-2.5 !list-none !pl-0 !m-0">
                        {[
                            "Excellent HDD construction capability",
                            "Professional HDD drilling fluid scheme design and product supply capability",
                            "Comprehensive pipeline EPC construction capability",
                            "Deep buried pipeline detection capability",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed">
                                    {item}
                                </Text>
                            </li>
                        ))}
                    </ul>
                </FadeInSlideUp>

                {/* Buttons Row */}
                <FadeInSlideUp aboveFold delay={0.3} className="flex flex-wrap gap-4">
                    <Button variant="primary" href="/capabilities" rightIcon={<ArrowRight weight="bold" aria-hidden="true" />}>
                        Explore Our Capabilities
                    </Button>

                    <Button variant="tertiary" href="/contact" rightIcon={<ArrowRight weight="bold" aria-hidden="true" />}>
                        Start a Project
                    </Button>
                </FadeInSlideUp>
            </div>
        </section>
    );
};



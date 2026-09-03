'use client';

import React from 'react';
import { Text } from '@/shared/components/ui/text';

// Construction-only slideshow, opening on the HDD on-site drilling rig.
const HERO_SLIDES = [
    "/pictures/equipment/hero.jpg",
    "/pictures/home-page/akk-river-crossing.jpg",
    "/pictures/case-study/ob3/ob3-hero.jpg",
    "/pictures/home-page/pipeline-drilling.jpg",
];

export const ProjectsHome = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[var(--bg-tile-dark)]">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {HERO_SLIDES.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center opacity-60 transition-opacity duration-[2000ms] ease-in-out ${
                            index === currentSlide ? 'opacity-60' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url("${src}")` }}
                    />
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-tile-dark)] via-[var(--bg-tile-dark)]/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-[var(--z-elevate)] w-full px-[var(--section-pad-x)] pt-32 pb-24 md:pb-[12vh] lg:pb-[15vh] flex flex-col items-start">
                
                {/* Headline */}
                <div className="max-w-[1000px] mb-6">
                    <Text variant="hero" intent="inverse">
                        Complex Crossings. Delivered.
                    </Text>
                </div>

                {/* Sub-headline */}
                <div className="max-w-[800px]">
                    <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed">
                        From the River Niger to major international HDD and pipeline projects, PCE's record spans difficult geology, large-diameter pipelines and technically demanding routes. Explore selected projects and the engineering behind them.
                    </Text>
                </div>
            </div>
        </section>
    );
};

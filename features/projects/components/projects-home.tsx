import React from 'react';
import { Text } from '@/shared/components/ui/text';

export const ProjectsHome = () => {
    return (
        <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[var(--bg-tile-dark)]">
            {/* Background Image / Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-tile-dark)] via-[var(--bg-tile-dark)]/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-[var(--z-elevate)] w-full px-[var(--section-pad-x)] py-25 flex flex-col items-start">
                
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

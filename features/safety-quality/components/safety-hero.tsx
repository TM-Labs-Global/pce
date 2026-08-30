import React from 'react';
import { Text } from '@/shared/components/ui/text';

export const SafetyHero = () => {
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
                        Dependable execution begins with clear standards.
                    </Text>
                </div>

                {/* Sub-headline */}
                <div className="max-w-[800px] mb-10">
                    <Text variant="lead-airy" intent="inverse" className="!text-[16px] md:!text-[20px] !leading-relaxed">
                        Safety, quality, efficiency and integrity guide PCE from early assessment through construction, testing and commissioning.
                        Responsible delivery means protecting people, maintaining technical standards and considering the environments and communities around the work.
                    </Text>
                </div>
            </div>
        </section>
    );
};

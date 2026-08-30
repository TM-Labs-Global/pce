import React from 'react';
import { Text } from '@/shared/components/ui/text';

export const Overview = () => {
    const stats = [
        {
            number: "150+",
            label: "People across five construction teams",
            image: "/pictures/home-page/people-working.jpeg"
        },
        {
            number: "5",
            label: "Specialist construction teams",
            image: "/pictures/home-page/engineering-teams-new.jpg"
        },
        {
            number: "500t",
            label: "Nigeria-based HDD rig and pipe-handling capability",
            image: "/pictures/home-page/pipe-handling-capacity.jpg"
        },
        {
            number: "100+m",
            label: "BPDS deep-pipeline survey capability",
            image: "/pictures/home-page/pipe-survey.jpg"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-surface-tile-1)] section border-t border-[var(--color-surface-tile-3)]">
            <div className="w-full flex flex-col items-start gap-20">
                
                {/* Heading Block */}
                <div className="flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-canvas-tint font-semibold">
                            PCE AT A GLANCE
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[1000px]">
                        <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight">
                            Specialist People. Field-ready Resources. Proven Capability.
                        </Text>
                    </div>
                </div>

                {/* Stats Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="relative overflow-hidden rounded-lg min-h-[400px] flex flex-col justify-end p-8 group cursor-default"
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url("${stat.image}")` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-start">
                                <Text 
                                    variant="display-lg" 
                                    className="font-extrabold mb-2 leading-none text-canvas-tint"
                                >
                                    {stat.number}
                                </Text>
                                <Text variant="body" intent="muted-dark" className="leading-relaxed">
                                    {stat.label}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

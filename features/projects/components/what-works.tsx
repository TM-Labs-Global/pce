import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

export const WhatWorks = () => {
    const stats = [
        {
            title: "Specialist Engineering",
            label: "Crossing methods shaped around pipeline requirements, geology and route constraints.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
        },
        {
            title: "Appropriate Equipment",
            label: "Rig, guidance, drilling-fluid and support systems configured around the technical demands of the work.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
        },
        {
            title: "Coordinated Execution",
            label: "Engineering, equipment, field operations, safety and quality brought together around the crossing.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
        },
        {
            title: "Experience Carried Forward",
            label: "Lessons from complex projects informing engineering and execution decisions on the next route.",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-surface-tile-1)] section border-t border-[var(--color-surface-tile-3)]">
            <div className="w-full flex flex-col items-start gap-20">
                
                {/* Heading Block */}
                <FadeInSlideUp className="flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-canvas-tint font-semibold">
                            WHAT CONNECTS THE WORK
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-[1000px]">
                        <Text variant="display-lg" as="h2" intent="inverse" className="!font-extrabold leading-tight">
                            Different routes. The same engineering discipline.
                        </Text>
                    </div>
                </FadeInSlideUp>

                {/* Stats Cards Grid */}
                <StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StaggerItem
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
                                <h3 className="!text-[24px] font-extrabold mb-3 leading-tight text-canvas-tint">
                                    {stat.title}
                                </h3>
                                <Text variant="body" intent="muted-dark" className="leading-relaxed text-sm">
                                    {stat.label}
                                </Text>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
};

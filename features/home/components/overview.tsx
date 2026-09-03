import React from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

export const Overview = () => {
    const stats = [
        {
            number: "150+",
            label: "People across five specialist construction teams",
            image: "/pictures/home-page/engineering-teams-new.jpg"
        },
        {
            number: "1000t/500t/500t",
            label: "Nigeria-based HDD rig and pipe-handling capability",
            image: "/pictures/product-image/bent/bent-stock.png"
        },
        {
            number: "",
            label: "Equipment & Materials in Nigeria",
            image: "/pictures/home-page/equipment.jpg"
        }
    ];

    return (
        <section className="w-full bg-[var(--color-surface-tile-1)] section border-t border-[var(--color-surface-tile-3)]">
            <div className="w-full flex flex-col items-start gap-20">
                
                {/* Heading Block */}
                <div className="flex flex-col items-start">
                    <FadeInSlideUp>
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
                                Specialist People. Field-ready Resources in Nigeria. Proven Capability.
                            </Text>
                        </div>
                    </FadeInSlideUp>
                </div>

                {/* Stats Cards Grid */}
                <StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => {
                        const isLongStat = stat.number.length > 8;
                        return (
                            <StaggerItem key={index}>
                                <div 
                                    className="relative overflow-hidden rounded-lg min-h-[380px] lg:min-h-[400px] flex flex-col justify-end p-6 sm:p-7 xl:p-8 group cursor-default"
                                >
                                    {/* Background Image */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${stat.image}")` }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />
                                    
                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-start w-full">
                                        {stat.number && (
                                            <div 
                                                className={`font-extrabold mb-2 leading-tight text-canvas-tint tracking-tight break-all sm:break-normal ${
                                                    isLongStat
                                                        ? 'text-[24px] sm:text-[28px] md:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px]'
                                                        : 'text-[42px] sm:text-[48px] md:text-[40px] lg:text-[48px] xl:text-[56px]'
                                                }`}
                                            >
                                                {stat.number}
                                            </div>
                                        )}
                                        <Text variant="body" intent="muted-dark" className="leading-relaxed w-full">
                                            {stat.label}
                                        </Text>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

            </div>
        </section>
    );
};

'use client';

import React, { useState } from 'react';
import { Text } from '@/shared/components/ui/text';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';
import { ArrowsOut } from '@phosphor-icons/react';
import { OverviewLightboxModal, GalleryCategory } from './overview-lightbox-modal';

const OVERVIEW_GALLERIES: GalleryCategory[] = [
    {
        id: "teams",
        categoryTitle: "PCE Construction Teams & Field Engineers",
        items: [
            { src: "/pictures/home-page/engineering-teams-new.jpg", title: "PCE Nigeria Engineering & Construction Specialist Team" },
            { src: "/pictures/hero-slider/construction-team-02.jpg", title: "PCE Field Construction Team on Site" },
            { src: "/pictures/hero-slider/ob3-02-team.jpg", title: "OB3 HDD River Niger Crossing Construction Team" },
            { src: "/pictures/hero-slider/ob3-construction-team.jpg", title: "OB3 Project Construction Team Celebration" },
            { src: "/pictures/company/specialist-enginering.jpg", title: "Specialist Pipeline Engineers & Rig Operations Crew" },
            { src: "/pictures/company/nigerian-eng.jpeg", title: "Nigerian Field Operations & Technical Construction Crew" },
        ]
    },
    {
        id: "rigs",
        categoryTitle: "Nigeria-based HDD Rigs & Pipe-Handling Capability",
        items: [
            { src: "/pictures/hero-slider/drilling-rig-cover-photo.png", title: "1000t / 500t Heavy HDD Drilling Rig System" },
            { src: "/pictures/hero-slider/drilling-rig-02.png", title: "Heavy Rig Positioning & Setup on Field Site" },
            { src: "/pictures/home-page/pipe-handling-capacity.jpg", title: "500t Heavy Pipe-Handling Machine in Operation" },
            { src: "/pictures/hero-slider/drilling-rig-03.png", title: "HDD Drilling Rig Operations & High-Pressure Mud Line" },
            { src: "/pictures/company/specialist-pipe-2.jpg", title: "Heavy Pipe Pullback & River Niger Crossing Operation" },
        ]
    },
    {
        id: "equipment",
        categoryTitle: "PCE Equipment & Materials Yard in Nigeria",
        items: [
            { src: "/pictures/equipment/main-equipments-cover-photo.jpg", title: "PCE Main Equipment & Materials Yard (Aerial View)" },
            { src: "/pictures/equipment/equipment-02.png", title: "Equipment & Materials Stock in Nigeria Yard" },
            { src: "/pictures/equipment/equipment-03.png", title: "Heavy HDD Rig Components & Field Equipment" },
            { src: "/pictures/equipment/equipment-04.png", title: "Field Heavy Machinery & Trenchless Construction Fleet" },
            { src: "/pictures/equipment/equipment-05.png", title: "Pipeline Supplies & Materials Stockpile" },
        ]
    }
];

export const Overview = () => {
    const [selectedGallery, setSelectedGallery] = useState<GalleryCategory | null>(null);

    const stats = [
        {
            number: "150+",
            label: "People across five specialist construction teams",
            image: "/pictures/home-page/engineering-teams-new.jpg",
            galleryIndex: 0
        },
        {
            number: "1000t/500t/500t",
            label: "Nigeria-based HDD rig and pipe-handling capability",
            image: "/pictures/hero-slider/drilling-rig-cover-photo.png",
            galleryIndex: 1
        },
        {
            number: "",
            label: "Equipment & Materials in Nigeria",
            image: "/pictures/equipment/main-equipments-cover-photo.jpg",
            galleryIndex: 2
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
                        const gallery = OVERVIEW_GALLERIES[stat.galleryIndex];
                        return (
                            <StaggerItem key={index}>
                                <div 
                                    onClick={() => setSelectedGallery(gallery)}
                                    className="relative overflow-hidden rounded-lg min-h-[380px] lg:min-h-[400px] flex flex-col justify-end p-6 sm:p-7 xl:p-8 group cursor-pointer border border-white/5 hover:border-[var(--color-accent)]/40 transition-all duration-300 shadow-lg hover:shadow-2xl"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedGallery(gallery);
                                        }
                                    }}
                                    aria-label={`View photo gallery for ${stat.label}`}
                                >
                                    {/* Background Image */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                        style={{ backgroundImage: `url("${stat.image}")` }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 group-hover:via-black/45 transition-colors duration-300" />
                                    
                                    {/* Expand Gallery Badge */}
                                    <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 group-hover:text-white group-hover:bg-[var(--color-accent)] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                                        <span>View Gallery ({gallery.items.length})</span>
                                        <ArrowsOut size={14} weight="bold" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-start w-full">
                                        {stat.number && (
                                            <div 
                                                className={`font-extrabold mb-2 leading-tight text-canvas-tint tracking-tight break-all sm:break-normal group-hover:text-[var(--color-accent)] transition-colors duration-300 ${
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

            {/* Lightbox Modal */}
            <OverviewLightboxModal
                isOpen={selectedGallery !== null}
                onClose={() => setSelectedGallery(null)}
                gallery={selectedGallery}
            />
        </section>
    );
};


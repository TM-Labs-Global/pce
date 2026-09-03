'use client';

import React, { useState } from 'react';
import { Text } from '@/shared/components/ui/text';
import { ArrowRight, ArrowsOut } from '@phosphor-icons/react';
import { CAPABILITIES_CARDS } from '../data/capabilities-data';
import { CapabilityDrawer } from './capability-drawer';
import { useCapabilityDrawer } from '../hooks/use-capability-drawer';
import { FadeInSlideUp, StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';
import { OverviewLightboxModal, GalleryCategory } from '@/features/home/components/overview-lightbox-modal';

const CAPABILITY_GALLERIES: Record<string, GalleryCategory> = {
    hdd: {
        id: "hdd",
        categoryTitle: "Horizontal Directional Drilling (HDD) Capability",
        items: [
            { src: "/pictures/hero-slider/drilling-rig-cover-photo.png", title: "500t / 1000t Heavy HDD Drilling Rig System" },
            { src: "/pictures/hero-slider/drilling-rig-02.png", title: "HDD Rig Positioning & Setup on Field Site" },
            { src: "/pictures/hero-slider/drilling-rig-03.png", title: "HDD Drilling Rig Operations & High-Pressure Mud Line" },
            { src: "/pictures/hero-slider/hdd-02.jpg", title: "River Niger HDD Crossing Site" },
            { src: "/pictures/hero-slider/hdd-03.jpg", title: "HDD Drilling Site Infrastructure" },
            { src: "/pictures/hero-slider/hdd-04.jpg", title: "HDD River Niger Crossing Pullback Operation" },
            { src: "/pictures/hero-slider/hdd.jpg", title: "Trenchless HDD River Crossing" }
        ]
    },
    epc: {
        id: "epc",
        categoryTitle: "52km Pipeline EPC Construction",
        items: [
            { src: "/pictures/hero-slider/pipeline-epc-cover-photo.JPG", title: "52km Pipeline EPC Construction Site" },
            { src: "/pictures/company/specialist-pipe-2.jpg", title: "52km Pipeline EPC Heavy Pipe Operations" },
            { src: "/pictures/company/specialist-pipe.jpg", title: "Pipeline Trenching, Alignment & Welding" },
            { src: "/pictures/company/pipeline.jpg", title: "Pipeline Coating, Hydrotesting & Pre-Commissioning" }
        ]
    },
    bpds: {
        id: "bpds",
        categoryTitle: "New Pipeline Location Survey Technique - BPDS",
        items: [
            { src: "/pictures/hero-slider/bpds-cover-photo.png", title: "BPDS 3D Pipeline Location & Depth Survey" },
            { src: "/pictures/hero-slider/bpds-02.png", title: "BPDS Detection Equipment Field Operation" },
            { src: "/pictures/hero-slider/bpds-03.png", title: "BPDS Signal Transmitter & Cable Connection" },
            { src: "/pictures/hero-slider/bpds-04.png", title: "Buried Pipeline Sensor Receiver System" },
            { src: "/pictures/hero-slider/bpds-05.png", title: "3D Coordinate & Magnetic Data Processing" },
            { src: "/pictures/hero-slider/bpds-06.png", title: "River Crossing Pipeline Burial Depth Mapping" },
            { src: "/pictures/hero-slider/bpds-07.png", title: "Complex Environment Deep Burial Surveying" },
            { src: "/pictures/hero-slider/bpds-08.png", title: "BPDS Magnetic Field Data Logging" },
            { src: "/pictures/hero-slider/bpds-09.png", title: "Pipeline Alignment Verification on Site" }
        ]
    },
    support: {
        id: "support",
        categoryTitle: "PCE Equipment Yard & Technical Fleet",
        items: [
            { src: "/pictures/equipment/main-equipments-cover-photo.jpg", title: "PCE Main Equipment Yard (Aerial View)" },
            { src: "/pictures/equipment/equipment-02.png", title: "Heavy Equipment Yard & Component Stock" },
            { src: "/pictures/equipment/equipment-03.png", title: "HDD Rig Components & Field Equipment" },
            { src: "/pictures/equipment/equipment-04.png", title: "Field Heavy Construction Fleet & Excavators" },
            { src: "/pictures/equipment/equipment-05.png", title: "Pipeline Supplies & Materials Stockpile" }
        ]
    }
};

export const CoreCapabilities = () => {
    const { activeId, isDrawerVisible, openCapability, closeCapability } = useCapabilityDrawer();
    const [selectedGallery, setSelectedGallery] = useState<GalleryCategory | null>(null);

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-20 relative">
            
            {/* Header Block */}
            <FadeInSlideUp className="w-full flex flex-col items-start">
                {/* Tagline */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                    <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                    <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                        OUR CAPABILITIES
                    </span>
                </div>

                {/* Headline */}
                <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight max-w-[720px]">
                    <span className="text-[var(--color-accent)]">Four Capabilities.</span> One Project Objective.
                </Text>
            </FadeInSlideUp>

            {/* Grid of Cards */}
            <StaggerContainer className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {CAPABILITIES_CARDS.map((cap) => {
                    const gallery = CAPABILITY_GALLERIES[cap.id];
                    return (
                        <StaggerItem key={cap.id} className="w-full flex flex-col items-start gap-6">
                            
                            {/* 1. Standalone Image Frame */}
                            <div 
                                id={cap.id}
                                onClick={() => setSelectedGallery(gallery)}
                                className="w-full h-[280px] lg:h-[380px] relative overflow-hidden rounded-xl border border-black/5 group cursor-pointer scroll-mt-28 select-none"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedGallery(gallery);
                                    }
                                }}
                                aria-label={`View photo gallery for ${cap.title}`}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    style={{ backgroundImage: `url("${cap.image}")` }}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                
                                {/* Expand Badge */}
                                {gallery && (
                                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 group-hover:bg-[var(--color-accent)] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                                        <span>Gallery ({gallery.items.length})</span>
                                        <ArrowsOut size={14} weight="bold" />
                                    </div>
                                )}
                            </div>

                            {/* 2. Text & Button Panel */}
                            <div className="w-full flex flex-col items-start gap-4">
                                
                                {/* Title & Description */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="!text-[24px] font-bold text-[var(--color-ink)] leading-tight">
                                        {cap.title}
                                    </h3>
                                    <p className="text-[var(--color-ink-muted-48)] text-sm md:text-base leading-relaxed max-w-[580px]">
                                        {cap.description}
                                    </p>
                                </div>

                                {/* Read More Button */}
                                <button 
                                    onClick={() => openCapability(cap.id)}
                                    className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-focus)] text-white text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-md transition-colors mt-2 cursor-pointer"
                                >
                                    Read Details
                                    <ArrowRight weight="bold" />
                                </button>
                            </div>

                        </StaggerItem>
                    );
                })}
            </StaggerContainer>

            {/* Reusable Capability Slide-Over Drawer */}
            <CapabilityDrawer 
                capabilityId={activeId}
                isVisible={isDrawerVisible}
                onClose={closeCapability}
            />

            {/* Lightbox Gallery Modal */}
            <OverviewLightboxModal
                isOpen={selectedGallery !== null}
                onClose={() => setSelectedGallery(null)}
                gallery={selectedGallery}
            />

        </section>
    );
};

'use client';

import React, { useState } from 'react';
import { Text } from '@/shared/components/ui/text';
import { CategoryPanel } from '@/shared/components/layout';
import { FadeInSlideUp } from '@/shared/components/ui/fade-in-slide-up';

interface EquipmentItem {
    id: string;
    number: string;
    title: string;
    description?: string;
    image: string;
}

interface EquipmentCategory {
    id: string;
    name: string;
    tagline: string;
    description: string;
    subtext?: string;
    items: EquipmentItem[];
}

export const OurEquipments = () => {
    const categories: EquipmentCategory[] = [
        {
            id: "major",
            name: "Major HDD equipment",
            tagline: "DRILL & HANDLE",
            description: "Drilling and pipe-handling capacity for demanding crossings.",
            items: [
                {
                    id: "xcmg-500",
                    number: "01",
                    title: "XCMG 500-ton HDD Rig",
                    description: "High-capacity HDD equipment for demanding crossing requirements.",
                    image: "/pictures/equipment/009061ab6e7649c67058fc722baea717.jpg"
                },
                {
                    id: "gd-5000",
                    number: "02",
                    title: "GD-5000L HDD Rig",
                    description: "Large-scale drilling capacity for specialist HDD operations.",
                    image: "/pictures/equipment/d0e080ab83f18ad8776c8191c62a97f9.jpg"
                },
                {
                    id: "gd-12000",
                    number: "03",
                    title: "GD-12000L HDD Rig",
                    description: "Heavy-duty drilling capacity for major HDD installations.",
                    image: "/pictures/equipment/07924d3afb9fe8bb6d4967bb6db2713f.jpg"
                },
                {
                    id: "pipe-handle",
                    number: "04",
                    title: "500-ton Pipe-Handling Machine",
                    description: "Pipe-handling capacity to support controlled pipeline movement during installation and pullback.",
                    image: "/pictures/equipment/0b026e180309e606678638afc944fa91.jpg"
                }
            ]
        },
        {
            id: "fluid",
            name: "Drilling-Fluid Systems",
            tagline: "MIX & CIRCULATE",
            description: "Manage the fluid. Protect the bore.",
            subtext: "Drilling-fluid performance is a critical part of HDD execution. PCE maintains mud systems, pumps, tanks and specialist materials to support drilling, bore preparation and pullback operations.",
            items: [
                {
                    id: "triplex-pump",
                    number: "01",
                    title: "4 Mud Systems",
                    image: "/pictures/equipment/1c5983063e2cc57b3f59fe039be7838b.jpg"
                },
                {
                    id: "mixing-plant",
                    number: "02",
                    title: "6 Mud-Pump Sets",
                    image: "/pictures/equipment/2459976cab9087de309cd658c84f8799.png"
                },
                {
                    id: "recycler",
                    number: "03",
                    title: "16 Mud Tanks",
                    image: "/pictures/equipment/16-mud-tanks-exact.png"
                },
                {
                    id: "storage-tanks",
                    number: "04",
                    title: "2000+ Bentonite Resources",
                    image: "/pictures/equipment/389706f272e7f4d1bcf7d0d033cbbbde.jpg"
                }
            ]
        },
        {
            id: "bore",
            name: "Drilling & Bore-Preparation Tools",
            tagline: "REAM & TOOL",
            description: "Build the bore for the pipeline that follows.",
            subtext: "PCE's HDD resources include the drilling and bore-preparation tools required across pilot drilling, reaming and pullback.",
            items: [
                {
                    id: "rock-reamer",
                    number: "01",
                    title: "Reamers",
                    description: "Tools configured for progressive bore enlargement according to pipeline and ground requirements.",
                    image: "/pictures/equipment/41db58c8ec7efe5752808ecbaa990f86.jpg"
                },
                {
                    id: "drill-pipes",
                    number: "02",
                    title: "Drilling Rods",
                    description: "7km+ of drilling rods supporting HDD operations.",
                    image: "/pictures/equipment/ce30c7b081d59737e6e0d72625467aa8.jpg"
                },
                {
                    id: "mud-motor",
                    number: "03",
                    title: "Drill Bits & Mud Motors",
                    description: "Specialist tools supporting drilling across project-specific ground conditions.",
                    image: "/pictures/equipment/448dd0f5d916cd203e7b270fb94af71b.jpg"
                },
                {
                    id: "barrel-reamer",
                    number: "04",
                    title: "Ramming Hammer",
                    description: "Additional support for demanding pipeline installation requirements.",
                    image: "/pictures/equipment/566e7b64671e89b4ed7a41a1d75ae748.jpg"
                }
            ]
        },
        {
            id: "pipe",
            name: "Pipe Movement & Support",
            tagline: "PULL & ROLL",
            description: "Control the pipeline through pullback.",
            subtext: "Pipeline installation requires coordinated handling and support as the prepared pipe string moves toward and through the bore.",
            items: [
                {
                    id: "roller-cradles",
                    number: "01",
                    title: "100+ Pipeline Rollers",
                    image: "/pictures/equipment/56a9c8908fa279648ea9400ce9a78142.jpg"
                },
                {
                    id: "breakout-jaws",
                    number: "02",
                    title: "2 Side Booms",
                    image: "/pictures/equipment/588277d2f95c9295d29dc111700ce85c.jpg"
                },
                {
                    id: "sidebooms",
                    number: "03",
                    title: "5 Excavators",
                    image: "/pictures/equipment/061e4cc0c1acb496606d745fa0bde02b.jpg"
                },
                {
                    id: "pull-heads",
                    number: "04",
                    title: "One 500-ton pipe-handling machine",
                    image: "/pictures/equipment/714b19248fca0f371f1566e5071e92e6.jpg"
                }
            ]
        },
        {
            id: "guidance",
            name: "Guidance Technology",
            tagline: "TRACK & ALIGN",
            description: "Precision beneath the surface.",
            subtext: "Controlled HDD execution depends on knowing where the bore is—and keeping it aligned with the engineered path.",
            items: [
                {
                    id: "guidance-walkover",
                    number: "01",
                    title: "3 ParaTrack 2 systems",
                    image: "/pictures/equipment/74b9f11e34ff436727a02d85d2590e09.jpg"
                },
                {
                    id: "guidance-gyro",
                    number: "02",
                    title: "3 F5 walkover systems",
                    image: "/pictures/equipment/82c0c5ae472ad01293102cd743df9b37.jpg"
                }
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState<string>("major");

    const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-12 !px-0 md:!px-[var(--section-pad-x)]">
            
            {/* Header Block */}
            <FadeInSlideUp className="w-full px-5 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end">
                {/* Left Column: Heading */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            OUR EQUIPMENT
                        </span>
                    </div>

                    {/* Headline */}
                    <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                        <span className="text-[var(--color-accent)]">Large-scale Equipment</span> Configured For Demanding Crossings.
                    </Text>
                </div>

                {/* Right Column: Narrative */}
                <div className="lg:col-span-5 flex justify-start lg:justify-end">
                    <Text variant="body" intent="default" className="text-[var(--color-ink-muted-48)] leading-relaxed lg:max-w-[460px] text-base md:text-lg">
                        Successful HDD execution depends on more than rig capacity. It requires the right combination of drilling power, guidance, fluid management, bore-preparation tools and pipe-handling resources. PCE brings these systems together around the requirements of the crossing.
                    </Text>
                </div>
            </FadeInSlideUp>

            {/* Tab Bar */}
            <div className="w-full flex flex-row flex-nowrap overflow-x-auto gap-3 pb-3 px-5 md:px-0 md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                            activeTab === cat.id
                                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                                : 'border border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5'
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Dynamic Category Panel */}
            <div className="w-full px-5 md:px-0">
                <CategoryPanel 
                    description={activeCategory.description} 
                    subtext={activeCategory.subtext}
                    items={activeCategory.items} 
                />
            </div>

        </section>
    );
};

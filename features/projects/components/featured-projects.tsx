'use client';

import React, { useState } from 'react';
import { Text } from '@/shared/components/ui/text';

interface ProjectItem {
    id: string;
    tagline: string;
    title: string;
    description: string;
    image: string;
    scope: 'nigeria' | 'international';
}

export const FeaturedProjects = () => {
    const allProjects: ProjectItem[] = [
        {
            id: "niger-river",
            tagline: "1.565 km beneath the River Niger",
            title: "AKK River Niger Crossing.",
            description: "PCE completed the specialist HDD crossing for the 40-inch AKK gas pipeline beneath the River Niger through mixed sand, gravel and rock strata.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
            scope: "nigeria"
        },
        {
            id: "escravos-crossing",
            tagline: "2 km at 52 metres depth.",
            title: "OB3 River Niger Crossing.",
            description: "PCE executed the River Niger HDD crossing on the OB3 Gas Pipeline between Ndoni in Rivers State and Aboh in Delta State.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
            scope: "nigeria"
        },
        {
            id: "chao-phraya",
            tagline: "Thailand · Bang Pakong",
            title: "Two major gas crossings.",
            description: "Two steel gas-pipeline crossings through clay and sand.",
            image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80",
            scope: "international"
        },
        {
            id: "imiringi-creek",
            tagline: "Guangdong, China",
            title: "Five parallel offshore crossings.",
            description: "Five parallel HDD crossings for steel gas pipelines through clay, sand and rock.",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80",
            scope: "international"
        },
        {
            id: "yangtze-river",
            tagline: "Raoyang River, China",
            title: "2,293 metres across the river.",
            description: "A large-diameter gas-pipeline crossing through sand and gravel strata.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
            scope: "international"
        },
        {
            id: "ajaokuta-crossing",
            tagline: "Zhanjiang, China",
            title: "4,060 metres through gravel and sand.",
            description: "A long-distance intersecting HDD crossing executed using 600-ton and 500-ton rigs.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
            scope: "international"
        },
        {
            id: "bonny-island",
            tagline: "Thailand · SRB–NBPT Link Line",
            title: "52 km of pipeline EPC.",
            description: "Pipeline EPC from Saraburi to Ang Thong Province, including extensive continuous HDD.",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
            scope: "international"
        }
    ];

    interface TabItem {
        id: string;
        name: string;
        description?: string;
        subtext?: string;
    }

    const tabs: TabItem[] = [
        { id: "all", name: "All" },
        { 
            id: "nigeria", 
            name: "Nigeria",
            description: "Serving Nigeria's national gas masterplan and swamp production grids.",
            subtext: "Delivering critical river crossings and shoreline pipeline installations under difficult tropical delta geology."
        },
        { 
            id: "international", 
            name: "International Experience",
            description: "Complex pipeline work beyond Nigeria.",
            subtext: "PCE's project record also includes major HDD and pipeline work in Thailand and China."
        }
    ];

    const [activeTab, setActiveTab] = useState<string>("all");
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setIsExpanded(false);
    };

    const activeTabInfo = tabs.find(t => t.id === activeTab);

    const filteredProjects = allProjects.filter((project) => {
        if (activeTab === "all") return true;
        return project.scope === activeTab;
    });

    const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 3);

    return (
        <section className="w-full bg-[var(--color-canvas)] section flex flex-col items-start gap-12 !px-0 md:!px-[var(--section-pad-x)]">
            
            {/* Header Block */}
            <div className="w-full px-5 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end">
                {/* Left Column: Heading */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Tagline */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-6">
                        <span className="w-6 h-[3px] bg-[var(--color-accent)] inline-block" />
                        <span className="text-sm uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                            FEATURED PROJECTS
                        </span>
                    </div>

                    {/* Headline */}
                    <Text variant="display-lg" as="h2" intent="default" className="!font-extrabold leading-tight">
                        Difficult Routes Demand More Than Standard Execution.
                    </Text>
                </div>

                {/* Right Column: Narrative */}
                <div className="lg:col-span-5 flex justify-start lg:justify-end">
                    <div className="lg:max-w-[460px] w-full flex flex-col gap-4">
                        <Text variant="body" intent="default" className="text-[var(--color-ink-muted-48)] leading-relaxed text-base md:text-lg">
                            Our project record combines specialist engineering, high-capacity equipment, field experience and technical methods shaped around the conditions of each crossing.
                        </Text>
                        
                        <div className="flex items-center gap-4 text-xs font-bold tracking-wider uppercase text-[var(--color-primary)] mt-1">
                            <span>Nigeria</span>
                            <span className="h-4 w-[1px] bg-[var(--color-primary)]/20 inline-block" />
                            <span>Thailand</span>
                            <span className="h-4 w-[1px] bg-[var(--color-primary)]/20 inline-block" />
                            <span>China</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Bar */}
            <div className="w-full flex flex-row flex-nowrap overflow-x-auto gap-3 pb-3 px-5 md:px-0 md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                            activeTab === tab.id
                                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                                : 'border border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Conditional Category Heading & Subtext Group */}
            {(activeTabInfo?.description || activeTabInfo?.subtext) && (
                <div className="flex flex-col gap-4 px-5 md:px-0 mt-4">
                    {activeTabInfo.description && (
                        <h3 className="!text-[28px] !font-normal text-[var(--color-ink-muted-48)] leading-tight max-w-[600px]">
                            {activeTabInfo.description}
                        </h3>
                    )}
                    {activeTabInfo.subtext && (
                        <p className="text-base text-[var(--color-ink-muted-48)] leading-relaxed max-w-[600px]">
                            {activeTabInfo.subtext}
                        </p>
                    )}
                </div>
            )}

            {/* Decoupled Asymmetric Grid Layout (Parostec Editorial style) */}
            <div className="w-full px-5 md:px-0 mt-8">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 lg:gap-y-24 items-start">
                    {visibleProjects.map((item, index) => {
                        let colClass = "lg:col-span-6";
                        let imgAspect = "aspect-[16/10]";
                        
                        if (index % 3 === 0) {
                            colClass = "lg:col-span-7";
                            imgAspect = "aspect-[16/11]";
                        } else if (index % 3 === 1) {
                            colClass = "lg:col-span-5 lg:mt-24";
                            imgAspect = "aspect-[4/3]";
                        } else if (index % 3 === 2) {
                            colClass = "lg:col-span-10 lg:col-start-2 lg:my-16";
                            imgAspect = "aspect-[16/9]";
                        }

                        return (
                            <div key={item.id} className={`w-full flex flex-col items-start gap-5 ${colClass}`}>
                                {/* Image Frame */}
                                <div className={`w-full ${imgAspect} relative rounded-xl overflow-hidden bg-black/5 group cursor-pointer`}>
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-all duration-[800ms] ease-out group-hover:scale-102 filter grayscale hover:grayscale-0"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    />
                                </div>
                                
                                {/* Info block underneath */}
                                <div className="flex flex-col items-start gap-2 text-left max-w-[540px]">
                                    <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                                        {item.tagline}
                                    </span>
                                    <h4 className="text-xl sm:text-2xl font-semibold text-[var(--color-ink)] leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-[var(--color-ink-muted-48)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Giant Asymmetric Browse All Projects Link (Acts as a show-more expander) */}
            {filteredProjects.length > 3 && !isExpanded && (
                <div className="w-full px-5 md:px-0 mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-start-4 lg:col-span-9 flex justify-start">
                        <button 
                            onClick={() => setIsExpanded(true)}
                            className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[0.15em] uppercase border-b-2 border-[var(--color-ink)] pb-2 text-[var(--color-ink)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 leading-none"
                        >
                            Browse All Projects
                        </button>
                    </div>
                </div>
            )}


        </section>
    );
};

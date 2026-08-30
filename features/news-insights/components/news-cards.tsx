'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react';

interface NewsCardItem {
    id: string;
    category: 'News' | 'Insights';
    date: string;
    title: string;
    description: string;
    image: string;
}

const newsItems: NewsCardItem[] = [
    {
        id: '1',
        category: 'News',
        date: 'AUGUST 24, 2026',
        title: 'PCE Nigeria Completes Record-Breaking Horizontal Directional Drilling Crossing',
        description: 'Our engineering team successfully executed a 1,200m river channel HDD crossing using advanced mud recycling systems.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    },
    {
        id: '2',
        category: 'Insights',
        date: 'AUGUST 18, 2026',
        title: 'Achieving ISO Technical & Environmental Excellence Across Operations',
        description: 'PCE Nigeria reaffirms its commitment to stringent NMDPRA and ISO compliance standards across all onshore projects.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
    },
    {
        id: '3',
        category: 'News',
        date: 'AUGUST 10, 2026',
        title: 'Fleet Expansion: Integrating High-Tonnage Rig Capacity for Deep Crossings',
        description: 'An inside look at PCE’s heavy equipment fleet expansion, enhancing pullback capabilities for large-diameter pipelines.',
        image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80',
    },
    {
        id: '4',
        category: 'Insights',
        date: 'JULY 28, 2026',
        title: 'Advanced BPDS Pipeline Location & Geotechnical Mapping',
        description: 'How electromagnetic and subsurface radar technologies are reducing risk and accelerating project timelines.',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    },
];

export const NewsCards = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'news', label: 'News' },
        { id: 'insights', label: 'Insights' },
    ];

    const filteredItems = activeTab === 'all'
        ? newsItems
        : newsItems.filter(item => item.category.toLowerCase() === activeTab);

    return (
        <section className="w-full bg-[var(--color-canvas-tint)] section flex flex-col items-start gap-8 py-16 lg:py-24">
            
            {/* Tab Bar */}
            <div className="w-full flex flex-row flex-nowrap overflow-x-auto gap-3 pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                            activeTab === tab.id
                                ? 'bg-[var(--color-primary)] text-white shadow-sm'
                                : 'border border-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <article
                        key={item.id}
                        className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-[240px] w-full bg-[#052237] overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold text-[var(--color-accent)] tracking-wider uppercase">
                                    {item.date}
                                </span>
                                <h3 className="!text-[20px] lg:!text-[24px] font-extrabold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[var(--color-ink-muted-48)] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-[var(--color-hairline)] flex items-center justify-between text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                <span>Read More</span>
                                <ArrowUpRight weight="bold" size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    );
};

export default NewsCards;

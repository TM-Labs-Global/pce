'use client';

import React, { useState } from 'react';
import { DownloadSimple } from '@phosphor-icons/react';
import { StaggerContainer, StaggerItem } from '@/shared/components/ui/fade-in-slide-up';

interface ReportCategory {
    id: string;
    label: string;
    items: {
        id: string;
        title: string;
        downloadUrl?: string;
    }[];
}

const reportCategories: ReportCategory[] = [
    {
        id: 'annual',
        label: 'Company Profile',
        items: [
            { id: 'profile-2026', title: '2026 PCE Corporate Profile', downloadUrl: '/report/01-PROFILE_PCE Nigeria LTD_2026-compressed.pdf' },
            { id: 'hdd-profile', title: 'HDD Technical Capability Profile' },
            { id: 'epc-profile', title: 'Pipeline EPC Capability Profile' },
            { id: 'qhse-profile', title: 'QHSE & Operations Profile' },
        ],
    },
];

export const Reports = () => {
    const [activeTabId, setActiveTabId] = useState<string>('annual');

    const activeCategory = reportCategories.find((cat) => cat.id === activeTabId) || reportCategories[0];

    return (
        <section className="w-full section py-16 lg:py-24 bg-white">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                
                {/* Left Sidebar / Top Category Navigation */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-black/10 gap-2 lg:gap-1 relative pb-2 lg:pb-0 whitespace-nowrap scrollbar-none">
                    {reportCategories.map((category) => {
                        const isActive = category.id === activeTabId;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveTabId(category.id)}
                                className={`relative text-left py-3.5 px-4 font-semibold text-sm lg:text-base transition-all duration-200 flex items-center justify-between ${
                                    isActive
                                        ? 'text-[var(--color-primary)] font-bold'
                                        : 'text-[var(--color-ink-muted-48)] hover:text-[var(--color-primary)]'
                                }`}
                            >
                                <span className="pr-2 lg:pr-4">{category.label}</span>
                                {isActive && (
                                    <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] w-full lg:w-[3px] lg:top-0 lg:bottom-0 lg:left-auto lg:-right-[1.5px] lg:h-auto bg-[var(--color-primary)] rounded-full z-10" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right Content Cards Grid */}
                <div className="lg:col-span-9">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {activeCategory.items.map((item) => {
                            const CardContent = (
                                <>
                                    {/* Decorative Pattern Background */}
                                    <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                                    {/* Top Title */}
                                    <h3 className="!text-[22px] lg:!text-[24px] font-extrabold text-white leading-snug relative z-10">
                                        {item.title}
                                    </h3>

                                    {/* Bottom Download Bar */}
                                    <div className="flex items-center justify-between relative z-10 pt-4">
                                        <span className="text-[var(--color-accent)] font-bold text-sm tracking-wide group-hover:underline">
                                            Download
                                        </span>
                                        <div className="text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                                            <DownloadSimple size={24} weight="bold" />
                                        </div>
                                    </div>
                                </>
                            );

                            return (
                                <StaggerItem key={item.id}>
                                    {item.downloadUrl ? (
                                        <a
                                            href={item.downloadUrl}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative bg-[#052237] text-white rounded-2xl p-6 lg:p-7 h-[360px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer no-underline block"
                                        >
                                            {CardContent}
                                        </a>
                                    ) : (
                                        <div
                                            className="relative bg-[#052237] text-white rounded-2xl p-6 lg:p-7 h-[360px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                        >
                                            {CardContent}
                                        </div>
                                    )}
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>

            </div>
        </section>
    );
};

export default Reports;

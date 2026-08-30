'use client';

import React, { useState } from 'react';
import { DownloadSimple } from '@phosphor-icons/react';

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
    {
        id: 'sustainability',
        label: 'Sustainability Reports',
        items: [
            { id: 'sus-2025', title: '2025 Sustainability & ESG Report' },
            { id: 'sus-2024', title: '2024 Sustainability & ESG Report' },
            { id: 'sus-2023', title: '2023 Sustainability & ESG Report' },
        ],
    },
    {
        id: 'financial',
        label: 'Abridged Unaudited Financial Statement',
        items: [
            { id: 'fin-q3-2025', title: 'Q3 2025 Financial Statement' },
            { id: 'fin-q2-2025', title: 'Q2 2025 Financial Statement' },
            { id: 'fin-q1-2025', title: 'Q1 2025 Financial Statement' },
        ],
    },
    {
        id: 'proxy',
        label: 'Proxy Form',
        items: [
            { id: 'proxy-2025', title: '2025 AGM Proxy Form' },
            { id: 'proxy-2024', title: '2024 AGM Proxy Form' },
        ],
    },
    {
        id: 'dividend',
        label: 'Unclaimed Dividend',
        items: [
            { id: 'div-2025', title: '2025 Unclaimed Dividend List' },
        ],
    },
    {
        id: 'agm',
        label: 'Notice of AGM',
        items: [
            { id: 'agm-2025', title: 'Notice of 2025 Annual General Meeting' },
        ],
    },
    {
        id: 'covid',
        label: 'COVID-19 Impact',
        items: [
            { id: 'covid-doc', title: 'Operational Resilience & Continuity Report' },
        ],
    },
    {
        id: 'audited',
        label: 'Audited Reports',
        items: [
            { id: 'aud-2025', title: '2025 Audited Financial Report' },
            { id: 'aud-2024', title: '2024 Audited Financial Report' },
        ],
    },
    {
        id: 'others',
        label: 'Others',
        items: [
            { id: 'oth-1', title: 'PCE Corporate Governance Framework' },
            { id: 'oth-2', title: 'QHSE Compliance Guidelines' },
        ],
    },
];

export const Reports = () => {
    const [activeTabId, setActiveTabId] = useState<string>('annual');

    const activeCategory = reportCategories.find((cat) => cat.id === activeTabId) || reportCategories[0];

    return (
        <section className="w-full section py-16 lg:py-24 bg-white">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                
                {/* Left Sidebar Navigation */}
                <div className="lg:col-span-3 flex flex-col border-r border-black/10 pr-0 gap-1 relative">
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
                                <span className="pr-4">{category.label}</span>
                                {isActive && (
                                    <span className="absolute -right-[1.5px] top-0 bottom-0 w-[3px] bg-[var(--color-primary)] rounded-full z-10" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Right Content Cards Grid */}
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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

                            return item.downloadUrl ? (
                                <a
                                    key={item.id}
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
                                    key={item.id}
                                    className="relative bg-[#052237] text-white rounded-2xl p-6 lg:p-7 h-[360px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reports;

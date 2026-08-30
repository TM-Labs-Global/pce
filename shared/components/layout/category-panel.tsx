'use client';

import React from 'react';

export interface CategoryItem {
    id: string;
    number: string;
    title: string;
    description?: string;
    image: string;
}

interface CategoryPanelProps {
    description: string;
    subtext?: string;
    items: CategoryItem[];
}

export const CategoryPanel = ({ description, subtext, items }: CategoryPanelProps) => {
    return (
        <div className="w-full flex flex-col items-start gap-[60px]">
            
            {/* Category Heading & Subtext Group */}
            <div className="flex flex-col gap-4">
                <h3 className="!text-[28px] !font-normal text-[var(--color-ink-muted-48)] leading-tight max-w-[600px]">
                    {description}
                </h3>
                {subtext && (
                    <p className="text-base text-[var(--color-ink-muted-48)] leading-relaxed max-w-[600px]">
                        {subtext}
                    </p>
                )}
            </div>

            {/* Grid of Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {items.map((item) => (
                    <div key={item.id} className="w-full flex flex-col items-start gap-5">
                        
                        {/* 1. Image Frame at the top */}
                        <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-black/5 group cursor-pointer">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            />
                        </div>

                        {/* 2. Text Content (Heading & Grey Description) */}
                        <div className="flex flex-col gap-2">
                            <h4 className="!font-semibold !text-[20px] text-[var(--color-primary)] leading-snug">
                                {item.title}
                            </h4>
                            {item.description && (
                                <p className="text-sm text-[var(--color-ink-muted-48)] leading-relaxed">
                                    {item.description}
                                </p>
                            )}
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    );
};

'use client';

import React from 'react';

export const ProductsHero: React.FC = () => {
    return (
        <section className="w-full section bg-[#052237] text-white pt-16 pb-20">
            <div className="flex flex-col gap-6 w-full max-w-6xl">
                {/* White PCE Lantic Logo */}
                <div>
                    <img
                        src="/logo/pce-logo-with-lantic.svg"
                        alt="PCE Lantic Logo"
                        className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Brighter Star Drilling Fluids
                </h1>

                <p className="text-xl md:text-2xl font-extrabold !text-[#f4691a]">
                    Engineered for HDD · Made for Results
                </p>

                <p className="text-base md:text-lg !text-white max-w-3xl leading-relaxed font-medium">
                    Bentonite &nbsp;·&nbsp; CMC &nbsp;·&nbsp; MMH &nbsp;·&nbsp; Clay Viscosity Reducer &nbsp;·&nbsp; Xanthan Gum
                </p>

                {/* Value Pillars Chips */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                    {['Competitive Pricing', 'Guaranteed Quality', 'Ample Stock', 'The First Choice for HDD'].map((pillar, i) => (
                        <span
                            key={i}
                            className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20"
                        >
                            {pillar}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsHero;

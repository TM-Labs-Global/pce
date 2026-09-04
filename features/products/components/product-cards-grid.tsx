'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS_DATA } from '../data/products-data';

export const ProductCardsGrid: React.FC = () => {
    return (
        <section className="w-full section bg-[#001723] text-white">
            <div className="flex flex-col gap-12">

                {/* Grid of Product Cards (Full-Bleed Image Card Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                    {PRODUCTS_DATA.map((product) => (
                        <div key={product.id} className="w-full flex flex-col items-start gap-6 group">
                            
                            {/* 1. Full-Bleed Product Image Frame */}
                            <Link
                                href={`/products/${product.slug}`}
                                className="w-full h-[300px] sm:h-[340px] lg:h-[380px] relative overflow-hidden rounded-xl border border-white/10 group cursor-pointer no-underline block bg-white/5"
                            >
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#052237] flex items-center justify-center text-4xl text-white">🧪</div>
                                )}
                            </Link>

                            {/* 2. Text & CTA Panel Underneath */}
                            <div className="w-full flex flex-col items-start gap-3">
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#f4691a] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs font-bold !text-white/70">
                                        {product.subtitle}
                                    </p>
                                </div>

                                <p className="text-sm !text-white/80 leading-relaxed line-clamp-2 min-h-[44px]">
                                    {product.description}
                                </p>

                                <Link
                                    href={`/products/${product.slug}`}
                                    className="inline-flex items-center gap-2 bg-[#f4691a] hover:bg-white hover:text-[#001723] text-white text-xs uppercase tracking-wider font-extrabold py-3 px-6 rounded-md transition-colors mt-2 no-underline shadow-sm"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCardsGrid;

'use client';

import React from 'react';
import Link from 'next/link';

export const SiteFooter = () => {
    return (
        <footer className="w-full bg-[#052237] text-white pt-16 lg:pt-20 pb-12 px-[var(--section-pad-x)] border-t border-white/10">
            <div className="w-full flex flex-col gap-12 lg:gap-14">
                
                {/* 1. Top Section: Logo */}
                <div className="w-full">
                    <Link href="/" className="inline-block no-underline">
                        <img
                            src="/logo/PCE Logo.svg"
                            alt="PCE Nigeria Logo"
                            className="h-14 lg:h-16 w-auto object-contain brightness-0 invert"
                        />
                    </Link>
                </div>

                {/* 2. Main Row: [Heading + Subtext + CTA Button] | [Quick Links] | [Contact Info] */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
                    
                    {/* Left Column: Heading, Subtext & Button (Under Logo) */}
                    <div className="max-w-[500px] flex flex-col gap-5">
                        <h3 className="!text-[28px] font-bold !text-white tracking-tight leading-snug">
                            Have a complex crossing or pipeline requirement?
                        </h3>
                        <p className="!text-white/80 text-sm lg:text-base leading-relaxed">
                            Share the route, constraint and project objective. Early-stage enquiries are welcome—we&apos;ll help identify the technical information needed to move forward.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-[#052237] hover:bg-white hover:text-[#052237] text-sm font-bold transition-all shadow-sm no-underline whitespace-nowrap inline-flex items-center gap-2"
                            >
                                <span>Start a Project Enquiry</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="!text-[16px] font-bold uppercase tracking-wider !text-white m-0">
                            QUICK LINKS
                        </p>
                        <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                            <li>
                                <Link href="/our-company" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/capabilities" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    Capabilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/equipment-technology" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    Equipment & Tech
                                </Link>
                            </li>
                            <li>
                                <Link href="/safety-quality-responsibility" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    Safety & Quality
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="!text-white/85 hover:!text-[var(--color-accent)] !text-[16px] transition-colors no-underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Addresses */}
                    <div className="flex flex-col gap-4 max-w-[320px]">
                        <p className="!text-[16px] font-bold uppercase tracking-wider !text-white m-0">
                            ADDRESSES
                        </p>
                        <div className="flex flex-col gap-3">
                            <div>
                                <span className="!text-[12px] font-bold tracking-wider text-[var(--color-accent)] uppercase block mb-0.5">
                                    Abuja (Head Office)
                                </span>
                                <p className="!text-white/85 !text-[14px] leading-snug m-0">
                                    House 45, Nelson Mandela Street, Asokoro, Abuja, Nigeria
                                </p>
                            </div>
                            <div>
                                <span className="!text-[12px] font-bold tracking-wider text-[var(--color-accent)] uppercase block mb-0.5">
                                    Lagos Office
                                </span>
                                <p className="!text-white/85 !text-[14px] leading-snug m-0">
                                    HyGroup Place 6 Ojulari St, off Kusenla Rd Ikate, Lekki, Lagos
                                </p>
                            </div>
                            <div>
                                <span className="!text-[12px] font-bold tracking-wider text-[var(--color-accent)] uppercase block mb-0.5">
                                    Port Harcourt Base
                                </span>
                                <p className="!text-white/85 !text-[14px] leading-snug m-0">
                                    East–West Road Opp. New Onne Link Rd Ebubu, Eleme, Rivers State
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-4">
                        <p className="!text-[16px] font-bold uppercase tracking-wider !text-white m-0">
                            CONTACT
                        </p>
                        <div className="flex flex-col gap-3 !text-[16px]">
                            <div className="flex flex-col gap-0.5">
                                <span className="!text-white/60 text-xs uppercase tracking-wider font-semibold">Wan Yang</span>
                                <a href="tel:+2347074126596" className="!text-white font-semibold hover:text-[var(--color-accent)] transition-colors no-underline">
                                    +234 707 412 6596
                                </a>
                                <a href="mailto:wanyang@pcenigeria.com" className="!text-[var(--color-accent)] font-medium hover:underline no-underline">
                                    wanyang@pcenigeria.com
                                </a>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="!text-white/60 text-xs uppercase tracking-wider font-semibold">Xu Liangkui</span>
                                <a href="tel:+2347013732816" className="!text-white font-semibold hover:text-[var(--color-accent)] transition-colors no-underline">
                                    +234 701 373 2816
                                </a>
                                <a href="mailto:xuliangkui@pcenigeria.com" className="!text-[var(--color-accent)] font-medium hover:underline no-underline">
                                    xuliangkui@pcenigeria.com
                                </a>
                            </div>
                            <a href="mailto:info@pcenigeria.com" className="!text-[var(--color-accent)] font-medium hover:underline no-underline">
                                info@pcenigeria.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* 3. Bottom Divider & Copyright Row */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs !text-white">
                    <p className="!text-white">© {new Date().getFullYear()} PCE Nigeria Limited. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors no-underline !text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors no-underline !text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default SiteFooter;

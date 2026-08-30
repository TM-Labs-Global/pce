'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SiteHeader = () => {
    const pathname = usePathname();
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

    const isCompanyActive =
        pathname === '/our-company' ||
        pathname === '/equipment-technology' ||
        pathname === '/safety-quality-responsibility';

    const companySubLinks = [
        {
            title: 'About PCE',
            href: '/our-company',
            description: 'Learn about our corporate background, leadership, track record, and company overview.',
        },
        {
            title: 'Equipment & Technology',
            href: '/equipment-technology',
            description: 'Advanced 250-ton HDD rigs, mud recycling units, and specialized trenchless gear.',
        },
        {
            title: 'Safety & Quality',
            href: '/safety-quality-responsibility',
            description: 'ISO-certified QHSE frameworks, zero-incidents policy, and environmental stewardship.',
        },
    ];

    const mainNavLinks = [
        { href: '/capabilities', label: 'Capabilities' },
        { href: '/projects', label: 'Projects' },
        { href: '/news-insights', label: 'News & Insights' },
        { href: '/resources', label: 'Resources' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10 backdrop-blur-md h-[80px] flex items-center justify-center shadow-sm">
            <div className="w-full px-[var(--section-pad-x)] flex items-center justify-between gap-8">
                
                {/* Left Area: Logo + Nav Links */}
                <div className="flex items-center gap-8 lg:gap-10">
                    {/* Brand / Logo */}
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 no-underline group shrink-0"
                    >
                        <img
                            src="/logo/PCE Logo.svg"
                            alt="PCE Nigeria Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex items-center gap-7">
                        {/* Home Link */}
                        <Link
                            href="/"
                            className={`text-sm font-semibold transition-colors no-underline ${
                                pathname === '/'
                                    ? 'text-[var(--color-primary)] font-bold'
                                    : 'text-[var(--color-ink-muted-48)] hover:text-[var(--color-primary)]'
                            }`}
                        >
                            Home
                        </Link>

                        {/* Our Company Dropdown Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCompanyMenuOpen(true)}
                            onMouseLeave={() => setIsCompanyMenuOpen(false)}
                        >
                            <button
                                onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-7 no-underline ${
                                    isCompanyActive || isCompanyMenuOpen
                                        ? 'text-[var(--color-primary)] font-bold'
                                        : 'text-[var(--color-ink-muted-48)] hover:text-[var(--color-primary)]'
                                }`}
                            >
                                <span>Our Company</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        isCompanyMenuOpen ? 'rotate-180 text-[var(--color-primary)]' : 'text-black/40'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Kalstore-style Mega Menu Dropdown */}
                            {isCompanyMenuOpen && (
                                <div className="absolute left-0 top-[100%] w-[680px] bg-white rounded-2xl shadow-xl border border-black/10 p-6 grid grid-cols-12 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {/* Left Links Column */}
                                    <div className="col-span-6 flex flex-col justify-between pr-2 border-r border-black/5">
                                        <div className="flex flex-col gap-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] px-2.5">
                                                Company Overview
                                            </span>
                                            <div className="flex flex-col gap-2">
                                                {companySubLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.href}
                                                        href={subLink.href}
                                                        onClick={() => setIsCompanyMenuOpen(false)}
                                                        className="group p-2.5 rounded-xl hover:bg-[#052237]/5 transition-colors no-underline block"
                                                    >
                                                        <div className="text-base font-bold text-[#052237] group-hover:text-[var(--color-primary)] transition-colors">
                                                            {subLink.title}
                                                        </div>
                                                        <div className="text-xs text-[var(--color-ink-muted-48)] mt-0.5 leading-normal">
                                                            {subLink.description}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Image Showcase Panel */}
                                    <div className="col-span-6">
                                        <Link
                                            href="/equipment-technology"
                                            onClick={() => setIsCompanyMenuOpen(false)}
                                            className="relative block h-full min-h-[220px] rounded-xl overflow-hidden group no-underline shadow-sm"
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                                                alt="PCE Equipment & Rigs"
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#052237]/90 via-[#052237]/40 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-accent)] text-[#052237] text-[10px] font-black uppercase tracking-wider mb-1.5">
                                                    Featured Fleet
                                                </span>
                                                <h4 className="text-sm font-extrabold text-white leading-tight">
                                                    250-Ton HDD Rig Capabilities
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Standard Main Nav Links */}
                        {mainNavLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-semibold transition-colors no-underline ${
                                        isActive
                                            ? 'text-[var(--color-primary)] font-bold'
                                            : 'text-[var(--color-ink-muted-48)] hover:text-[var(--color-primary)]'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Area: Desktop CTA & Mobile Hamburger Trigger */}
                <div className="flex items-center gap-4 shrink-0">
                    {/* Desktop Contact Us Button */}
                    <Link
                        href="/contact"
                        className="hidden lg:inline-flex px-5 py-2.5 rounded-xl bg-[#052237] text-white hover:bg-[var(--color-accent)] hover:text-[#052237] text-sm font-bold transition-all shadow-sm no-underline whitespace-nowrap"
                    >
                        Contact Us
                    </Link>

                    {/* Mobile Hamburger Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg bg-black/5 text-[var(--color-primary)] hover:bg-black/10 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed left-0 right-0 top-[80px] h-[calc(100vh-80px)] bg-white z-[9999] p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 border-t border-black/10">
                    <div className="flex flex-col gap-5">
                        {/* Mobile Home Link */}
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold text-[#052237] no-underline border-b border-black/5 pb-3"
                        >
                            Home
                        </Link>

                        {/* Mobile Our Company Dropdown Accordion */}
                        <div className="border-b border-black/5 pb-3">
                            <button
                                onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                                className="w-full flex items-center justify-between text-lg font-bold text-[#052237] no-underline py-0.5"
                            >
                                <span>Our Company</span>
                                <svg
                                    className={`w-5 h-5 text-black/40 transition-transform duration-200 ${
                                        isMobileCompanyOpen ? 'rotate-180 text-[var(--color-primary)]' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isMobileCompanyOpen && (
                                <div className="flex flex-col gap-2 pt-3 pl-3 animate-in fade-in slide-in-from-top-1 duration-150">
                                    {companySubLinks.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-base font-semibold text-[#052237]/80 hover:text-[var(--color-primary)] no-underline py-1.5"
                                        >
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Main Nav Links */}
                        <div className="flex flex-col gap-3">
                            {mainNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-[#052237] no-underline border-b border-black/5 pb-3"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Contact Us CTA Button at bottom */}
                    <div className="pt-6 pb-4">
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-3.5 rounded-xl bg-[#052237] text-white text-center font-bold text-base transition-all shadow-md no-underline block"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default SiteHeader;

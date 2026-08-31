'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import gsap from 'gsap';

// Morph SVG Path Definitions (using 0..100 viewBox space)
const MORPH_PATH_INITIAL = 'M 0 100 V 100 Q 50 100 100 100 V 100 Z';
const MORPH_PATH_CURVE = 'M 0 100 V 50 Q 50 0 100 50 V 100 Z';
const MORPH_PATH_COVER = 'M 0 100 V 0 Q 50 0 100 0 V 100 Z';

const PAGE_TRANSITION_EVENT = 'pce:navigate-with-transition';

export const dispatchPageTransitionNavigation = (href: string) => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(
            new CustomEvent(PAGE_TRANSITION_EVENT, { detail: { href } })
        );
    }
};

export const PageTransitionContent: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const svgRef = useRef<SVGSVGElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const isAnimatingRef = useRef<boolean>(false);
    const lastRouteRef = useRef<string>('');

    const currentRouteKey = `${pathname}?${searchParams.toString()}`;

    // Cover Animation (Wave up to cover screen)
    const runCoverAnimation = useCallback((onCompleteCallback: () => void) => {
        if (!pathRef.current || !svgRef.current) {
            onCompleteCallback();
            return;
        }

        isAnimatingRef.current = true;
        gsap.set(svgRef.current, { autoAlpha: 1, display: 'block' });

        const tl = gsap.timeline({
            onComplete: () => {
                onCompleteCallback();
            },
        });

        tl.to(pathRef.current, {
            attr: { d: MORPH_PATH_CURVE },
            duration: 0.35,
            ease: 'power2.in',
        }).to(pathRef.current, {
            attr: { d: MORPH_PATH_COVER },
            duration: 0.35,
            ease: 'power2.out',
        });
    }, []);

    // Reveal Animation (Wave down to reveal page)
    const runRevealAnimation = useCallback(() => {
        if (!pathRef.current || !svgRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                if (svgRef.current) {
                    gsap.set(svgRef.current, { autoAlpha: 0, display: 'none' });
                }
                if (pathRef.current) {
                    gsap.set(pathRef.current, { attr: { d: MORPH_PATH_INITIAL } });
                }
                isAnimatingRef.current = false;
            },
        });

        tl.to(pathRef.current, {
            attr: { d: MORPH_PATH_CURVE },
            duration: 0.35,
            ease: 'power2.in',
        }).to(pathRef.current, {
            attr: { d: MORPH_PATH_INITIAL },
            duration: 0.35,
            ease: 'power2.out',
        });
    }, []);

    // Handle navigation to target URL
    const navigateTo = useCallback(
        (href: string) => {
            if (isAnimatingRef.current) return;
            const targetUrl = new URL(href, window.location.href);

            // Skip animation if navigating to same page or anchor
            if (
                targetUrl.pathname === window.location.pathname &&
                targetUrl.search === window.location.search
            ) {
                if (targetUrl.hash) {
                    window.location.href = href;
                }
                return;
            }

            runCoverAnimation(() => {
                router.push(href);
            });
        },
        [router, runCoverAnimation]
    );

    // Global Link Click Listener
    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            const targetAttr = target.getAttribute('target');

            // Skip external links, mailto, tel, new tabs, or missing hrefs
            if (
                !href ||
                href.startsWith('http://') ||
                href.startsWith('https://') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('#') ||
                targetAttr === '_blank' ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey
            ) {
                return;
            }

            e.preventDefault();
            navigateTo(href);
        };

        const handleCustomNavigate = (e: Event) => {
            const customEvent = e as CustomEvent<{ href: string }>;
            if (customEvent.detail && customEvent.detail.href) {
                navigateTo(customEvent.detail.href);
            }
        };

        document.addEventListener('click', handleDocumentClick);
        window.addEventListener(PAGE_TRANSITION_EVENT, handleCustomNavigate);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            window.removeEventListener(PAGE_TRANSITION_EVENT, handleCustomNavigate);
        };
    }, [navigateTo]);

    // Trigger reveal when route changes
    useEffect(() => {
        if (lastRouteRef.current && lastRouteRef.current !== currentRouteKey) {
            runRevealAnimation();
        }
        lastRouteRef.current = currentRouteKey;
    }, [currentRouteKey, runRevealAnimation]);

    return (
        <svg
            ref={svgRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[9999] hidden opacity-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <path
                ref={pathRef}
                d={MORPH_PATH_INITIAL}
                fill="#001723"
            />
        </svg>
    );
};

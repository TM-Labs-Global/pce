import React from 'react';
import Link from 'next/link';
import { Text } from '../ui/text';
import { Button } from '../ui/button';

interface SubNavProps {
    title: string;
    actionLabel?: string;
    actionHref?: string;
    links?: { label: string; href: string }[];
}

export const SubNav = ({ title, actionLabel, actionHref, links = [] }: SubNavProps) => {
    return (
        <nav
            style={{
                backgroundColor: 'color-mix(in srgb, var(--bg-surface-tint) 80%, transparent)',
                backdropFilter: 'var(--backdrop-nav)',
                WebkitBackdropFilter: 'var(--backdrop-nav)',
                height: '52px',
                width: '100%',
                position: 'sticky',
                top: 0,
                zIndex: 'calc(var(--z-header) - 1)',
                borderBottom: '1px solid var(--border-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: 'var(--container-2xl)',
                    padding: '0 var(--spacing-5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Section Title */}
                <Text variant="tagline" as="div">
                    {title}
                </Text>

                {/* Right Side: Links + Primary CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
                    {/* Optional inline links (hidden on very small screens typically) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }} className="hidden sm:flex">
                        {links.map((link) => (
                            <Link key={link.label} href={link.href} className="no-underline">
                                <Text variant="caption">{link.label}</Text>
                            </Link>
                        ))}
                    </div>

                    {/* Persistent Right CTA */}
                    {actionLabel && actionHref && (
                        <Button variant="primary" as="link" href={actionHref} style={{ padding: '6px 14px', fontSize: '12px' }}>
                            {actionLabel}
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
};

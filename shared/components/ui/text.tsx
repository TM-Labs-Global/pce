import React from 'react';

/**
 * PCE Typography Variants — maps directly to the type scale in typography.css.
 *
 * Heading role:    hero, display-lg, display-md, lead, lead-airy, tagline
 * Body role:       body-strong, body, dense-link
 * Caption role:    caption, caption-strong, fine-print
 * Interface role:  btn-large, btn-utility, nav-link
 */
type TextVariant =
    | 'hero'
    | 'display-lg'
    | 'display-md'
    | 'lead'
    | 'lead-airy'
    | 'tagline'
    | 'body-strong'
    | 'body'
    | 'dense-link'
    | 'caption'
    | 'caption-strong'
    | 'btn-large'
    | 'btn-utility'
    | 'fine-print'
    | 'nav-link'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

/**
 * PCE Text Intent — determines which color token the text inherits.
 *
 * default      → --text-base (--color-ink, #171717) — on light surfaces
 * inverse      → --text-inverse (white) — on navy/dark tiles
 * muted-dark   → --text-muted-dark (--color-body-muted) — secondary copy on navy
 * muted-light  → --text-muted-light (--color-ink-muted-80) — body on pearl surface
 * disabled     → --text-disabled (--color-ink-muted-48)
 * link         → --link-color (--color-primary, blue) — on light surfaces
 * link-on-dark → --link-on-dark (--color-primary-on-dark) — inline links on navy
 * brand        → --text-brand (--color-accent, orange) — highlighted stats, accents
 * error / success / warning / info → status colors
 */
type TextIntent =
    | 'default'
    | 'inverse'
    | 'muted-dark'
    | 'muted-light'
    | 'disabled'
    | 'link'
    | 'link-on-dark'
    | 'brand'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'muted';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    variant?: TextVariant;
    intent?: TextIntent;
    weight?: string;
    className?: string;
    children: React.ReactNode;
}

/**
 * Text component for consistent typography across the PCE website.
 * The CSS utility class (e.g. "text-hero") drives all size, weight, and tracking.
 * Intent controls color only — it does not override the type scale.
 * Styles live in shared/styles/typography.css via @utility declarations.
 */
export const Text = ({
    as,
    variant = 'body',
    intent = 'default',
    weight,
    className = '',
    children,
    ...props
}: TextProps) => {
    // Map variants to semantic HTML elements for correct document outline and SEO
    const getDefaultTag = (v: TextVariant): React.ElementType => {
        const tagMap: Record<TextVariant, React.ElementType> = {
            'hero':           'h1',
            'display-lg':     'h2',
            'display-md':     'h3',
            'lead':           'h4',
            'lead-airy':      'p',
            'tagline':        'h5',
            'body-strong':    'p',
            'body':           'p',
            'dense-link':     'p',
            'caption':        'span',
            'caption-strong': 'span',
            'btn-large':      'span',
            'btn-utility':    'span',
            'fine-print':     'span',
            'nav-link':       'span',
            'h1':             'h1',
            'h2':             'h2',
            'h3':             'h3',
            'h4':             'h4',
            'xs':             'span',
            'sm':             'span',
            'base':           'p',
            'md':             'p',
            'lg':             'h3',
            'xl':             'h2',
            '2xl':            'h2',
            '3xl':            'h1',
            '4xl':            'h1',
            '5xl':            'h1',
            '6xl':            'h1',
        };
        return tagMap[v] || 'p';
    };

    const Component = as || getDefaultTag(variant);

    // Map intent to CSS color utility class
    // These classes should be defined in semantics or typography layer
    const intentClassMap: Record<TextIntent, string> = {
        'default':     '',                 // inherits body color from base element rule
        'inverse':     'text-inverse',
        'muted-dark':  'text-muted-dark',
        'muted-light': 'text-muted-light',
        'disabled':    'text-disabled',
        'link':        'text-link',
        'link-on-dark':'text-link-on-dark',
        'brand':       'text-brand',
        'error':       'text-error',
        'success':     'text-success',
        'warning':     'text-warning',
        'info':        'text-info',
        'primary':     'text-[var(--color-ink)]',
        'secondary':   'text-[var(--color-ink-muted-80)]',
        'tertiary':    'text-[var(--color-ink-muted-48)]',
        'muted':       'text-muted-light',
    };

    const classes = [
        `text-${variant}`,          // drives size, weight, line-height, tracking via @utility
        intentClassMap[intent],     // drives color only
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

Text.displayName = 'Text';

import React from 'react';
import Link from 'next/link';

/**
 * PCE Button Variants — matches the 5 components defined in design.md + button.css
 *
 * primary      → Orange pill, primary CTA ("Get a Quote", "Contact Us")
 * secondary    → Blue outline pill, secondary CTA ("Learn More")
 * dark-utility → Black fill, small — used in global nav actions
 * pearl        → Near-white with soft border — card secondary action
 * icon-circular → Translucent 44×44px circle — floats over photography
 */
type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'dark-utility'
    | 'pearl'
    | 'icon-circular'
    | 'tertiary'
    | 'outline-navy'
    | 'outline-blue'
    | 'ghost'
    | 'link'
    | 'outline';

type ButtonElement = 'button' | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    as?: ButtonElement;
    href?: string;
    size?: string;
    rounded?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    /** Use icon + iconOnly for icon-circular variant */
    icon?: React.ReactNode;
    iconOnly?: boolean;
    className?: string;
    children?: React.ReactNode;
}

/**
 * Button component for the PCE design system.
 * Renders as an HTML <button> or a Next.js <Link> depending on `as` prop or presence of `href`.
 * All visual styling is driven by button.css via CSS class names — no inline styles.
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
        {
            className = '',
            variant = 'primary',
            as,
            href,
            isLoading = false,
            leftIcon,
            rightIcon,
            icon,
            iconOnly = false,
            children,
            disabled,
            type = 'button',
            ...props
        },
        ref
    ) => {
        const componentType = as || (href ? 'link' : 'button');
        const isDisabled = disabled || isLoading;

        const classes = [
            'btn',
            `btn-${variant}`,
            (iconOnly || icon) ? 'btn-icon-only' : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const content = (
            <>
                {isLoading && (
                    <svg
                        className="w-4 h-4 animate-spin flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                )}
                {!isLoading && (iconOnly || icon) ? (
                    <span className="flex items-center justify-center w-full h-full">
                        {icon ?? children}
                    </span>
                ) : (
                    <>
                        {!isLoading && leftIcon && (
                            <span className="flex-shrink-0" aria-hidden="true">
                                {leftIcon}
                            </span>
                        )}
                        {children}
                        {!isLoading && rightIcon && (
                            <span className="flex-shrink-0" aria-hidden="true">
                                {rightIcon}
                            </span>
                        )}
                    </>
                )}
            </>
        );

        if (componentType === 'link' && href) {
            const { onClick: _onClick, type: _type, ...linkProps } = props as any;
            return (
                <Link
                    href={href}
                    className={classes}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...linkProps}
                >
                    {content}
                </Link>
            );
        }

        return (
            <button
                className={classes}
                disabled={isDisabled}
                type={type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

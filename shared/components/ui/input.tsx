import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    /** Left-side icon (usually a search or field icon) */
    icon?: React.ReactNode;
    /** Right-side icon (usually a clear or status indicator) */
    rightIcon?: React.ReactNode;
    hasError?: boolean;
    hasSuccess?: boolean;
    /** Extra class on the outer container div */
    containerClassName?: string;
}

/**
 * Input component for PCE contact and search forms.
 * Styles are driven by shared/styles/input.css — no inline styles.
 * Border radius: 8px (--radius-utility-btn via --radius-input in semantics.css).
 * Background: --bg-surface (routes through token, not hardcoded white).
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            icon,
            rightIcon,
            hasError,
            hasSuccess,
            className = '',
            containerClassName = '',
            id,
            ...props
        },
        ref
    ) => {
        const inputClasses = [
            'input',
            hasError   ? 'input-error'         : '',
            hasSuccess ? 'input-success'        : '',
            icon       ? 'input-has-icon'       : '',
            rightIcon  ? 'input-has-icon-right' : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const inputId =
            id ||
            (label
                ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
                : undefined);

        const inputElement = (
            <input ref={ref} id={inputId} className={inputClasses} {...props} />
        );

        return (
            <div
                className={`flex flex-col gap-1.5 w-full ${containerClassName}`}
            >
                {label && (
                    <label htmlFor={inputId} className="label">
                        {label}
                    </label>
                )}

                {icon || rightIcon ? (
                    <div className="input-wrapper">
                        {icon && (
                            <div className="input-icon" aria-hidden="true">
                                {icon}
                            </div>
                        )}
                        {inputElement}
                        {rightIcon && (
                            <div className="input-icon-right" aria-hidden="true">
                                {rightIcon}
                            </div>
                        )}
                    </div>
                ) : (
                    inputElement
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

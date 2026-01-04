import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/20',
            secondary: 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm',
            outline: 'border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900',
            ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
            glass: 'glass text-white hover:bg-white/20 border-white/20',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

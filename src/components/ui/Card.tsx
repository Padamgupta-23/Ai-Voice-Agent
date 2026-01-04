import React from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, children, gradient = false }: { className?: string, children: React.ReactNode, gradient?: boolean }) {
    return (
        <div className={cn(
            'rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md',
            gradient && 'bg-gradient-to-br from-white to-slate-50',
            className
        )}>
            {children}
        </div>
    );
}

'use client';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Mic } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Mic className="h-6 w-6 text-violet-600" />
                        <span className="font-bold text-xl tracking-tight text-slate-900">AI Voice Agent</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium">Home</Link>
                        <Link href="#features" className="text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium">Features</Link>
                        <Link href="/dashboard" className="text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium">Demo</Link>
                        <Link href="#pricing" className="text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium">Pricing</Link>
                        <Link href="#contact" className="text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium">Contact</Link>
                    </div>

                    <div>
                        <Link href="/dashboard">
                            <Button variant="primary" className="rounded-full px-6">
                                Launch Prototype
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

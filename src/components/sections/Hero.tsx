'use client';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react'; // Wait, Link is next/link, Icon is different
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-8 border border-violet-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        Live Demo Available
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                        AI Powered <span className="gradient-text">Voice Calling Agent</span>
                    </h1>

                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Automate customer conversations, support, appointment reminders, and more using natural, real-time AI voice interactions. Inbound & Outbound ready.
                    </p>

                    <div className="mt-10 flex cursor-pointer justify-center gap-4">
                        <a href="/dashboard">
                            <Button className="h-12 px-8 text-base shadow-violet-500/25">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                        <Button variant="outline" className="h-12 px-8 text-base">
                            Watch Demo <PlayCircle className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function ProblemSolution() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Problem */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4">The Problem</div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Manual calling is broken.</h2>
                        <ul className="space-y-4">
                            {[
                                'Manual calling is slow, expensive, and inconsistent',
                                'Support centers are overloaded',
                                'Customers wait on hold for too long',
                                'No structured data logging',
                                'Repetitive manual follow-ups',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-4">Our Solution</div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Intelligent Automation.</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <Card className="p-4 flex items-center gap-4 bg-white shadow-md">
                                <div className="bg-violet-100 p-2 rounded-lg"><CheckCircle2 className="h-6 w-6 text-violet-600" /></div>
                                <div><h4 className="font-semibold text-slate-900">Conversational AI</h4><p className="text-sm text-slate-500">Natural, fluid dialogues</p></div>
                            </Card>
                            <Card className="p-4 flex items-center gap-4 bg-white shadow-md">
                                <div className="bg-violet-100 p-2 rounded-lg"><CheckCircle2 className="h-6 w-6 text-violet-600" /></div>
                                <div><h4 className="font-semibold text-slate-900">Automatic Dialing</h4><p className="text-sm text-slate-500">Scale your outreach instantly</p></div>
                            </Card>
                            <Card className="p-4 flex items-center gap-4 bg-white shadow-md">
                                <div className="bg-violet-100 p-2 rounded-lg"><CheckCircle2 className="h-6 w-6 text-violet-600" /></div>
                                <div><h4 className="font-semibold text-slate-900">Real-time Analytics</h4><p className="text-sm text-slate-500">Instant insights & transcripts</p></div>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

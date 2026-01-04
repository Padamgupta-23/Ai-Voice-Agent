'use client';
import { Navbar } from '@/components/Navbar';
import { OtpVerification } from '@/components/dashboard/OtpVerification';
import { OutboundDialer } from '@/components/dashboard/OutboundDialer';
import { InboundSimulation } from '@/components/dashboard/InboundSimulation';
import { AiChatPanel } from '@/components/dashboard/AiChatPanel';
import { useState } from 'react';

export default function DashboardPage() {
    const [isVerified, setIsVerified] = useState(false);
    const [callActive, setCallActive] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">Agency Module</h1>
                    <p className="text-slate-500 mt-2">Manage inbound and outbound AI voice operations.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN - CONTROLS */}
                    <div className="lg:col-span-1 space-y-6">
                        <OtpVerification onVerified={() => setIsVerified(true)} />

                        <div className="relative">
                            {!isVerified && (
                                <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 rounded-xl flex items-center justify-center">
                                    <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border shadow-sm">Verify Identity First</span>
                                </div>
                            )}
                            <div className="space-y-6">
                                <OutboundDialer disabled={!isVerified} />
                                <InboundSimulation disabled={!isVerified} onStart={() => setCallActive(true)} />
                            </div>
                        </div>

                        {/* Tech Specs / Debug Info */}
                        <div className="p-4 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-500">
                            <p>System Status: <span className="text-green-600">Active</span></p>
                            <p>Twilio Voice: <span className="text-green-600">Ready</span></p>
                            <p>OpenAI Model: <span className="text-green-600">GPT-4-Turbo</span></p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - AI PANEL */}
                    <div className="lg:col-span-2">
                        <AiChatPanel active={callActive} />
                    </div>

                </div>
            </div>
        </main>
    );
}

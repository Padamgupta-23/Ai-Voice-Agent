'use client';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PhoneIncoming } from 'lucide-react';
import { useState } from 'react';

export function InboundSimulation({ disabled, onStart }: { disabled: boolean, onStart: () => void }) {
    const [simulating, setSimulating] = useState(false);

    const handleSimulate = () => {
        setSimulating(true);
        onStart();
        // Reset after some time if needed, or let parent handle
    };

    return (
        <Card className={`p-6 bg-slate-900 text-white ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
                <PhoneIncoming className="h-5 w-5 text-emerald-400" />
                <h3 className="font-semibold text-white">Inbound Simulation</h3>
            </div>
            <p className="text-sm text-slate-400 mb-6">
                Simulate an incoming call to test the AI agent pipeline without a real phone.
            </p>

            <Button
                onClick={handleSimulate}
                className="w-full bg-emerald-600 hover:bg-emerald-700 border-transparent text-white"
            >
                {simulating ? 'Call Active...' : 'Simulate Incoming Call'}
            </Button>
        </Card>
    );
}

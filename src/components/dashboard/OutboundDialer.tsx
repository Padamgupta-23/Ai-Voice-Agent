'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Phone, PhoneOutgoing, Loader2 } from 'lucide-react';
import axios from 'axios';

export function OutboundDialer({ disabled }: { disabled: boolean }) {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'calling' | 'ringing' | 'connected' | 'ended'>('idle');

    const call = async () => {
        if (!phone) return;
        setStatus('calling');
        try {
            const res = await axios.post('/api/voice/outbound', { to: phone });
            setStatus('ringing'); // Simulate ringing state transition

            // Simulate call process for demo since we don't have real WebSocket status back here easily
            setTimeout(() => setStatus('connected'), 3000);
            setTimeout(() => setStatus('ended'), 8000); // Auto end for demo or wait for real hook?

            console.log('Call started', res.data);
        } catch (err: any) {
            console.error(err);
            setStatus('idle');
            alert('Call failed');
        }
    };

    return (
        <Card className={`p-6 transition-opacity ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
                <PhoneOutgoing className="h-5 w-5 text-violet-600" />
                <h3 className="font-semibold text-slate-900">Outbound Call</h3>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Target Number</label>
                    <Input
                        placeholder="+1..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <Button
                    onClick={call}
                    disabled={status !== 'idle' && status !== 'ended'}
                    className="w-full flex justify-between"
                    variant={status === 'calling' || status === 'ringing' ? 'secondary' : 'primary'}
                >
                    <span>{status === 'idle' ? 'Dial Number' : status === 'ended' ? 'Dial Again' : 'Calling...'}</span>
                    {status !== 'idle' && status !== 'ended' && <span className="animate-pulse text-xs uppercase tracking-wider font-bold text-violet-600">{status}</span>}
                </Button>
            </div>
        </Card>
    );
}

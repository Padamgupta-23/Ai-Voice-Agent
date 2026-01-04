'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Lock, ShieldCheck, Phone } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner'; // Need to add sonner for toasts, or just use alert/native

export function OtpVerification({ onVerified }: { onVerified: () => void }) {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState<'request' | 'verify'>('request');
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);

    const requestOtp = async () => {
        setLoading(true);
        try {
            await axios.post('/api/otp/request', { phoneNumber: phone });
            setStep('verify');
            alert('OTP sent! (Check your phone)'); // Simple feedback
        } catch (err: any) {
            alert(err.response?.data?.error || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        setLoading(true);
        try {
            await axios.post('/api/otp/verify', { phoneNumber: phone, code: otp });
            setVerified(true);
            onVerified();
        } catch (err: any) {
            alert(err.response?.data?.error || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    if (verified) {
        return (
            <Card className="p-6 bg-green-50 border-green-200">
                <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-green-900">Identity Verified</h3>
                        <p className="text-sm text-green-700">You can now access the Agency controls.</p>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Lock className="h-5 w-5 text-violet-600" />
                <h3 className="font-semibold text-slate-900">Security Check</h3>
            </div>

            <div className="space-y-4">
                {step === 'request' ? (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                                <Input
                                    placeholder="+1234567890"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <Button onClick={requestOtp} isLoading={loading} className="w-full">
                            Request OTP
                        </Button>
                    </>
                ) : (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Enter OTP</label>
                            <Input
                                placeholder="123456"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                                className="tracking-widest text-center text-lg"
                            />
                        </div>
                        <Button onClick={verifyOtp} isLoading={loading} className="w-full">
                            Verify Identity
                        </Button>
                        <button onClick={() => setStep('request')} className="text-xs text-slate-500 hover:text-slate-700 underline mx-auto block">
                            Change number
                        </button>
                    </>
                )}
            </div>
        </Card>
    );
}

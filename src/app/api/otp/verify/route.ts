import { NextResponse } from 'next/server';
import { twilioClient, TWILIO_VERIFY_SID } from '@/lib/twilio';

export async function POST(request: Request) {
    try {
        const { phoneNumber, code } = await request.json();

        if (!phoneNumber || !code) {
            return NextResponse.json({ error: 'Phone number and code are required' }, { status: 400 });
        }

        if (!TWILIO_VERIFY_SID) {
            return NextResponse.json({ error: 'TWILIO_VERIFY_SID is not set' }, { status: 500 });
        }

        const verificationCheck = await twilioClient.verify.v2.services(TWILIO_VERIFY_SID)
            .verificationChecks
            .create({ to: phoneNumber, code });

        if (verificationCheck.status === 'approved') {
            return NextResponse.json({ success: true, status: 'approved' });
        } else {
            return NextResponse.json({ success: false, status: verificationCheck.status }, { status: 400 });
        }

    } catch (error: any) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json({ error: error.message || 'Failed to verify OTP' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { twilioClient, TWILIO_VERIFY_SID } from '@/lib/twilio';

export async function POST(request: Request) {
    try {
        const { phoneNumber } = await request.json();

        if (!phoneNumber) {
            return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
        }

        if (!TWILIO_VERIFY_SID) {
            return NextResponse.json({ error: 'TWILIO_VERIFY_SID is not set' }, { status: 500 });
        }

        const verification = await twilioClient.verify.v2.services(TWILIO_VERIFY_SID)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });

        return NextResponse.json({ status: verification.status });

    } catch (error: any) {
        console.error('Error requesting OTP:', error);
        return NextResponse.json({ error: error.message || 'Failed to send OTP' }, { status: 500 });
    }
}

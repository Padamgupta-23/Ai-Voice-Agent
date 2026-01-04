import { NextResponse } from 'next/server';
import { twilioClient, TWILIO_PHONE_NUMBER } from '@/lib/twilio';

export async function POST(request: Request) {
    try {
        const { to } = await request.json();

        if (!to) {
            return NextResponse.json({ error: 'Target phone number is required' }, { status: 400 });
        }

        if (!TWILIO_PHONE_NUMBER) {
            return NextResponse.json({ error: 'TWILIO_PHONE_NUMBER is not set' }, { status: 500 });
        }

        // Using the snippet logic provided: simple greeting
        // In a real agent scenario, we would use a URL pointing to our TwiML
        // but here we use inline TwiML as per the user's snippet example.
        const call = await twilioClient.calls.create({
            twiml: `
        <Response>
            <Say voice="Polly.Joanna-Generative">
                Hello! This is a test outbound call from your AI Voice Agent.
                The system is fully operational.
            </Say>
        </Response>
      `,
            to: to,
            from: TWILIO_PHONE_NUMBER,
            statusCallback: `${process.env.NEXT_PUBLIC_APP_URL}/api/voice/status`,
            statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
            statusCallbackMethod: 'POST',
        });

        return NextResponse.json({ sid: call.sid, status: call.status });

    } catch (error: any) {
        console.error('Error outgoing call:', error);
        return NextResponse.json({ error: error.message || 'Failed to initiate call' }, { status: 500 });
    }
}

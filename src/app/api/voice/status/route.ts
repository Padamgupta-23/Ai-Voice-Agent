import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const callSid = formData.get('CallSid');
        const callStatus = formData.get('CallStatus');

        console.log(`Call ${callSid} status: ${callStatus}`);

        // In a real app, we would push this status to the frontend via WebSocket/Pusher
        // For now, we just log it.

        return NextResponse.json({ received: true });
    } catch (error) {
        return NextResponse.json({ received: false }, { status: 500 });
    }
}

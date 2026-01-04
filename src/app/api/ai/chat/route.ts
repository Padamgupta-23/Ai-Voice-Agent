import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
                { role: "system", content: "You are a helpful, professional, and empathetic AI Voice Assistant. Keep your responses concise and conversational." },
                ...messages
            ],
        });

        const reply = completion.choices[0].message.content;

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error('Error generating AI response:', error);
        return NextResponse.json({ error: error.message || 'Failed to generate response' }, { status: 500 });
    }
}

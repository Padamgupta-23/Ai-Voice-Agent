'use client';
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Bot, User, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';
import axios from 'axios';

type Message = {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
};

export function AiChatPanel({ active, onSendMessage }: { active: boolean, onSendMessage?: (msg: string) => void }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [processing, setProcessing] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([{ role: 'assistant', content: 'System initialized. Waiting for call...', timestamp: new Date().toLocaleTimeString() }]);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const addMessage = (role: 'user' | 'assistant' | 'system', content: string) => {
        setMessages(prev => [...prev, { role, content, timestamp: new Date().toLocaleTimeString() }]);
    };

    // Expose this method to parent if needed, or just use internal logic
    // For Real-time Inbound Simulation (Chat)
    const handleSend = async () => {
        if (!input.trim()) return;

        // User message
        const userText = input;
        setInput('');
        addMessage('user', userText);
        setProcessing(true);

        try {
            // AI Response
            const res = await axios.post('/api/ai/chat', {
                messages: messages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })).concat({ role: 'user', content: userText })
            });

            const aiText = res.data.reply;
            addMessage('assistant', aiText);
        } catch (err) {
            console.error(err);
            addMessage('assistant', 'Error processing request.');
        } finally {
            setProcessing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Card className="h-[600px] flex flex-col bg-slate-50 border-slate-200 shadow-xl overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-violet-600" />
                    <h3 className="font-semibold text-slate-800">AI Live Transcript</h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className={cn("h-2.5 w-2.5 rounded-full", active ? "bg-green-500 animate-pulse" : "bg-slate-300")} />
                    <span className="text-xs font-medium text-slate-500 uppercase">{active ? 'Live' : 'Standby'}</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.map((m, i) => (
                    <div key={i} className={cn("flex gap-3 max-w-[85%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", m.role === 'assistant' ? "bg-violet-100 text-violet-600" : "bg-blue-100 text-blue-600")}>
                            {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={cn("p-3 rounded-2xl text-sm leading-relaxed", m.role === 'assistant' ? "bg-white border border-slate-100 shadow-sm rounded-tl-none" : "bg-blue-600 text-white rounded-tr-none")}>
                            <p>{m.content}</p>
                            <span className={cn("text-[10px] mt-1 block opacity-70", m.role === 'user' ? "text-blue-100" : "text-slate-400")}>{m.timestamp}</span>
                        </div>
                    </div>
                ))}
                {processing && (
                    <div className="flex gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="p-3 bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-white border-t border-slate-200">
                <p className="text-xs text-slate-400 mb-2 text-center">Type below to simulate voice input</p>
                <div className="flex gap-2">
                    <input
                        className="flex-1 bg-slate-100 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-violet-500/50 outline-none"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={!active}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!active || !input.trim()}
                        className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 disabled:opacity-50 transition-colors"
                    >
                        <div className="relative">
                            <Mic size={18} />
                        </div>
                    </button>
                </div>
            </div>
        </Card>
    );
}

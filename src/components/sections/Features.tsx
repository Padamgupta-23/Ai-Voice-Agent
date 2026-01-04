'use client';
import { Card } from '@/components/ui/Card';
import { Mic, Zap, Globe, Database, Brain, Phone, MessageSquare, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { icon: Mic, title: 'Natural Turn-Taking', desc: 'Interrupt-while-speaking capabilities for fluid, human-like conversations.' },
    { icon: Brain, title: 'Contextual Memory', desc: 'Example remembers past details within the conversation flow.' },
    { icon: Phone, title: 'Inbound & Outbound', desc: 'Handle incoming calls or trigger automated outbound campaigns.' },
    { icon: Globe, title: 'Multi-Language', desc: 'Automatically detects and speaks in multiple languages.' },
    { icon: Zap, title: 'Function Calling', desc: 'AI can perform real actions like booking appointments or sending emails.' },
    { icon: Database, title: 'CRM Integration', desc: 'Syncs call logs, summaries, and outcomes directly to your CRM.' },
    { icon: MessageSquare, title: 'Sentiment Analysis', desc: 'Detects customer emotion and intent in real-time.' },
    { icon: BarChart, title: 'Analytics', desc: 'Detailed dashboards for call success rates and engagement.' },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Advanced Voice Capabilities</h2>
                    <p className="mt-4 text-lg text-slate-600">Built for enterprise-grade performance and reliability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-violet-500">
                                <feature.icon className="h-10 w-10 text-violet-600 mb-4" />
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

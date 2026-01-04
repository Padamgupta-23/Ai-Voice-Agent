import { Mic, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Mic className="h-6 w-6 text-violet-400" />
                            <span className="font-bold text-xl text-white">AI Voice Agent</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Automating conversations with natural, human-like AI voice technology.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Guides</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                        <p className="mt-4 text-xs text-slate-500">
                            © 2026 AI Voice Agent. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

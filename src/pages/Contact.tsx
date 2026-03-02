import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, Github, Twitter, Linkedin, Send, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 pb-20 pt-24">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl text-white">Get In <span className="text-primary">Touch</span></h1>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        Have a project in mind or just want to chat about tech? Drop me a message and let's build something extraordinary together.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Me</p>
                                <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">sujwals2005@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-all">
                                <Phone className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Call Me</p>
                                <p className="text-lg font-medium text-white group-hover:text-secondary transition-colors">9448880740</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                                <MessageSquare className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Discord</p>
                                <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">/</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-4">
                        {[
                            { Icon: Github, href: "https://github.com/ujwals05" },
                            { Icon: Twitter, href: "https://x.com/ujwalS005" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/ujwal-s-6718762b0/" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all transition-transform hover:scale-110">
                                    <social.Icon className="h-5 w-5" />
                                </Button>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl"
                >
                    <form className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-muted-foreground outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-muted-foreground outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                            <input type="text" placeholder="Project Inquiry" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-muted-foreground outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                            <textarea rows={5} placeholder="Tell me more about your project..." className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-muted-foreground outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none" />
                        </div>
                        <Button
                            disabled
                            className="w-full rounded-2xl bg-white/10 text-white/40 font-bold h-12 cursor-not-allowed border border-white/5"
                        >
                            MESSAGE SYSTEM OFFLINE <Send className="ml-2 h-4 w-4 opacity-50" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

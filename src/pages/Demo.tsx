// import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Button } from "../components/ui/button";
import { Activity, Database, Layout, Terminal, Code2 } from "lucide-react";

export default function Demo() {
    // const { id } = useParams();

    return (
        <div className="container mx-auto px-4 pb-20 pt-24">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            >
                <div>
                    <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest">
                        Live Interactive Demo
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl text-white">NeonTask Manager</h1>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        A high-performance task management system designed for futuristic teams, featuring real-time sync and neural-link aesthetics.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5">GITHUB REPO</Button>
                    <Button className="rounded-full bg-secondary text-black font-bold">DOCUMENTATION</Button>
                </div>
            </motion.header>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Left Stats */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-black/40 p-8"
                    >
                        <h3 className="text-lg font-bold mb-8">System Velocity</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Users</p>
                                <p className="text-3xl font-black text-white">1.2<span className="text-primary text-xl">k</span></p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Tasks</p>
                                <p className="text-3xl font-black text-white">45<span className="text-secondary text-xl">k</span></p>
                            </div>
                        </div>
                        <div className="mt-8 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "88%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                            />
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground italic">Database resets every 24 hours.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8"
                    >
                        <h3 className="text-lg font-bold mb-6 italic">Tech Stack</h3>
                        <div className="space-y-4">
                            {[
                                { icon: Layout, label: "Frontend", value: "Next.js / Radix" },
                                { icon: Database, label: "Backend", value: "Node.js / Redis" },
                                { icon: Activity, label: "Real-time", value: "WebSockets" },
                                { icon: Terminal, label: "Deployment", value: "AWS / Docker" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                    <item.icon className="h-4 w-4 text-primary" />
                                    <div className="flex-1">
                                        <p className="text-[10px] uppercase font-bold text-muted-foreground">{item.label}</p>
                                        <p className="text-sm font-medium text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Workspace */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="lg:col-span-2 rounded-3xl border border-primary/20 bg-black/60 shadow-[0_0_50px_rgba(var(--primary),0.05)] p-0 overflow-hidden"
                >
                    <div className="border-b border-white/10 bg-white/5 px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Workspace / Sprint #42</span>
                        </div>
                        <span className="text-[10px] font-bold text-primary flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> SYSTEM ONLINE
                        </span>
                    </div>

                    <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <Code2 className="h-16 w-16 text-primary mb-6 opacity-20" />
                        <h2 className="text-3xl font-bold italic mb-4">Welcome back, Lead Developer</h2>
                        <div className="grid grid-cols-3 gap-12 mt-8">
                            <div className="text-center">
                                <p className="text-4xl font-black text-white">88%</p>
                                <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Velocity</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-black text-white">12/15</p>
                                <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Team Load</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-black text-white font-mono">#42</p>
                                <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2">Sprint</p>
                            </div>
                        </div>
                        <Button className="mt-12 rounded-full px-12 bg-primary/20 hover:bg-primary transition-all text-primary hover:text-black font-bold border border-primary/40">
                            INTERACT WITH DEMO
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

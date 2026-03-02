import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            id: "project-alpha",
            title: "Project Alpha",
            desc: "Next-gen enterprise dashboard featuring real-time data streaming and distributed cache management. Optimized for ultra-low latency.",
            tags: ["React", "Redis", "WebSockets", "Node.js"]
        },
        {
            id: "cyber-shield",
            title: "Cyber Shield",
            desc: "End-to-end encrypted messaging platform with biometric authentication and zero-knowledge storage for high-security environments.",
            tags: ["Solidity", "TypeScript", "AES-256", "Next.js"]
        },
        {
            id: "nexus-api",
            title: "Nexus API",
            desc: "Scalable microservices ecosystem designed for high-concurrency e-commerce workloads. Handles 50k+ requests per second.",
            tags: ["Go", "Kubernetes", "gRPC", "PostgreSQL"]
        },
        {
            id: "quantum-pay",
            title: "Quantum Pay",
            desc: "A decentralized payment gateway leveraging smart contracts for instant cross-border settlement with minimal transaction fees.",
            tags: ["Ethereum", "Ethers.js", "Hardhat", "Vite"]
        },
        {
            id: "aura-ui",
            title: "Aura UI",
            desc: "Comprehensive design system and component library focusing on accessibility and glassmorphism. Built for high-speed UI development.",
            tags: ["Storybook", "TailwindCSS", "Radix UI", "A11y"]
        },
        {
            id: "sentinel-auth",
            title: "Sentinel Auth",
            desc: "Advanced authentication service with MFA, OAuth2 support, and fraud detection capabilities based on user behavior analysis.",
            tags: ["NextAuth", "Prisma", "Python", "Docker"]
        }
    ];

    return (
        <div className="container mx-auto px-4 pb-20 pt-32 bg-[#0a0a0a] text-white overflow-hidden">
            <header className="mb-20 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ff2e63]/10 rounded-full blur-[100px] -z-10" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-black tracking-tighter md:text-7xl mb-6"
                >
                    Crafting Digital <br />
                    <span className="neon-text">Architectures</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl text-xl text-[#cbd5e1]/80 leading-relaxed font-medium"
                >
                    A curated selection of high-performance web applications and experimental UI modules built for the next generation of the web.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 px-4 py-2 rounded-full bg-[#ff2e63]/10 border border-[#ff2e63]/20 text-[#ff2e63] text-[10px] font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff2e63] opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff2e63]"></span>
                    </span>
                    Section still being built
                </motion.div>
            </header>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#ff2e63]/50 transition-all shadow-2xl"
                    >
                        <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#903749]/40 via-transparent to-transparent opacity-60 group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                                <Terminal className="w-20 h-20 text-[#ff2e63]" />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 p-8 relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2e63]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <h3 className="text-2xl font-black mb-4 group-hover:text-[#ff2e63] transition-colors">{project.title}</h3>
                            <p className="text-sm text-[#cbd5e1]/70 leading-relaxed mb-8 mb-auto line-clamp-3">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/10 border border-white/5 text-[10px] uppercase font-black tracking-widest text-[#cbd5e1] group-hover:text-white group-hover:bg-[#ff2e63]/20 transition-all">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Link to={`/demo/${project.id}`} className="flex-1">
                                    <Button className="w-full rounded-full bg-transparent border-2 border-[#ff2e63]/40 text-[#ff2e63] hover:bg-[#ff2e63] hover:text-white hover:shadow-[0_0_20px_rgba(255,46,99,0.3)] transition-all font-black uppercase tracking-tighter">
                                        LIVE DEMO
                                    </Button>
                                </Link>
                                <div className="flex gap-2">
                                    <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#ff2e63] hover:text-[#ff2e63] transition-all">
                                        <Github className="h-4 w-4" />
                                    </a>
                                    <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#ff2e63] hover:text-[#ff2e63] transition-all">
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

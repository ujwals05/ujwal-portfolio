import { motion } from "framer-motion";
import { Code2, Database, Layout,  Terminal, Cpu } from "lucide-react";
import InfiniteMarquee from "../components/animations/InfiniteMarquee";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Layout,
        color: "#ff2e63",
        skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / OGL"]
    },
    {
        title: "Backend & Systems",
        icon: Database,
        color: "#10b981",
        skills: ["Node.js / Express", "PostgreSQL / MongoDB", "Redis", "Docker", "Nginx"]
    },
    {
        title: "Programming Languages",
        icon: Code2,
        color: "#ff2e63",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "C++"]
    },
    {
        title: "Infrastructure & Tools",
        icon: Terminal,
        color: "#10b981",
        skills: ["Git / GitHub", "AWS / Vercel", "CI/CD Pipelines", "Linux / Bash", "Postman"]
    }
];

export default function Skills() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-3 mb-6">
                        Expertise
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                        Technical <span className="neon-text">Arsenal</span>
                    </h1>
                    <p className="text-[#cbd5e1]/70 max-w-2xl mx-auto text-lg">
                        A comprehensive suite of technologies and tools curated to build scalable,
                        high-performance digital experiences.
                    </p>
                </motion.div>

                <InfiniteMarquee />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#ff2e63]/50 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e63]/0 to-[#ff2e63]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <category.icon className="w-12 h-12 mb-6 text-[#ff2e63] group-hover:scale-110 transition-transform duration-500" />

                            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-tight">
                                {category.title}
                            </h3>

                            <ul className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-[#cbd5e1]/70 group-hover:text-white transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_#10b981] transition-all" />
                                        <span className="text-sm font-medium">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats or CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 rounded-[3rem] bg-[#1a1a1a]/50 border border-white/5 backdrop-blur-2xl text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff2e63]/5 rounded-full blur-[100px] -ml-32 -mb-32" />

                    <Cpu className="w-16 h-16 mx-auto mb-8 text-[#ff2e63] animate-pulse" />
                    <h2 className="text-3xl font-bold mb-6 italic">
                        "Constantly Evolving. Always Building."
                    </h2>
                    <p className="text-[#cbd5e1]/60 max-w-xl mx-auto mb-10">
                        Beyond these frameworks, I'm passionate about clean code,
                        architecture patterns, and the future of web standards.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase">
                            Clean Architecture
                        </div>
                        <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase">
                            Agile Workflow
                        </div>
                        <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase">
                            Edge Computing
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

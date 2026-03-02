import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowUpRight, Github, Twitter, Linkedin, ExternalLink, Mail, Terminal, Cpu, Rocket, Layout, Database, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import RotatingText from "../components/animations/RotatingText";
import InfiniteMarquee from "../components/animations/InfiniteMarquee";
import { useState, useEffect } from "react";
import TiltedCard from "../components/animations/TiltedCard";
const heroImage = "/hero/ujwal_photo.png";

const ProjectImageSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            {images.map((img, idx) => (
                <motion.div
                    key={img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <img
                        src={img}
                        alt={`Project view ${idx + 1}`}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            ))}
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#903749]/40 via-transparent to-transparent opacity-60 group-hover:scale-110 transition-transform duration-700" />
        </div>
    );
};

export default function Home() {
    const projects = [
        {
            title: "Sri Sai College",
            type: "Freelancing Project",
            desc: "This is a freelancing project built for Sri Sai College for Women, Bangalore.",
            note: "Pictures used for demo; original pictures will be uploaded upon client delivery.",
            link: "https://sai-college.vercel.app",
            images: [
                "/projects/sri-sai-college/sai-1.jpeg",
                "/projects/sri-sai-college/sai-2.jpeg"
            ]
        },
        {
            title: "Flux",
            type: "Hobby Project",
            desc: "A futuristic real-time chat application built for seamless communication and high-speed data exchange.",
            link: "https://flux-chat-lovat.vercel.app/",
            images: [
                "/projects/flux/signup.jpg",
                "/projects/flux/profile.jpg",
                "/projects/flux/aboutus.jpg"
            ]
        },
        {
            title: "More on GitHub",
            type: "Open Source",
            desc: "Explore my full archive of digital architectures, including microservices, backend engines, and experimental UI modules.",
            link: "https://github.com/ujwals05",
            images: []
        }
    ];

    return (
        <div className="flex flex-col gap-24 pb-20 pt-0 relative overflow-hidden text-white bg-transparent">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 h-screen flex items-center pt-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12">
                    {/* Right: Interactive Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-start order-2 lg:order-2"
                    >
                        <div className="relative w-[280px] md:w-[400px] lg:w-[450px]">
                            {/* Radial Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#903749] via-[#ff2e63] to-transparent rounded-full opacity-30 blur-3xl animate-pulse" />

                            {/* The Circle Image Container (FIXED) */}
                            <div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-[#1a1a1a]/50 backdrop-blur-sm shadow-[0_0_50px_rgba(255,46,99,0.15)] z-10 transition-colors hover:border-[#ff2e63]/30">
                                <TiltedCard
                                    imageSrc={heroImage}
                                    altText="Ujwal S - cook"
                                    captionText="Ujwal S - cook.exe"
                                    containerHeight="100%"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    rotateAmplitude={15}
                                    scaleOnHover={1.1}
                                    showMobileWarning={false}
                                    showTooltip
                                    displayOverlayContent
                                    overlayContent={
                                        <div className="p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                                            <p className="text-[#ff2e63] font-black text-xs tracking-[0.2em] uppercase mb-1">
                                                Currently Pulsing
                                            </p>
                                            <p className="text-white font-bold text-sm">
                                                Ujwal S - cook.exe
                                            </p>
                                        </div>
                                    }
                                />
                            </div>

                            <div
                                className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
                            >
                                <Terminal className="w-5 h-5 text-[#ff2e63]" />
                            </div>
                            <div
                                className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
                            >
                                <Cpu className="w-5 h-5 text-[#e94560]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Left: Content Section */}
                    <div className="flex flex-col gap-6 lg:gap-10 order-1 lg:order-1 items-start lg:pr-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                Available for Work
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.85] tracking-tighter"
                            >
                                Hi, <br />
                                I'm <span className="neon-text uppercase">UJWAL</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-sm md:text-base text-[#cbd5e1] font-bold tracking-tight uppercase"
                            >
                                <RotatingText
                                    texts={[
                                        "Software Engineer",
                                        "Freelancer",
                                        "Backend Engineer",
                                        "Full Stack Developer",
                                        "Web Developer",
                                        "Cloud Learner",
                                        "AI/ML Learner",
                                        "Creative Developer"
                                    ]}
                                    mainClassName="overflow-hidden"
                                    staggerDuration={0}
                                    splitBy="words"
                                    rotationInterval={2500}
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                />
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-[#cbd5e1]/80 max-w-sm text-sm leading-relaxed"
                        >
                            Architecting <span className="text-white font-bold border-b-2 border-[#ff2e63]/30">scalable ecosystems</span> and visually immersive interfaces.
                            Merging pixel perfection with engineering excellence — building systems that scale, adapt, and evolve.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-8 pt-4 w-full"
                        >
                            <Link to="/contact">
                                <Button size="lg" className="group relative overflow-hidden rounded-full bg-transparent border border-emerald-500 text-white hover:text-white transition-all duration-500 px-8 h-11 text-sm font-black uppercase tracking-widest cursor-pointer">
                                    <span className="relative z-10">Hire Me</span>
                                    <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Button>
                            </Link>

                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "https://github.com/ujwals05", color: "hover:border-emerald-500 hover:text-emerald-500" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/ujwal-s-6718762b0/", color: "hover:border-emerald-500 hover:text-emerald-500" },
                                    { icon: Twitter, href: "https://x.com/ujwalS005", color: "hover:border-emerald-500 hover:text-emerald-500" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all group ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section - Refined Glassmorphism */}
            <section className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(255,46,99,0.08)] overflow-hidden"
                >
                    {/* Glow Accent */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff2e63]/10 rounded-full blur-[100px] -mr-36 -mt-36" />

                    <div className="grid lg:grid-cols-2 gap-16 relative z-10">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-10 flex items-center gap-4">
                                <span className="w-12 h-1 bg-[#ff2e63] rounded-full" />
                                About My Mission
                            </h2>

                            <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
                                I engineer scalable backend systems that form the foundation of modern digital products.
                                From high-performance APIs to production-ready web and mobile platforms, I focus on
                                building software that performs reliably under real-world demand.
                            </p>

                            <p className="text-[#cbd5e1]/70 leading-relaxed mb-8">
                                I am currently student in Dayananda Sagar College Of Engineering , Bangalore. Currently in my pre-final
                                My expertise extends into building websites , cloud-native infrastructure and distributed architectures,
                                where scalability and resilience are non-negotiable. As I expand into AI and machine learning,
                                I aim to integrate intelligent capabilities into systems designed to evolve with complexity.
                            </p>

                            <p className="text-md text-[#cbd5e1]/80 leading-relaxed italic border-l-2 border-[#ff2e63]/40 pl-6">
                                "Precison. Performance. Perfection."
                            </p>
                        </div>

                        {/* Right Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Card 1 */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2e63]/40 transition-all duration-300 group">
                                <Rocket className="w-8 h-8 text-[#ff2e63] mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2 text-white">Scalable Architecture</h4>
                                <p className="text-sm text-[#cbd5e1]/60 leading-relaxed">
                                    Designing backend systems and APIs that handle growth, complexity, and high-performance workloads.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e94560]/40 transition-all duration-300 group">
                                <Terminal className="w-8 h-8 text-[#e94560] mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2 text-white">Cloud-Native Systems</h4>
                                <p className="text-sm text-[#cbd5e1]/60 leading-relaxed">
                                    Building containerized, distributed infrastructure optimized for reliability and scalability.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2e63]/40 transition-all duration-300 group">
                                <Cpu className="w-8 h-8 text-[#ff2e63] mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2 text-white">AI Integration</h4>
                                <p className="text-sm text-[#cbd5e1]/60 leading-relaxed">
                                    Exploring machine learning and intelligent automation to enhance real-world applications.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e94560]/40 transition-all duration-300 group">
                                <Mail className="w-8 h-8 text-[#e94560] mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold mb-2 text-white">Collaborative Delivery</h4>
                                <p className="text-sm text-[#cbd5e1]/60 leading-relaxed">
                                    Clear communication, structured workflows, and consistent execution from idea to deployment.
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Expertise Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Technical <span className="neon-text">Expertise</span></h2>
                    <p className="text-[#cbd5e1]/60 max-w-xl mx-auto">Mastering the tools that shape the future of digital infrastructure.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Frontend",
                            icon: Layout,
                            skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                            color: "from-[#ff2e63]"
                        },
                        {
                            title: "Backend",
                            icon: Database,
                            skills: ["Node.js / Express", "PostgreSQL / MongoDB", "Redis", "Docker"],
                            color: "from-[#10b981]"
                        },
                        {
                            title: "Languages",
                            icon: Code2,
                            skills: ["JavaScript", "TypeScript", "Python", "Go", "C++"],
                            color: "from-[#ff2e63]"
                        },
                        {
                            title: "Infrastructure",
                            icon: Terminal,
                            skills: ["Git / GitHub", "AWS / Vercel", "Linux", "Postman"],
                            color: "from-[#10b981]"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:border-[#ff2e63]/50 transition-all shadow-lg overflow-hidden relative"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} to-transparent opacity-5 -mr-12 -mt-12 group-hover:opacity-10 transition-opacity`} />
                            <item.icon className="w-10 h-10 mb-6 text-[#ff2e63]" />
                            <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map(s => (
                                    <span key={s} className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/10 border border-white/5 text-[#cbd5e1] group-hover:text-white group-hover:bg-[#ff2e63]/20 transition-all">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <InfiniteMarquee />
            </section>

            {/* Projects Section */}
            <section id="projects" className="container mx-auto px-4 py-16 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Recent <span className="neon-text">Creations</span></h2>
                        <p className="text-[#cbd5e1]/60">A glimpse into the digital architectures I've sculpted.</p>
                    </div>
                    <Link to="/projects">
                        <Button variant="outline" className="rounded-full border-[#ff2e63]/40 text-[#ff2e63] hover:bg-[#ff2e63] hover:text-white gap-2 transition-all">
                            Explore Archive <ArrowUpRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {projects.map((p, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col hover:shadow-[0_10px_40px_rgba(255,46,99,0.15)] transition-all"
                        >
                            <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                                {p.images && p.images.length > 0 ? (
                                    <ProjectImageSlider images={p.images} />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#903749]/30 to-transparent group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-[#ff2e63]/20 font-bold text-4xl">PRO-{idx + 1}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                <p className="text-[#cbd5e1]/70 text-sm mb-4 pb-0">{p.desc}</p>
                                {p.note && (
                                    <p className="text-[10px] text-[#ff2e63] font-bold italic mb-6 pb-6 border-b border-white/10 uppercase tracking-wider">
                                        CAUTION: {p.note}
                                    </p>
                                )}
                                {!p.note && <div className="mb-6 pb-6 border-b border-white/10" />}
                                <div className="flex items-center justify-between">
                                    <span className="text-[#ff2e63] font-bold text-sm tracking-tighter uppercase">{p.type || "Project"}</span>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 text-white hover:text-[#ff2e63] cursor-pointer transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-3xl border border-dashed border-[#ff2e63]/30 bg-[#ff2e63]/5 flex flex-col items-center justify-center text-center group"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff2e63] opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff2e63]"></span>
                        </span>
                        <h4 className="text-[#ff2e63] font-black uppercase tracking-[0.2em] text-xs">Section Under Active Development</h4>
                    </div>
                    <p className="text-[#cbd5e1]/60 text-sm max-w-lg leading-relaxed">
                        I am currently architecting new case studies and refining microservice visualizations.
                        The backend engines are warming up—expecting high-performance updates soon.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}

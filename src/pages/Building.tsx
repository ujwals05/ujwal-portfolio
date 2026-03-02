import { motion } from "framer-motion";
import { Hammer, ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Building() {
    return (
        <div className="min-h-screen flex flex-col items-center pt-32 pb-20 relative overflow-hidden bg-black text-white px-6">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff2e63]/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-8 max-w-2xl"
            >
                <div className="relative inline-block">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                    >
                        <Construction className="w-16 h-16 text-[#ff2e63]" />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-lg shadow-lg">
                        <Hammer className="w-5 h-5 text-black" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                        Digital <span className="text-[#ff2e63]">Scaffold</span> In Place
                    </h1>
                    <p className="text-[#cbd5e1]/60 text-lg md:text-xl font-medium">
                        I'm currently architecting this section. The blueprints are ready, and the code is being compiled. Check back soon for the final deployment.
                    </p>
                </div>

                <div className="pt-8">
                    <Link to="/">
                        <Button size="lg" className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white gap-3 px-8 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Command Center
                        </Button>
                    </Link>
                </div>

                <div className="pt-12 flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-[#cbd5e1]/30">
                    <span className="w-8 h-[1px] bg-white/10" />
                    System Status: Constructing
                    <span className="w-8 h-[1px] bg-white/10" />
                </div>
            </motion.div>
        </div>
    );
}

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

export default function Events() {
    const events = [
        {
            title: "Google DevFest 2024",
            role: "Guest Speaker",
            desc: "Invited as a guest speaker to discuss 'The Future of Scalable Microservices in Cloud-Native Environments'.",
            date: "Oct 2024",
            location: "San Francisco, CA"
        },
        {
            title: "ETHGlobal London",
            role: "Participant",
            desc: "Built a decentralized lending protocol using Solidity and Next.js. Secured the 'Best DeFi Hack' award.",
            date: "Jun 2024",
            location: "London, UK",
            award: "Best DeFi Hack"
        },
        {
            title: "AWS Community Day",
            role: "Presenter",
            desc: "Deep dive into serverless architecture and automated deployment pipelines with AWS CDK.",
            date: "Mar 2024",
            location: "New York, NY"
        },
        {
            title: "HackMIT",
            role: "Winner",
            desc: "Pioneered an AI-driven accessibility tool for vision-impaired developers. Winner of 'Most Impactful Social Tool'.",
            date: "Jan 2024",
            location: "Cambridge, MA",
            award: "Most Impactful Social Tool"
        }
    ];

    return (
        <div className="container mx-auto px-4 pb-20 pt-24">
            <header className="mb-16">
                <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">Events & <span className="text-primary">Hackathons</span></h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    A chronicle of my journey through global tech conferences, high-stakes hackathons, and local community meetups. Building the future, one commit at a time.
                </p>
            </header>

            <div className="relative space-y-12 before:absolute before:left-[17px] before:top-4 before:h-[calc(100%-32px)] before:w-0.5 before:bg-white/10 md:before:left-1/2 md:before:-translate-x-1/2">
                {events.map((event, i) => (
                    <motion.div
                        key={event.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative flex flex-col md:flex-row md:justify-between ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-1 top-4 h-8 w-8 rounded-full border-4 border-black bg-primary md:left-1/2 md:-translate-x-1/2" />

                        {/* Content */}
                        <div className="ml-12 md:ml-0 md:w-[45%]">
                            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 transition-all hover:border-primary/50">
                                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                    <Calendar className="h-3 w-3" /> {event.date}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-sm font-medium text-secondary mb-4 italic">{event.role}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {event.desc}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-white/5">
                                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <MapPin className="h-3 w-3" /> {event.location}
                                    </span>
                                    {event.award && (
                                        <span className="flex items-center gap-1.5 text-xs text-secondary font-bold">
                                            <Award className="h-3 w-3" /> {event.award}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

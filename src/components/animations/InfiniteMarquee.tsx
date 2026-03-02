
const technologies = [
    { name: 'Java', color: '#007396', icon: 'https://cdn.simpleicons.org/java/007396' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Python', color: '#3776AB', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'React', color: '#61DAFB', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Express', color: '#FFFFFF', icon: 'https://cdn.simpleicons.org/express/FFFFFF' },
    { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'PostgreSQL', color: '#4169E1', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Git', color: '#F05032', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', color: '#FFFFFF', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'Docker', color: '#2496ED', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Postman', color: '#FF6C37', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Linux', color: '#FCC624', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'Tailwind', color: '#06B6D4', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Vercel', color: '#FFFFFF', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
    { name: 'AWS', color: '#FF9900', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    { name: 'Prisma', color: '#2D3748', icon: 'https://cdn.simpleicons.org/prisma/FFFFFF' },
    { name: 'Supabase', color: '#3ECF8E', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
];

export default function InfiniteMarquee() {
    // Duplicate list for seamless loop
    const displayTechs = [...technologies, ...technologies];

    return (
        <div className="relative w-full overflow-hidden border-y border-white/5 py-10 my-12 group">
            {/* Gradient Masking */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee-slower group-hover:pause-animation gap-12 sm:gap-20 items-center whitespace-nowrap">
                {displayTechs.map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 group/item hover:scale-110 transition-transform duration-300"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center p-2 rounded-xl border border-white/10 group-hover/item:border-[#ff2e63]/30 transition-colors">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                        <span className="text-sm sm:text-lg font-black tracking-tight text-[#cbd5e1]/40 group-hover/item:text-[#ff2e63] uppercase transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slower {
          animation: marquee-slower 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}} />
        </div>
    );
}

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import StaggeredMenu from "../components/animations/StaggeredMenu";
import StaggeredMenu from "../animations/StaggeredMenu";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "Events", path: "/building" },
    { name: "Skills", path: "/skills" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const staggeredItems = [
        ...navLinks.map(link => ({
            label: link.name,
            ariaLabel: `Go to ${link.name}`,
            link: link.path
        })),
        { label: "Contact", ariaLabel: "Go to Contact", link: "/contact" }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMenuOpen
                ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Left: Logo */}
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform relative z-50"
                >
                    <span className="text-[#ff2e63] uppercase">cook</span>.exe
                </Link>

                {/* Right: Desktop Links + CTA */}
                <div className="flex items-center gap-10">
                    <div className="hidden space-x-8 md:flex items-center">
                        {navLinks.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`text-sm font-bold transition-all uppercase tracking-widest relative group ${isActive ? "text-[#ff2e63]" : "text-[#cbd5e1]/70 hover:text-[#ff2e63]"
                                        }`}
                                >
                                    {item.name}
                                    {/* Active/Hover Indicator Line */}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff2e63] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`} />
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        to="/contact"
                        className={`hidden md:flex relative group overflow-hidden rounded-full px-8 py-2.5 text-xs font-black text-white border transition-all uppercase tracking-widest ${location.pathname === "/contact"
                            ? "border-[#ff2e63] bg-[#ff2e63]/20"
                            : "border-[#ff2e63]/50 hover:border-[#ff2e63] bg-[#ff2e63]/10"
                            }`}
                    >
                        <span className="relative z-10">Contact</span>
                        <div className="absolute inset-0 bg-[#ff2e63] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    {/* Mobile Staggered Menu */}
                    <div className="md:hidden">
                        <StaggeredMenu
                            items={staggeredItems}
                            socialItems={[
                                { label: "GitHub", link: "https://github.com/ujwals05" },
                                { label: "LinkedIn", link: "https://www.linkedin.com/in/ujwal-s-6718762b0/" },
                                { label: "Twitter", link: "https://x.com/ujwalS005" }
                            ]}
                            colors={['#000000', '#1a1a1a', '#ff2e63']}
                            accentColor="#ff2e63"
                            menuButtonColor="#ffffff"
                            openMenuButtonColor="#ff2e63"
                            isFixed={true}
                            displayItemNumbering={true}
                            displaySocials={true}
                            logoUrl=" " // Hide internal logo
                            onMenuOpen={() => setIsMenuOpen(true)}
                            onMenuClose={() => setIsMenuOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

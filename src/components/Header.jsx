import { Menu, PhoneCall, X, User } from "lucide-react";
import { useState } from "react";

const navList = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];

if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const contactBtn = document.querySelector('a[href="#contact"]');
        if (contactBtn) {
            contactBtn.addEventListener("click", (e) => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                    e.preventDefault();
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="Scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
                <div className="flex items-center space-x-2">
                    <User className="w-8 h-8 text-[#f6c67a]" />
                    <span className="text-xl font-bold text-black">My Portfolio</span>
                    <span className="ml-2 text-sm text-gray-500 italic">Showcasing my projects & skills</span>
                </div>
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navList.map((link) => (
                        <a href={link.href} key={link.href} className="hover:text-sky-600 transition">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-2">
                    <PhoneCall className="text-[#f6c67a]" />
                    <a href="#contact" className="bg-[#f2aa35] text-white px-4 py-2 rounded-xl hover:bg-[#df951c] transition text-sm">Reach Out to Me</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="text-gray-700" /> : <Menu className="text-gray-700" />}
                    </button>
                </div>
            </div>

            {
                isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
                        {navList.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                className="block hover:text-sky-600 transition"
                                onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
        </header>
    );
};

export default Header
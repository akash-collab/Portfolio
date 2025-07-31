import { useState, useEffect } from 'react';
import { LINKS } from '../constants/index';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            const sections = document.querySelectorAll('section[id]');
            for (const section of sections) {
                if (
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveLink(`#${section.id}`);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initialize on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg transition-all duration-300">
                <div className="text-white font-semibold text-lg uppercase">
                    <a href="#hero" onClick={handleLinkClick} aria-label="Scroll to Hero">
                        Akash Paul
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={`transition duration-300 ${activeLink === link.href
                                    ? 'text-green-400 font-semibold'
                                    : 'text-white hover:text-stone-400'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? (
                            <RiCloseFill className="w-6 h-6" />
                        ) : (
                            <RiMenu3Fill className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden p-4 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto z-40 transition-all duration-300"
                >
                    {LINKS.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={handleLinkClick}
                            className={`transition duration-300 ${activeLink === link.href
                                    ? 'text-green-400 font-semibold'
                                    : 'text-white hover:text-stone-400'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
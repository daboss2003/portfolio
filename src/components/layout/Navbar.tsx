import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Skills', href: '#skills', num: '02' },
    { label: 'Experience', href: '#experience', num: '03' },
    { label: 'Projects', href: '#projects', num: '04' },
    { label: 'Credentials', href: '#certifications', num: '05' },
    { label: 'Contact', href: '#contact', num: '06' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navItems.map((item) => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1));
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-terminal-dark/90 backdrop-blur-md border-b border-terminal-border'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6!">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="font-mono text-terminal-green font-bold text-lg"
                        >
                            <span className="text-terminal-text">&lt;</span>
                            SO
                            <span className="text-terminal-text">/&gt;</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    whileHover={{ y: -2 }}
                                    className={`px-4! py-2! font-mono text-sm transition-colors ${activeSection === item.href.slice(1)
                                        ? 'text-terminal-green'
                                        : 'text-terminal-text-dim hover:text-terminal-text'
                                        }`}
                                >
                                    <span className="text-terminal-green text-xs">{item.num}.</span>{' '}
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.a
                                href="/Samson_Oluwafemi_Resume.pdf"
                                download="Samson_Oluwafemi_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4 px-4 py-2 border border-terminal-green text-terminal-green font-mono text-sm
                         rounded hover:bg-terminal-green/10 transition-colors"
                            >
                                Resume
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2! text-terminal-green"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-terminal-black/80 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute right-0 top-0 h-full w-64 bg-terminal-dark border-l border-terminal-border p-6! pt-20!"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-left font-mono text-sm text-terminal-text-dim hover:text-terminal-green transition-colors py-2!"
                                    >
                                        <span className="text-terminal-green">{item.num}.</span> {item.label}
                                    </motion.button>
                                ))}
                                <motion.a
                                    href="/Samson_Oluwafemi_Resume.pdf"
                                    download="Samson_Oluwafemi_Resume.pdf"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="mt-4 px-4! py-3! border border-terminal-green text-terminal-green font-mono text-sm
                           rounded text-center hover:bg-terminal-green/10 transition-colors"
                                >
                                    Resume
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


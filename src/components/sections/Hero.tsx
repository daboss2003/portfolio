import { useEffect, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const Scene = lazy(() => import('../three/Scene').then(mod => ({ default: mod.Scene })));

const bootSequence = [
    '[ OK ] Initializing system...',
    '[ OK ] Loading developer profile...',
    '[ OK ] Connecting to fintech networks...',
    '[ OK ] Portfolio ready.',
];

export function Hero() {
    const [bootLines, setBootLines] = useState<string[]>([]);
    const [showContent, setShowContent] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let lineIndex = 0;
        const interval = setInterval(() => {
            if (lineIndex < bootSequence.length) {
                setBootLines((prev) => [...prev, bootSequence[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => setShowContent(true), 500);
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24! pb-12!">
            {/* 3D Background */}
            <Suspense fallback={<div className="absolute inset-0 bg-terminal-black" />}>
                <Scene className="opacity-40" particleCount={400} />
            </Suspense>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-8! md:px-12! py-24!">
                {/* Boot Sequence */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showContent ? 0 : 1, height: showContent ? 0 : 'auto' }}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-sm text-terminal-green mb-8! overflow-hidden"
                >
                    {bootLines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-1!"
                        >
                            {line}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Terminal Header */}
                    <div className="bg-terminal-dark/80 border border-terminal-border rounded-lg p-8! md:p-10! mb-12! backdrop-blur-sm max-w-4xl">
                        <div className="flex items-center gap-2 mb-4!">
                            <div className="w-3 h-3 rounded-full bg-terminal-red" />
                            <div className="w-3 h-3 rounded-full bg-terminal-amber" />
                            <div className="w-3 h-3 rounded-full bg-terminal-green" />
                            <span className="ml-4! text-terminal-text-dim text-sm font-mono">
                                samson@portfolio ~ {currentTime.toLocaleTimeString()}
                            </span>
                        </div>

                        {/* Ticker Display */}
                        <div className="flex flex-wrap items-center gap-6 text-sm font-mono mb-8! text-terminal-text-dim">
                            <span className="text-terminal-green">$SAMSON</span>
                            <span className="text-terminal-amber">+3 YRS EXP</span>
                            <span className="text-terminal-cyan">FINTECH</span>
                            <span className="text-terminal-green animate-pulse">● AVAILABLE</span>
                        </div>

                        {/* Name & Title */}
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4!">
                            <span className="text-terminal-text">Samson</span>{' '}
                            <span className="gradient-text">Oluwafemi</span>
                        </h1>

                        <h2 className="font-mono text-xl md:text-2xl text-terminal-green glow-green-text mb-8!">
                            &gt; Senior UI Developer
                        </h2>

                        <p className="font-mono text-terminal-text-dim max-w-2xl leading-relaxed mb-10!">
                            Cross-platform specialist building fintech solutions across{' '}
                            <span className="text-terminal-cyan">web</span>,{' '}
                            <span className="text-terminal-amber">mobile</span>, and{' '}
                            <span className="text-terminal-blue">desktop</span>.
                            Currently crafting financial technology products at Credlock-Africa.
                        </p>

                        {/* Self-Taught Badge */}
                        <div className="bg-terminal-gray/50 border border-terminal-border rounded-lg p-5! mb-10! max-w-xl">
                            <div className="flex items-start gap-3">
                                <span className="text-terminal-amber text-xl">⚡</span>
                                <div>
                                    <h3 className="font-mono text-terminal-amber text-sm font-semibold mb-1!">
                                        SELF-TAUGHT DEVELOPER
                                    </h3>
                                    <p className="font-mono text-terminal-text-dim text-xs leading-relaxed">
                                        No traditional degree. Learned through intensive online courses (Harvard CS50),
                                        hands-on projects, and professional internships. Proof that passion and
                                        dedication beat credentials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('projects')}
                                className="px-6! py-3! bg-terminal-green text-terminal-black font-mono font-semibold 
                         rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all"
                            >
                                &gt; view_projects()
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="px-6! py-3! border border-terminal-green text-terminal-green font-mono 
                         font-semibold rounded-lg hover:bg-terminal-green/10 transition-all"
                            >
                                &gt; contact_me()
                            </motion.button>
                            <motion.a
                                href="/Samson_Oluwafemi_Resume.pdf"
                                download="Samson_Oluwafemi_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6! py-3! border border-terminal-amber text-terminal-amber font-mono 
                         font-semibold rounded-lg hover:bg-terminal-amber/10 transition-all"
                            >
                                &gt; download_cv()
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                        {[
                            { label: 'APPS DEPLOYED', value: '5+' },
                            { label: 'PLATFORMS', value: '3' },
                            { label: 'CERTIFICATIONS', value: '5' },
                            { label: 'YEARS CODING', value: '3+' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="bg-terminal-dark/50 border border-terminal-border rounded-lg p-5! text-center
                         hover:border-terminal-green/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all"
                            >
                                <div className="text-2xl md:text-3xl font-display font-bold text-terminal-green">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-mono text-terminal-text-dim mt-1!">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-terminal-green font-mono text-sm flex flex-col items-center gap-2"
                    >
                        <span>scroll_down()</span>
                        <span className="text-2xl">↓</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}


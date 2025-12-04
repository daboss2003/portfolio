import { motion } from 'framer-motion';
import { certifications } from '../../data/projects';
import { GlowCard } from '../ui/GlowCard';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24! md:py-32! overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-terminal-dark/50 to-terminal-black" />

      <div className="relative z-10 container mx-auto px-8! md:px-12!">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16!"
        >
          <div className="flex items-center gap-4 mb-4!">
            <span className="text-terminal-green font-mono text-sm">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-terminal-text">
              Credentials Verified
            </h2>
            <div className="flex-1 h-px bg-terminal-border" />
          </div>
          <p className="font-mono text-terminal-text-dim text-sm">
            &gt; verify_credentials --status=verified --display=all
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16!">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="p-8! h-full relative overflow-hidden" glowColor="green">
                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.03) 2px, rgba(0,255,136,0.03) 4px)',
                    }}
                  />
                </div>

                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 rounded-full bg-terminal-green/20 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-terminal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4!">{cert.icon}</div>

                {/* Content */}
                <h3 className="font-display font-bold text-terminal-text mb-2! pr-8!">
                  {cert.name}
                </h3>
                <p className="font-mono text-sm text-terminal-cyan mb-4!">
                  {cert.issuer}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-terminal-green" />
                  <span className="font-mono text-xs text-terminal-green uppercase">
                    Verified
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Harvard Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlowCard className="p-10! max-w-3xl mx-auto" glowColor="amber">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="text-6xl">🎓</div>
              <div>
                <h3 className="font-display text-2xl font-bold text-terminal-amber mb-3!">
                  Harvard CS50 Graduate
                </h3>
                <p className="font-mono text-terminal-text-dim leading-relaxed mb-4!">
                  Completed the legendary CS50 series from Harvard University - the same foundation
                  that tech giants' engineers started with. Three intensive courses covering:
                </p>
                <div className="grid md:grid-cols-3 gap-6!">
                  <div className="bg-terminal-gray/30 rounded-lg p-4! border border-terminal-border">
                    <div className="font-mono text-terminal-green text-sm font-bold mb-1!">
                      CS50x
                    </div>
                    <div className="font-mono text-xs text-terminal-text-dim">
                      Computer Science fundamentals, C, algorithms, data structures
                    </div>
                  </div>
                  <div className="bg-terminal-gray/30 rounded-lg p-4! border border-terminal-border">
                    <div className="font-mono text-terminal-amber text-sm font-bold mb-1!">
                      CS50P
                    </div>
                    <div className="font-mono text-xs text-terminal-text-dim">
                      Python programming, problem-solving, software design
                    </div>
                  </div>
                  <div className="bg-terminal-gray/30 rounded-lg p-4! border border-terminal-border">
                    <div className="font-mono text-terminal-cyan text-sm font-bold mb-1!">
                      CS50W
                    </div>
                    <div className="font-mono text-xs text-terminal-text-dim">
                      Web development with Python, JavaScript, Django, React
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}


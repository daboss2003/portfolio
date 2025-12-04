import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { GlowCard } from '../ui/GlowCard';

const platformIcons: Record<string, string> = {
  ios: '🍎',
  android: '🤖',
  web: '🌐',
  desktop: '💻',
};

const statusColors: Record<string, { bg: string; text: string }> = {
  live: { bg: 'bg-terminal-green/20', text: 'text-terminal-green' },
  'in-development': { bg: 'bg-terminal-amber/20', text: 'text-terminal-amber' },
  completed: { bg: 'bg-terminal-blue/20', text: 'text-terminal-blue' },
};

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24! md:py-32! overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-8! md:px-12!">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16!"
        >
          <div className="flex items-center gap-4 mb-4!">
            <span className="text-terminal-green font-mono text-sm">04.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-terminal-text">
              Portfolio Holdings
            </h2>
            <div className="flex-1 h-px bg-terminal-border" />
          </div>
          <p className="font-mono text-terminal-text-dim text-sm">
            &gt; list_assets --status=all --detail=full
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8!">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const status = statusColors[project.status];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <GlowCard
                  className="p-8! h-full cursor-pointer"
                  glowColor={project.status === 'live' ? 'green' : project.status === 'in-development' ? 'amber' : 'blue'}
                  delay={0}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6!">
                    <div>
                      <div className="flex items-center gap-2 mb-2!">
                        <span className={`px-2! py-0.5! rounded text-xs font-mono uppercase ${status.bg} ${status.text}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                        {project.status === 'in-development' && (
                          <span className="w-2 h-2 rounded-full bg-terminal-amber animate-pulse" />
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold text-terminal-text mb-1!">
                        {project.name}
                      </h3>
                      <p className="font-mono text-sm text-terminal-cyan">
                        @ {project.company}
                      </p>
                    </div>

                    {/* Platforms */}
                    <div className="flex gap-1">
                      {project.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-lg"
                          title={platform.toUpperCase()}
                        >
                          {platformIcons[platform]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-mono text-sm text-terminal-text-dim mb-6! leading-relaxed">
                    {isExpanded ? project.longDescription : project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-6! p-4! bg-terminal-gray/30 rounded-lg border border-terminal-border">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="font-mono text-lg font-bold text-terminal-green">
                            {metric.value}
                          </div>
                          <div className="font-mono text-[10px] text-terminal-text-dim uppercase">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4!"
                      >
                        <h4 className="font-mono text-xs text-terminal-text-dim uppercase mb-2!">
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="font-mono text-sm text-terminal-text-dim flex items-center gap-2"
                            >
                              <span className="text-terminal-green">▹</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6!">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2! py-1! rounded text-xs font-mono bg-terminal-dark border border-terminal-border text-terminal-text-dim
                                 hover:border-terminal-green/50 hover:text-terminal-green transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="font-mono text-xs text-terminal-green hover:text-terminal-green/80 transition-colors"
                  >
                    {isExpanded ? '> collapse()' : '> expand_details()'}
                  </button>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16! text-center"
        >
          <p className="font-mono text-terminal-text-dim mb-4!">
            &gt; More projects available on GitHub
          </p>
          <motion.a
            href="https://github.com/daboss2003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6! py-3! border border-terminal-green text-terminal-green 
                     font-mono rounded-lg hover:bg-terminal-green/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            &gt; view_github()
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { GlowCard } from '../ui/GlowCard';

const typeColors = {
  fintech: { border: 'border-terminal-green', text: 'text-terminal-green', bg: 'bg-terminal-green/10' },
  tech: { border: 'border-terminal-blue', text: 'text-terminal-blue', bg: 'bg-terminal-blue/10' },
  internship: { border: 'border-terminal-amber', text: 'text-terminal-amber', bg: 'bg-terminal-amber/10' },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24! md:py-32! overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-terminal-black via-terminal-dark/50 to-terminal-black" />

      <div className="relative z-10 container mx-auto px-4! md:px-12!">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16!"
        >
          <div className="flex items-center gap-4 mb-4!">
            <span className="text-terminal-green font-mono text-sm">03.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-terminal-text">
              Trade History
            </h2>
            <div className="flex-1 h-px bg-terminal-border" />
          </div>
          <p className="font-mono text-terminal-text-dim text-sm">
            &gt; fetch_transactions --type=experience --sort=recent
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-terminal-border md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const colors = typeColors[exp.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8! md:mb-12! pl-8! md:pl-0! ${isLeft ? 'md:pr-8! md:text-right! md:mr-[50%]!' : 'md:pl-8! md:ml-[50%]!'
                  }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-auto ${isLeft ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                    } top-6 w-4 h-4 rounded-full border-2 ${colors.border} ${colors.bg}`}
                >
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-terminal-green/50" />
                  )}
                </div>

                {/* Content Card */}
                <GlowCard
                  className="p-4! md:p-8!"
                  glowColor={exp.type === 'fintech' ? 'green' : exp.type === 'tech' ? 'blue' : 'amber'}
                  delay={index * 0.1}
                >
                  {/* Header */}
                  <div className={`flex flex-wrap items-start justify-between gap-6 mb-6! ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <div className={isLeft ? 'md:text-right' : ''}>
                      <div className="flex items-center gap-2 flex-wrap mb-1!">
                        <span className={`px-2! py-0.5! rounded text-xs font-mono ${colors.bg} ${colors.text} uppercase`}>
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2! py-0.5! rounded text-xs font-mono bg-terminal-green/20 text-terminal-green">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold text-terminal-text">
                        {exp.role}
                      </h3>
                      <p className={`font-mono text-sm ${colors.text}`}>
                        @ {exp.company}
                      </p>
                    </div>
                    <div className={`font-mono text-xs text-terminal-text-dim ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                      <div>{exp.period}</div>
                      <div className="text-terminal-amber">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-3! mb-6! ${isLeft ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm text-terminal-text-dim flex items-start gap-2"
                        style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}
                      >
                        <span className="text-terminal-green mt-1! shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2! py-1! rounded text-xs font-mono bg-terminal-gray border border-terminal-border text-terminal-text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Education Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16!"
        >
          <GlowCard className="p-4! md:p-8! max-w-2xl mx-auto" glowColor="amber">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="font-display font-bold text-terminal-amber mb-2!">
                  Self-Taught Journey
                </h3>
                <p className="font-mono text-sm text-terminal-text-dim leading-relaxed mb-4!">
                  I don't have a traditional college degree. Everything I know comes from:
                </p>
                <ul className="space-y-2! font-mono text-sm text-terminal-text-dim">
                  <li className="flex items-center gap-2">
                    <span className="text-terminal-green">✓</span>
                    Harvard CS50 Courses (Computer Science, Python, Web Development)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-terminal-green">✓</span>
                    FreeCodeCamp Certifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-terminal-green">✓</span>
                    6-Month Professional Internship at Anter Technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-terminal-green">✓</span>
                    Countless hours of hands-on project building
                  </li>
                </ul>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}


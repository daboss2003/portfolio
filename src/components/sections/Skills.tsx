import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, stats } from '../../data/skills';
import { SkillBar, StatCard } from '../ui/SkillBar';
import { GlowCard } from '../ui/GlowCard';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  const activeCategoryData = skillCategories.find((c) => c.name === activeCategory);

  return (
    <section id="skills" className="relative py-24! md:py-32! overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 matrix-bg" />

      <div className="relative z-10 container mx-auto px-8! md:px-12!">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16!"
        >
          <div className="flex items-center gap-4 mb-4!">
            <span className="text-terminal-green font-mono text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-terminal-text">
              Skills Dashboard
            </h2>
            <div className="flex-1 h-px bg-terminal-border" />
          </div>
          <p className="font-mono text-terminal-text-dim text-sm">
            &gt; market_analysis --sector=all --display=performance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16!">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Skills Dashboard */}
        <GlowCard className="p-8! md:p-10!" hover={false}>
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6! pb-4! border-b border-terminal-border">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="font-mono text-sm text-terminal-text-dim">
                LIVE SKILL METRICS
              </span>
            </div>
            <span className="font-mono text-xs text-terminal-text-dim">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-10!">
            {skillCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4! py-2! font-mono text-xs rounded-lg border transition-all ${activeCategory === category.name
                  ? 'border-terminal-green bg-terminal-green/10 text-terminal-green'
                  : 'border-terminal-border text-terminal-text-dim hover:border-terminal-text-dim'
                  }`}
                style={{
                  borderColor:
                    activeCategory === category.name ? category.color : undefined,
                  color: activeCategory === category.name ? category.color : undefined,
                  backgroundColor:
                    activeCategory === category.name ? `${category.color}15` : undefined,
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-10 gap-y-6"
            >
              {activeCategoryData?.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={activeCategoryData.color}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Category Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8! pt-6! border-t border-terminal-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <span className="text-terminal-text-dim">Total Skills:</span>
                <span className="ml-2! text-terminal-green">{activeCategoryData?.skills.length}</span>
              </div>
              <div>
                <span className="text-terminal-text-dim">Avg. Proficiency:</span>
                <span className="ml-2! text-terminal-amber">
                  {Math.round(
                    (activeCategoryData?.skills.reduce((acc, s) => acc + s.level, 0) || 0) /
                    (activeCategoryData?.skills.length || 1)
                  )}
                  %
                </span>
              </div>
              <div>
                <span className="text-terminal-text-dim">Category:</span>
                <span className="ml-2!" style={{ color: activeCategoryData?.color }}>
                  {activeCategoryData?.label}
                </span>
              </div>
              <div>
                <span className="text-terminal-text-dim">Status:</span>
                <span className="ml-2! text-terminal-green">ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </GlowCard>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16! grid md:grid-cols-3 gap-8"
        >
          {/* Cross-Platform Badge */}
          <GlowCard className="p-8!" glowColor="cyan">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌐</div>
              <div>
                <h3 className="font-display font-bold text-terminal-text mb-2!">
                  Cross-Platform Expert
                </h3>
                <p className="font-mono text-xs text-terminal-text-dim leading-relaxed">
                  Building seamless experiences across web, mobile (iOS & Android),
                  and desktop platforms with shared codebases.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* Fintech Focus */}
          <GlowCard className="p-8!" glowColor="green">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💰</div>
              <div>
                <h3 className="font-display font-bold text-terminal-text mb-2!">
                  Fintech Specialist
                </h3>
                <p className="font-mono text-xs text-terminal-text-dim leading-relaxed">
                  Currently building financial technology products serving
                  customers across Africa at Credlock-Africa.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* Learning AI/ML */}
          <GlowCard className="p-8!" glowColor="purple">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤖</div>
              <div>
                <h3 className="font-display font-bold text-terminal-text mb-2!">
                  AI/ML Journey
                </h3>
                <p className="font-mono text-xs text-terminal-text-dim leading-relaxed">
                  Expanding into machine learning and AI engineering with
                  TensorFlow, PyTorch, and deep learning.
                </p>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}


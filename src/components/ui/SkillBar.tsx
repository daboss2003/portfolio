import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

export function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1!">
        <span className="font-mono text-sm text-terminal-text group-hover:text-terminal-green transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-terminal-text-dim">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-terminal-gray rounded-full overflow-hidden border border-terminal-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 10px ${color}66`,
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{
              background: [
                `linear-gradient(90deg, transparent, ${color}44, transparent)`,
                `linear-gradient(90deg, ${color}44, transparent, ${color}44)`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  prefix?: string;
  delay?: number;
}

export function StatCard({ label, value, prefix = '', delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-terminal-dark/50 border border-terminal-border rounded-lg p-6! text-center
                 hover:border-terminal-green/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]
                 transition-all duration-300"
    >
      <div className="text-3xl font-display font-bold text-terminal-green glow-green-text">
        {prefix}{value}
      </div>
      <div className="text-xs font-mono text-terminal-text-dim mt-2 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}


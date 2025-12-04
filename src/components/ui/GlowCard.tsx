import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'green' | 'amber' | 'blue' | 'purple' | 'cyan';
  hover?: boolean;
  delay?: number;
}

const glowColors = {
  green: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:border-terminal-green/50',
  amber: 'hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:border-terminal-amber/50',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-terminal-blue/50',
  purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-terminal-purple/50',
  cyan: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:border-terminal-cyan/50',
};

export function GlowCard({
  children,
  className = '',
  glowColor = 'green',
  hover = true,
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        relative overflow-hidden
        bg-gradient-to-br from-terminal-dark/90 to-terminal-black/95
        border border-terminal-border rounded-lg
        backdrop-blur-sm
        transition-all duration-300
        ${hover ? glowColors[glowColor] : ''}
        ${className}
      `}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-terminal-green/30" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-terminal-green/30" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-terminal-green/30" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-terminal-green/30" />
      
      {children}
    </motion.div>
  );
}

interface StatusBadgeProps {
  status: 'online' | 'busy' | 'offline' | 'live' | 'active';
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const statusColors = {
    online: 'bg-terminal-green',
    live: 'bg-terminal-green',
    active: 'bg-terminal-amber',
    busy: 'bg-terminal-amber',
    offline: 'bg-terminal-red',
  };

  const statusLabels = {
    online: 'ONLINE',
    live: 'LIVE',
    active: 'ACTIVE',
    busy: 'BUSY',
    offline: 'OFFLINE',
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} />
      <span className="text-xs font-mono text-terminal-text-dim uppercase tracking-wider">
        {label || statusLabels[status]}
      </span>
    </div>
  );
}


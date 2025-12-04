import { motion } from 'framer-motion';

interface TickerItem {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

interface TickerTapeProps {
  items: TickerItem[];
  speed?: number;
  className?: string;
}

export function TickerTape({ items, speed = 30, className = '' }: TickerTapeProps) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden bg-terminal-dark/80 border-y border-terminal-border ${className}`}>
      <motion.div
        className="flex gap-8 py-2! whitespace-nowrap"
        animate={{
          x: [0, -100 * items.length],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-4!">
            <span className="text-terminal-text-dim text-sm font-mono">{item.label}</span>
            <span
              className={`font-mono font-semibold ${item.trend === 'up'
                ? 'text-terminal-green'
                : item.trend === 'down'
                  ? 'text-terminal-red'
                  : 'text-terminal-amber'
                }`}
            >
              {item.value}
            </span>
            {item.trend && (
              <span
                className={
                  item.trend === 'up'
                    ? 'text-terminal-green'
                    : item.trend === 'down'
                      ? 'text-terminal-red'
                      : 'text-terminal-text-dim'
                }
              >
                {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
              </span>
            )}
            <span className="text-terminal-border">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsTicker({ className = '' }: { className?: string }) {
  const skills = [
    { label: '$REACT', value: '+95%', trend: 'up' as const },
    { label: '$TYPESCRIPT', value: '+92%', trend: 'up' as const },
    { label: '$REACT_NATIVE', value: '+92%', trend: 'up' as const },
    { label: '$NEXTJS', value: '+90%', trend: 'up' as const },
    { label: '$NODEJS', value: '+85%', trend: 'up' as const },
    { label: '$ELECTRON', value: '+85%', trend: 'up' as const },
    { label: '$TAILWIND', value: '+90%', trend: 'up' as const },
    { label: '$PYTHON', value: '+78%', trend: 'neutral' as const },
  ];

  return <TickerTape items={skills} speed={40} className={className} />;
}


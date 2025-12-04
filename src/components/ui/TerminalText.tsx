import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  prefix?: string;
}

export function TerminalText({
  text,
  delay = 0,
  speed = 50,
  className = '',
  onComplete,
  cursor = true,
  prefix = '> ',
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, started, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      className={`font-mono ${className}`}
    >
      <span className="text-terminal-green">{prefix}</span>
      {displayedText}
      {cursor && !isComplete && (
        <span className="cursor-blink text-terminal-green">▊</span>
      )}
    </motion.span>
  );
}

interface TerminalLineProps {
  lines: string[];
  startDelay?: number;
  lineDelay?: number;
  speed?: number;
  className?: string;
}

export function TerminalLines({
  lines,
  startDelay = 0,
  lineDelay = 800,
  speed = 30,
  className = '',
}: TerminalLineProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const handleLineComplete = () => {
    if (currentLine < lines.length - 1) {
      setCompletedLines((prev) => [...prev, lines[currentLine]]);
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {completedLines.map((line, index) => (
        <div key={index} className="font-mono text-terminal-text-dim">
          <span className="text-terminal-green">&gt; </span>
          {line}
        </div>
      ))}
      {currentLine < lines.length && (
        <TerminalText
          text={lines[currentLine]}
          delay={currentLine === 0 ? startDelay : 0}
          speed={speed}
          onComplete={handleLineComplete}
          cursor={currentLine === lines.length - 1}
        />
      )}
    </div>
  );
}


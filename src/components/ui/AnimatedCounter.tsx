'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
  dark?: boolean;
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  label,
  decimals = 0,
  duration = 2,
  dark = false,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
        onUpdate: (v) => {
          setDisplayValue(
            decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()
          );
        },
      });
      return controls.stop;
    }
  }, [isInView, value, duration, decimals, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] ${dark ? 'text-white' : 'text-forest-900'}`}>
        {prefix}{displayValue}{suffix}
      </div>
      <div className={`mt-2 text-sm md:text-base max-w-[200px] mx-auto leading-snug ${dark ? 'text-forest-300/80' : 'text-forest-800/70'}`}>
        {label}
      </div>
    </motion.div>
  );
}

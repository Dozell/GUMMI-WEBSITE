'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { icon: '🚀', value: '100%',      label: 'Fan-Made' },
  { icon: '💚', value: '0',         label: 'Team Allocation' },
  { icon: '🔒', value: 'Locked',    label: 'Liquidity' },
  { icon: '💎', value: 'Community', label: 'Everything' },
];

export default function StatsStrip() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div className="bg-[#080f08] border-y border-green-500/15" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-500/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-1.5 px-6 py-7 text-center"
            >
              <span className="text-2xl mb-0.5">{s.icon}</span>
              <div
                className="font-display font-bold text-2xl sm:text-3xl leading-none text-green-400"
                style={{ textShadow: '0 0 20px rgba(74,222,128,0.5)' }}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

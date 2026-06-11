'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  {
    year:  '2006',
    icon:  '🎵',
    text:  'A tiny green gummy bear with a big voice was born on the internet.',
    bg:    'bg-white border-green-200',
  },
  {
    year:  '2007',
    icon:  '▶️',
    text:  'The Gummy Bear Song went viral on YouTube — the world was never the same.',
    bg:    'bg-white border-green-200',
  },
  {
    year:  '2009',
    icon:  '💚',
    text:  '100 million views. Parents worldwide had the song stuck in their heads.',
    bg:    'bg-white border-green-200',
  },
  {
    year:  '2026',
    icon:  '🐻',
    text:  '$GUMMI arrives on Solana. The nostalgia lives on — now on the blockchain.',
    bg:    'bg-green-50 border-green-400',
    now:   true,
  },
];

export default function MemoryLane() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="memory" className="relative bg-[#edf7ed] overflow-hidden">

      {/* Top green fade */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#080f08] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-3"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111]">
            A Trip Down{' '}
            <span className="text-green-600">Memory Lane</span>
          </h2>
          <p className="text-[#444] text-base sm:text-lg mt-3">
            The journey of a gummy legend. 🎵
          </p>
        </motion.div>

        {/* Timeline area — mascot left + cards right */}
        <div className="flex items-end gap-0 mt-12">

          {/* Mascot — desktop only, anchored bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden lg:block shrink-0 self-end -mb-1 -ml-4"
            style={{ width: 180 }}
          >
            <Image
              src="/mascot-main.png"
              alt="Gummibär"
              width={180}
              height={220}
              className="w-full drop-shadow-xl"
            />
          </motion.div>

          {/* Timeline cards */}
          <div className="flex-1 min-w-0">
            {/* Dashed connector — desktop only */}
            <div className="hidden lg:flex items-center gap-0 px-4 mb-2 pointer-events-none">
              {cards.map((_, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className="h-0.5 w-full border-t-2 border-dashed border-green-400/50" />
                  {i < cards.length - 1 && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0 mx-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((c, i) => (
                <motion.div
                  key={c.year}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`relative rounded-2xl border-2 p-5 shadow-sm ${c.bg}`}
                >
                  {c.now && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                      NOW
                    </span>
                  )}
                  {/* Icon circle */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-3 ${c.now ? 'bg-green-200' : 'bg-green-100'}`}>
                    {c.icon}
                  </div>
                  <div className={`font-display font-bold text-2xl mb-2 ${c.now ? 'text-green-700' : 'text-[#111]'}`}>
                    {c.year}
                  </div>
                  <p className={`text-sm leading-relaxed ${c.now ? 'text-green-900 font-semibold' : 'text-[#555]'}`}>
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mobile mascot */}
            <div className="flex justify-center mt-8 lg:hidden">
              <Image
                src="/mascot-main.png"
                alt="Gummibär"
                width={120}
                height={150}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            See the Full Story ➜
          </a>
        </motion.div>
      </div>

      {/* Bottom green fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#050a05] to-transparent pointer-events-none z-10" />
    </section>
  );
}

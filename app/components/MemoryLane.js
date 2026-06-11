'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timeline = [
  { year: '2006', emoji: '🐻', text: 'A tiny green gummy bear with a big voice was born on the internet.' },
  { year: '2007', emoji: '🎵', text: 'The Gummy Bear Song went viral on YouTube — the internet was never the same.' },
  { year: '2009', emoji: '📺', text: '100 million views. Parents worldwide had the song permanently stuck in their heads.' },
  { year: '2012', emoji: '🌍', text: '500 million+ streams. Translated into 27 languages. A true global earworm.' },
  { year: '2025', emoji: '🚀', text: '$GUMMI arrives on Solana. The nostalgia lives on — now on the blockchain.' },
];

const stats = [
  { value: '1.3B+',  label: 'YouTube Views' },
  { value: '#1',     label: 'Viral Song 2007' },
  { value: '27',     label: 'Languages' },
  { value: '∞',      label: 'Nostalgia' },
];

export default function MemoryLane() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="memory" className="relative py-20 sm:py-28 bg-[#080810] overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">A Trip Down</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Memory Lane 🍬
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Before there were meme coins, there was just a little green bear who wanted
            to make the whole world smile.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-pink-500/30 transition-colors"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text-pink">{s.value}</div>
              <div className="text-white/45 text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline + mascot */}
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Timeline */}
          <div className="flex-1 relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/60 via-pink-500/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.6 }}
                className="relative flex gap-5 mb-8 pl-14"
              >
                {/* Node */}
                <div className="absolute left-0 top-0.5 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-sm z-10 shadow-lg shadow-pink-500/30">
                  {item.emoji}
                </div>
                <div>
                  <div className="text-pink-400 font-bold text-sm mb-1">{item.year}</div>
                  <div className="text-white/75 leading-relaxed text-sm sm:text-base">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Singing mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 -m-8 bg-pink-500/8 rounded-full blur-3xl" />
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                <Image
                  src="/mascot-sing.png"
                  alt="Gummibär singing into a microphone"
                  width={380}
                  height={260}
                  className="rounded-2xl w-full max-w-xs sm:max-w-sm"
                />
                <p className="text-center text-white/50 text-sm mt-4 italic">
                  "I'm a Gummy Bear… yes I'm a Gummy Bear!" 🎤
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

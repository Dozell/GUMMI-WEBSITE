'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  { year: '2006', icon: '🎵', text: 'A tiny green gummy bear with a big voice was born on the internet.', highlight: false },
  { year: '2007', icon: '▶️', text: 'The Gummy Bear Song went viral on YouTube — the world was never the same.', highlight: false },
  { year: '2009', icon: '💚', text: '100 million views. Parents worldwide had the song permanently stuck in their heads.', highlight: false },
  { year: '2026', icon: '🐻', text: '$GUMMI arrives on Solana. The nostalgia lives on — now on the blockchain.', highlight: true },
];

export default function MemoryLane() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="memory" className="relative bg-[#eef7ee] overflow-hidden">

      {/* Fade from dark top */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#111d11] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f0d]">
            A Trip Down{' '}
            <span className="text-green-600">Memory Lane</span>
          </h2>
          <p className="text-[#3a5a3a] text-base sm:text-lg mt-3 font-semibold">
            The journey of a gummy legend. 🎵
          </p>
        </motion.div>

        {/* Mascot + timeline layout */}
        <div className="flex items-end gap-0">

          {/* Mascot anchored to bottom-left — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden lg:block shrink-0 self-end -mb-1"
            style={{ width: 200 }}
          >
            <Image
              src="/gummi-mascot-singing.jpg"
              alt="Gummibär singing"
              width={200}
              height={200}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Timeline */}
          <div className="flex-1 min-w-0 lg:pl-4">
            {/* Dashed connector — desktop */}
            <div className="hidden lg:flex items-center mb-3 px-2">
              {cards.map((_, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className="h-0 flex-1 border-t-2 border-dashed border-green-500/40" />
                  {i < cards.length - 1 && (
                    <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((c, i) => (
                <motion.div
                  key={c.year}
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`relative rounded-2xl border-2 p-5 shadow-sm transition-all ${
                    c.highlight
                      ? 'bg-green-50 border-green-500 shadow-green-200'
                      : 'bg-white border-green-200'
                  }`}
                >
                  {c.highlight && (
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                      NOW
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-3 ${c.highlight ? 'bg-green-200' : 'bg-green-100'}`}>
                    {c.icon}
                  </div>
                  <div className={`font-display font-bold text-2xl mb-2 ${c.highlight ? 'text-green-700' : 'text-[#111]'}`}>
                    {c.year}
                  </div>
                  <p className={`text-sm leading-relaxed ${c.highlight ? 'text-green-900 font-semibold' : 'text-[#555]'}`}>
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mobile mascot */}
            <div className="flex justify-center mt-8 lg:hidden">
              <Image
                src="/gummi-mascot-singing.jpg"
                alt="Gummibär singing"
                width={130}
                height={130}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-[#1a3a1a] text-[#1a3a1a] font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#1a3a1a] hover:text-white transition-all"
          >
            See the Full Story ➜
          </a>
        </motion.div>
      </div>

      {/* Fade to dark bottom */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0d150d] to-transparent pointer-events-none z-10" />
    </section>
  );
}

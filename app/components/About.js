'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* Note: gummi-mascot-standing.png was not found in the assets folder.
   Using gummi-mascot-hero.png (standing/pointing pose) as the closest match. */

const tokenDetails = [
  { label: 'Name',     value: 'Gummibär'  },
  { label: 'Ticker',   value: '$GUMMI'    },
  { label: 'Chain',    value: 'Solana'    },
  { label: 'Platform', value: 'Pump.fun'  },
  { label: 'Type',     value: 'Meme Coin' },
  { label: 'Status',   value: '🔜 2026'   },
];

const bullets = [
  { icon: '🍬', title: 'Pure Nostalgia',  desc: 'Born from the sweetest internet memory. Zero utility. 100% vibes.' },
  { icon: '⚡', title: 'Built on Solana', desc: 'Lightning-fast, low fees. Your transactions go zoom zoom.' },
  { icon: '🎵', title: 'For the Culture', desc: 'A love letter to an era when the internet was actually fun.' },
  { icon: '💎', title: 'Community First', desc: 'No insider deals. No roadmap. Just bears having a good time.' },
];

export default function About() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0d150d] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400/6 rounded-full blur-3xl pointer-events-none" />

      {/* Silhouette watermark — tinted green on dark bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none overflow-hidden">
        <Image
          src="/gummi-mascot-silhouette.jpg"
          alt=""
          width={500}
          height={500}
          className="w-80 lg:w-[400px] h-auto object-contain"
          style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(80deg)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Mascot — PNG with alpha, no white box */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center order-1"
          >
            <div className="relative">
              {/* Green glow behind mascot */}
              <div className="absolute inset-0 -m-12 bg-green-400/12 rounded-full blur-3xl animate-pulse-glow" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/gummi-mascot-hero.png"
                  alt="Gummibär"
                  width={400}
                  height={600}
                  className="relative z-10 w-52 sm:w-64 lg:w-80 h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="flex-1 order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">What is this thing?</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-5">
                About{' '}
                <span className="text-green-glow">$GUMMI</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7">
                $GUMMI is a 100% fan-made meme coin on Solana, inspired by the beloved Gummibär
                that captured hearts worldwide on YouTube in the late 2000s. A love letter to nostalgia —
                for everyone who still has that song stuck in their head.
              </p>
            </motion.div>

            {/* Token info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-7"
            >
              {tokenDetails.map((d) => (
                <div
                  key={d.label}
                  className="bg-green-400/5 border border-green-400/15 rounded-xl p-3 hover:border-green-400/35 transition-colors"
                >
                  <div className="text-white/30 text-xs uppercase tracking-wider">{d.label}</div>
                  <div className="text-white font-bold text-sm mt-0.5">{d.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5 shrink-0">{b.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{b.title}</div>
                    <div className="text-white/40 text-xs leading-snug mt-0.5">{b.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  LollipopIcon,
  FlashIcon,
  MusicNote01Icon,
  DiamondIcon
} from '@hugeicons/core-free-icons';

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
  { icon: LollipopIcon, title: 'Pure Nostalgia',  desc: 'Born from the sweetest internet memory. Zero utility. 100% vibes.', color: 'text-green-600' },
  { icon: FlashIcon, title: 'Built on Solana', desc: 'Lightning-fast, low fees. Your transactions go zoom zoom.', color: 'text-yellow-600' },
  { icon: MusicNote01Icon, title: 'For the Culture', desc: 'A love letter to an era when the internet was actually fun.', color: 'text-green-500' },
  { icon: DiamondIcon, title: 'Community First', desc: 'No insider deals. No roadmap. Just bears having a good time.', color: 'text-emerald-600' },
];

export default function About() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400/3 rounded-full blur-3xl pointer-events-none" />

      {/* Silhouette watermark — tinted grey on white bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none overflow-hidden">
        <Image
          src="/gummi-mascot-silhouette.jpg"
          alt=""
          width={500}
          height={500}
          className="w-80 lg:w-[400px] h-auto object-contain"
          style={{ filter: 'invert(0)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Mascot — PNG with alpha, no white box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
            className="flex-1 flex justify-center order-1"
          >
            <div className="relative">
              {/* Green glow behind mascot */}
              <div className="absolute inset-0 -m-12 bg-green-400/8 rounded-full blur-3xl animate-pulse-glow" />
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

          {/* Copy Container */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="flex-1 order-2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
              }}
            >
              <span className="text-green-600 text-xs font-bold uppercase tracking-widest">What is this thing?</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-5">
                About{' '}
                <span className="text-green-600">$GUMMI</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-7">
                $GUMMI is a 100% fan-made meme coin on Solana, inspired by the beloved Gummibär
                that captured hearts worldwide on YouTube in the late 2000s. A love letter to nostalgia —
                for everyone who still has that song stuck in their head.
              </p>
            </motion.div>

            {/* Token info */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-7"
            >
              {tokenDetails.map((d) => (
                <div
                  key={d.label}
                  className="bg-green-50/50 border border-green-100 rounded-xl p-3 hover:border-green-300 hover:bg-green-50 hover:shadow-md hover:shadow-green-500/5 backdrop-blur-sm transition-all"
                >
                  <div className="text-slate-400 text-xs uppercase tracking-wider">{d.label}</div>
                  <div className="text-slate-800 font-bold text-sm mt-0.5">{d.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Bullets */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                  <span className={`shrink-0 mt-0.5 ${b.color}`}>
                    <HugeiconsIcon icon={b.icon} size={20} strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-slate-800 font-bold text-sm">{b.title}</div>
                    <div className="text-slate-500 text-xs leading-snug mt-0.5">{b.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

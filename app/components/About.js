'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tokenDetails = [
  { label: 'Name',     value: 'Gummibär' },
  { label: 'Ticker',   value: '$GUMMI' },
  { label: 'Chain',    value: 'Solana' },
  { label: 'Platform', value: 'Pump.fun' },
  { label: 'Type',     value: 'Meme Coin' },
  { label: 'Status',   value: '🔜 Coming Soon' },
];

const bullets = [
  { icon: '🍬', title: 'Pure Nostalgia',    desc: 'Born from the sweetest internet memory. Zero utility. 100% vibes.' },
  { icon: '⚡', title: 'Built on Solana',   desc: 'Lightning-fast, low fees. Your transactions go zoom zoom.' },
  { icon: '🎵', title: 'For the Culture',   desc: 'A love letter to an era when the internet was actually fun.' },
  { icon: '💎', title: 'Community Driven',  desc: 'No insider deals. No roadmap. Just bears having a good time.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Mascot — flexing */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 -m-10 bg-green-400/10 rounded-full blur-3xl animate-blob" />
              <div className="bg-gradient-to-br from-green-400/10 to-white/5 border border-green-400/20 rounded-3xl p-4">
                <Image
                  src="/mascot-flex.png"
                  alt="Gummibär flexing"
                  width={340}
                  height={400}
                  className="rounded-2xl w-full max-w-[260px] sm:max-w-xs"
                />
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="flex-1 order-2">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">What is this thing?</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-5">
                About <span className="gradient-text">$GUMMI</span>
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-3">
                $GUMMI is a 100% fan-made meme coin on Solana, inspired by the beloved Gummibär
                character that captured hearts worldwide on YouTube in the late 2000s.
              </p>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-7">
                This is not a serious investment. It&apos;s a love letter to nostalgia — for
                everyone who still has that song stuck in their head.
              </p>
            </motion.div>

            {/* Token info grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-7"
            >
              {tokenDetails.map((d) => (
                <div
                  key={d.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-green-400/30 transition-colors"
                >
                  <div className="text-white/35 text-xs uppercase tracking-wider">{d.label}</div>
                  <div className="text-white font-bold text-sm mt-0.5">{d.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Bullet features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-3 items-start">
                  <span className="text-2xl mt-0.5 shrink-0">{b.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{b.title}</div>
                    <div className="text-white/45 text-sm leading-snug">{b.desc}</div>
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

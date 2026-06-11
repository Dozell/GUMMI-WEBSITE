'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BrandLockup from './BrandLockup';

/*
 * TO GO LIVE: Remove `soon: true` from a card and set its href to the real URL.
 * The "X Coming Soon" button in the banner also has a clear comment below.
 */
const socials = [
  { name: 'X / Twitter', handle: '@GummiCoin',     icon: '𝕏',  desc: 'Memes, updates, and bear energy.',  border: 'hover:border-white/30',     bg: 'hover:bg-white/5',      href: '#', soon: true },
  { name: 'Telegram',    handle: 't.me/GummiCoin',  icon: '✈️', desc: 'The main community chat.',          border: 'hover:border-sky-400/30',   bg: 'hover:bg-sky-500/5',    href: '#', soon: true },
  { name: 'Pump.fun',    handle: 'Buy $GUMMI',       icon: '🚀', desc: 'Official launch page.',             border: 'hover:border-green-400/30', bg: 'hover:bg-green-400/5',  href: '#', soon: true },
  { name: 'DexScreener', handle: 'Track $GUMMI',     icon: '📊', desc: 'Watch the chart go.',               border: 'hover:border-green-400/30', bg: 'hover:bg-green-400/5',  href: '#', soon: true },
];

export default function Community() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="community" className="relative py-20 sm:py-28 bg-[#0d150d] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/25 to-transparent" />
      <div className="absolute top-1/3  left-1/4  w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/4 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Header + mascot side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">

          {/* Thumbsup mascot — JPEG white bg in a styled card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 -m-8 bg-green-400/12 rounded-full blur-3xl animate-pulse-glow" />
              {/* White card intentional — thumbsup JPEG has white bg */}
              <div className="relative z-10 bg-white rounded-3xl p-3 shadow-2xl shadow-green-400/20 border-4 border-green-400/30">
                <Image
                  src="/gummi-mascot-thumbsup.jpg"
                  alt="Gummibär thumbs up"
                  width={220}
                  height={260}
                  className="w-40 sm:w-52 h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start mb-3">
              <BrandLockup iconSize={28} logoHeight={26} />
            </div>
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">We Are Everywhere</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
              Join the Gummi Gang 🐻
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
              Be part of the sweetest community in crypto.
              Links are coming soon — the bears are still setting things up. 🍬
            </p>
          </motion.div>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {socials.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {s.soon ? (
                <div className={`relative bg-white/6 border border-white/15 rounded-2xl p-6 text-center transition-all hover:border-green-400/35 hover:bg-green-400/6 hover:shadow-lg hover:shadow-green-400/8 ${s.border} ${s.bg} cursor-not-allowed select-none`}>
                  <span className="absolute top-3 right-3 bg-yellow-400/15 text-yellow-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="text-white font-bold text-sm">{s.name}</div>
                  <div className="text-white/35 text-xs mt-1">{s.handle}</div>
                  <div className="text-white/25 text-xs mt-2 leading-snug">{s.desc}</div>
                </div>
              ) : (
                <a href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`relative block bg-white/4 border border-white/10 rounded-2xl p-6 text-center transition-all ${s.border} ${s.bg}`}>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="text-white font-bold text-sm">{s.name}</div>
                  <div className="text-white/35 text-xs mt-1">{s.handle}</div>
                  <div className="text-white/25 text-xs mt-2 leading-snug">{s.desc}</div>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-green-400/8 border border-green-400/28 rounded-3xl px-7 py-8 shadow-lg shadow-green-400/5"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">Ready to join the party?</h3>
            <p className="text-white/60 text-sm">The sweetest community is forming. Get in before the bear starts dancing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            {/* ← Replace href="#" and remove `disabled` when X account is ready */}
            <button disabled className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white/60 font-bold px-5 py-3 rounded-xl text-sm cursor-not-allowed w-full sm:w-auto">
              𝕏 Follow on X — Coming Soon
            </button>
            <button disabled className="flex items-center justify-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400/60 font-bold px-5 py-3 rounded-xl text-sm cursor-not-allowed w-full sm:w-auto">
              ✈️ Join Telegram — Coming Soon
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

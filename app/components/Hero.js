'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508]"
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none" />

      {/* Ambient colour blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

        {/* ── LEFT: copy ── */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">

          {/* Fan-made badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
              🍬 100% Fan-Made · Solana · Pump.fun
            </span>
          </motion.div>

          {/* Logo as nostalgic title card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mb-3"
          >
            <Image
              src="/logo.jpg"
              alt="Gummibär"
              width={420}
              height={140}
              className="rounded-2xl w-full max-w-xs sm:max-w-sm lg:max-w-md"
              priority
            />
          </motion.div>

          {/* Ticker */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl font-bold gradient-text mb-3 leading-none"
          >
            $GUMMI
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-white/70 text-lg sm:text-xl font-semibold mb-8 max-w-md"
          >
            The sweetest nostalgia meme coin on Solana 🎵
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8"
          >
            <button
              disabled
              className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold px-7 py-4 rounded-full text-base opacity-60 cursor-not-allowed w-full sm:w-auto"
            >
              🛒 Buy on Pump.fun
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#050508] text-[10px] font-black px-2 py-0.5 rounded-full leading-none">
                SOON
              </span>
            </button>
            <a
              href="#about"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-pink-400/60 text-white/80 hover:text-pink-300 font-bold px-7 py-4 rounded-full text-base transition-all hover:bg-pink-500/10 w-full sm:w-auto"
            >
              Learn More ↓
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start"
          >
            {[
              { label: 'Chain',    value: 'Solana' },
              { label: 'Ticker',   value: '$GUMMI' },
              { label: 'Launch',   value: 'Pump.fun' },
              { label: 'Vibe',     value: '🍬 Pure Fun' },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-white/35 text-xs uppercase tracking-widest">{s.label}</div>
                <div className="text-white font-bold text-sm">{s.value}</div>
              </div>
            ))}
          </motion.div>

          {/* ── IN-HERO DISCLAIMER ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-8 flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 max-w-md text-left"
          >
            <span className="text-base mt-0.5 shrink-0">⚠️</span>
            <p className="text-white/45 text-xs leading-relaxed">
              <strong className="text-white/70">Unofficial fan project.</strong> Not affiliated with, endorsed
              by, or connected to the original Gummibär brand, its creators, or rights holders in any way.
              Not financial advice. Meme coins are high risk — only spend what you can afford to lose.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: mascot ── */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Pulsing glow ring behind the bear */}
            <div className="absolute inset-0 rounded-full bg-green-400/15 blur-3xl animate-pulse-glow scale-110" />

            {/* The dancing bear — mix-blend-mode:screen makes the black bg invisible */}
            <div className="animate-bear-bounce relative z-10">
              <Image
                src="/mascot-dance.png"
                alt="Gummibär dancing"
                width={420}
                height={420}
                className="w-64 sm:w-80 lg:w-[420px]"
                style={{ mixBlendMode: 'screen' }}
                priority
              />
            </div>

            {/* Floating emoji stickers */}
            <motion.span
              className="absolute -top-4 -right-4 text-3xl select-none"
              animate={{ rotate: [0, 15, -15, 0], y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              🍬
            </motion.span>
            <motion.span
              className="absolute bottom-8 -left-6 text-2xl select-none"
              animate={{ rotate: [0, -20, 20, 0], y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              🎵
            </motion.span>
            <motion.span
              className="absolute top-1/3 -right-8 text-xl select-none"
              animate={{ y: [0, -12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              ⚡
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-white/25 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-pink-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

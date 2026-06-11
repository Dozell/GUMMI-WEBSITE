'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* Floating emoji accents around the mascot */
const floats = [
  { emoji: '🍬', style: { top: '4%',    right: '2%'  }, cls: 'text-3xl animate-float-rotate' },
  { emoji: '🎵', style: { top: '16%',   right: '-4%' }, cls: 'text-2xl animate-float-y animation-delay-500' },
  { emoji: '⚡', style: { top: '42%',   right: '-5%' }, cls: 'text-xl  animate-float-rotate animation-delay-1000' },
  { emoji: '🎶', style: { bottom:'28%', right: '-3%' }, cls: 'text-2xl animate-float-y animation-delay-1500' },
  { emoji: '🍭', style: { bottom:'10%', right: '6%'  }, cls: 'text-2xl animate-float-rotate animation-delay-2000' },
  { emoji: '⭐', style: { top: '8%',    left: '4%'   }, cls: 'text-xl  animate-float-y animation-delay-2500' },
  { emoji: '🎵', style: { bottom:'42%', left: '2%'   }, cls: 'text-lg  animate-float-rotate animation-delay-1000' },
];

const features = [
  { icon: '⚡', label: '100% Fan-Made',   desc: 'Made by fans, for fans. Not affiliated with the original brand.' },
  { icon: '💚', label: 'Pure Nostalgia',  desc: 'Bringing back memories and good vibes from the golden era.' },
  { icon: '👥', label: 'Community First', desc: 'No insiders. No dev team. Just a community of true believers.' },
  { icon: '🚀', label: 'Built on Solana', desc: 'Lightning fast, low fees. Built for the future of meme culture.' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#0d150d] overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 bg-pattern opacity-60 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-green-400/8  rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/3  w-[500px] h-[500px] bg-green-600/6  rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      {/* ── Two-column grid ───────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 min-h-[calc(100vh-5rem)]">

        {/* ── LEFT: copy ────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 pb-10 lg:pb-16">

          {/* Large logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-6"
          >
            <Image
              src="/gummi-logo-official.png"
              alt="Gummibär"
              width={440}
              height={147}
              className="w-full max-w-[280px] sm:max-w-sm lg:max-w-[400px] h-auto object-contain drop-shadow-[0_0_30px_rgba(74,222,128,0.4)]"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 border border-green-400/35 bg-green-400/8 text-green-300 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">
              🐻 Fan-Made · Solana · Pump.fun
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="font-display font-bold leading-[1.05] mb-4"
          >
            <span className="block text-white   text-5xl sm:text-6xl lg:text-7xl">Gummibär</span>
            <span className="block text-green-glow text-5xl sm:text-6xl lg:text-7xl">Is Back.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-3 max-w-lg font-semibold"
          >
            After 19 years, the internet&apos;s favourite green bear arrives on Solana.
          </motion.p>

          {/* Supporting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-green-400/80 text-sm sm:text-base font-bold mb-8 tracking-wide"
          >
            Pure nostalgia. Pure memes. Pure vibes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8"
          >
            <button
              disabled
              className="relative flex items-center justify-center gap-2 bg-green-500 text-[#0d150d] font-extrabold px-8 py-4 rounded-full text-base cursor-not-allowed w-full sm:w-auto animate-cta-pulse"
            >
              🛒 Buy on Pump.fun
              <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-[#0d150d] text-[9px] font-black px-2 py-0.5 rounded-full leading-none uppercase">
                SOON
              </span>
            </button>
            <a
              href="#community"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-green-400/60 text-white/70 hover:text-green-300 font-bold px-8 py-4 rounded-full text-base transition-all hover:bg-green-400/8 w-full sm:w-auto"
            >
              ✈️ Join the Community
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7"
          >
            {[
              { label: 'CHAIN',  value: '◎ Solana' },
              { label: 'TICKER', value: '$GUMMI' },
              { label: 'LAUNCH', value: '2026',    green: true },
              { label: 'VIBE',   value: '🎵 Pure Fun' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 hover:border-green-400/25 rounded-xl px-4 py-2.5 text-center min-w-[82px] transition-colors"
              >
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-0.5">{s.label}</div>
                <div className={`font-bold text-sm ${s.green ? 'text-green-400' : 'text-white'}`}>{s.value}</div>
              </div>
            ))}
          </motion.div>

          {/* Disclaimer strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-start gap-2 bg-white/4 border border-white/8 rounded-xl px-4 py-3 max-w-lg text-left"
          >
            <span className="text-sm mt-0.5 shrink-0">⚠️</span>
            <p className="text-white/35 text-xs leading-relaxed">
              <strong className="text-white/50">Unofficial fan project.</strong> Not affiliated with, endorsed by, or connected to the original Gummibär brand, creators, or rights holders. Not financial advice.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: mascot ─────────────────────────── */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Outer diffuse glow */}
            <div className="absolute w-80 h-80 lg:w-[520px] lg:h-[520px] bg-green-400/12 rounded-full blur-3xl animate-pulse-glow" />

            {/* Neon ring */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px] rounded-full neon-ring animate-pulse-glow" />

            {/* Hero mascot — PNG with alpha, no blend mode needed */}
            <div className="animate-bear-bounce relative z-10">
              <Image
                src="/gummi-mascot-hero.png"
                alt="Gummibär"
                width={520}
                height={780}
                className="relative z-10 w-64 sm:w-80 lg:w-[480px] h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating emojis */}
            {floats.map((f, i) => (
              <motion.span
                key={i}
                className={`absolute select-none pointer-events-none z-20 ${f.cls}`}
                style={f.style}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4, type: 'spring' }}
              >
                {f.emoji}
              </motion.span>
            ))}

            {/* Head badge — black bg blends on dark site */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-4 -left-4 sm:-bottom-2 sm:-left-8 z-20"
            >
              <Image
                src="/gummi-mascot-head.jpg"
                alt=""
                width={72}
                height={72}
                className="w-14 sm:w-16 h-14 sm:h-16 rounded-full border-2 border-green-400/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Feature strip ─────────────────────────────── */}
      <div className="relative z-10 w-full border-t border-green-500/15 bg-[#111d11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 px-6 py-5"
              >
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-green-400 font-bold text-sm">{f.label}</div>
                  <div className="text-white/40 text-xs leading-relaxed mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

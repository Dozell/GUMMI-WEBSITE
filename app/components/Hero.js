'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* Floating decorative elements around the mascot */
const floats = [
  { emoji: '🐻', style: { top: '-6%',  right: '4%'  }, delay: 0,    cls: 'text-4xl animate-float-rotate' },
  { emoji: '🍬', style: { top: '10%',  right: '-5%' }, delay: 0.6,  cls: 'text-3xl animate-float-y' },
  { emoji: '🎵', style: { top: '2%',   right: '28%' }, delay: 0.3,  cls: 'text-2xl animate-float-rotate animation-delay-1000' },
  { emoji: '🍭', style: { bottom:'14%',right: '-3%' }, delay: 0.9,  cls: 'text-3xl animate-float-y animation-delay-1500' },
  { emoji: '🎶', style: { bottom:'32%',right: '3%'  }, delay: 0.4,  cls: 'text-xl  animate-float-rotate animation-delay-500' },
  { emoji: '🍊', style: { bottom:'8%', right: '22%' }, delay: 1.1,  cls: 'text-2xl animate-float-y animation-delay-2000' },
  { emoji: '⭐', style: { top: '44%',  right: '1%'  }, delay: 0.7,  cls: 'text-lg  animate-float-y animation-delay-1000' },
  { emoji: '🎵', style: { top: '55%',  left: '2%'   }, delay: 1.3,  cls: 'text-xl  animate-float-rotate animation-delay-2500' },
];

const features = [
  { icon: '⚡', label: '100% Fan-Made',      desc: 'Made by fans, for fans. Not affiliated with the original brand.' },
  { icon: '💚', label: 'Pure Nostalgia',      desc: 'Bringing back memories and good vibes from the golden era.' },
  { icon: '👥', label: 'Community Driven',    desc: 'No insiders. No dev team. Just a community of dreamers and believers.' },
  { icon: '🚀', label: 'Built on Solana',     desc: 'Lightning fast, low fees. Built for the future of meme culture.' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#050a05] overflow-hidden"
      style={{ paddingTop: '5rem' }} /* clear fixed navbar + ticker */
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-green-400/8  rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-green-600/6  rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      {/* ── Main grid ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 min-h-[calc(100vh-4.5rem)]">

        {/* ── LEFT: copy ────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 pb-10 lg:pb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 border border-green-400/40 bg-green-400/8 text-green-300 text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">
              🐻 Gummibär is Back
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="font-display font-bold leading-tight mb-5"
          >
            <span className="block text-white text-5xl sm:text-6xl lg:text-7xl">
              Back After
            </span>
            <span className="block text-green-400 text-5xl sm:text-6xl lg:text-7xl">
              19 Years.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Remember the little green bear that made the whole world dance?
            Gummibär is back — now on Solana. Community driven. Fan made.
            No roadmap. Just vibes. 💚
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8"
          >
            <button
              disabled
              className="relative flex items-center justify-center gap-2 bg-green-500 text-[#050a05] font-extrabold px-7 py-4 rounded-full text-base opacity-60 cursor-not-allowed w-full sm:w-auto shadow-lg shadow-green-500/25"
            >
              🛒 Buy $GUMMI
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#050a05] text-[9px] font-black px-2 py-0.5 rounded-full leading-none">
                SOON
              </span>
            </button>
            <a
              href="#community"
              className="flex items-center justify-center gap-2 border border-white/25 hover:border-green-400/60 text-white/75 hover:text-green-300 font-bold px-7 py-4 rounded-full text-base transition-all hover:bg-green-400/8 w-full sm:w-auto"
            >
              ✈️ Join the Community
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {[
              { label: 'CHAIN',  value: '◎ Solana' },
              { label: 'TICKER', value: '$GUMMI' },
              { label: 'LAUNCH', value: '2026',    green: true },
              { label: 'VIBE',   value: '🎵 Pure Fun' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-center min-w-[80px]"
              >
                <div className="text-white/35 text-[9px] uppercase tracking-widest font-bold mb-0.5">{s.label}</div>
                <div className={`font-bold text-sm ${s.green ? 'text-green-400' : 'text-white'}`}>{s.value}</div>
              </div>
            ))}
          </motion.div>

          {/* In-hero disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-7 flex items-start gap-2 bg-white/4 border border-white/8 rounded-xl px-4 py-3 max-w-lg text-left"
          >
            <span className="text-sm mt-0.5 shrink-0">⚠️</span>
            <p className="text-white/38 text-xs leading-relaxed">
              <strong className="text-white/55">Unofficial fan project.</strong> Not affiliated with, endorsed by, or connected to the original Gummibär brand, its creators, or rights holders. Not financial advice.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: mascot ─────────────────────────── */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.28, duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Outer soft glow */}
            <div className="absolute w-80 h-80 lg:w-[460px] lg:h-[460px] bg-green-400/10 rounded-full blur-3xl animate-pulse-glow" />

            {/* Neon ring */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full neon-ring animate-pulse-glow" />

            {/* The dancing bear */}
            <div className="animate-bear-bounce relative z-10">
              <Image
                src="/mascot-dance.png"
                alt="Gummibär dancing"
                width={440}
                height={440}
                className="w-56 sm:w-72 lg:w-[400px] drop-shadow-2xl"
                style={{ mixBlendMode: 'screen' }}
                priority
              />
            </div>

            {/* Floating decorative elements */}
            {floats.map((f, i) => (
              <motion.span
                key={i}
                className={`absolute select-none pointer-events-none z-20 ${f.cls}`}
                style={f.style}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: f.delay + 0.5, duration: 0.5, type: 'spring' }}
              >
                {f.emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Feature strip ─────────────────────────────── */}
      <div className="relative z-10 w-full border-t border-green-500/15 bg-[#080f08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 px-6 py-5"
              >
                <span className="text-2xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-green-400 font-bold text-sm">{f.label}</div>
                  <div className="text-white/45 text-xs leading-relaxed mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

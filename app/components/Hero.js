'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShoppingCart01Icon,
  TelegramIcon,
  AlertCircleIcon
} from '@hugeicons/core-free-icons';

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen justify-between overflow-hidden bg-[#0d150d]"
      style={{
        backgroundImage: "url('/banne- image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '6rem'
      }}
    >
      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-[#0d150d]/55 pointer-events-none" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d150d]/90 via-[#0d150d]/40 to-transparent pointer-events-none" />

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-0 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[calc(100vh-11rem)]">
        
        {/* LEFT Column: Copy & Actions */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left pb-6 lg:pb-12 max-w-xl">

          {/* Heading with highlighted box to match mockup */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display font-black leading-[1.08] mb-6"
          >
            <span className="block text-white text-5xl sm:text-6xl lg:text-7xl font-black">Bringing Nostalgia</span>
            <span className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-3">
              <span className="text-white text-5xl sm:text-6xl lg:text-7xl font-black">to</span>
              <span className="inline-block bg-[#f97316] text-white text-4xl sm:text-5xl lg:text-6xl font-black px-6 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(249,115,22,0.45)]">
                Meme Coins
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-lg font-semibold"
          >
            The internet&apos;s favourite green bear returns after 19 years to shake things up on Solana. Pure nostalgia, 100% community-driven vibes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8"
          >
            <button
              disabled
              className="relative flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#0d150d] font-extrabold px-8 py-4 rounded-full text-base cursor-not-allowed w-full sm:w-auto transition-all hover:scale-[1.02]"
            >
              <HugeiconsIcon icon={ShoppingCart01Icon} size={20} strokeWidth={2.5} />
              Buy $GUMMI
              <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-[#0d150d] text-[9px] font-black px-2 py-0.5 rounded-full leading-none uppercase">
                SOON
              </span>
            </button>
            <a
              href="#community"
              className="flex items-center justify-center gap-2 bg-[#c5ff55] hover:bg-[#b0f038] text-[#0d150d] font-extrabold px-8 py-4 rounded-full text-base transition-all hover:scale-[1.02] w-full sm:w-auto"
            >
              <HugeiconsIcon icon={TelegramIcon} size={20} strokeWidth={2.5} />
              Join Community
            </a>
          </motion.div>

          {/* Disclaimer strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-start gap-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 max-w-lg text-left backdrop-blur-sm"
          >
            <span className="text-yellow-500 mt-0.5 shrink-0">
              <HugeiconsIcon icon={AlertCircleIcon} size={16} strokeWidth={2.5} />
            </span>
            <p className="text-white/40 text-xs leading-relaxed">
              <strong className="text-white/60">Unofficial fan project.</strong> Not affiliated with, endorsed by, or connected to the original Gummibär brand, creators, or rights holders. Not financial advice.
            </p>
          </motion.div>
        </div>

        {/* RIGHT Column: Mascot */}
        <div className="flex-1 flex justify-center items-center lg:items-end w-full max-w-md lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[95%] max-w-[420px]"
          >
            <Image
              src="/gummi-mascot-hero.png"
              alt="Gummibär Mascot"
              width={420}
              height={630}
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(74,222,128,0.25)] animate-bear-bounce"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

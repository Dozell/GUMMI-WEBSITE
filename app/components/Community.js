'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  NewTwitterIcon,
  TelegramIcon
} from '@hugeicons/core-free-icons';
import BrandLockup from './BrandLockup';

const socials = [
  { name: 'X / Twitter', handle: '@gummimeme',     icon: NewTwitterIcon,  desc: 'Memes, updates, and bear energy.',  border: 'border-slate-800', bg: 'bg-white', href: 'https://x.com/gummimeme', soon: false },
  { name: 'Telegram',    handle: 't.me/GummiCoin',  icon: TelegramIcon, desc: 'The main community chat.',          border: 'border-slate-800', bg: 'bg-white', href: '#', soon: false },
  { name: 'Pump.fun',    handle: 'Buy $GUMMI',       icon: null,           desc: 'Official launch page.',             border: 'border-slate-800', bg: 'bg-white', href: '#', soon: false },
  { name: 'DexScreener', handle: 'Track $GUMMI',     icon: null,           desc: 'Watch the chart go.',               border: 'border-slate-800', bg: 'bg-white', href: '#', soon: false },
];

export default function Community() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section 
      id="community" 
      className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />
      <div className="absolute top-1/3  left-1/4  w-64 h-64 bg-green-500/1 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-450/1 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-3 select-none">
              <BrandLockup iconSize={28} logoHeight={26} />
            </div>
            <span className="text-green-600 text-xs font-bold uppercase tracking-widest select-none">We Are Everywhere</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-4">
              Join the Gummi Gang
            </h2>
            <p className="text-slate-655 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Be part of the sweetest community in crypto. Links are coming soon. The bears are still setting things up.
            </p>
          </motion.div>
        </div>

        {/* Social Lobby Cards Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {socials.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              className="w-full"
            >
              {s.soon ? (
                <div className="relative bg-white border-4 border-slate-800 rounded-3xl p-6 text-center select-none cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]">
                  <div className="flex justify-center mb-4">
                    {s.name === 'Pump.fun' ? (
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                          <rect x="25" y="15" width="50" height="70" rx="25" fill="#22c55e" stroke="#1e293b" strokeWidth="5.5" transform="rotate(-30 50 50)" />
                          <circle cx="43" cy="45" r="5.5" fill="#1e293b" />
                          <circle cx="57" cy="45" r="5.5" fill="#1e293b" />
                          <path d="M 42 56 Q 50 64 58 56" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                      </div>
                    ) : s.name === 'DexScreener' ? (
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                          <circle cx="50" cy="50" r="44" fill="#0d150d" stroke="#1E293B" strokeWidth="5.5" />
                          <line x1="25" y1="50" x2="75" y2="50" stroke="#1b2e1b" strokeWidth="2.5" strokeDasharray="2 2" />
                          <line x1="50" y1="25" x2="50" y2="75" stroke="#1b2e1b" strokeWidth="2.5" strokeDasharray="2 2" />
                          <circle cx="48" cy="46" r="21" fill="none" stroke="#22C55E" strokeWidth="6" />
                          <line x1="63" y1="61" x2="78" y2="76" stroke="#22C55E" strokeWidth="7" strokeLinecap="round" />
                          <path d="M 34 50 L 42 42 L 48 54 L 54 36 L 60 44" fill="none" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-slate-400">
                        <HugeiconsIcon icon={s.icon} size={36} strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                  <div className="text-slate-800 font-display font-black text-sm uppercase tracking-wide">{s.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{s.handle}</div>
                  <div className="text-slate-500 text-xs mt-3 leading-relaxed">{s.desc}</div>
                </div>
              ) : (
                <a 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block bg-white border-4 border-slate-800 rounded-3xl p-6 text-center shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex justify-center mb-4">
                    {s.name === 'Pump.fun' ? (
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="25" y="15" width="50" height="70" rx="25" fill="#22c55e" stroke="#1e293b" strokeWidth="5.5" transform="rotate(-30 50 50)" />
                          <circle cx="43" cy="45" r="5.5" fill="#1e293b" />
                          <circle cx="57" cy="45" r="5.5" fill="#1e293b" />
                          <path d="M 42 56 Q 50 64 58 56" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                      </div>
                    ) : s.name === 'DexScreener' ? (
                      <div className="w-10 h-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="44" fill="#0d150d" stroke="#1E293B" strokeWidth="5.5" />
                          <line x1="25" y1="50" x2="75" y2="50" stroke="#1b2e1b" strokeWidth="2.5" strokeDasharray="2 2" />
                          <line x1="50" y1="25" x2="50" y2="75" stroke="#1b2e1b" strokeWidth="2.5" strokeDasharray="2 2" />
                          <circle cx="48" cy="46" r="21" fill="none" stroke="#22C55E" strokeWidth="6" />
                          <line x1="63" y1="61" x2="78" y2="76" stroke="#22C55E" strokeWidth="7" strokeLinecap="round" />
                          <path d="M 34 50 L 42 42 L 48 54 L 54 36 L 60 44" fill="none" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-green-600">
                        <HugeiconsIcon icon={s.icon} size={36} strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                  <div className="text-slate-800 font-display font-black text-sm uppercase tracking-wide">{s.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{s.handle}</div>
                  <div className="text-slate-600 text-xs mt-3 leading-relaxed">{s.desc}</div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Lobby Deck Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-green-500/10 border-4 border-slate-800 rounded-3xl px-7 py-8 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]"
        >
          <div className="text-center sm:text-left select-none">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-800 mb-1 uppercase tracking-wide">Ready to join the party?</h3>
            <p className="text-slate-655 text-sm">The sweetest community is forming. Get in before the bear starts dancing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://x.com/gummimeme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-800 border-2 border-slate-800 text-white hover:bg-slate-900 font-display font-black px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <HugeiconsIcon icon={NewTwitterIcon} size={16} strokeWidth={2.5} />
              Follow on X
            </a>
            <a 
              href="#"
              className="flex items-center justify-center gap-2 bg-[#0088cc] border-2 border-slate-800 text-white hover:bg-[#0077b5] font-display font-black px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <HugeiconsIcon icon={TelegramIcon} size={16} strokeWidth={2.5} />
              Join Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

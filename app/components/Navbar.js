'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TICKER =
  '🐻 GUMMIBÄR IS BACK AFTER 19 YEARS!  •  🍬 100% FAN-MADE  •  ON SOLANA  •  ⚡ PURE NOSTALGIA  •  🎵 COMMUNITY DRIVEN  •  🚀 NO ROADMAP, JUST VIBES  •  ';

const links = [
  { label: 'Home',          href: '#hero' },
  { label: 'Memory Lane',   href: '#memory' },
  { label: 'About',         href: '#about' },
  { label: 'Vibes',         href: '#vibes' },
  { label: 'Meme Creator',  href: '#meme' },
  { label: 'Community',     href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Announcement ticker */}
      <div className="fixed top-0 inset-x-0 z-50 h-8 flex items-center overflow-hidden bg-[#0a180a] border-b border-green-500/20">
        <div className="animate-ticker flex whitespace-nowrap select-none">
          <span className="text-green-300 text-xs font-bold tracking-wide px-6">{TICKER.repeat(3)}</span>
          <span className="text-green-300 text-xs font-bold tracking-wide px-6">{TICKER.repeat(3)}</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-8 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d150d]/96 backdrop-blur-md border-b border-green-500/15 py-2.5'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#hero" className="shrink-0 flex items-center">
            <Image
              src="/gummi-logo-official.png"
              alt="Gummibär"
              width={130}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/55 hover:text-green-400 transition-colors font-semibold text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Buy CTA */}
          <div className="hidden lg:block shrink-0">
            <span className="relative inline-flex items-center gap-2 border border-green-400/45 text-green-300 font-bold px-5 py-2 rounded-full text-sm cursor-not-allowed select-none hover:border-green-400/70 transition-colors">
              🛒 Buy $GUMMI
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#0d150d] text-[9px] font-black px-2 py-0.5 rounded-full leading-none uppercase">
                SOON
              </span>
            </span>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden overflow-hidden bg-[#111d11] border-t border-green-500/15"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 border-b border-white/5 text-white/60 hover:text-green-400 font-semibold transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <span className="mt-4 text-center border border-green-400/40 text-green-300 font-bold px-4 py-3 rounded-xl text-sm cursor-not-allowed">
                  🛒 Buy $GUMMI — Coming Soon
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

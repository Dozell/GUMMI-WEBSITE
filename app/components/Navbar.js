'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Memory Lane', href: '#memory' },
  { label: 'About',       href: '#about' },
  { label: 'Vibes',       href: '#vibes' },
  { label: 'Meme Creator',href: '#meme' },
  { label: 'Community',   href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/95 backdrop-blur-md border-b border-pink-500/20 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#hero" className="shrink-0">
          <Image
            src="/logo.jpg"
            alt="Gummibär"
            width={110}
            height={36}
            className="rounded-lg"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-pink-400 transition-colors font-semibold text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA — disabled until launch */}
        <div className="hidden md:block shrink-0">
          <span className="relative inline-flex items-center gap-2 bg-pink-500/15 border border-pink-500/40 text-pink-300 font-bold px-4 py-2 rounded-full text-sm cursor-not-allowed select-none">
            🛒 Buy $GUMMI
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#050508] text-[10px] font-black px-2 py-0.5 rounded-full leading-none">
              SOON
            </span>
          </span>
        </div>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
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
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0a0a14] border-t border-pink-500/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-white/5 text-white/70 hover:text-pink-400 font-semibold transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <span className="mt-4 text-center bg-pink-500/15 border border-pink-500/40 text-pink-300 font-bold px-4 py-3 rounded-xl text-sm cursor-not-allowed">
                🛒 Buy $GUMMI — Coming Soon
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

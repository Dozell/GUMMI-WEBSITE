'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShoppingCart01Icon,
  Home01Icon,
  HistoryIcon,
  InformationCircleIcon,
  MusicNote01Icon,
  PaintBrush01Icon,
  UserGroupIcon,
  TelegramIcon
} from '@hugeicons/core-free-icons';
import BrandLockup from './BrandLockup';

const TICKER =
  '🐻 GUMMIBÄR IS BACK AFTER 19 YEARS!  •  🍬 100% FAN-MADE  •  ON SOLANA  •  ⚡ PURE NOSTALGIA  •  🎵 COMMUNITY DRIVEN  •  🚀 NO ROADMAP, JUST VIBES  •  ';

const links = [
  { label: 'Home',          href: '#hero',      id: 'hero',       icon: Home01Icon },
  { label: 'Memory Lane',   href: '#memory',    id: 'memory',     icon: HistoryIcon },
  { label: 'About',         href: '#about',     id: 'about',      icon: InformationCircleIcon },
  { label: 'Vibes',         href: '#vibes',     id: 'vibes',      icon: MusicNote01Icon },
  { label: 'Meme Creator',  href: '#meme',      id: 'meme',       icon: PaintBrush01Icon },
  { label: 'Community',     href: '#community', id: 'community',  icon: UserGroupIcon },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [open,           setOpen]           = useState(false);
  const [progress,       setProgress]       = useState(0);
  const [activeSection,  setActiveSection]  = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(to right, #22c55e, #4ade80)',
          boxShadow: '0 0 8px rgba(74,222,128,0.7)',
        }}
      />

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
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Brand lockup */}
          <a href="#hero" className="shrink-0">
            <BrandLockup iconSize={32} logoHeight={36} priority />
          </a>

          {/* Desktop links */}
          <div className={`hidden lg:flex items-center gap-1 rounded-full p-1 backdrop-blur-md transition-colors duration-300 ${
            scrolled
              ? 'bg-slate-100 border border-slate-200'
              : 'bg-white/5 border border-white/10'
          }`}>
            {links.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative flex items-center gap-1.5 font-bold text-xs rounded-full px-4 py-2 transition-colors duration-300 select-none z-10 ${
                    isActive
                      ? 'text-[#0d150d]'
                      : scrolled
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 shadow-[0_0_6px_rgba(34,197,94,0.4)]">
                      <HugeiconsIcon icon={l.icon} size={10} strokeWidth={2.5} />
                    </span>
                  )}
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Right Section: Social & CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Telegram circular button */}
            <a
              href="#community"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                scrolled
                  ? 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/15 hover:border-white/20'
              }`}
              title="Join the Community"
            >
              <HugeiconsIcon icon={TelegramIcon} size={18} strokeWidth={2} />
            </a>

            {/* Buy CTA */}
            <span className={`relative inline-flex items-center gap-2 font-bold px-6 py-2.5 rounded-full text-sm cursor-not-allowed select-none transition-colors shadow-md ${
              scrolled
                ? 'bg-green-600 hover:bg-green-500 text-white'
                : 'bg-white hover:bg-white/90 text-[#0d150d]'
            }`}>
              <HugeiconsIcon icon={ShoppingCart01Icon} size={16} strokeWidth={2.5} />
              Buy $GUMMI
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
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${scrolled ? 'bg-slate-800' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-slate-800' : 'bg-white'} ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${scrolled ? 'bg-slate-800' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
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
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`py-3 border-b border-slate-100 font-semibold transition-colors ${
                      activeSection === l.id ? 'text-green-600 font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
                <span className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-4 py-3 rounded-xl text-sm cursor-not-allowed">
                  <HugeiconsIcon icon={ShoppingCart01Icon} size={16} strokeWidth={2} />
                  Buy $GUMMI — Coming Soon
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

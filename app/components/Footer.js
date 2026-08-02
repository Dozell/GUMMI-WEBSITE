import { HugeiconsIcon } from '@hugeicons/react';
import {
  NewTwitterIcon,
  TelegramIcon,
  RocketIcon,
  BarChartIcon
} from '@hugeicons/core-free-icons';
import BrandLockup from './BrandLockup';

const navLinks = [
  { label: 'Home',          href: '#hero' },
  { label: 'Memory Lane',  href: '#memory' },
  { label: 'About',        href: '#about' },
  { label: 'Vibes',        href: '#vibes' },
  { label: 'Meme Creator', href: '#meme' },
  { label: 'Community',    href: '#community' },
  { label: 'Disclaimer',   href: '#disclaimer' },
];

const socialLinks = [
  { name: 'X / Twitter', href: '#', icon: NewTwitterIcon },
  { name: 'Telegram', href: '#', icon: TelegramIcon },
  { name: 'Pump.fun', href: '#', icon: RocketIcon },
  { name: 'DexScreener', href: '#', icon: BarChartIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-100 shadow-[0_-10px_30px_rgba(34,197,94,0.015)] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <BrandLockup iconSize={32} logoHeight={36} opacity={1} />
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mt-2">
              The internet&apos;s favourite green bear, back after 19 years to shake things up on Solana. 100% community-driven nostalgia.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-green-600 hover:border-green-300 hover:bg-green-50 flex items-center justify-center transition-all hover:scale-105"
                  title={s.name}
                >
                  <HugeiconsIcon icon={s.icon} size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-slate-800 font-bold text-xs uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2.5 text-center md:text-left">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-green-600 text-sm font-semibold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disclaimer & Solana badge */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-slate-800 font-bold text-xs uppercase tracking-widest mb-4">Meme Warning</h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mb-4">
              $GUMMI is a speculative meme coin for entertainment purposes only. It has zero intrinsic value, no roadmap, and no promises. Treat it as vibes, not an investment.
            </p>
            <div className="flex items-center gap-2 bg-green-50 border border-green-100/50 rounded-xl px-3 py-1.5 text-slate-605 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Built on <strong className="text-green-600 font-bold">Solana</strong></span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-xs">
          <p className="max-w-xl leading-relaxed">
            Not affiliated with the original Gummibär brand, creators, or rights holders. © 2026 Gummi Fan Community.
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            <span>© 2026 Gummibär Fan-Made</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

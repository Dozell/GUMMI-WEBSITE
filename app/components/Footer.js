import { HugeiconsIcon } from '@hugeicons/react';
import {
  NewTwitterIcon,
  TelegramIcon
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
  { name: 'X / Twitter', href: 'https://x.com/gummimeme', icon: NewTwitterIcon },
  { name: 'Telegram', href: '#', icon: TelegramIcon },
  { name: 'Pump.fun', href: '#', icon: null },
  { name: 'DexScreener', href: '#', icon: null },
];

export default function Footer() {
  return (
    <footer 
      className="relative bg-[#080d08] border-t-4 border-slate-800 text-slate-400 py-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(34, 197, 94, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="bg-slate-900/60 p-2 rounded-2xl border border-slate-800/80">
              <BrandLockup iconSize={32} logoHeight={36} opacity={1} />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mt-2">
              The internet&apos;s favourite green bear, back after 19 years to shake things up on Solana. 100% community-driven nostalgia.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="w-9 h-9 rounded-xl bg-white border-2 border-slate-800 text-slate-800 hover:bg-green-500 hover:text-slate-950 flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  title={s.name}
                >
                  {s.name === 'Pump.fun' ? (
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="25" y="15" width="50" height="70" rx="25" fill="#22c55e" stroke="currentColor" strokeWidth="6" transform="rotate(-30 50 50)" />
                        <circle cx="43" cy="45" r="5.5" fill="currentColor" />
                        <circle cx="57" cy="45" r="5.5" fill="currentColor" />
                        <path d="M 42 56 Q 50 64 58 56" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : s.name === 'DexScreener' ? (
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="6" />
                        <circle cx="48" cy="46" r="20" fill="none" stroke="#22C55E" strokeWidth="6" />
                        <line x1="62" y1="60" x2="78" y2="76" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 34 50 L 42 42 L 48 54 L 54 36 L 60 44" fill="none" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : (
                    <HugeiconsIcon icon={s.icon} size={16} strokeWidth={2.5} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-white font-display font-black text-xs uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2.5 text-center md:text-left">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-green-400 text-sm font-semibold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disclaimer */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-display font-black text-xs uppercase tracking-widest mb-4">Meme Warning</h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-4">
              $GUMMI is a speculative meme coin for entertainment purposes only. It has zero intrinsic value, no roadmap, and no promises. Treat it as vibes, not an investment.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="h-1 bg-slate-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-xs">
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

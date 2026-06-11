import Image from 'next/image';

const navLinks = [
  { label: 'Memory Lane',  href: '#memory' },
  { label: 'About',        href: '#about' },
  { label: 'Vibes',        href: '#vibes' },
  { label: 'Meme Creator', href: '#meme' },
  { label: 'Community',    href: '#community' },
  { label: 'Disclaimer',   href: '#disclaimer' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080f08] border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/gummi-logo-official.png"
              alt="Gummibär"
              width={120}
              height={40}
              className="h-9 w-auto object-contain opacity-70"
            />
            <p className="text-white/25 text-xs max-w-[200px] text-center md:text-left leading-relaxed">
              The internet&apos;s favourite green bear, back on Solana. 100% fan-made.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/25 hover:text-green-400 text-sm font-semibold transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/12 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/18 text-xs leading-relaxed max-w-xl">
            $GUMMI is a fan-made meme coin. Not affiliated with the original Gummibär brand, creators, or rights holders.
            Not financial advice. For entertainment only.
          </p>
          <div className="flex items-center gap-1.5 text-white/18 text-xs shrink-0">
            <span>Built on</span>
            <span className="text-green-400/60 font-bold">Solana</span>
            <span>· © 2026 Gummi Fan Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

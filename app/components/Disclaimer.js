'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const points = [
  {
    heading: 'Fan-Made Project',
    body: `Gummibär ($GUMMI) is a 100% fan-made, community-driven meme coin created out of nostalgia
    and love for internet culture. It is NOT affiliated with, endorsed by, sponsored by, or connected
    in any way to the original Gummibär brand, its creators, rights holders, the official YouTube
    channel, or any official project associated with the Gummibär intellectual property.`,
  },
  {
    heading: 'Not Financial Advice',
    body: `Nothing on this website constitutes financial, investment, legal, or tax advice. Meme coins
    are extremely high-risk, highly volatile speculative assets. You could lose your entire investment.
    Never invest more than you can afford to lose completely.`,
  },
  {
    heading: 'No Promises',
    body: `We make no guarantees about the future value, utility, or viability of $GUMMI. There is no
    official roadmap, no development team, and no promises of any kind. This is a meme coin — treat
    it as entertainment, not an investment.`,
  },
  {
    heading: 'Do Your Own Research',
    body: `Always do your own research before interacting with any crypto project. Understand what you
    are buying before you buy it. This website is for entertainment and informational purposes only.`,
  },
];

export default function Disclaimer() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="disclaimer" className="relative py-16 sm:py-20 bg-[#080f08]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-red-500/4 border border-red-500/18 rounded-2xl overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-red-500/12 bg-red-500/6">
            <span className="text-xl">⚠️</span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Important Disclaimer
            </h2>
          </div>

          <div className="px-6 py-6 space-y-5">
            {points.map((p, i) => (
              <motion.div
                key={p.heading}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <h3 className="text-white font-bold text-sm mb-1">{p.heading}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="pt-4 border-t border-red-500/12"
            >
              <p className="text-red-400/60 text-xs font-semibold uppercase tracking-wider text-center">
                $GUMMI is a meme coin for entertainment purposes only.
                It has no intrinsic value and no guarantee of any return.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

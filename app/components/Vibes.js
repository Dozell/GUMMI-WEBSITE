'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const phases = [
  {
    num: '01', icon: '🕺', title: 'Launch & Dance',
    desc: 'Deploy on Pump.fun. Tell the world. Dance a lot. That\'s the whole plan.',
    color: 'border-green-400/25 hover:border-green-400/60',
    numColor: 'text-green-400/30 group-hover:text-green-400/70',
  },
  {
    num: '02', icon: '🎵', title: 'Make More Memes',
    desc: 'Post memes. Share vibes. Maybe get on TikTok somehow. Keep the bear dancing.',
    color: 'border-green-400/25 hover:border-green-400/60',
    numColor: 'text-green-400/30 group-hover:text-green-400/70',
  },
  {
    num: '03', icon: '🐻', title: '???',
    desc: 'Nobody knows. The bear is in charge. We just follow wherever it leads.',
    color: 'border-green-400/25 hover:border-green-400/60',
    numColor: 'text-green-400/30 group-hover:text-green-400/70',
  },
  {
    num: '04', icon: '🚀', title: 'To The Moon',
    desc: 'Standard meme coin protocol. Strap in. You know the drill.',
    color: 'border-green-400/40 hover:border-green-400/80 bg-green-400/5',
    numColor: 'text-green-400/50 group-hover:text-green-400',
  },
];

const promises = [
  { icon: '❌', text: 'No whitepaper'       },
  { icon: '❌', text: 'No team allocation'  },
  { icon: '❌', text: 'No investor rounds'  },
  { icon: '❌', text: 'No utility token'    },
  { icon: '✅', text: 'Pure vibes'          },
  { icon: '✅', text: 'Great memes'         },
  { icon: '✅', text: 'Nostalgic fun'       },
  { icon: '✅', text: 'Gummibär energy'     },
];

export default function Vibes() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vibes" className="relative py-20 sm:py-28 bg-[#080f08] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Totally Serious™</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            No Roadmap,<br className="sm:hidden" /> Just Vibes 🎵
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            We don&apos;t have a whitepaper. We don&apos;t have a venture round.
            We have Gummibär and good vibes. That&apos;s the whole thing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Phase cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phases.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group bg-white/4 border rounded-2xl p-6 transition-all cursor-default ${p.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`font-display font-bold text-5xl leading-none transition-colors ${p.numColor}`}>
                    {p.num}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column: mascot + promises */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 flex flex-col gap-6 items-center"
          >
            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/mascot-main.png"
                alt="Gummibär vibing"
                width={280}
                height={300}
                className="w-48 sm:w-56 lg:w-64 drop-shadow-xl"
              />
            </motion.div>

            {/* Promises grid */}
            <div className="w-full bg-white/4 border border-green-400/15 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center">
                Our Promises (Honest Edition)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {promises.map((p) => (
                  <div key={p.text} className="flex items-center gap-2">
                    <span className="text-sm">{p.icon}</span>
                    <span className="text-white/60 text-xs">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 bg-green-400/6 border border-green-400/20 rounded-2xl px-6 py-7 text-center"
        >
          <p className="font-display text-xl sm:text-2xl font-semibold text-green-200 italic">
            &ldquo;Oooh I&apos;m a Gummy Bear… yes I&apos;m a Gummy Bear…
            and I&apos;m apparently on the Solana blockchain now.&rdquo;
          </p>
          <footer className="text-white/30 text-sm mt-3">— Gummibär, probably, 2026</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

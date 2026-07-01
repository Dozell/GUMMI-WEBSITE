'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const phases = [
  { num: '01', icon: '🕺', title: 'Launch & Dance',   desc: 'Deploy on Pump.fun. Tell the world. Dance a lot. That\'s the whole plan.' },
  { num: '02', icon: '🎵', title: 'Make More Memes',  desc: 'Post memes. Share vibes. Maybe get on TikTok. Keep the bear dancing.' },
  { num: '03', icon: '🐻', title: '???',              desc: 'Nobody knows. The bear is in charge. We just follow wherever it leads.' },
  { num: '04', icon: '🚀', title: 'To The Moon',      desc: 'Standard meme coin protocol. Strap in. You know the drill.' },
];

const promises = [
  { icon: '❌', text: 'No whitepaper'      },
  { icon: '❌', text: 'No team allocation' },
  { icon: '❌', text: 'No investor rounds' },
  { icon: '❌', text: 'No utility token'   },
  { icon: '✅', text: 'Pure vibes'         },
  { icon: '✅', text: 'Great memes'        },
  { icon: '✅', text: 'Nostalgic energy'   },
  { icon: '✅', text: 'Gummibär magic'     },
];

export default function Vibes() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vibes" className="relative py-20 sm:py-28 bg-[#111d11] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/3 rounded-full blur-3xl pointer-events-none" />

      {/* Outline watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none">
        <Image
          src="/gummi-mascot-outline.jpg"
          alt=""
          width={400}
          height={400}
          className="w-56 lg:w-72 h-auto object-contain"
          style={{ filter: 'invert(1) sepia(1) saturate(4) hue-rotate(80deg)' }}
        />
      </div>

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
            We have Gummibär. That&apos;s the whole thing.
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
                className="group bg-green-400/5 border border-green-400/15 rounded-2xl p-6 hover:border-green-400/50 hover:bg-green-400/8 hover:shadow-xl hover:shadow-green-400/12 backdrop-blur-sm transition-all cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-bold text-5xl leading-none text-green-400/25 group-hover:text-green-400/60 transition-colors">
                    {p.num}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: skateboard mascot + promises */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 flex flex-col gap-5 items-center"
          >
            {/* Skateboard PNG — has built-in green glow, works on dark bg */}
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 -m-6 bg-green-400/10 rounded-full blur-2xl" />
              <Image
                src="/gummi-mascot-skateboard.png"
                alt="Gummibär on a skateboard"
                width={400}
                height={400}
                className="relative z-10 w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Promises card */}
            <div className="w-full bg-green-400/5 border border-green-400/15 rounded-2xl p-5">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-center">
                Our Promises (Honest Edition)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {promises.map((p) => (
                  <div key={p.text} className="flex items-center gap-2">
                    <span className="text-sm">{p.icon}</span>
                    <span className="text-white/55 text-xs">{p.text}</span>
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
          <p className="text-white/30 text-sm mt-3">— Gummibär, probably, 2026</p>
        </motion.blockquote>
      </div>
    </section>
  );
}

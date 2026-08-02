'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  SmileIcon,
  MusicNote01Icon,
  HelpCircleIcon,
  RocketIcon,
  Cancel01Icon,
  CheckmarkCircle01Icon
} from '@hugeicons/core-free-icons';

const phases = [
  { num: '01', icon: SmileIcon, title: 'Launch & Dance',   desc: 'Deploy on Pump.fun. Tell the world. Dance a lot. That\'s the whole plan.' },
  { num: '02', icon: MusicNote01Icon, title: 'Make More Memes',  desc: 'Post memes. Share vibes. Maybe get on TikTok. Keep the bear dancing.' },
  { num: '03', icon: HelpCircleIcon, title: '???',              desc: 'Nobody knows. The bear is in charge. We just follow wherever it leads.' },
  { num: '04', icon: RocketIcon, title: 'To The Moon',      desc: 'Standard meme coin protocol. Strap in. You know the drill.' },
];

const promises = [
  { icon: Cancel01Icon, text: 'No whitepaper',      color: 'text-red-500' },
  { icon: Cancel01Icon, text: 'No team allocation', color: 'text-red-500' },
  { icon: Cancel01Icon, text: 'No investor rounds', color: 'text-red-500' },
  { icon: Cancel01Icon, text: 'No utility token',   color: 'text-red-500' },
  { icon: CheckmarkCircle01Icon, text: 'Pure vibes',         color: 'text-green-600' },
  { icon: CheckmarkCircle01Icon, text: 'Great memes',        color: 'text-green-600' },
  { icon: CheckmarkCircle01Icon, text: 'Nostalgic energy',   color: 'text-green-600' },
  { icon: CheckmarkCircle01Icon, text: 'Gummibär magic',     color: 'text-green-600' },
];

export default function Vibes() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (    <section id="vibes" className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/1 rounded-full blur-3xl pointer-events-none" />

      {/* Outline watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none">
        <Image
          src="/gummi-mascot-outline.jpg"
          alt=""
          width={400}
          height={400}
          className="w-56 lg:w-72 h-auto object-contain"
          style={{ filter: 'invert(0)' }}
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
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest">Totally Serious™</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-4">
            No Roadmap,<br className="sm:hidden" /> Just Vibes <HugeiconsIcon icon={MusicNote01Icon} size={40} className="inline-block text-green-600 align-middle ml-1" />
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            We don&apos;t have a whitepaper. We don&apos;t have a venture round.
            We have Gummibär. That&apos;s the whole thing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Phase cards */}
          {/* Phase cards */}
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
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {phases.map((p) => (
              <motion.div
                key={p.num}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.95 },
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
                className="group bg-white border border-green-100 rounded-2xl p-6 hover:border-green-300 hover:bg-green-50 hover:shadow-xl hover:shadow-green-500/5 backdrop-blur-sm transition-all cursor-default hover:scale-[1.02] duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-bold text-5xl leading-none text-green-600/15 group-hover:text-green-600/35 transition-colors">
                    {p.num}
                  </span>
                  <span className="text-green-600 shrink-0">
                    <HugeiconsIcon icon={p.icon} size={28} strokeWidth={2} />
                  </span>
                </div>
                <h3 className="text-slate-800 font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: skateboard mascot + promises */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.25 }}
            className="flex-1 flex flex-col gap-5 items-center"
          >
            {/* Skateboard PNG — has built-in green glow, works on dark bg */}
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 -m-6 bg-green-500/5 rounded-full blur-2xl animate-pulse-glow" />
              <Image
                src="/gummi-mascot-skateboard.png"
                alt="Gummibär on a skateboard"
                width={400}
                height={400}
                className="relative z-10 w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Promises card */}
            <div className="w-full bg-white border border-green-100 rounded-2xl p-5 shadow-sm">
              <h3 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-4 text-center">
                Our Promises (Honest Edition)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {promises.map((p) => (
                  <div key={p.text} className="flex items-center gap-2">
                    <span className={`shrink-0 ${p.color}`}>
                      <HugeiconsIcon icon={p.icon} size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-slate-600 text-xs">{p.text}</span>
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
          className="mt-14 bg-green-50/50 border border-green-100 rounded-2xl px-6 py-7 text-center"
        >
          <p className="font-display text-xl sm:text-2xl font-semibold text-green-700 italic">
            &ldquo;Oooh I&apos;m a Gummy Bear… yes I&apos;m a Gummy Bear…
            and I&apos;m apparently on the Solana blockchain now.&rdquo;
          </p>
          <p className="text-slate-400 text-sm mt-3">— Gummibär, probably, 2026</p>
        </motion.blockquote>
      </div>
    </section>
  );
}

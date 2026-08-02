'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  MusicNote01Icon,
  Cancel01Icon,
  CheckmarkCircle01Icon
} from '@hugeicons/core-free-icons';

const STAGES = [
  {
    num: '01',
    title: 'Launch & Dance',
    tagline: 'Spawn Point',
    desc: 'Deploy on Pump.fun, ignite the nostalgia engine, and get the global bear army dancing.',
    loot: ['100% Fair Launch', 'TikTok Dance Challenge', '10,000+ Holders Goal'],
    difficulty: '★☆☆☆☆',
    boss: 'Zero Hype',
    status: 'COMPLETED'
  },
  {
    num: '02',
    title: 'Meme Invasion',
    tagline: 'Level Up',
    desc: 'Flood X and TikTok with pure green energy. Partner with culture makers and keep the music pumping.',
    loot: ['Viral Video Series', 'Community Meme Battles', 'Tier-1 Listing Unlocks'],
    difficulty: '★★☆☆☆',
    boss: 'Algorithm Shadowban',
    status: 'COMPLETED'
  },
  {
    num: '03',
    title: 'Secret Stage',
    tagline: 'Mystery World',
    desc: 'What lies behind the portal? We don\'t do pre-planned utility. The community votes on the next drop.',
    loot: ['Mystery Loot Box', 'NFT Mascot Art Drops', 'Collaborative Soundtracks'],
    difficulty: '★★★☆☆',
    boss: 'Developer Ghosting',
    status: 'COMPLETED'
  },
  {
    num: '04',
    title: 'Meme Domination',
    tagline: 'Final Boss',
    desc: 'Establish Gummibär as the supreme king of nostalgia. Reach the edge of the galaxy.',
    loot: ['Galactic Dance Contest', 'Real Candy Integration', 'Cosmic Valuation'],
    difficulty: '★★★★★',
    boss: 'Fiat System Collapse',
    status: 'COMPLETED'
  }
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
  const [activeStage, setActiveStage] = useState(1); // Default to Stage 2 (In Progress)

  const selectedStage = STAGES[activeStage];

  return (
    <section id="vibes" className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden">
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
          className="text-center mb-12"
        >
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest">Totally Serious™</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-4">
            Interactive Quest Map <HugeiconsIcon icon={MusicNote01Icon} size={40} className="inline-block text-green-600 align-middle ml-1" />
          </h2>
          <p className="text-slate-655 text-base sm:text-lg max-w-xl mx-auto">
            We don&apos;t have a whitepaper or a venture round. We have a stage map and Gummibär. Click the stages below to explore our quests.
          </p>
        </motion.div>

        {/* Stage map timeline buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 relative mb-12 pb-6 border-b-4 border-slate-800"
        >
          {STAGES.map((s, idx) => (
            <div key={s.num} className="flex-1 w-full relative flex flex-col items-center">
              {/* Horizontal connector line (only for non-first items on larger viewports) */}
              {idx > 0 && (
                <div className="hidden sm:block absolute right-1/2 top-7 w-full h-1 bg-slate-800 -z-10" />
              )}
              
              {/* Stage Node button */}
              <button
                onClick={() => setActiveStage(idx)}
                className={`w-14 h-14 rounded-full border-4 border-slate-800 flex items-center justify-center font-display font-black text-lg transition-all relative z-10 focus:outline-none ${
                  activeStage === idx
                    ? 'bg-green-500 text-slate-900 scale-110 shadow-[0_0_12px_rgba(34,197,94,0.4)] translate-y-[-2px]'
                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                }`}
              >
                {s.num}
                
                {/* Floating badge for status */}
                <span className={`absolute -bottom-3 px-1.5 py-0.5 rounded text-[8px] font-black border-2 border-slate-800 uppercase ${
                  s.status === 'COMPLETED' ? 'bg-green-300 text-slate-800' :
                  s.status === 'IN PROGRESS' ? 'bg-yellow-300 text-slate-800' :
                  'bg-slate-200 text-slate-500'
                }`}>
                  {s.status}
                </span>
              </button>
              
              {/* Title */}
              <span className="text-[10px] font-black uppercase text-slate-655 mt-5 tracking-wide text-center">
                {s.title}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Quest Status Board & Sidebar container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Quest details console */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-8 bg-white border-4 border-slate-800 rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 select-none">
                <span className="text-[9px] font-black uppercase bg-green-500/10 text-green-700 px-2 py-0.5 rounded border border-green-300">
                  {selectedStage.tagline}
                </span>
                <span className="text-slate-400 text-[10px] font-bold">STAGE {selectedStage.num}</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStage.num}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <h3 className="font-display font-black text-2xl text-slate-800 mb-4 uppercase tracking-wide">
                    {selectedStage.title}
                  </h3>
                  <p className="text-slate-655 text-sm leading-relaxed mb-6">
                    {selectedStage.desc}
                  </p>

                  {/* Quest Loot / Drops */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 select-none">
                      Quest Drops & Rewards:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedStage.loot.map((l, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 bg-slate-50 border-2 border-slate-800 rounded-xl p-3 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all select-none"
                        >
                          <span className="text-xs font-bold text-slate-800">{l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer details */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-100 flex items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block select-none">DIFFICULTY</span>
                  <span className="text-xs text-yellow-500 font-bold tracking-wider select-none">{selectedStage.difficulty}</span>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-400 block select-none">STAGE BOSS</span>
                  <span className="text-xs text-red-500 font-black uppercase select-none">{selectedStage.boss}</span>
                </div>
              </div>
              
              <span className="px-5 py-2.5 border-2 border-slate-800 bg-green-500 text-slate-900 font-display font-black rounded-xl text-xs uppercase tracking-wider select-none cursor-default shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
                Active Stage
              </span>
            </div>
          </motion.div>

          {/* Right Column: Skateboard mascot card & server rules */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
          >
            {/* Mascot Box */}
            <div className="bg-slate-50 border-4 border-slate-800 rounded-3xl p-5 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] flex flex-col items-center relative overflow-hidden flex-1 justify-center min-h-[160px]">
              <div className="absolute inset-0 bg-green-500/5 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/gummi-mascot-skateboard.png"
                  alt="Skateboard Gummibär"
                  width={150}
                  height={150}
                  className="relative z-10 w-32 h-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Server Game Rules */}
            <div className="bg-white border-4 border-slate-800 rounded-3xl p-5 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
              <h4 className="text-slate-800 font-display font-black text-xs uppercase tracking-wider mb-4 text-center select-none">
                Server Game Rules
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {promises.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 select-none">
                    <span className={`shrink-0 ${p.color}`}>
                      <HugeiconsIcon icon={p.icon} size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-slate-600 text-[10px] font-bold leading-tight">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 bg-green-50/50 border border-green-150 rounded-2xl px-6 py-7 text-center"
        >
          <p className="font-display text-xl sm:text-2xl font-semibold text-green-700 italic">
            &ldquo;Oooh I&apos;m a Gummy Bear… yes I&apos;m a Gummy Bear… and I&apos;m apparently on the Solana blockchain now.&rdquo;
          </p>
          <p className="text-slate-450 text-sm mt-3">— Gummibär, probably, 2026</p>
        </motion.blockquote>
      </div>
    </section>
  );
}

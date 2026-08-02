'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  MusicNote01Icon,
  PlayIcon,
  HeartIcon,
  StarIcon
} from '@hugeicons/core-free-icons';

const levels = [
  {
    id: 1,
    year: '2006',
    lvl: '01',
    title: 'Spawn Area',
    quest: 'A tiny green gummy bear with a big voice spawns on the internet.',
    icon: MusicNote01Icon,
    x: 15,
    y: 35,
    stats: {
      nostalgia: 80,
      soundPower: '99/99',
      viralThreat: '★★★☆☆',
      status: 'UNLOCKED',
    },
  },
  {
    id: 2,
    year: '2007',
    lvl: '02',
    title: 'Viral Outbreak',
    quest: 'The Gummy Bear Song goes viral on YouTube — the world gets infected.',
    icon: PlayIcon,
    x: 40,
    y: 75,
    stats: {
      nostalgia: 90,
      soundPower: '999/999',
      viralThreat: '★★★★★',
      status: 'UNLOCKED',
    },
  },
  {
    id: 3,
    year: '2009',
    lvl: '03',
    title: 'World Domination',
    quest: '100M+ views reached. Parents worldwide permanently have the chorus stuck in their heads.',
    icon: HeartIcon,
    x: 65,
    y: 30,
    stats: {
      nostalgia: 95,
      soundPower: '9999/9999',
      viralThreat: '★★★★★',
      status: 'UNLOCKED',
    },
  },
  {
    id: 4,
    year: '2026',
    lvl: '04',
    title: 'Boss Stage: Solana',
    quest: '$GUMMI lands on the Solana blockchain. Nostalgia meets decentralization.',
    icon: StarIcon,
    x: 90,
    y: 70,
    stats: {
      nostalgia: 100,
      soundPower: 'OVER 9000',
      viralThreat: '★★★★★',
      status: 'ACTIVE BOSS',
    },
  },
];

export default function MemoryLane() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeId, setActiveId] = useState(4);

  const activeLevel = levels.find((l) => l.id === activeId) || levels[3];

  return (
    <section id="memory" className="relative bg-[#eef7ee] overflow-hidden">
      {/* Fade from dark top */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0d150d] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1f0d]">
            A Trip Down <span className="text-green-600">Memory Lane</span>
          </h2>
          <p className="text-[#3a5a3a] text-base sm:text-lg mt-3 font-semibold">
            Choose a level to explore the legend. 🎮
          </p>
        </motion.div>

        {/* Mobile Level Tabs Selector */}
        <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveId(lvl.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold font-display shrink-0 border-2 transition-all ${
                activeId === lvl.id
                  ? 'bg-green-500 border-slate-800 text-slate-900 font-black shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-800'
              }`}
            >
              Lvl {lvl.lvl} ({lvl.year})
            </button>
          ))}
        </div>

        {/* Interactive Level Map & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Level Selector Map */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative bg-white border-4 border-slate-800 rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] overflow-hidden h-[280px] sm:h-[350px] flex items-center justify-center"
          >
            {/* Retro grid pattern */}
            <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none" />

            {/* Winding Path SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 15 35 Q 27.5 70, 40 75 T 65 30 T 90 70"
                fill="none"
                stroke="#bbf7d0"
                strokeWidth="4"
                strokeDasharray="6 8"
              />
            </svg>

            {/* Active Level Token Indicator */}
            <motion.div
              className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-4 border-slate-800 bg-white shadow-md z-30 flex items-center justify-center pointer-events-none"
              animate={{
                left: `${activeLevel.x}%`,
                top: `${activeLevel.y}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 90,
                damping: 15,
              }}
            >
              <Image
                src="/gummi-mascot-singing.jpg"
                alt="Token"
                width={48}
                height={48}
                className="w-full h-full object-contain scale-110 mix-blend-multiply"
              />
            </motion.div>

            {/* Level Nodes */}
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActiveId(lvl.id)}
                className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center transition-all z-20 focus:outline-none"
                style={{
                  left: `${lvl.x}%`,
                  top: `${lvl.y}%`,
                }}
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center border-4 font-display font-black text-sm transition-all ${
                  activeId === lvl.id
                    ? 'bg-green-500 border-slate-800 text-slate-900 scale-110 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]'
                    : 'bg-white border-slate-300 text-slate-400 hover:border-slate-800 hover:text-slate-800'
                }`}>
                  {lvl.lvl}
                </div>
              </button>
            ))}

            {/* Helper retro text at bottom left */}
            <div className="absolute bottom-4 left-6 text-slate-400 font-display font-black text-[10px] uppercase tracking-wider">
              Select Level to Navigate
            </div>
          </motion.div>

          {/* Quest Card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-full"
          >
            <div className="bg-white border-4 border-slate-800 rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="bg-green-100 text-green-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Level {activeLevel.lvl}
                    </span>
                    <h3 className="font-display text-2xl font-black text-slate-800 mt-1">{activeLevel.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-green-50 border-2 border-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <HugeiconsIcon icon={activeLevel.icon} size={22} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Quest */}
                <div className="mb-5">
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Active Quest</div>
                  <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                    &ldquo;{activeLevel.quest}&rdquo;
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                      <span>Nostalgia Level</span>
                      <span>{activeLevel.stats.nostalgia}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 border-2 border-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        key={activeLevel.id}
                        initial={{ width: 0 }}
                        animate={{ width: `${activeLevel.stats.nostalgia}%` }}
                        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        className="h-full bg-green-500 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-slate-450 text-[10px] font-bold uppercase tracking-wider mb-0.5">Sound Power</div>
                      <div className="font-display font-black text-sm text-slate-800">{activeLevel.stats.soundPower}</div>
                    </div>
                    <div>
                      <div className="text-slate-450 text-[10px] font-bold uppercase tracking-wider mb-0.5">Viral Threat</div>
                      <div className="font-display font-black text-sm text-green-600">{activeLevel.stats.viralThreat}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spawn Button */}
              <button className="w-full py-3.5 border-2 border-slate-800 bg-green-500 hover:bg-green-400 text-slate-900 font-display font-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-sm uppercase tracking-wider">
                {activeLevel.id === 4 ? 'Play Game!' : 'Spawn Here'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade to white bottom */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

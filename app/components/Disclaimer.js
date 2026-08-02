'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { AlertCircleIcon } from '@hugeicons/core-free-icons';

const points = [
  {
    heading: 'Fan-Made Project',
    body: `Gummibär ($GUMMI) is a 100% fan-made, community-driven meme coin created out of nostalgia and love for internet culture. It is NOT affiliated with, endorsed by, sponsored by, or connected in any way to the original Gummibär brand, its creators, rights holders, the official YouTube channel, or any official project associated with the Gummibär intellectual property.`,
  },
  {
    heading: 'Not Financial Advice',
    body: `Nothing on this website constitutes financial, investment, legal, or tax advice. Meme coins are extremely high-risk, highly volatile speculative assets. You could lose your entire investment. Never invest more than you can afford to lose completely.`,
  },
  {
    heading: 'No Promises',
    body: `We make no guarantees about the future value, utility, or viability of $GUMMI. There is no official roadmap, no development team, and no promises of any kind. This is a meme coin — treat it as entertainment, not an investment.`,
  },
  {
    heading: 'Do Your Own Research',
    body: `Always do your own research before interacting with any crypto project. Understand what you are buying before you buy it. This website is for entertainment and informational purposes only.`,
  },
];

export default function Disclaimer() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="disclaimer" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* On-Page System Terminal Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          className="bg-red-50/10 border-4 border-slate-800 rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] text-center relative overflow-hidden"
        >
          {/* Subtle grid pattern for the prompt box */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 border-2 border-slate-800 flex items-center justify-center text-red-500 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
              <HugeiconsIcon icon={AlertCircleIcon} size={24} strokeWidth={2.5} />
            </div>
            
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800 uppercase tracking-wide">
              Critical System Notice
            </h3>
            
            <p className="text-slate-655 text-sm max-w-lg leading-relaxed">
              Before proceeding, all users must review the official Gummibär fans community policy and token disclaimer protocol.
            </p>
            
            <button
              onClick={() => setIsOpen(true)}
              className="mt-2 px-6 py-3 border-2 border-slate-800 bg-red-500 hover:bg-red-400 text-white font-display font-black rounded-2xl text-xs uppercase tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Open Disclaimer Protocol
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            
            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl bg-white border-4 border-slate-800 rounded-3xl shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header Bar */}
              <div className="bg-red-500 border-b-4 border-slate-800 px-6 py-4 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="text-white">
                    <HugeiconsIcon icon={AlertCircleIcon} size={18} strokeWidth={2.5} />
                  </span>
                  <span className="font-display font-black text-xs uppercase tracking-wider text-white">
                    SYSTEM ALERT: DISCLAIMER PROTOCOL
                  </span>
                </div>
                
                {/* Windows-style close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg border-2 border-slate-800 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-all shadow-[1px_1px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none"
                >
                  &times;
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-4 border-b-2 border-dashed border-slate-150">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-red-100 border-2 border-slate-800 flex items-center justify-center text-red-500 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
                      <HugeiconsIcon icon={AlertCircleIcon} size={28} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="md:col-span-10 text-center md:text-left">
                    <h4 className="font-display font-black text-sm uppercase text-slate-800 mb-1">Attention Holder</h4>
                    <p className="text-slate-655 text-xs leading-relaxed">
                      Please read the following guidelines regarding the fan-made nature and risk properties of the Gummibär token project.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {points.map((p, i) => (
                    <div key={i} className="bg-slate-50 border-2 border-slate-800 rounded-2xl p-4 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
                      <h5 className="font-display font-black text-xs uppercase text-slate-800 mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {p.heading}
                      </h5>
                      <p className="text-slate-655 text-xs leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Bar */}
              <div className="bg-slate-50 border-t-4 border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-black uppercase text-red-500 tracking-wider">
                  MEME TOKEN PROTOCOL ACTIVE
                </span>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-3 border-2 border-slate-800 bg-red-500 hover:bg-red-400 text-white font-display font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                >
                  I Understand & Accept
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

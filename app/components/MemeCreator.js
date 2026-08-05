'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  PaintBrush01Icon,
  FolderOpenIcon,
  Download01Icon
} from '@hugeicons/core-free-icons';

const CANVAS_SIZE = 600;

const DEFAULT_MASCOTS = [
  { label: 'Hero',      src: '/gummi-mascot-hero.png',      bg: '#0d150d' },
  { label: 'Singing',   src: '/gummi-mascot-singing.jpg',   bg: '#ffffff' },
  { label: 'Skate',     src: '/gummi-mascot-skateboard.png', bg: '#0d150d' },
  { label: 'Thumbs Up', src: '/gummi-mascot-thumbsup.jpg',  bg: '#ffffff' },
];

function drawMeme({ canvas, imageSrc, topText, bottomText, bgColor }) {
  const ctx = canvas.getContext('2d');
  const W = CANVAS_SIZE;
  const H = CANVAS_SIZE;

  const img = new window.Image();
  
  // Set crossOrigin ONLY for external links to prevent CORS issues on same-origin/data-URLs
  if (imageSrc.startsWith('http') || imageSrc.startsWith('//')) {
    img.crossOrigin = 'anonymous';
  }

  img.onload = () => {
    // Clear and draw background inside onload to prevent visual flickering
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = bgColor || '#000000';
    ctx.fillRect(0, 0, W, H);

    // Scale image to fit, centered with some margin for text
    const scale = Math.min(W / img.width, (H * 0.72) / img.height);
    const iw = img.width  * scale;
    const ih = img.height * scale;
    const ix = (W - iw) / 2;
    const iy = (H - ih) / 2 + 16;
    ctx.drawImage(img, ix, iy, iw, ih);

    // Meme text style
    const initialFontSize = Math.round(W / 11);
    
    ctx.textAlign    = 'center';
    ctx.strokeStyle  = '#000000';
    ctx.fillStyle    = '#ffffff';
    ctx.lineJoin     = 'round';

    if (topText.trim()) {
      let text = topText.toUpperCase();
      let fontSize = initialFontSize;
      ctx.font = `900 ${fontSize}px Impact, Arial Black, sans-serif`;
      while (ctx.measureText(text).width > W * 0.9 && fontSize > 20) {
        fontSize -= 2;
        ctx.font = `900 ${fontSize}px Impact, Arial Black, sans-serif`;
      }
      ctx.lineWidth    = Math.round(fontSize / 6.5);
      ctx.textBaseline = 'top';
      ctx.strokeText(text, W / 2, 20);
      ctx.fillText(text,   W / 2, 20);
    }

    if (bottomText.trim()) {
      let text = bottomText.toUpperCase();
      let fontSize = initialFontSize;
      ctx.font = `900 ${fontSize}px Impact, Arial Black, sans-serif`;
      while (ctx.measureText(text).width > W * 0.9 && fontSize > 20) {
        fontSize -= 2;
        ctx.font = `900 ${fontSize}px Impact, Arial Black, sans-serif`;
      }
      ctx.lineWidth    = Math.round(fontSize / 6.5);
      ctx.textBaseline = 'bottom';
      ctx.strokeText(text, W / 2, H - 20);
      ctx.fillText(text,   W / 2, H - 20);
    }

    // Watermark
    ctx.font         = 'bold 14px Nunito, Arial, sans-serif';
    ctx.fillStyle    = 'rgba(22,163,74,0.7)';
    ctx.textBaseline = 'bottom';
    ctx.textAlign    = 'right';
    ctx.fillText('$GUMMI', W - 16, H - 10);
  };

  // Define src AFTER setting onload to prevent race conditions in cached states
  img.src = imageSrc;
}

export default function MemeCreator() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' });

  const [selected,   setSelected]   = useState(DEFAULT_MASCOTS[0]);
  const [uploadedSrc,setUploadedSrc]= useState(null);
  const [topText,    setTopText]    = useState('WHEN YOU BUY $GUMMI');
  const [bottomText, setBottomText] = useState('AND IT MOONS 🚀');

  const activeSrc = uploadedSrc || selected.src;
  const activeBg  = uploadedSrc ? '#ffffff' : selected.bg;

  const redraw = useCallback(() => {
    if (!canvasRef.current) return;
    drawMeme({
      canvas:    canvasRef.current,
      imageSrc:  activeSrc,
      topText,
      bottomText,
      bgColor:   activeBg,
    });
  }, [activeSrc, topText, bottomText, activeBg]);

  useEffect(() => { redraw(); }, [redraw]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setUploadedSrc(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'gummi-meme.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="meme" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest">For the culture</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-4">
            Meme Creator
          </h2>
          <p className="text-slate-655 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Make your own Gummibär meme. Download it. Post it everywhere. You know what to do.
          </p>
        </motion.div>

        {/* Center column grid layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="max-w-2xl mx-auto flex flex-col items-center gap-8"
        >
          {/* Canvas Preview Box */}
          <div className="relative w-full max-w-[480px] bg-white border-4 border-slate-800 rounded-3xl p-3 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="w-full h-auto aspect-square rounded-2xl border-2 border-slate-100"
            />
            <div className="absolute top-6 right-6 bg-slate-800 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide">
              Preview
            </div>
          </div>

          {/* Controls Frame */}
          <div className="w-full bg-slate-50 border-4 border-slate-800 rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] space-y-6">
            {/* Text inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-wider block mb-1">
                  Top Text
                </label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  maxLength={40}
                  placeholder="TOP TEXT..."
                  className="w-full bg-white border-2 border-slate-800 rounded-xl px-3 py-2.5 text-slate-800 text-sm font-bold uppercase focus:outline-none focus:bg-green-50/10 transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-wider block mb-1">
                  Bottom Text
                </label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  maxLength={40}
                  placeholder="BOTTOM TEXT..."
                  className="w-full bg-white border-2 border-slate-800 rounded-xl px-3 py-2.5 text-slate-800 text-sm font-bold uppercase focus:outline-none focus:bg-green-50/10 transition-colors"
                />
              </div>
            </div>

            {/* Mascot and custom upload grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
              <div className="sm:col-span-8">
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-wider block mb-2">
                  1. Choose Template Mascot
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {DEFAULT_MASCOTS.map((m) => (
                    <button
                      key={m.src}
                      onClick={() => { setSelected(m); setUploadedSrc(null); }}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all focus:outline-none p-1 ${
                        !uploadedSrc && selected.src === m.src
                          ? 'border-green-600 bg-green-50 scale-105 shadow-sm'
                          : 'border-slate-200 hover:border-slate-400 bg-white'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.src}
                        alt={m.label}
                        className="w-full h-10 object-contain"
                        style={{ background: m.bg }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-4 flex flex-col justify-end">
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-wider block mb-2">
                  2. Or Custom Image
                </label>
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-400 bg-white rounded-xl px-3 py-2.5 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all text-xs font-bold text-slate-600 h-13 animate-pulse-glow">
                  <HugeiconsIcon icon={FolderOpenIcon} size={16} strokeWidth={2.5} />
                  {uploadedSrc ? 'Loaded' : 'Upload File'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            {uploadedSrc && (
              <div className="flex justify-end -mt-2">
                <button
                  onClick={() => setUploadedSrc(null)}
                  className="text-xs text-slate-500 hover:text-red-500 transition-colors font-bold"
                >
                  ✕ Remove upload, use mascot
                </button>
              </div>
            )}

            {/* Action CTA */}
            <button
              onClick={handleDownload}
              className="w-full py-4 border-2 border-slate-800 bg-green-500 hover:bg-green-400 text-slate-900 font-display font-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-base uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={Download01Icon} size={20} strokeWidth={2.5} />
              Export Meme
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

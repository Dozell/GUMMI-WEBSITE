'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const CANVAS_SIZE = 600;

const DEFAULT_MASCOTS = [
  { label: 'Classic',  src: '/mascot-main.png',  bg: '#ffffff' },
  { label: 'Dancing',  src: '/mascot-dance.png', bg: '#000000' },
  { label: 'Flexing',  src: '/mascot-flex.png',  bg: '#ffffff' },
  { label: 'Singing',  src: '/mascot-sing.png',  bg: '#cccccc' },
];

function drawMeme({ canvas, imageSrc, topText, bottomText, bgColor }) {
  const ctx = canvas.getContext('2d');
  const W = CANVAS_SIZE;
  const H = CANVAS_SIZE;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = bgColor || '#000000';
  ctx.fillRect(0, 0, W, H);

  const img = new window.Image();
  img.crossOrigin = 'anonymous';
  img.src = imageSrc;

  img.onload = () => {
    // Scale image to fit, centred
    const scale = Math.min(W / img.width, (H * 0.72) / img.height);
    const iw = img.width  * scale;
    const ih = img.height * scale;
    const ix = (W - iw) / 2;
    const iy = (H - ih) / 2 + 16;
    ctx.drawImage(img, ix, iy, iw, ih);

    // Meme text style
    const fontSize = Math.round(W / 11);
    ctx.font         = `900 ${fontSize}px Impact, Arial Black, sans-serif`;
    ctx.textAlign    = 'center';
    ctx.strokeStyle  = '#000000';
    ctx.fillStyle    = '#ffffff';
    ctx.lineWidth    = Math.round(fontSize / 7);
    ctx.lineJoin     = 'round';

    if (topText.trim()) {
      ctx.textBaseline = 'top';
      ctx.strokeText(topText.toUpperCase(), W / 2, 14);
      ctx.fillText(topText.toUpperCase(),   W / 2, 14);
    }

    if (bottomText.trim()) {
      ctx.textBaseline = 'bottom';
      ctx.strokeText(bottomText.toUpperCase(), W / 2, H - 14);
      ctx.fillText(bottomText.toUpperCase(),   W / 2, H - 14);
    }

    // Watermark
    ctx.font         = 'bold 13px Nunito, Arial, sans-serif';
    ctx.fillStyle    = 'rgba(255,45,120,0.75)';
    ctx.textBaseline = 'bottom';
    ctx.textAlign    = 'right';
    ctx.fillText('$GUMMI', W - 10, H - 6);
  };
}

export default function MemeCreator() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' });

  const [selected,   setSelected]   = useState(DEFAULT_MASCOTS[0]);
  const [uploadedSrc,setUploadedSrc]= useState(null); // data-URL from user upload
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
    <section id="meme" className="relative py-20 sm:py-28 bg-[#050508] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={sectionRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">For the culture</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Meme Creator 🎨
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Make your own Gummibär meme. Download it. Post it everywhere. You know what to do.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Controls ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="w-full lg:w-80 space-y-5 shrink-0"
          >

            {/* Pick a preset mascot */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
                1. Pick a Mascot
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {DEFAULT_MASCOTS.map((m) => (
                  <button
                    key={m.src}
                    onClick={() => { setSelected(m); setUploadedSrc(null); }}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all focus:outline-none ${
                      !uploadedSrc && selected.src === m.src
                        ? 'border-pink-500 ring-2 ring-pink-500/30'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.src}
                      alt={m.label}
                      className="w-full h-20 object-contain"
                      style={{ background: m.bg }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs text-center py-1">
                      {m.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload your own image */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
                2. Or Upload Your Own
              </h3>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-pink-400/50 hover:bg-pink-500/5 transition-all">
                <span className="text-2xl mb-1">📁</span>
                <span className="text-white/50 text-xs text-center">
                  {uploadedSrc ? '✅ Image loaded' : 'Click to upload image'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {uploadedSrc && (
                <button
                  onClick={() => setUploadedSrc(null)}
                  className="mt-2 w-full text-xs text-white/40 hover:text-pink-400 transition-colors"
                >
                  ✕ Remove upload, use mascot
                </button>
              )}
            </div>

            {/* Text inputs */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">3. Add Text</h3>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                  Top Text
                </label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  maxLength={40}
                  placeholder="Top text…"
                  className="w-full bg-white/8 border border-white/15 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-400 transition-colors placeholder:text-white/25"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                  Bottom Text
                </label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  maxLength={40}
                  placeholder="Bottom text…"
                  className="w-full bg-white/8 border border-white/15 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-400 transition-colors placeholder:text-white/25"
                />
              </div>
            </div>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-base shadow-lg shadow-pink-500/20"
            >
              ⬇️ Download Meme
            </button>
          </motion.div>

          {/* ── Canvas preview ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex-1 flex flex-col items-center gap-4"
          >
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="w-full max-w-md rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
            />
            <p className="text-white/30 text-xs text-center">
              Live preview — changes update instantly
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

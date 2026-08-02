import Image from 'next/image';

/**
 * Unified brand lockup: round mascot icon + Gummibär logo side by side.
 * iconSize  — diameter of the round icon in px  (default 32)
 * logoHeight — rendered height of the logo in px (default 36)
 * opacity   — applied to the whole lockup        (default 1)
 * priority  — passes Next.js priority to both images
 */
export default function BrandLockup({
  iconSize   = 32,
  logoHeight = 36,
  opacity    = 1,
  priority   = false,
  className  = '',
}) {
  return (
    <div
      className={`flex items-center gap-2.5 ${className}`}
      style={{ opacity }}
    >
      {/* Round mascot icon */}
      <div
        className="rounded-full overflow-hidden border border-green-400/40 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.25)]"
        style={{
          width: `var(--icon-size, ${iconSize}px)`,
          height: `var(--icon-size, ${iconSize}px)`,
          minWidth: `var(--icon-size, ${iconSize}px)`
        }}
      >
        <Image
          src="/gummi-mascot-head.jpg"
          alt=""
          width={48}
          height={48}
          className="w-full h-full object-cover"
          priority={priority}
        />
      </div>

      {/* Wordmark logo */}
      <Image
        src="/gummi-logo-official.png"
        alt="Gummibär"
        width={130}
        height={44}
        className="w-auto object-contain"
        style={{ height: `var(--logo-height, ${logoHeight}px)` }}
        priority={priority}
      />
    </div>
  );
}

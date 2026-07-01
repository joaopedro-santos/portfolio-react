export function BackgroundLayers() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* subtle repeating diagonal lines pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
        <defs>
          <pattern id="diag-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 0 L0 40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
          <linearGradient id="softBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-lines)" />
        <g className="mix-blend-overlay">
          <circle cx="20%" cy="12%" r="260" fill="url(#softBlue)" />
          <circle cx="85%" cy="28%" r="140" fill="#0ea5e9" opacity="0.04" />
          <circle cx="10%" cy="78%" r="160" fill="#6366f1" opacity="0.03" />
        </g>
      </svg>

      {/* existing soft blobs and accents kept for layering */}
      <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[95px]" />
      <div className="absolute right-10 top-24 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl" />
      <div className="absolute left-8 bottom-24 h-40 w-40 rounded-full border border-blue-500/10" />

      {/* subtle dotted grid (SVG) */}
      <svg className="absolute right-0 bottom-8 h-60 w-60 opacity-20" aria-hidden>
        <defs>
          <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />
    </div>
  );
}

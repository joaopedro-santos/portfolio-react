export function BackgroundLayers() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.09),_transparent_30%)]" />
      <div className="absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute left-8 top-32 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-400/10 blur-[90px]" />
      <div className="absolute bottom-10 left-1/4 h-56 w-56 rounded-full border border-white/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

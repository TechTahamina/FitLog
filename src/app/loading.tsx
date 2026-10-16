export default function GobalLoading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#c8ff00] shadow-[0_0_20px_rgba(200,255,0,0.35)]" />
        <div className="absolute inset-5 animate-pulse rounded-full bg-[#c8ff00]" />
      </div>

      <div className="text-center">
        <p className="font-bold uppercase tracking-[0.3em] text-white">
          Fit<span className="text-[#c8ff00]">log</span>
        </p>
        <p className="mt-1 text-sm text-[#9CA3AF]">Loading workouts...</p>
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="skeleton-shimmer h-full w-full !bg-[#c8ff00]/60" />
      </div>
    </div>
  );
}


const Bone = ({ className = "" }: { className?: string }) => (
  <div className={`skeleton-shimmer rounded-xl ${className}`} />
);

const WorkoutLoading = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Title */}
      <Bone className="h-9 w-48" />
      <Bone className="h-4 w-80 mt-3" />

     
      <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl bg-[#2f323c] p-8">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <Bone className="h-4 w-20 !bg-[#3a3e4a]" />
            <Bone className="h-9 w-16 mt-3 !bg-[#3a3e4a]" />
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Bone className="h-10 w-44 mt-8 rounded-full" />

      {/* Plan cards */}
      <div className="mt-6 space-y-4 rounded-2xl bg-[#161a20] p-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl bg-[#111111] p-4"
          >
            <Bone className="h-24 w-28 shrink-0" />
            <div className="flex-1 space-y-3">
              <Bone className="h-4 w-56" />
              <Bone className="h-3 w-32" />
              <Bone className="h-3 w-44" />
            </div>
            <Bone className="h-9 w-28 rounded-full" />
            <Bone className="h-9 w-36 rounded-full !bg-[#c8ff00]/20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutLoading;
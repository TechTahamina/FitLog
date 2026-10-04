import { Workout } from "@/types/workout.types";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddTodaysPlanButton from "@/app/Components/WorkoutDetails/AddTodaysPlanButton";
import SaveForLaterButton from "@/app/Components/WorkoutDetails/SaveForLaterButton";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Fetch failed:", res.status, await res.text());
    return [];
  }
  return res.json();
};

const WorkoutDetailPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutData = await getWorkouts();

  const workout = workoutData.find(
    (workout: Workout) => String(workout.id) === String(id),
  );

  if (!workout) notFound();

  return (
    <div className="bg-black min-h-screen p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Image */}
        <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="oswald-font text-white font-extrabold text-3xl md:text-4xl uppercase tracking-tight">
            {workout.name}
          </h1>
          <p className="oswald-font text-[#9CA3AF] text-sm mt-3">
            {workout.description}
          </p>

          {/* Badges */}
          <div className="flex gap-2 mt-4">
            {workout.muscleGroups?.map((group) => (
              <span
                key={group}
                className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Stats table */}
          <div className="mt-6 bg-[#111111] rounded-xl divide-y divide-white/10 overflow-hidden">
            <StatRow label="Equipment" value={workout.equipment} />
            <StatRow label="Difficulty" value={workout.difficulty} />
            <StatRow label="Sets" value={workout.sets} />
            <StatRow label="Reps" value={workout.reps} />
            <StatRow label="Duration" value={`${workout.duration} min`} />
            <StatRow
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />
            <StatRow label="Rating" value={workout.rating} />
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-white font-bold text-lg uppercase tracking-tight mb-3">
              Instructions
            </h2>
            <ol className="space-y-2">
              {workout.instructions?.map((step, index) => (
                <li key={index} className="flex gap-3 text-[#D1D5DB] text-sm">
                  <span className="text-[#6B7280] font-medium">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <AddTodaysPlanButton workout={workout}/>


            <SaveForLaterButton workout={workout}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between items-center px-4 py-3">
    <span className="text-[#9CA3AF] text-xs font-semibold uppercase">
      {label}
    </span>
    <span className="text-white text-sm font-medium">{value}</span>
  </div>
);

export default WorkoutDetailPage;
import { Workout } from "@/types/workout.types";
import WorkoutCard from "./shared/WorkoutCard";

const getWorkouts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Fetch failed:", res.status, await res.text());
    return [];
  }
  return res.json();
};

const Thelibrary = async () => {
  const workoutsData = await getWorkouts();
  return (
    <section className="container mx-auto my-17.5 py-2 px-4 sm:px-0">
      <h1 className="font-bold text-3xl text-white uppercase mx-auto">THE LIBRARY</h1>
      <p className="text-[#9CA3AF] mt-1 mx-auto">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6  ">
        {workoutsData.map((workout :Workout) => {
        return <WorkoutCard key={workout.id} workout={workout} />;
      })}
      </div>
        </section>
  );
};

export default Thelibrary;

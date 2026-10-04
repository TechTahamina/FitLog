import { Workout } from "@/types/workout.types";
import WorkoutCard from "../Components/shared/WorkoutCard";
import Banner from "../Components/Banner";

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
};

const WorkoutPage = async () => {
  const workouts = await getWorkouts();

  return (
    <>
    <Banner/>
      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
};

export default WorkoutPage;

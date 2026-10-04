"use client";
import { WorkoutContext } from "@/Context/WorkoutProvider";
import { useContext } from "react";

const ListedWorkouts = () => {
  const { workouts, saveForLater } = useContext(WorkoutContext);

  console.log(workouts, saveForLater, "workouts", "save for later");
  return <div>
    listed workouts
  </div>;
};

export default ListedWorkouts;

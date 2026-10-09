"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Workout } from "@/types/workout.types";

type WorkoutContextType = {
  workouts: Workout[];
  setWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
  saveForLater: Workout[];
  setSaveForLater: React.Dispatch<React.SetStateAction<Workout[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [saveForLater, setSaveForLater] = useState<Workout[]>([]);

  return (
    <WorkoutContext.Provider
      value={{ workouts, setWorkouts, saveForLater, setSaveForLater }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const usePlan = () => {
  const ctx = useContext(WorkoutContext);
  if (!ctx) {
    throw new Error("usePlan must be used inside WorkoutProvider");
  }
  return ctx;
};

export default WorkoutProvider;
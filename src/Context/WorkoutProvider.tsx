"use client";
import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

export const WorkoutContext = createContext({});
const WorkoutProvider = ({children}: {children: ReactNode}) => {
const [workouts, setWorkouts] = useState([]);
const [saveForLater,setSaveForLater] =useState([]);

const sharedData = {
  workouts,
  setWorkouts,
  saveForLater,
  setSaveForLater
};

  return (<WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>)
};
export const usePlan = () => useContext(WorkoutContext);
export default WorkoutProvider;



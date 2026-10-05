"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { Workout } from "@/types/workout.types";
import { WorkoutContext } from "@/Context/WorkoutProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddTodaysPlanButton = ({workout}: Workout) => {

    const{workouts,
  setWorkouts} = useContext(WorkoutContext);

 
    const handleAddToTodaysPlan = () => {
        console.log("Add to today's plan button clicked", workout);
        setWorkouts([...workouts, workout]);

        toast.success(`${workout.name} has been added to today's plan!`);
    }
  return (
    <button className="flex items-center gap-2 bg-lime-400 text-black font-bold text-sm px-5 py-3 rounded-xl hover:bg-lime-300 transition" onClick={() => handleAddToTodaysPlan()}>
      {/* <CalendarPlus size={16} /> */}
      <FontAwesomeIcon icon={faCalendarPlus} className="w-4 h-4" />
      Add to today&apos;s plan
    </button>
  );
};

export default AddTodaysPlanButton;

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";

import { WorkoutContext } from "@/Context/WorkoutProvider";
import { Workout } from "@/types/workout.types";

const SaveForLaterButton = ({ workout }: { workout: Workout }) => {
  const { saveForLater, setSaveForLater } = useContext(WorkoutContext);

  const handleSaveForLater = () => {
    console.log("save for later button clicked", workout);
    setSaveForLater([...saveForLater, workout]);
    alert(`${workout.name} has been added to save for later!`);
  };

  return (
    <button
      className="flex items-center gap-2 border border-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/5 transition"
      onClick={handleSaveForLater}
    >
      <FontAwesomeIcon icon={faBookmark} className="w-4 h-4" />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;
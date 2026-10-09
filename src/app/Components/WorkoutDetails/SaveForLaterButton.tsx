"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { usePlan } from "@/Context/WorkoutProvider";
import { Workout } from "@/types/workout.types";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: Workout }) => {
  const { saveForLater, setSaveForLater } = usePlan();

  const handleSaveForLater = () => {
    if (saveForLater.some((w) => w.id === workout.id)) {
      toast.error(`${workout.name} is already saved for later!`);
      return;
    }

    setSaveForLater((prev) => [...prev, workout]);
    toast.success(`${workout.name} has been added to save for later!`);
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
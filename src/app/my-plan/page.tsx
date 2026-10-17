"use client";
import { usePlan } from "@/Context/WorkoutProvider";
import { useState } from "react";
import { Workout } from "@/types/workout.types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { toast } from "react-toastify";

const MyPlanWorkouts = () => {
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("rating")
  
  
  const { workouts, setWorkouts, saveForLater, setSaveForLater } = usePlan();
  const router = useRouter();
  const [tab, setTab] = useState<"plan" | "saved">("plan");

  const [completedIds, setCompletedIds] = useState<Set<Workout["id"]>>(
    new Set(),
  );

  const markDone = (workout: Workout) => {
    setCompletedIds((prev) => new Set(prev).add(workout.id));
    toast.success(`${workout.name} marked as done!`);
  };

  const activeList = tab === "plan" ? workouts : saveForLater;

    const sortWorkouts = (workout: Workout[]) => {
      const sortedAllWorkouts = [ ...workout]
      if (sortBy === "calories"){
        sortedAllWorkouts.sort((a,b) => b.caloriesBurned - a.caloriesBurned);
      }

      else if (sortBy === "duration"){
        sortedAllWorkouts.sort((a,b) => b.duration - a.duration);
      }
      else if (sortBy === "rating"){
        sortedAllWorkouts.sort((a,b) => b.rating - a.rating);
      }
      return sortedAllWorkouts;
    }
    const sortedWorkouts = sortWorkouts(workouts)
    const sortedSaveForLater = sortWorkouts(saveForLater)
    console.log(sortedWorkouts, "sortedWorkouts");
    console.log(sortedSaveForLater, "sortedSaveForLater");

  const exercisesCount = activeList.length;
  const totalMinutes = activeList.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = activeList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const renderDoneButton = (workout: Workout) => {
    const isDone = completedIds.has(workout.id);

  

    return (
      <button
        disabled={isDone}
        onClick={() => markDone(workout)}
        className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold sm:flex-none ${
          isDone
            ? "cursor-not-allowed bg-[#CCFF00]/30 text-black/60"
            : "bg-[#CCFF00] text-black hover:brightness-95"
        }`}
      >
        <Check size={14} />
        {isDone ? "Done" : "Mark as Done"}
      </button>
    );
  };

  return (
    <div className="container mx-auto py-5">
      <h2 className="mx-5 py-2 text-left text-3xl font-bold capitalize oswald-font">
        My Plan
      </h2>
      <p className="mx-5 text-left text-md font-normal text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      {/* My-Plan-metrics div start */}
      <div className="rounded-xl bg-[#2f323b] container ml-3 mx-auto p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div className="border-r border-[#515358] mx-2">
          <p className="text-left font-normal text-base mx-2 text-[#8A92A0]">
            Exercises
          </p>
          <p className="mx-2 text-4xl font-bold text-[#CCFF00] ">
            {exercisesCount}
          </p>
        </div>
        <div className="border-r border-[#515358] mx-2">
          <p className="text-left font-normal text-base  mx-2 text-[#8A92A0]">
            Minutes
          </p>
          <p className="mx-2 text-4xl font-bold">{totalMinutes}</p>
        </div>
        <div className="">
          <p className="text-left font-normal text-base  mx-2 text-[#8A92A0]">
            Calories
          </p>
          <p className="mx-2 text-4xl font-bold">{totalCalories}</p>
        </div>
      </div>
      {/* My-Plan-metrics div end */}

      {/* tab and sorting start */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        {/* tab start */}
        <div
          role="tablist"
          className="tabs tabs-box my-5 mx-2 rounded-2xl w-fit"
        > 
          <button
            role="tab"
            className={`tab ${tab === "plan" ? "tab-active" : ""} rounded-2xl`}
            onClick={() => setTab("plan")}
          >
            Today&apos;s Plan
          </button>
          <button
            role="tab"
            className={`tab ${tab === "saved" ? "tab-active" : ""} rounded-2xl`}
            onClick={() => setTab("saved")}
          >
            Saved
          </button>
        </div>
        {/* tab end */}
        {/* sorting start */}
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm font-semibold text-[#8A92A0] whitespace-nowrap shrink-0">Sort  By</p>
          <select value={sortBy} onChange={(e) =>setSortBy(e.target.value as "duration" | "calories" | "rating")} defaultValue="Duration" className="select rounded-2xl bg-[#2f323b] text-sm text-white border border-[#4c515f] ">
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating </option>
          </select>
        </div>

        {/* sorting end */}
      </div>
      <div className="mt-4 mx-2 p-4 bg-[#2f323b]  border border-dashed border-[#4c515f]  rounded-2xl">
        {tab === "plan" ? (
          <div className="flex flex-col gap-2">
            {sortedWorkouts.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 p-20">
                <p className="oswald-font text-center text-white font-bold text-xl">
                  NOTHING HERE YET
                </p>
                <p className="oswald-font text-center text-sm text-[#8A92A0] font-normal">
                  Browse the library and add a lift to get today moving.
                </p>
                <button
                  onClick={() => router.push("/workouts")}
                  className=" text-sm rounded-full  text-black bg-[#CCFF00] p-2 font-semibold"
                >
                  Go to Workouts
                </button>
              </div>
            ) : (
              sortedWorkouts.map((workout: Workout) => {
                const handleRemove = () =>
                  setWorkouts((prev: Workout[]) =>
                    prev.filter((w) => w.id !== workout.id),
                  );

                return (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#12141a] px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-5"
                  >
                    {/* mobile */}
                    <div className="flex min-w-0 items-center gap-3 sm:flex-1 sm:gap-6">
                      {/* Image */}
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-25 sm:w-28">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          sizes="(max-width: 640px) 96px, 112px"
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <h3 className="oswald-font truncate text-sm font-bold uppercase text-white">
                          {workout.name}
                        </h3>
                        <p className="truncate text-xs font-semibold text-gray-400">
                          {workout.equipment}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-[#CCFF00]" />
                            {workout.duration} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame size={12} className="text-[#CCFF00]" />
                            {workout.caloriesBurned} kcal
                          </span>
                          <span className="flex items-center gap-1">
                            <Star size={12} className="text-[#CCFF00]" />
                            {workout.rating}
                          </span>
                        </div>
                      </div>

                      
                      <button
                        aria-label="Remove"
                        className="self-start text-gray-500 hover:text-white sm:hidden"
                        onClick={handleRemove}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        onClick={() => router.push(`/workouts/${workout.id}`)}
                        className="flex-1 rounded-full border border-white/20 px-4 py-2 text-xs text-white hover:bg-white/5 sm:flex-none"
                      >
                        View Details
                      </button>

                      {renderDoneButton(workout)}

                      {/* Remove: desktop  */}
                      <button
                        aria-label="Remove"
                        className="hidden text-gray-500 hover:text-white sm:block"
                        onClick={handleRemove}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {sortedSaveForLater.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 p-20">
                <p className="oswald-font text-center text-white font-bold text-xl">
                  NOTHING HERE YET
                </p>
                <p className="oswald-font text-center text-sm  text-[#8A92A0] font-normal">
                  Browse the library and add a lift to get today moving.
                </p>
                <button
                  onClick={() => router.push("/workouts")}
                  className=" text-sm rounded-full  text-black bg-[#CCFF00] p-2 font-semibold"
                >
                  Go to Workouts
                </button>
              </div>
            ) : (
              sortedSaveForLater.map((workout: Workout) => {
                const handleRemove = () =>
                  setSaveForLater((prev: Workout[]) =>
                    prev.filter((w) => w.id !== workout.id),
                  );

                return (
                  <div
                    key={workout.id}
                    className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#12141a] px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-5"
                  >
                    {/* mobile) */}
                    <div className="flex items-center gap-3 sm:flex-1 sm:gap-6 min-w-0">
                      {/* Image */}
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-25 sm:w-28">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          sizes="(max-width: 640px) 80px, 112px"
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <h3 className="oswald-font truncate text-sm font-bold uppercase text-white">
                          {workout.name}
                        </h3>
                        <p className="truncate text-xs font-semibold text-gray-400">
                          {workout.equipment}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-[#CCFF00]" />
                            {workout.duration} min
                          </span>
                          <span className="flex items-center gap-1">
                            <Flame size={12} className="text-[#CCFF00]" />
                            {workout.caloriesBurned} kcal
                          </span>
                          <span className="flex items-center gap-1">
                            <Star size={12} className="text-[#CCFF00]" />
                            {workout.rating}
                          </span>
                        </div>
                      </div>

                      {/* Remove on mobile  */}
                      <button
                        aria-label="Remove"
                        className="self-start text-gray-500 hover:text-white sm:hidden"
                        onClick={handleRemove}
                      >
                        <X size={16} />
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        onClick={() => router.push(`/workouts/${workout.id}`)}
                        className="flex-1 rounded-full border border-white/20 px-4 py-2 text-xs text-white hover:bg-white/5 sm:flex-none"
                      >
                        View Details
                      </button>

                      {renderDoneButton(workout)}

                      {/*  desktop */}
                      <button
                        aria-label="Remove"
                        className="hidden text-gray-500 hover:text-white sm:block"
                        onClick={handleRemove}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanWorkouts;

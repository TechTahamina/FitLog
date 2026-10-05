"use client";
import { usePlan } from "@/Context/WorkoutProvider";



const MyPlanWorkouts = () => {
  const { workouts } = usePlan();

  console.log(workouts);
 const exercisesCount = workouts.length;
 const totalMinutes = workouts.reduce((total, workout) => total + workout.duration, 0);
 const totalCalories = workouts.reduce((total, workout) => total + workout.caloriesBurned, 0);

  return (
    <div className="container mx-auto py-5">
      <h2 className="mx-5 py-2 text-left text-3xl font-bold capitalize oswald-font">My Plan</h2>
      <p className="mx-5 text-left text-md font-normal text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
        </p>

      <div className="rounded-xl bg-[#2f323b] container ml-3 mx-auto pt-8 p-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        
        <div  className="border-r border-[#515358] mx-2">
          <p className="text-left font-normal text-base mx-2 text-[#8A92A0]">Exercises</p>
          <p className="mx-2 text-4xl font-bold text-[#CCFF00] ">{exercisesCount}</p>
        </div>
        <div className="border-r border-[#515358] mx-2">
          <p className="text-left font-normal text-base  mx-2 text-[#8A92A0]">Minutes</p>
          <p className="mx-2 text-4xl font-bold">{totalMinutes}</p>
        </div>
        <div className="">
          <p className="text-left font-normal text-base  mx-2 text-[#8A92A0]">Calories</p>
          <p className="mx-2 text-4xl font-bold">{totalCalories}</p>
        </div>
       
      </div>


    </div>
  );
};

export default MyPlanWorkouts;

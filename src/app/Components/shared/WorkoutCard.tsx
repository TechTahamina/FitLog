import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import { Workout } from "@/types/workout.types";


const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
        <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5">
      {/* Image */}
      <div className="relative h-120 w-full">
        <Image src={workout.image}
          alt={workout.name} fill
          className="w-full h-full object-cover"/>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Badges */}
        <div className="flex gap-2 mb-3">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-white font-extrabold text-xl uppercase tracking-tight">
          {workout.name}
        </h3>
        <p className="text-[#9CA3AF] text-sm mt-1">{workout.equipment}</p>

        {/* Divider */}
        <hr className="border-white/10 my-3" />

        {/* Stats row */}
        <div className="flex items-center gap-5 text-[#9CA3AF] text-sm">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame size={16} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default WorkoutCard;

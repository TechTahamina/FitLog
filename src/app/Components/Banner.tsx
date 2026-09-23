import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-1 bg-[#393c42] p-10 m-3 rounded-lg">
      {/* text */}
      <div className=" ">
        <h6 className="font-medium tracking-widest text-[11px] text-[#C2F800] text-left">WORKOUT LIBRARY</h6>
        <h1 className="text-6xl font-bold text-left">
          TRAIN WITH INTENT. LOG <br /> EVERY SET.
        </h1>
        <p className="text-left mt-4 ">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="bg-[#C2F800] text-black text-xs font-bold px-4 py-2 rounded-lg mt-4">
        BROWSE WORKOUTS
        </button>
      </div>
      {/* img  */}
      <div>
        <Image src={bannerImg} alt="banner"/>
      </div>
    </div>
  );
};

export default Banner;

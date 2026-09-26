import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="lg:container mx-4 sm:mx-6 lg:mx-auto my-10 flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#393c42] px-8 lg:px-26 py-8 lg:py-10 rounded-lg lg:min-h-120 lg:max-w-380">
      {/* text */}
      <div className=" ">
        <h6 className="font-medium tracking-widest text-[11px] text-[#C2F800] text-center lg:text-left">
          WORKOUT LIBRARY
        </h6>
        <h1 className="text-6xl font-bold text-center lg:text-left ">
          TRAIN WITH INTENT. LOG <br /> EVERY SET.
        </h1>
        <p className="text-center lg:text-left text-[#9CA3AF] mt-4 ">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
          <br /> into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="flex items-center lg:items-start justify-center lg:justify-start ">
          <button className="bg-[#C2F800] text-black text-xs font-bold px-4 py-2 rounded-lg mt-4">
          BROWSE WORKOUTS
        </button>
        </div>
      </div>
      {/* img  */}
      <div className="pt-6">
        <Image src={bannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;

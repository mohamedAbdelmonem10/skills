import React from "react";
import img from "./../../assets/1.jpeg";

export default function Home() {
  return (
    <>
      <div className="md:flex md:w-[100%] flex-wrap my-10  justify-center container mx-auto">
        <div className="flex flex-col justify-center gap-10 md:w-[45%]  px-8 mx-2 bg-linear-to-bl from-[#71A9BA] to-[#334C54] rounded-lg">
          <p className="text-2xl text-center py-5">
            Learn new skills from experts, and share your passion with the
            world! Whether you're looking to grow professionally or explore new
            hobbies, SkillSwap is your ultimate platform for knowledge and
            collaboration.
          </p>
          <div className="text-center pb-1">
            <button className="px-20 py-1 cursor-pointer bg-white text-[#5CBCB4] text-xl rounded-lg">
              Get Start
            </button>
          </div>
        </div>
        <div className="md:w-[45%] px-5 ">
          <img className="w-[80%] ml-4 mt-5" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

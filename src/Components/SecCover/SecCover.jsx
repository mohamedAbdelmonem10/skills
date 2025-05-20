import React from "react";
import img from "./../../assets/1.jpeg";
import { Link } from "react-router-dom";

export default function SecCover() {
  return (
    <div>
      <div className="md:flex md:w-[100%] flex-wrap   justify-center container mx-auto">
        <div className="flex flex-col justify-center mt-10 gap-10 md:w-[45%] ml-5 px-8 mx-2 bg-linear-to-bl from-[#71A9BA] to-[#334C54] rounded-lg">
          <p className="text-2xl text-center py-5">
            Learn new skills from experts, and share your passion with the
            world! Whether you're looking to grow professionally or explore new
            hobbies, SkillSwap is your ultimate platform for knowledge and
            collaboration.
          </p>
          <Link to="/home" className="text-center pb-1">
            <button className="px-20 py-1 cursor-pointer bg-white text-[#5CBCB4] text-xl rounded-lg">
              Get Start
            </button>
          </Link>
        </div>
        <div className="md:w-[45%] px-5 mt-10">
          <img className="w-[80%] ml-4 mt-5" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

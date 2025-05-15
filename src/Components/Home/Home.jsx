import React from "react";
import img from "./../../assets/1.jpeg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="md:flex md:w-[100%] flex-wrap   justify-center container mx-auto">
          <div className="flex flex-col justify-center mt-10 gap-10 md:w-[45%] ml-5 px-8 mx-2 bg-linear-to-bl from-[#71A9BA] to-[#334C54] rounded-lg">
            <p className="text-2xl text-center py-5">
              Learn new skills from experts, and share your passion with the
              world! Whether you're looking to grow professionally or explore
              new hobbies, SkillSwap is your ultimate platform for knowledge and
              collaboration.
            </p>
            <div className="text-center pb-1">
              <button className="px-20 py-1 cursor-pointer bg-white text-[#5CBCB4] text-xl rounded-lg">
                Get Start
              </button>
            </div>
          </div>
          <div className="md:w-[45%] px-5 mt-10">
            <img className="w-[80%] ml-4 mt-5" src={img} alt="" />
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#71A9BA] via-[#7C98A0] to-[#55676D] absolute top-[70px] left-0">
          <div className="flex flex-col items-center gap-10 p-1  pb-28">
            <Link className="pt-4" to="/profile">
              <img src={profile} className="h-14 w-14 rounded-full " alt="" />
            </Link>
            <div className="text-center text-white font-bold ">
              <i className="fa-regular fa-comments fa-xl"></i>
              <p>Chats</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center text-white font-bold ">
              <div className="border-2 border-white rounded-full w-7 h-7 p-2 flex justify-center items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
              <p>Add Post</p>
            </div>
            <div className="text-center text-white font-bold ">
              <i className="fa-regular fa-comment"></i>
              <p>Posts</p>
            </div>
            <div className="text-center text-white font-bold ">
            <i className="fa-solid fa-sliders"></i>
              <p>Setting</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

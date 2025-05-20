import React from "react";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import img from "../../assets/person-3.jpg";
import img2 from "../../assets/Frame.png";

export default function Home() {
  return (
    <>
      <div className="w-[85%] mx-auto mb-5">
          <div className="me-1">
        <div className="container ms-auto bg-[#71A9BA] p-3 rounded-xl shadow-[0_4px_1px_1px_rgba(0,0,0,0.5)] mt-5">
          <div className="md:flex items-center">
            <div className="md:w-[20%] ps-5">
              <img
                src={img}
                className="h-[50px] w-[50px] rounded-full "
                alt=""
              />
            </div>
            <div className="md:w-[80%] ">
              <input
                type="search"
                className="rounded-full w-full"
                placeholder="What's your mind ,Mohamed"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="bg-white rounded-full p-2 me-20">
              <i className="fa-regular fa-face-smile px-2"></i> Feeling/Activity
            </div>
            <div className="bg-white rounded-full p-2">
              <i className="fa-regular fa-image px-2"></i> Photo/Video
            </div>
          </div>
        </div>
      </div>

      <div className="container ms-auto bg-[#71A9BA] p-3 rounded-xl mt-5 relative">
        <div className="md:flex">
          <div className="md:w-[10%] ">
            <img src={img} className="h-[50px] w-[50px] rounded-full " alt="" />
          </div>
          <div className="md:w-[50%] md:me-28">
            <h2 className="text-[#000] font-semiboldbold text-xl">
              Mohamed Tarek
            </h2>
            <p className="text-[#000] font-semibold text-sm mb-5">10 minute</p>
            <p>
              Learn new skills from experts, and share your passion with the
              world! Whether you're looking to grow professionally or explore
              new hobbies, SkillSwap is your ultimate platform for knowledge and
              collaboration.
            </p>
            <div className="flex gap-12 items-center mt-16">
              <div className="relative">
                <i className="fa-solid fa-heart fa-xl text-blue-800"></i>
                <span className="absolute top-[-25px] right-[-25px] text-blue-800">
                  999
                </span>
              </div>
              <div className="relative">
                <i className="fa-solid fa-message fa-xl text-blue-800"></i>
                <span className="absolute top-[-25px] right-[-25px] text-blue-800">
                  320
                </span>
              </div>
              <div>
                <i className="fa-solid fa-paper-plane fa-xl text-blue-800"></i>
              </div>
            </div>
          </div>
          <div className="md:w-[25%]">
            <img src={img2} className="rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute top-2 right-5">
          <i className="fa-solid fa-ellipsis-vertical fa-xl cursor-pointer"></i>
        </div>
      </div>
      <div className="container ms-auto bg-[#71A9BA] p-3 rounded-xl mt-5 relative">
        <div className="md:flex">
          <div className="md:w-[10%] ">
            <img src={img} className="h-[50px] w-[50px] rounded-full " alt="" />
          </div>
          <div className="md:w-[50%] md:me-28">
            <h2 className="text-[#000] font-semiboldbold text-xl">
              Mohamed Tarek
            </h2>
            <p className="text-[#000] font-semibold text-sm mb-5">10 minute</p>
            <p>
              Learn new skills from experts, and share your passion with the
              world! Whether you're looking to grow professionally or explore
              new hobbies, SkillSwap is your ultimate platform for knowledge and
              collaboration.
            </p>
            <div className="flex gap-12 items-center mt-16">
              <div className="relative">
                <i className="fa-solid fa-heart fa-xl text-blue-800"></i>
                <span className="absolute top-[-25px] right-[-25px] text-blue-800">
                  999
                </span>
              </div>
              <div className="relative">
                <i className="fa-solid fa-message fa-xl text-blue-800"></i>
                <span className="absolute top-[-25px] right-[-25px] text-blue-800">
                  320
                </span>
              </div>
              <div>
                <i className="fa-solid fa-paper-plane fa-xl text-blue-800"></i>
              </div>
            </div>
          </div>
          <div className="md:w-[25%]">
            <img src={img2} className="rounded-xl" alt="" />
          </div>
        </div>
        <div className="absolute top-2 right-5">
          <i className="fa-solid fa-ellipsis-vertical fa-xl cursor-pointer"></i>
        </div>
      </div>
      </div>

      <div className="">
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

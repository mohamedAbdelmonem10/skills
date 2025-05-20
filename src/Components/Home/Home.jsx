import React from "react";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
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

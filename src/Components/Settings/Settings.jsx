import React from "react";
import profile from "../../assets/profile.svg";
import person from "../../assets/person-1.jpg";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <>
      <div className="container">
        <div className="md:flex md:w-[100%] flex-wrap mt-7 justify-between items-center">
          <div className="md:w-[50%]">
            <div className="relative flex justify-center items-center rounded-full mx-auto">
              <img src={profile} alt="" />
              <div className="bg-[#0972BE] w-[50px] h-[50px] rounded-full flex justify-center items-center absolute bottom-4 right-48 border-4 border-white">
                <i className="fa-solid fa-plus text-white fa-xl"></i>
              </div>
            </div>
            <h2 className="text-center uppercase font-bold text-2xl mt-4">
              mohamed tarek
            </h2>
          </div>
          <div className="md:w-[50%] border-2 border-[#898888] rounded-lg  py-10 px-16">
            <h3 className="text-center text-[#0f47e0] font-bold text-xl">
              Settings
            </h3>
            <Link to="/PasswordManger" className="flex justify-between items-center border-b-2 border-[#898888] pb-5 mb-9 mt-24">
              <div className="flex items-center gap-2">
               
                <i className="fa-solid fa-key fa-xl text-[#0972BE]"></i>
                <span className="font-semibold">Password Manger</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </Link>
            <Link to="/DeleteAccount" className="flex justify-between items-center pb-5 mt-9 mb-40">
              <div className="flex items-center gap-2">
                <i class="fa-solid fa-trash text-[#0972BE] fa-xl"></i>
                <span className="font-semibold">Delete Account</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

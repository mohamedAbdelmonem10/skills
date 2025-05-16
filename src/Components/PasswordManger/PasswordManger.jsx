import React from "react";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

export default function PasswordManger() {
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
          <div className="md:w-[50%] border-2 border-[#898888] rounded-lg py-10 px-8">
            <h3 className="text-center text-[#0f47e0] font-bold text-xl">
              Password Manger
            </h3>
            <form>
              <div className="flex flex-col justify-between items-center mt-1 pb-5">
                <div className="mb-5 w-full">
                  <label
                    htmlFor="oldPassword"
                    className="block mb-2 font-medium text-[#0f47e0] dark:text-white"
                  >
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="oldPassword"
                      className="bg-gray-50 border border-gray-300 pl-12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="********"
                    />
                    <i class="fa-solid fa-lock absolute left-3 top-3"></i>
                  </div>
                </div>
                <Link
                to="/forgotpassword"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?  
              </Link>
                <div className="mb-5 w-full">
                  <label
                    htmlFor="newPassword"
                    className="block mb-2 font-medium text-[#0f47e0] dark:text-white"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="newPassword"
                      className="bg-gray-50 border border-gray-300 pl-12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="********"
                    />
                    <i class="fa-solid fa-lock absolute left-3 top-3"></i>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="comfirmPassword"
                    className="block mb-2 font-medium text-[#0f47e0] dark:text-white"
                  >
                    Comfirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="comfirmPassword"
                      className="bg-gray-50 border border-gray-300 pl-12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="********"
                    />
                    <i class="fa-solid fa-lock absolute left-3 top-3"></i>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 pb-3">
                <button className="bg-[#71A9BA] w-full text-white py-2 rounded cursor-pointer hover:bg-[#0972BE] transition duration-300">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

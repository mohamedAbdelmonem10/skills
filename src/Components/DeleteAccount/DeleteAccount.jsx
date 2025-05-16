import React from "react";
import profile from "../../assets/profile.svg";

export default function DeleteAccount() {
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
          <div className="md:w-[50%] shadow rounded-lg py-10 px-8">
            <h3 className="text-center text-[#000] font-bold text-xl">
              <i className="fa-solid fa-trash-can"></i> Delete Account
            </h3>
            <form>
              <div className="flex flex-col justify-between items-center mt-1 pb-5">
                <div className="mb-5 w-full">
                  <label
                    htmlFor="reason"
                    className="block mb-2 font-medium text-[#000] dark:text-white"
                  >
                    Reason for Deletion
                  </label>
                  <div className="">
                    <textarea
                      type="text"
                      id="reason"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Reason*"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 font-medium text-[#000] dark:text-white"
                  >
                    please enter your current password to proceed to account deletion
                  </label>
                  <div className="">
                    <input
                      type="password"
                      id="passsword"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your password*"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-16 pb-3">
                <button className="bg-red-500 w-full text-white py-2 rounded cursor-pointer hover:bg-red-600 transition duration-300">
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

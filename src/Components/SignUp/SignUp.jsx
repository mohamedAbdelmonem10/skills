import React from "react";
import img3 from "./../../assets/3.jpeg";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="md:flex md:w-[100%] flex-wrap mt-7 justify-between items-center container mx-auto">
        
        <div className="md:w-[50%] px-10  ">
        <h2 className="text-center mb-10 text-2xl font-semibold">Create an account</h2>
          <form>
            <div className="mb-5">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your UserName"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Enter Your password"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="confirm Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full my-5 text-white bg-[#5CBCB4] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Next step
            </button>
          </form>
        </div>
        <div className="md:w-[50%] px-5 ">
          <img className="w-[80%]" src={img3} alt="" />
        </div>
      </div>
    </>
  );
}

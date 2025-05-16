import React from "react";
import img2 from "./../../assets/2.jpeg";
import { Link, NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="md:flex md:w-[100%] flex-wrap mt-7 justify-between container mx-auto">
        <div className="md:w-[50%] px-10  height-[500px]">
          <form>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgotpassword"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?  
              </Link>
            </div>
            <button
              type="submit"
              className="w-full my-5 text-white bg-[#5CBCB4] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              sign in
            </button>
          </form>
          <NavLink
            to="/sign up"
            className="w-[100%] block text-white bg-[#5CBCB4] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            create an account
          </NavLink>
          <p className="text-center my-5">or sign in with</p>
          <div className="flex items-center justify-center border gap-2 cursor-pointer bg-white text-sm rounded-lg p-2.5">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">sign in with Google</p>
          </div>
          <div className="flex items-center my-5 justify-center text-white gap-2 cursor-pointer bg-blue-900 text-sm rounded-lg p-2.5">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="">sign in with Facebook</p>
          </div>
        </div>
        <div className="md:w-[50%] px-5 ">
          <img className="w-[80%] md:ms-auto" src={img2} alt="" />
        </div>
      </div>
    </>
  );
}

import React from "react";
import forgetImage from "../../assets/forgetPassword.svg";

export default function Forgotpassword() {
  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="md:flex md:w-[100%] flex-wrap justify-between">
          <div className="md:w-[48%]">
            <form>
              <div className="border px-10 shadow-xl rounded-lg border-gray-300 py-28">
                <h3 className="text-center text-[#0972BE] font-bold mb-5 text-xl">
                  Reset <br /> Password
                </h3>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#0972BE] "
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded ps-10"
                    id="email"
                    placeholder="mohamedtarek@gmail.com"
                  />
                  <i className="fa-regular fa-envelope text-gray-400 absolute start-2 top-5 fa-xl"></i>
                </div>

                <div className="flex justify-center items-center mt-16 pb-3">
                  <button className="bg-[#0972BE] w-full text-white py-2 rounded cursor-pointer">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-[40%] ">
            <img src={forgetImage} className="w-[85%] " alt="Forget Password" />
          </div>
        </div>
      </div>
    </>
  );
}

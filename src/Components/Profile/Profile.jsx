import React, { useState } from "react";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

export default function Profile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function popUPModel() {
    console.log("popUPModel");
    setShowLogoutModal(true);
  }

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
          <div className="md:w-[50%] border-2 border-[#898888] rounded-lg py-16 px-8">
            <Link
              to="/Myprofile"
              className="flex justify-between items-center border-b-2 border-[#898888] pb-5"
            >
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-user fa-2xl text-[#0972BE]"></i>
                <span className="font-semibold">Your Profile</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </Link>
            <Link to="/Settings" className="flex justify-between items-center border-b-2 border-[#898888] pb-5 my-9">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-gear fa-2xl text-[#0972BE]"></i>
                <span className="font-semibold">Settings</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </Link>
            <Link to="/Score" className="flex justify-between items-center border-b-2 border-[#898888] pb-5">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-cash-register fa-2xl text-[#0972BE]"></i>
                <span className="font-semibold">Your Score</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </Link>
            <button
              onClick={() => popUPModel()}
              className="flex justify-between items-center border-b-2 w-full cursor-pointer border-[#898888] pb-5 mt-24"
            >
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-arrow-right-from-bracket fa-2xl text-[#0972BE]"></i>
                <span className="font-semibold">Log out</span>
              </div>
              <div>
                <i className="fa-solid fa-chevron-right text-[#0972BE] fa-xl"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <div className="fixed inset-0 bg-[#00000080] bg-opacity-[0.1] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] text-center">
            <h2 className="text-xl font-bold mb-4">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-around">
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  // هنا ضيف كود الـ logout الحقيقي لو عندك
                  console.log("Logged out");
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import profile from "../../assets/profile.svg";
import person from "../../assets/person-1.jpg";

export default function Score() {
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
          <div className="md:w-[50%] border-2 border-[#898888] rounded-lg py-10 px-16">
            <h3 className="text-center text-[#0f47e0] font-bold text-xl">
              Your Score
            </h3>
            <div className="w-full bg-[#71A9BA] rounded p-4 mt-5">
              <p className="text-center text-white">Feedback</p>
              <div className="flex justify-center gap-2 items-center mt-4">
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className=" text-white px-4">
                    He is outstanding in his feild and welcomes questions with
                    an open heat
                  </p>
                </div>
                <div>
                  <img
                    src={person}
                    className="w-[50px] h-[#50px] rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#71A9BA] rounded p-4 mt-5 mb-8">
              <p className="text-center text-white">Feedback</p>
              <div className="flex justify-center gap-2 items-center mt-4">
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
                <i className="fa-solid fa-star text-[#FFC700]"></i>
              </div>
              <div className="flex justify-between  items-center mt-4">
                <div>
                  <p className=" text-white px-4">
                    He is outstanding in his feild and welcomes questions with
                    an open heat
                  </p>
                </div>
                <div>
                  <img
                    src={person}
                    className="w-[50px] h-[#50px] rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

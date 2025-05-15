import React from "react";
import { Link } from "react-router-dom";
import person1 from "../../assets/person-1.jpg";
import person2 from "../../assets/person-2.jpg";
import person3 from "../../assets/person-3.jpg";
import hero from "../../assets/hero.jpg";
import gamda from "../../assets/item-1.jpg";
import gamda2 from "../../assets/img11.jpg";

export default function Search() {
  return (
    <>
      <div className="md:flex md:w-[100%] flex-wrap  justify-between  container mx-auto">
        <div className="search bg-[#71a9ba42] md:w-[35%] rounded-xl mt-7">
          <div className="search mx-auto py-5 w-[80%]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-xl px-4 py-2 w-full"
            />
          </div>
          <h3 className="text-center mt-5 font-bold">Most Searched</h3>
          <div className="px-8 text-center pb-24">
            <div className="text-center mt-5 uppercase border-[#71A9BA] border-2 rounded-full shadow-xl mx-8 text-xl">
              languages
            </div>
            <div className="text-center mt-5 uppercase border-[#71A9BA] border-2 rounded-full shadow-xl mx-8 text-xl">
              grafic design
            </div>
            <div className="text-center mt-5 uppercase border-[#71A9BA] border-2 rounded-full shadow-xl mx-8 text-xl">
              fitness coach
            </div>
            <div className="text-center mt-5 uppercase border-[#71A9BA] border-2 rounded-full shadow-xl mx-8 text-xl">
              programing
            </div>
            <div className="text-center mt-5 uppercase border-[#71A9BA] border-2 rounded-full shadow-xl mx-8 text-xl">
              human resources
            </div>
          </div>
        </div>
        <div className="content bg-[#71a9ba42] md:w-[62%] rounded-xl mt-7 py-3 px-8">
          <p className="mb-2 text-center text-xl">Swap ,learn ,grow</p>
          <div className="p-2 bg-[#71A9BA] rounded-xl myshadow">
            <div className="flex justify-between items-center py-5">
              <Link className="underline">Most Collaborated</Link>
              <div className="flex justify-between items-center">
                <img className="rounded-full w-10 h-10" src={person1} alt="" />
                <img className="rounded-full w-10 h-10" src={person2} alt="" />
                <img className="rounded-full w-10 h-10" src={person3} alt="" />
              </div>
            </div>
            <p className="mb-2">
              Discover the most accomplished and infulenttial proessionals
            </p>
            <div className="flex justify-between items-center">
              <div className="w-[60%]">
                <ul className="flex justify-between items-center w-full">
                  <li>20+k</li>
                  <li>
                    <i className="fa-solid fa-right-left"></i> 500+
                  </li>
                  <li>1k+</li>
                </ul>
              </div>
              <div className="more">
                <Link className="underline" href="#">
                  see more
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-3 p-2 mt-5 bg-[#71A9BA] rounded-xl">
            <div className="img">
              <img src={hero} className="rounded-xl w-20 h-23" alt="" />
            </div>
            <div className="w-[80%]">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">James smith</h3>
                <i className="fa-solid fa-bookmark"></i>
              </div>
              <p>
                progENG - <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star"></i>
              </p>
              <p>
                Eperience = <span className="text-[#247000]">5 years</span>
              </p>
              <ul className="flex justify-between items-center w-[35%]">
                <li>
                  <i className="fa-regular fa-heart"></i> 5k+
                </li>
                <li>
                  <i className="fa-solid fa-right-left"></i> 60+
                </li>
                <li>
                  <i className="fa-regular fa-comment-dots"></i> 128
                </li>
              </ul>
              <button className="bg-[#4C3D3D] text-white px-20  rounded cursor-pointer">
                swap
              </button>
            </div>
          </div>
          <div className="flex gap-3 p-2 mt-2 bg-[#71A9BA] rounded-xl">
            <div className="img">
              <img src={gamda} className="rounded-xl w-20 h-23" alt="" />
            </div>
            <div className="w-[80%]">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Mira Noir</h3>
                <i className="fa-solid fa-bookmark"></i>
              </div>
              <p>
                UI/UX - <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star text-[#FF5823]"></i>{" "}
                <i className="fa-solid fa-star"></i>
              </p>
              <p>
                Eperience = <span className="text-[#247000]">5 years</span>
              </p>
              <ul className="flex justify-between items-center w-[35%]">
                <li>
                  <i className="fa-regular fa-heart"></i> 5k+
                </li>
                <li>
                  <i className="fa-solid fa-right-left"></i> 60+
                </li>
                <li>
                  <i className="fa-regular fa-comment-dots"></i> 128
                </li>
              </ul>
              <button className="bg-[#4C3D3D] text-white px-20  rounded cursor-pointer">
                swap
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-5">
        <div className="w-[75%] mx-auto relative">
          <input
            type="search"
            placeholder="Search"
            className="text-center   font-semibold text-black rounded-full w-full"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[50%] left-[2%] fa-xl"></i>
        </div>
        <div className="md:flex justify-between gap-2 items-center mt-5">
          <div className="bg-[#71a9ba42] p-5 rounded-xl mt-5 flex flex-col items-center">
            <img src={person1} className="rounded-full" alt="" />
            <h3 className="py-4 font-bold text-2xl uppercase">Mark</h3>
            <p className=" font-bold text-xl mb-5">Software engineering</p>
            <div className="mb-10 text-center">
              <p>*bulding</p>
              <p>*innovative</p>
              <p>*application and digital solution</p>
            </div>
            <div className="bg-white text-[#71A9BA] font-bold px-5 py-2 rounded-xl cursor-pointer">
              Get start
            </div>
          </div>
          <div className="bg-[#71a9ba42] p-5 rounded-xl mt-5 flex flex-col items-center">
            <img src={person2} className="rounded-full" alt="" />
            <h3 className="py-4 font-bold text-2xl uppercase">james</h3>
            <p className=" font-bold text-xl mb-5">Graphic design</p>
            <div className="mb-10 text-center">
              <p>*design software</p>
              <p>*photoshop</p>
            </div>
            <div className="bg-white text-[#71A9BA] font-bold px-5 py-2 rounded-xl cursor-pointer">
              Get start
            </div>
          </div>
          <div className="bg-[#71a9ba42] p-5 rounded-xl mt-5 flex flex-col items-center">
            <img src={gamda2} className="rounded-full" alt="" />
            <h3 className="py-4 font-bold text-2xl uppercase">Mira</h3>
            <p className=" font-bold text-xl mb-5">Data Analysis</p>
            <div className="mb-10 text-center">
              <p>*Extracting</p>
              <p>*valuable insights</p>
              <p>*from data</p>
            </div>
            <div className="bg-white text-[#71A9BA] font-bold px-5 py-2 rounded-xl cursor-pointer">
              Get start
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

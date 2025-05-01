import React from "react";
import img1 from "../../assets/one.svg";
import img2 from "../../assets/two.svg";
import img3 from "../../assets/three.svg";

export default function About() {
  return (
    <div>
      <h2 className="text-5xl text-center">
        why skill<span className="text-[#FFC700]">swap</span> ?{" "}
      </h2>
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-5">
          <div >
            <img src={img1} className="w-full h-[55vh]" alt="" />
          </div>
          <div>
            <img src={img2}  className="w-full h-[55vh]" alt="" />
          </div>
          <div>
            <img src={img3}  className="w-fit h-[55vh]" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center rounded-2xl mx-10 p-5 bg-[#71A9BA] gap-5 mb-10">
          <div className="md:w-[40%]">
            <h3 className="text-2xl mb-2 text-white">
              skill<span className="text-[#FFC700]">swap</span>
            </h3>
            <p>
              Skill swap is an innovative platform designed connect individuals
              who are eager to learn new skills with others who possess
              real-word expertise. in a work where self-learning resources are
              abundant but often overwhelming shill swap offers a partical
              soluation by enabling people to exchange knowledge and expirences
              directly
            </p>
          </div>

          <div className="md:w-[30%] text-center">
            <h3 className="text-white text-2xl mb-4">
              skill<span className="text-[#FFC700]">swap</span>
            </h3>
            <p className="mb-2">Home</p>
            <p className="text-white">Proflie</p>
            <p className="text-white my-2">About Us</p>
            <p className="text-white">Contact Us</p>
          </div>

          <div className="md:w-[30%]">
            <h3 className="text-black text-2xl mb-2">Contact Us</h3>
            <div className="px-5 py-5">
              <div className="flex gap-2">
                <div>
                  <i className="fa-solid fa-location-dot text-[purple]" />
                </div>
                <div>
                  Faculty od computer and information <br /> Zagazig unvirsity
                </div>
              </div>
              <div>
                <i className="fa-solid fa-phone-volume text-[purple]" /> +1 234
                678 9108 99
              </div>
              <div>
                <i className="fa-regular fa-envelope text-[purple]" />{" "}
                contact@morelizer.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

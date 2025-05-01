import React from "react";
import img from "../../assets/contactUs.svg";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 items-center w-full my-5">
      <div className="md:w-[45%]">
        <h3 className="text-center text-black text-2xl font-bold mb-2">
          Contact us
        </h3>
        <form>
          <div className="rounded-xl shadow-2xl px-5  mx-5">
            <div>
              <div>
                <div className="grid grid-cols-2 gap-4 px-5 py-5">
                  <div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email*"
                  />
                </div>
                <div className="px-5 pb-5">
                  <input
                    type="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone*"
                  />
                </div>
                <div className="px-5 pb-5">
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                    defaultValue={""}
                  />
                </div>
                <div className="px-5 pb-5">
                  <button className="text-white cursor-pointer w-[100%] bg-[#71A9BA] hover:bg-[#5CBCB4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
            <i className="fa-solid fa-phone-volume text-[purple]" /> +1 234 678
            9108 99
          </div>
          <div>
            <i className="fa-regular fa-envelope text-[purple]" />{" "}
            contact@morelizer.com
          </div>
        </div>
      </div>
      <div className="md:w-[40%] px-5">
        <img src={img} className="w-[100%] " alt="" />
      </div>
    </div>
  );
}

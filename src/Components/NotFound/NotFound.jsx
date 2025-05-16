import React from 'react'
import error from "../../assets/error.svg";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center mt-20">
          <img src={error} alt="" />
          <h2 className="text-center text-[#0f47e0] font-bold text-2xl mt-4">
            Page Not Found
          </h2>
          <p className="text-center text-[#898888] font-semibold mt-4">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      </div>
    </>
  )
}

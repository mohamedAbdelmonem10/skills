import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cover() {

    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/SecCover'); // الصفحة التانية
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full text-center bg-[#71A9BA]">
        <h1 className="text-9xl text-white mb-4 pb-5">
          Skill<span className="text-[#FFC700]">swap</span>
        </h1>
        <p className="text-5xl text-white pb-7">
          Share your skills and learn new skills
        </p>
      </div>
    </>
  );
}

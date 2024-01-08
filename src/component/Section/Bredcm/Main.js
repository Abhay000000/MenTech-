import React from "react";
import { Link } from "react-router-dom";

const Bredcm = ({ title, to }) => {
  return (
    <>
      <div className="relative h-[35vh] Bredcm-img grid place-items-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 grid place-items-center">
          <div className="text-center">
            <h1 className="font-bold text-5xl text-white">
              <span className="text-[#9935Ab]">{title}</span>
            </h1>
            <div className="text-white py-3 font-bold">
              <Link to="/" className="px-2">
                Home
              </Link>
              <span>/</span>
              <Link to={to} className="px-2">
                {title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bredcm;

import React from "react";
import imgone from "../../../asset/img/person.jpg";

const LatestProduct = () => {
  return (
    <>
      <div className=" bg-[#000000] text-white h-full lg:h-[62vh] py-10 sm:p-10 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 w-[65%] m-auto  h-full lg:h-[62vh]">
          <div className=" items-center flex ">
            <div>
              <h1 className=" text-[#9935AB]   text-xl  font-semibold my-3">
                Latest Product
              </h1>
              <h1 className=" text-4xl   font-extrabold py-3">
                Discover <span className=" text-[#9935AB]">What's </span> New.
              </h1>
              <p className=" my-3">
                "Discover What's New" is a great title choice for a section or
                page that showcases your latest products or offerings
              </p>
              <p className=" my-3">
                This title is inviting and implies that there are fresh and
                innovative products or content
              </p>
              <button className=" my-3 py-3 px-4 bg-[#9935AB]">
                VIEW ALL{" "}
              </button>
            </div>
          </div>
          <div className=" w-full  lg:h-[80%]  md:h-full  items-center  flex ">
            <img src={imgone} alt=""  className=" shadow-md inset h-full "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;

import React from "react";
import { Link } from "react-router-dom";
import img from "../../../asset/img/Asset1@4x.png";

const HomeSection = () => {
  return (
    <>
      <section
        class={`relative  hero-section-img-2 bg-cover bg-center bg-no-repeat`}
      >
        <div>
          <div className=" absolute    left-0 bottom-0 right-bottom hidden lg:flex"></div>
        </div>
        <div>
          <div className=" absolute    right-0 top-0 left-top  hidden lg:flex "></div>
        </div>
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

        <div class=" grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:h-screen lg:items-center md:px-8  ">
          <div className="col-12 col-lg-6">
            <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
              <h1 className="   font-normal  text-3xl  text-gray-500">
                Here's the apps for you
              </h1>
              <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                The New
                <strong class="block font-extrabold t ">
                  era of <span className="  text-[#9935AB]">finance </span>
                </strong>
                <strong class="block font-extrabold t ">technology</strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. !
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  href="#"
                  class="block  rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <img src={img} alt="" width="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const HomeSection = () => {
  return (
    <>
      <section
        class={`relative  hero-section-img-3 bg-cover bg-center bg-no-repeat text-center`}
      >
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="  place-items-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:h-screen   align-items-center md:px-8  grid    text-center">
          <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="    font-semibold  text-8xl dis  rounded-3xl opacity-70	 text-white   stroke    my-5">
              ADVANCED <span className=" block">TECHNOLOGY</span>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              similique, officiis sed porro voluptatibus accusantium voluptas et
              nemo tempore dolore dolores sapiente suscipit explicabo sit.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="#"
                class="block  rounded bg-black px-12 py-3 text-sm font-medium text-center m-auto text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
            <div className=" flex py-5 absolute bottom-0   left-1/2 transform -translate-x-1/2 bg-[#9935AB]  rounded-tr-[20px]  rounded-t-[20px] ">
              <FaFacebook className=" text-3xl   font-semibold    text-white mx-4" />
              <FaTwitter className=" text-3xl   font-semibold    text-white mx-4" />
              <FaInstagram className=" text-3xl   font-semibold    text-white mx-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;

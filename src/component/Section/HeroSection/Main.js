import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        class={`relative  hero-section-img bg-cover bg-center bg-no-repeat`}
      >
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center md:px-8">
          <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="   font-normal  text-3xl   text-[#9935AB]">
              Creative Studio
            </h1>
            <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
              Innovative <span className="  text-[#9935AB]">Design</span>
              <strong class="block font-extrabold t ">Solutions Experts</strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="#"
                class="block  rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                href="#"
                class="block  rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

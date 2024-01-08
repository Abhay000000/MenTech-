import React from "react";
import { Link } from "react-router-dom";
import {
  TbBrandLaravel,
  TbBrandWebflow,
  TbChartInfographic,
} from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className=" bg-[#000000] text-white h-full lg:h-[85vh]  py-24 sm:p-10 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 w-[75%] m-auto  h-full">
          <div className=" items-center flex">
            <div>
              <h1 className=" text-[#9935AB]   text-xl  font-semibold my-3">
                Expert Help
              </h1>
              <h1 className=" text-4xl   font-extrabold py-3">
                What We <span className=" text-[#9935AB]">Do </span>.
              </h1>
              <p className=" my-3">
                It indicates that the assistance you offer is not just general
                help but is provided by specialists who have in-depth knowledge
                in their respective fields.
              </p>
              <p className=" my-3">
                Customers or clients seeking "Expert Help" are likely looking
                for solutions to their challenges, problems, or questions.
              </p>
              <button className=" my-3 py-3 px-4 bg-[#9935AB]">
                VIEW ALL{" "}
              </button>
            </div>
          </div>
          <div className=" col-span-2 grid grid-cols-1 md:grid-cols-2   gap-x-1 items-center">
            <div className="w-50  pt-4 lg:p-0 flex justify-center">
              <div class="max-w-sm p-6 bg-gradient-to-b from-black to-[#a154af]  md:bg-gray-800 md:bg-none text-white  text-center  shadow dark:bg-gray-800 dark:border-gray-700">
                <TbBrandLaravel className="text-6xl m-auto" />
                <Link to="/">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight dark:text-white">
                    Brand Identity
                  </h5>
                </Link>
                <p class="mb-3 font-normal dark:text-gray-400">
                  step guideline process on how to certify for your weekly
                  benefits:
                </p>
              </div>
            </div>

            <div className=" w-50  pt-4 lg:p-0 flex h-full items-end ">
              <div class="max-w-sm p-6 bg-gradient-to-b from-black to-[#a154af]    text-white  text-center  shadow dark:bg-gray-800 dark:border-gray-700">
                <AiOutlineAntDesign className="   text-6xl m-auto" />
                <Link to="/">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">
                    ui & ux design
                  </h5>
                </Link>
                <p class="mb-3 font-normal  dark:text-gray-400">
                  step guideline process on how to certify for your weekly
                  benefits:
                </p>
              </div>
            </div>
            <div className=" w-50  pt-4 lg:p-0 flex justify-center">
              <div class="max-w-sm p-6 bg-gradient-to-b from-black to-[#a154af]    text-white  text-center  shadow dark:bg-gray-800 dark:border-gray-700">
                <TbChartInfographic className="   text-6xl m-auto" />
                <Link to="/">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">
                    graphic design
                  </h5>
                </Link>
                <p class="mb-3 font-normal  dark:text-gray-400">
                  step guideline process on how to certify for your weekly
                  benefits:
                </p>
              </div>
            </div>
            <div className=" w-50  pt-4 lg:p-0  flex h-full items-end ">
              <div class="max-w-sm p-6 bg-gray-800  bg-gradient-to-b from-black to-[#a154af]  md:bg-none text-white  text-center  shadow dark:bg-gray-800 dark:border-gray-700">
                <TbBrandWebflow className="   text-6xl m-auto" />
                <Link to="/">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">
                    web development
                  </h5>
                </Link>
                <p class="mb-3 font-normal  dark:text-gray-400">
                  step guideline process on how to certify for your weekly
                  benefits:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React from "react";
import { GiEyeTarget, GiModernCity } from "react-icons/gi";
import img from "../../../asset/img/About.png";

const About = () => {
  return (
    <>
      <div className="    w-full  lg:h-[60vh]  text-white    overflow-hidden about-img2 py-10 ">
        <div className=" container  grid    grid-cols-1 lg:grid-cols-2  m-auto   items-center  h-full">
          <div>
            <div className="   items-center h-full grid container  w-full lg:w-1/3">
              <div className=" p-4  rounded-2xl  flex">
                <div>
                  <h1 className=" text-[#9935Ab] text-2xl  font-bold py-3">
                    About Us{" "}
                  </h1>
                  <p className="  text-2xl  font-bold my-3">
                    Unleashing{" "}
                    <span className=" text-[#9935Ab] "> Creative</span>{" "}
                    Solutions for Our Clients
                  </p>
                  <p className=" py-3">
                    It implies that you are not bound by conventional thinking
                    and are willing to explore new, unique, and inventive ideas
                    to serve your clients better.
                  </p>

                  <div className=" flex">
                    <div className=" flex">
                      <GiEyeTarget className=" text-9xl px-2" />
                      <div>
                        <p className=" font-bold">Clean Code</p>
                        <p className=" text-sm">
                          Use descriptive and meaningful variable, function, and
                          class names.{" "}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className=" flex">
                        <GiModernCity className=" text-9xl px-2" />
                        <div>
                          <p className=" font-bold">Clean Code</p>
                          <p className=" text-sm">
                            Use descriptive and meaningful variable, function,
                            and class names.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={img} className=" w-full " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

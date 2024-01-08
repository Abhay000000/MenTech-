import React from "react";
import imgone from "../../../asset/img/side-view-woman-listening-music-headphones-nature.jpg";
import imgTwo from "../../../asset/img/vertical-banners-sales.jpg";
import imgThree from "../../../asset/img/hand-holding-elegant-flower.jpg";
import imgFour from "../../../asset/img/transparent-vivid-autumn-leaves_23-2148239689.avif";
import { MdDone } from "react-icons/md";

const Pages = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-black to-[#071832] text-white ">
        <div className=" lg:w-[60%] md:w-[80%] m-auto py-12">
          <div class="grid grid-cols-2 md:grid-cols-3 ">
            <div class="col-span-2 py-3">
              <h1 className="   text-lg   font-extrabold  text-[#9935AB]">
                LATEST PROJECT
              </h1>
              <h2 className=" text-3xl   font-bold py-3">
                OUR <span className=" text-[#9935AB]">LATEST</span> CASE
              </h2>
              <hr />
              <p className=" text-slate-400 py-3">
                Exploring Innovation: Showcasing Our Latest Projects Igniting
                Creativity, Inspiring Solution
              </p>
              
              <div className=" flex align-items-center ">
                <MdDone />
                <p>Innovation Unleashed: Our Latest Projects Showcase</p>
              </div>
              <div className=" flex align-items-center">
                <MdDone />
                <p>
                  Project Panorama: Discovering Creativity in Our Latest Work
                </p>
              </div>
            </div>
            <div class="...">
              <img src={imgone} alt="" />
            </div>
            <div class="...">
              <img src={imgTwo} alt="" />
            </div>
            <div class=" ...">
              <img src={imgThree} alt="" />
            </div>
            <div class="...">
              <img src={imgFour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;

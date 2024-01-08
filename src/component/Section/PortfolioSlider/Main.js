import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imgOne from "../../../asset/img/digital-tablet-photography-design-studio-editing-concept_53876-146880.jpg";
import imgTwo from "../../../asset/img/flat-lay-circuit-board-close-up_23-2149174364.jpg";
import imgThree from "../../../asset/img/programming-background-concept_23-2150170140.jpg";

const imagesData = [
  { src: imgOne, alt: "Image One" },
  { src: imgTwo, alt: "Image Two" },
  { src: imgThree, alt: "Image Three" },
];

export default function PortfolioSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className=" py-9 bg-black">
        <div className=" text-center py-5  text-white">
          <h2 className=" uppercase text-lg  font-bold text-[#9935Ab]">
            Portfolio
          </h2>
          <h1 className=" text-4xl font-black">
            Latest <span className=" text-[#9935Ab]">Work</span>.
          </h1>
          <hr className=" w-[10%] m-auto   h-1  bg-[#9935Ab]"></hr>
          <p>
            "Unveiling Perspectives: A Visual Symphony of Creativity and
            Innovation."
          </p>
        </div>
        <div className="   ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper  h-1/2  w-1/2 "
          >
            {imagesData.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="image-description">{image.description}</div>
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

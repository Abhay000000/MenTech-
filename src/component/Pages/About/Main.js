import React from "react";
import Bredcm from "../../Section/Bredcm/Main";
import About from "../../Section/About/Main";
import Slider from "../../Section/ScrollSlider/Main";
import Services from "../../Section/Services/Main";
import Work from "../../Section/Work/Main";
import LatestProduct from "../../Section/LatestProduct/Main";

const AboutPages = () => {
  return (
    <div>
      <Bredcm title="About" to="/About" />
      <About />
      <Slider></Slider>
      <Services></Services>
      <Work></Work>
      <LatestProduct></LatestProduct>
    </div>
  );
};

export default AboutPages;

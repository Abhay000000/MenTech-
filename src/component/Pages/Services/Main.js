import React from "react";
import Bredcm from "../../Section/Bredcm/Main";
import Slider from "../../Section/ScrollSlider/Main";
import Services from "../../Section/Services/Main";
import Work from "../../Section/Work/Main";
import LatestProduct from "../../Section/LatestProduct/Main";

const Service = () => {
  return (
    <div>
      <Bredcm title="Services" to="/Service"  />
      <Services></Services>

      <Slider></Slider>
      <Work></Work>
      <LatestProduct></LatestProduct>
    </div>
  );
};

export default Service;

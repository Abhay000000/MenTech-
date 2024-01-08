import React from "react";
import Services from "../../Section/Services/Main";
import About from "../../Section/About/Main";
import Work from "../../Section/Work/Main";
import LatestProduct from "../../Section/LatestProduct/Main";
import HeroSection from "../../Section/HeroSectionTwo/Main";

const HomeTwo = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <About />
      <Work />
      <LatestProduct />
    </div>
  );
};

export default HomeTwo;

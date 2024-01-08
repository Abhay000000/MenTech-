import React from "react";
import Herosection from "../../Section/HeroSection/Main";
import Services from "../../Section/Services/Main";
import About from "../../Section/About/Main";
import Work from "../../Section/Work/Main";
import LatestProduct from "../../Section/LatestProduct/Main";


const Home = () => {
  return <div>
    <Herosection/>
    <Services/>
    <About/>
    <Work/>
    <LatestProduct/>                                        
  </div>;
};

export default Home;

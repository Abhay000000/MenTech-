import React from "react";
import Bredcm from "../../Section/Bredcm/Main";
import Iframe from "../../Section/Maps/Main"
import Contact from "../../Section/Contact/Main"



const ContactPages = () => {
  return (
    <div>
      <Bredcm title="Contact" to="/Contact" />
      <Iframe/>
      <Contact/>
    </div>
  );
};

export default ContactPages;

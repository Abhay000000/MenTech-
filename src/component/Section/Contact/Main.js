import React from "react";

const Contact = () => {
  const backgroundStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1506305269769-53a5714a93be?ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80)",
    width: "100%",
    height: "32%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "50px 0px",
    "border-radius": "60px 60px 0 0",
  };

  return (
    <div className="h-screen flex items-center justify-center  bg-gradient-to-b from-black to-[#071832] text-white ">
      <div className="wrapper pb-5">
        <div
          style={backgroundStyle}
          className="header relative h-32 bg-cover bg-center text-white text-center"
        >
          <h1 className="m-0 p-6 pb-2 font-light text-5xl">Contact us</h1>
          <p className="m-0 p-0 text-base w-3/4 mx-auto opacity-75">
            Do you have a question? Send us a message, and we will respond as
            soon as possible.
          </p>
        </div>
        <form className="flex flex-col items-center mt-2 w-3/4 mx-auto">
          <h4 className="text-gray-200 mb-1 mt-4 text-base">Name</h4>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <h4 className="text-gray-200 mb-1 mt-4 text-base">Email</h4>
          <input
            type="text"
            name="email"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <h4 className="text-gray-200 mb-1 mt-4 text-base">Message</h4>
          <textarea className="border border-gray-300 rounded p-2 w-full"></textarea>
          <button className="mt-6 h-10 w-3/5 bg-gradient-to-r from-blue-800 to-indigo-800 text-white rounded-full">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

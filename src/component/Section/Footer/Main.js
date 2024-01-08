import React from "react";
import {
  AiOutlineMail,
  AiFillSkype,
  AiFillUnlock,
  AiFillMobile,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineBehance,
} from "react-icons/ai";
import { BsFillTelephoneFill, BsDribbble } from "react-icons/bs";
import {
  FaUsers,
  FaBloggerB,
  FaSitemap,
  FaBullhorn,
  FaDraftingCompass,
  FaPencilRuler,
  FaLaptop,
  FaPython,
  FaAngular,
  FaGem,
  FaReact,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#071832] text-white">
        <div className=" container m-auto grid grid-cols-1 lg:grid-cols-2 lg:h-[20vh] items-center py-2 flex ">
          <div>
            <div className=" text-center lg:text-left">
              <h1 className=" text-3xl font-bold my-2">
                Get latest from Tagline Infotech{" "}
              </h1>
              <span className=" py-8 text-xl  font-normal  my-2">
                Share your email so we can send you{" "}
                <span className=" text-purple-500">guides</span> and{" "}
                <span className=" text-purple-500">industry news</span>.
              </span>
            </div>
          </div>
          <div className="m-auto text-center">
            <div class="group w-72 md:w-80 lg:w-96 "></div>
            <div class="group w-full ">
              <div class="relative flex items-center py-2 my-5 w-[80%] md:w-full  m-auto ">
                <input
                  id="5"
                  type="text"
                  placeholder="Email"
                  class="peer relative h-10  w-full text-black   bg-white pl-4 pr-10 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 border-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
                <span class="material-symbols-outlined absolute   right-24 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  <AiOutlineMail />
                </span>
                <span class="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400  p-2 bg-purple-500 text-black hover:text-white">
                  Subscribe
                </span>
              </div>
            </div>

            <p className=" text-lg my-5">
              {" "}
              You can unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </div>
        <hr className=" w-[90%]  m-auto" />
        <div>
          <div className="container p-6 m-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {/* <!--First links section--> */}
              <div className="mb-6">
                <h5 className="my-2.5 text-xl font-bold   text-white dark:text-neutral-200">
                  HR Inquiry
                </h5>

                <ul className="mb-0 list-none">
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiOutlineMail className=" text-gray-500   px-3  font-bold text-5xl  " />
                      hr@taglineinfotech.com
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <BsFillTelephoneFill className=" text-gray-500   px-3  font-bold text-5xl  " />
                      +91 6354362521
                    </Link>
                  </li>
                  <h5 className="my-2.5 text-xl font-bold    text-white dark:text-neutral-200">
                    Sales Inquiry
                  </h5>

                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiOutlineMail className=" text-gray-500   px-3  font-bold text-5xl  " />
                      solutions@taglineinfotech.com
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiFillSkype className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Tagline infotech
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!--Second links section--> */}
              <div className="mb-6">
                <h5 className="mb-2.5 text-xl font-bold    text-white dark:text-neutral-200">
                  Help & Advice
                </h5>

                <ul className="mb-0 list-none">
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiOutlineMail className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaUsers className=" text-gray-500   px-3  font-bold text-5xl  " />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaBloggerB className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <BsFillTelephoneFill className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiFillUnlock className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaSitemap className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!--Third links section--> */}
              <div className="mb-6">
                <h5 className="mb-2.5 text-xl font-bold   text-white dark:text-neutral-200">
                  Services
                </h5>

                <ul className="mb-0 list-none">
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiFillMobile className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaLaptop className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaPencilRuler className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaDraftingCompass className=" text-gray-500   px-3  font-bold text-5xl  " />
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaBullhorn className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--Four  links section--> */}

              <div className="mb-6">
                <h5 className="mb-2.5 text-xl font-bold   text-white dark:text-neutral-200">
                  Hire Developers
                </h5>

                <ul className="mb-0 list-none">
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaPython className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire Python Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaAngular className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire AngularJS Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaGem className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire RoR Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaReact className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire React Native Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <AiFillMobile className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire Flutter Developers
                    </Link>
                  </li>
                  <li>
                    <Link className="  text-white dark:text-neutral-200 flex   items-center py-2 ">
                      <FaReact className=" text-gray-500   px-3  font-bold text-5xl  " />
                      Hire ReactJS Developers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
        <hr className=" w-[90%]  m-auto" />

          <div className="bg-[#071832] text-white p-4 text-center flex justify-around  grid grid-cols-1 md:grid-cols-2 text-neutral-700   font-semibold dark:bg-neutral-700 dark:text-neutral-200">
            <div className=" flex  items-center m-auto ">
              <p>Follow us</p>
              <FaFacebook className="  text-4xl px-2 " />{" "}
              <AiFillInstagram className="  text-4xl px-2 " />
              <AiFillLinkedin className="  text-4xl px-2 " />{" "}
              <FaTwitter className="  text-4xl px-2 " />
              <FaPinterest className="  text-4xl px-2 " />
              <AiOutlineBehance className="  text-4xl px-2 " />
              <BsDribbble className="  text-4xl px-2 " />
            </div>
            <div>
              © <span className=" text-purple-500">2023</span> All rights
              reserved by{" "}
              <span className=" text-purple-500">Tagline Infotech LLP</span>
              <Link
                className="  text-white dark:text-neutral-400"
                href="https://tailwind-elements.com/"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

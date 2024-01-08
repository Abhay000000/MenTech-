import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../asset/img/mentech_logo.png";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();
  console.log("object", location);
  const path = location.pathname;
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-5 lg:p-1 font-normal m-auto lg:m-0 relative"
      >
        <Link
          to="/"
          className="flex items-center font-semibold text-lg"
          onClick={() => setDrop(!drop)}
        >
          Home
          <div
            className={`absolute top-full w-[200%] bg-transparent shadow-lg p-2 rounded-lg  ${
              drop ? "block" : "hidden"
            }`}
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
          >
            <Link
              to="/"
              className="block py-2 px-4 text-sm text-gray-700  
              "
              onClick={() => setDrop(false)}
            >
              Home 1
            </Link>
            <Link
              to="/home2"
              className="block py-2 px-4 text-sm text-gray-700  
              "
              onClick={() => setDrop(false)}
            >
              Home 2
            </Link>
            <Link
              to="/home3"
              className="block py-2 px-4 text-sm text-gray-700  
              "
              onClick={() => setDrop(false)}
            >
              Home 3
            </Link>
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  py-5 lg:p-1 font-normal m-auto lg:m-0"
      >
        <Link
          to="/About"
          className="flex items-center  font-semibold  text-lg"
          onClick={() => setOpenNav(false)}
        >
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  py-5 lg:p-1 font-normal m-auto lg:m-0"
      >
        <Link
          to="/Service"
          className="flex items-center    font-semibold  text-lg"
          onClick={() => setOpenNav(false)}
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  py-5 lg:p-1 font-normal m-auto lg:m-0"
      >
        <Link
          to="/Portfolio"
          className="flex items-center    font-semibold  text-lg"
          onClick={() => setOpenNav(false)}
        >
          Portfolio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  py-5 lg:p-1 font-normal m-auto lg:m-0"
      >
        <Link
          to="/Pages"
          className="flex items-center  font-semibold  text-lg "
          onClick={() => setOpenNav(false)}
        >
          Pages
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="  py-5 lg:p-1 font-normal m-auto lg:m-0"
      >
        <Link
          to="/Contact"
          className="flex items-center    font-semibold  text-lg"
          onClick={() => setOpenNav(false)}
        >
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] ">
      <Navbar
        className={`border-0  fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#071832] lg:bg-transparent ${
          openNav ? "bg-[#071832]    h-full " : ""
        } duration-500`}
      >
        <div className="flex items-center justify-around text-blue-gray-900">
          <Typography
            as="a"
            to="/"
            className="mr-4 cursor-pointer py-1.5 font-medium h-[50px]"
          >
            <img
              src={Logo}
              className="  h-3/4 md:h-full mt-1"
              width="100%"
              alt=""
            />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-white"
              >
                <span>
                  <FaSearch />
                </span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className={`ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden   fixed  top-[1.5%] }`}
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 relative top"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ position: "absolute" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};
export default StickyNavbar;

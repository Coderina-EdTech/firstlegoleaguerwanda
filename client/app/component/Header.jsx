import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/firstlogo.png";
import { RiMenu4Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className="font-Lato shadow-md sticky top-0 bottom-0 bg-white z-[999] ">
      {/* upside */}
      <div className="flex items-center justify-between md:px-6 lg:px-24 py-3 md:py-2 rounded-md bg-blue-700 text-white px-2">
        <div>
          <p className="text-[12px]  text-normal">nigeriafll@coderina.org</p>
        </div>
        {/* social media handles */}
        <div className="flex items-center justify-center space-x-4">
          <SiFacebook />
          <RiTwitterFill />
          <IoLogoInstagram />
        </div>
      </div>
      {/* downside */}
      <div className=" text-blue-700 flex items-center justify-between md:space-y-8 border-b-[0.3px] border-black px-2 md:py-2 md:px-4 lg:px-28 py-2">
        <div>
          <Image
            src={logo}
            alt=""
            className="w-[8rem] h-[3rem] object-contain"
          />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-5 text-[14px] md:text-[12.3px] lg:text-[15px] font-semibold">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p> EVENTS</p>

          <p> NEWS AND UPDATES </p>
          <p> GET INVOLVED</p>
        </div>
        <div className="block md:hidden text-3xl">
          <RiMenu4Line />
        </div>
      </div>
    </div>
  );
};

export default Header;

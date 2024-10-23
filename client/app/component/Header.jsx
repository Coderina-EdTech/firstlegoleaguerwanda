import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/firstlogo.png";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const activeLink =
    "text-[#0d2b42] flex items-center justify-center space-x-1 text-[14px] md:text-[12.3px] lg:text-[15px] font-semibold relative after:content-[''] after:bg-[#0d2b42] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[14px] md:text-[12.3px] lg:text-[15px] font-semibold  leading-[20px]  hover:text-[#0d2b42] after:content-[''] after:bg-[#0d2b42] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return (
    <div className="font-Lato shadow-md sticky top-0 bottom-0 bg-white z-[999] ">
      {/* upside */}
      <div className="flex items-center justify-between md:px-6 lg:px-24 py-3 md:py-2 rounded-md bg-[#0d2b42] text-white px-2">
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
      <div className=" text-[#0d2b42] flex items-center justify-between md:space-y-8  px-2 md:py-4 md:px-4 lg:px-28 py-2">
        <div>
          <Image
            src={logo}
            alt=""
            className="w-[8rem] h-[3rem] object-contain"
          />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-5 text-[14px] md:text-[12.3px] lg:text-[15px] font-semibold">
          <Link href="/" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>HOME</p>
          </Link>
          <Link href="/about" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>ABOUT US</p>
          </Link>
          <Link href="/events" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>EVENTS</p>
          </Link>
          <Link href="/news" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>
              NEWS AND UPDATES
            </p>
          </Link>
          <Link href="/news" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>GET INVOLVED</p>
          </Link>
        </div>
        <div className="block md:hidden text-3xl">
          <RiMenu4Line />
        </div>
      </div>
    </div>
  );
};

export default Header;

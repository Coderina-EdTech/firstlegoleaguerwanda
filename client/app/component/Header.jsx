"use client"; // Ensure this is at the top of the file

import React, { useEffect, useState } from "react";
// Import useRouter from Next.js
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/firstlogo.png";
import { RiMenu4Line } from "react-icons/ri";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Use Next.js useRouter to get the current route

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Normal link styling
  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[14px] md:text-[12.3px] lg:text-[15px] font-semibold leading-[20px] hover:text-[#0d2b42] after:content-[''] after:bg-[#0d2b42] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  // Active link styling
  const activeLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  // Helper function to apply active class dynamically based on current route
  const getLinkClass = (path) => {
    return router.pathname === path ? activeLink : normalLink;
  };

  return (
    <div className="font-Lato shadow-md sticky top-0 bottom-0 bg-white z-[999]">
      {/* Upper Section */}
      <div className="flex items-center justify-between md:px-6 lg:px-24 py-3 md:py-2  bg-[#0d2b42] text-white px-2">
        <div>
          <p className="text-[12px] md:text-[15px] text-normal">
            hello@coderina.org
          </p>
        </div>
        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-1">
          <Link
            href="https://x.com/coderina?t=NnqyAw6mAzPI6MFis7wa5A&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill className="relative w-4 h-4 p-1 bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-600" />
          </Link>
          <Link
            href="https://web.facebook.com/coderinaedu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="relative w-4 h-4 p-1 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110" />
          </Link>
          <Link
            href="https://www.instagram.com/coderinaedu?igsh=b205ZzZ0ZHUxaml2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="relative w-4 h-4 p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white rounded-full shadow-lg hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Lower Section with Links */}
      <div className="flex items-center justify-between px-2 md:px-4 lg:px-28 py-2">
        <Image
          src={logo}
          alt="Logo"
          className="w-[8rem] h-[3rem] object-contain"
        />
        <div className="hidden md:flex space-x-5">
          <Link href="/">
            <p className={getLinkClass("/")}>HOME</p>
          </Link>
          <Link href="/about">
            <p className={getLinkClass("/about")}>ABOUT US</p>
          </Link>
          <Link href="/event">
            <p className={getLinkClass("/event")}>EVENTS</p>
          </Link>
          <Link href="/news">
            <p className={getLinkClass("/news")}>BLOG AND UPDATES</p>
          </Link>
          <Link href="/registering">
            <p className={getLinkClass("/involve")}>GET INVOLVED</p>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <div
            className="text-3xl text-red-700 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenu4Line />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-5 flex flex-col space-y-4 text-center">
            <Link href="/">
              <p
                onClick={() => setMenuOpen(false)}
                className={getLinkClass("/")}
              >
                HOME
              </p>
            </Link>
            <Link href="/about">
              <p
                onClick={() => setMenuOpen(false)}
                className={getLinkClass("/about")}
              >
                ABOUT US
              </p>
            </Link>
            <Link href="/event">
              <p
                onClick={() => setMenuOpen(false)}
                className={getLinkClass("/event")}
              >
                EVENTS
              </p>
            </Link>
            <Link href="/news">
              <p
                onClick={() => setMenuOpen(false)}
                className={getLinkClass("/news")}
              >
                BLOG AND UPDATES
              </p>
            </Link>
            <Link href="/registering">
              <p
                onClick={() => setMenuOpen(false)}
                className={getLinkClass("/involve")}
              >
                GET INVOLVED
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

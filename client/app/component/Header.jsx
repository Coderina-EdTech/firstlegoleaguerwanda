"use client";

import React, { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/firstlogo.png";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <p className="text-[12px] md:text-[15px]  text-normal">
            hello@coderina.org
          </p>
        </div>
        {/* social media handles */}
        <div className="flex items-center justify-center space-x-1">
          <Link
            href="https://x.com/coderina?t=NnqyAw6mAzPI6MFis7wa5A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-1 bg-blue-500 text-white rounded-full shadow-lg transition transform hover:scale-110 hover:bg-blue-600"
          >
            <div className="absolute inset-0 rounded-full bg-blue-700 opacity-20 backdrop-blur-lg"></div>
            <RiTwitterFill className="relative w-4 h-4" />
          </Link>
          <Link
            href="https://web.facebook.com/coderinaedu"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-1 bg-blue-600 text-white rounded-full shadow-lg transition transform hover:scale-110"
          >
            <div className="absolute inset-0 rounded-full bg-black opacity-20 backdrop-blur-lg"></div>
            <FaFacebook className="relative w-4 h-4" />
          </Link>
          <Link
            href="https://www.instagram.com/coderinaedu?igsh=b205ZzZ0ZHUxaml2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white rounded-full shadow-lg transition transform hover:scale-110"
          >
            <div className="absolute inset-0 rounded-full bg-black opacity-20 backdrop-blur-lg"></div>
            <FaInstagram className="relative w-4 h-4" />
          </Link>
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
          <Link href="/event" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>EVENTS</p>
          </Link>
          <Link href="/news" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>
              NEWS AND UPDATES
            </p>
          </Link>
          <Link href="/involve" onClick={scrollToTop}>
            <p className={isActive ? activeLink : normalLink}>GET INVOLVED</p>
          </Link>
        </div>

        {/* menu
         */}
        <div className="block md:hidden">
          {/* Mobile Menu Icon */}
          <div
            className=" text-3xl text-red-700 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenu4Line />
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-5 flex flex-col space-y-4 text-center text-[15px] font-semibold">
            <Link
              href="/"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              <p className={isActive ? activeLink : normalLink}>HOME</p>
            </Link>
            <Link
              href="/about"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              <p className={isActive ? activeLink : normalLink}>ABOUT US</p>
            </Link>
            <Link
              href="/event"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              <p className={isActive ? activeLink : normalLink}>EVENTS</p>
            </Link>
            <Link
              href="/news"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              <p className={isActive ? activeLink : normalLink}>
                NEWS AND UPDATES
              </p>
            </Link>
            <Link
              href="/involve"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              <p className={isActive ? activeLink : normalLink}>GET INVOLVED</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

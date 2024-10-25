"use client";

import Image from "next/image";
import React from "react";
import first from "../../public/firstlogo.png";
import game from "../../public/game.jpg";
const Footer = () => {
  return (
    <div className=" ">
      <div className="h-[70vh] lg:h-[75vh] relative">
        {/* Banner Image Slider */}
        <div className="absolute inset-0">
          <Image src={game} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        {/* overlay object */}
        <div className="absolute px-2 md:px-8 font-Poppins space-y-2 lg:space-y-5 md:space-y-4 text-center inset-0 flex flex-col justify-center items-center lg:px-24 text-white">
          <h1 className="font-semibold text-2xl md:text-4xl ">
            Get started with FIRST® LEGO® League
          </h1>
          <p className="text-xl md:text-2xl leading-[38px] md:leading-[47.2px]">
            A chance to shine! Each FIRST LEGO League season culminates in
            celebration where teams show off what they learned and invented, and
            in our oldest division, compete with their robots.
          </p>
        </div>
      </div>

      <div className="w-full space-y-4 py-8">
        <div className="w-full flex items-center justify-center">
          <Image
            src={first}
            alt=""
            className="w-[8rem] h-[4rem] object-contain mb-8"
          />
        </div>
        <div>
          <p className="text-[13px] md:text-sm lg:text-[16px] text-[#0d2b42] text-center border-t-[1.4px] border-black py-4">
            © 2024 First Lego League Nigeria / All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

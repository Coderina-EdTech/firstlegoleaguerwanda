import Image from "next/image";
import React from "react";
import first from "../../public/firstlogo.png";
import game from "../../public/game.jpg";
const Footer = () => {
  return (
    <div className=" ">
      <div className="h-[93vh] relative">
        {/* Banner Image Slider */}
        <div className="absolute inset-0">
          <Image src={game} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* overlay object */}
        <div className="absolute font-Poppins space-y-5 md:space-y-4 text-center inset-0 flex flex-col justify-center items-center lg:px-16 text-white">
          <h1 className="font-semibold text-[20px] md:text-lg text-xl">
            Get started with FIRST® LEGO® League
          </h1>
          <p className="text-lg leading-8">
            A chance to shine! Each FIRST LEGO League season culminates in
            celebration where teams show off what they learned and invented, and
            in our oldest division, compete with their robots.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-4 py-8">
        <Image
          src={first}
          alt=""
          className="w-[8rem] h-[3rem] object-contain"
        />
        <div>
          <p className="text-sm text-center">
            © 2023 First Lego League Rwanda / All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

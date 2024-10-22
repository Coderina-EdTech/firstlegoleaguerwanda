import Image from "next/image";
import React from "react";
import first from "../../public/first.png";
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
        <div className="absolute space-y-3 text-center inset-0 flex flex-col justify-center items-center lg:px-16 text-white">
          <h1>Get started with FIRST® LEGO® League</h1>
          <p>
            A chance to shine! Each FIRST LEGO League season culminates in
            celebration where teams show off what they learned and invented, and
            in our oldest division, compete with their robots.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <Image src={first} alt="" />
        <div>
          <p>© 2023 First Lego League Rwanda / All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import part1 from "../../public/partner1.png";
import part2 from "../../public/partner2.png";
import part3 from "../../public/partner3.png";
import part4 from "../../public/partner4.png";
import part5 from "../../public/partner5.png";
import part6 from "../../public/partner6.png";
import part7 from "../../public/first.png";
import part8 from "../../public/logo.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div>
      <div className="px-2 md:px-4 lg:px-24   bg-[#a8a4a4]">
        <div className="flex items-center justify-center space-x-2 lg:space-x-6">
          <div className="w-[10rem] md:w-[15rem] h-[9rem]">
            <Image
              src={part1}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part2}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part3}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part4}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part5}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part6}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[15rem] h-[9rem]">
            <Image
              src={part7}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="font-extrabold text-xl md:text-3xl font-Roboto">
          Organized by
        </h1>
        <div className="w-[12rem] md:w-[18rem] h-[11rem] md:h-[13rem]">
          <Image src={part8} alt="" className="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

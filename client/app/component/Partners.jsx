import React from "react";
import part1 from "../../public/partner1.png";
import part2 from "../../public/partner2.png";
import part3 from "../../public/partner3.png";
import part4 from "../../public/partner4.png";
import part5 from "../../public/partner5.png";
import part6 from "../../public/partner6.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="px-24  flex items-center justify-center space-x-6 bg-blue-700">
      <div className="w-[15rem] h-[9rem]">
        <Image src={part1} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="w-[15rem] h-[9rem]">
        <Image src={part2} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="w-[15rem] h-[9rem]">
        <Image src={part3} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="w-[15rem] h-[9rem]">
        <Image src={part4} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="w-[15rem] h-[9rem]">
        <Image src={part5} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="w-[15rem] h-[9rem]">
        <Image src={part6} alt="" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default Partners;

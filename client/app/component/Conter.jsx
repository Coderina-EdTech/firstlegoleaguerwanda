import Image from "next/image";
import React from "react";
import color from "../../public/color.jpg";
const Conter = () => {
  return (
    <div className="h-[93vh] relative">
      {/* Banner Image Slider */}
      <div className="absolute inset-0">
        <Image src={color} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* overlay object */}
      <div className="absolute inset-0 flex justify-center items-center lg:px-16 text-white">
        <div className="grid md:grid-cols-2 items-center justify-center gap-5 md:w-[50%] lg:px-8">
          <div className="space-y-2">
            <h1 className="text-2xl">754</h1>
            <h4>Day of experience</h4>
            <p className="text-[13px]">
              {" "}
              FIRST Tech Challenge students learn to think like engineers. Teams
              design, build, and code robots to compete in an alliance format
              against other teams.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">754</h1>
            <h4>Day of experience</h4>
            <p className="text-[13px]">
              {" "}
              FIRST Tech Challenge students learn to think like engineers. Teams
              design, build, and code robots to compete in an alliance format
              against other teams.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">754</h1>
            <h4>Day of experience</h4>
            <p className="text-[13px]">
              {" "}
              FIRST Tech Challenge students learn to think like engineers. Teams
              design, build, and code robots to compete in an alliance format
              against other teams.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">754</h1>
            <h4>Day of experience</h4>
            <p className="text-[13px]">
              {" "}
              FIRST Tech Challenge students learn to think like engineers. Teams
              design, build, and code robots to compete in an alliance format
              against other teams.
            </p>
          </div>
        </div>
        <div className="lg:px-16 space-y-3">
          <h1 className="text-2xl font-semibold">Our Counter</h1>
          <p className="text-[13px]">
            {" "}
            FIRST Tech Challenge students learn to think like engineers. Teams
            design,
          </p>

          <div className="bg-blue-700 lg:w-80 ">
            <div className="bg-white p-4 lg:w-80 border-t-8 border-blue-700 text-[13px] text-black leading-5 space-y-3">
              <p>
                {" "}
                FIRST Tech Challenge students learn to think like engineers.
                Teams design, build, and code robots to compete in an alliance
                format against other teams.{" "}
              </p>
              <p>
                {" "}
                FIRST Tech Challenge students learn to think like engineers.
                Teams design, build, and code robots to compete in an alliance
                format against other teams.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conter;

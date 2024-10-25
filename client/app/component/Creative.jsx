import React from "react";
import { FlipButton } from "../shared/Button";
import Link from "next/link";

const Creative = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center mt-9">
      <div className="bg-[#0d2b42] text-center text-white px-3 py-8  lg:px-14 lg:py-12 space-y-4 md:w-[35%] font-Roboto">
        <h1 className="text-2xl font-semibold leading-8">
          Start a FIRST® LEGO® League Team
        </h1>
        <p className="text-sm md:text-[16px] leading-7">
          {" "}
          FIRST Tech Challenge students learn to think like engineers. Teams
          design, build, and code robots to compete in an alliance format
          against other teams. Robots are built from a reusable platform,
          powered by Android technology, and can be coded using a variety of
          levels of Java-based programming.
        </p>

        <Link
          href="/involve"
          className="flex items-center justify-center w-full"
        >
          <FlipButton frontText="Get Started" backText="GO!" />
        </Link>
      </div>
      <div className="w-full md:w-[65%] font-poppins pl-6 md:px-8 lg:px-20 py-14 hidden md:grid grid-cols-2 bg-blue-50 items-center justify-center">
        <div className=" md:pl-4 space-y-2 lg:space-y-4">
          <div className=" relative">
            <div className="space-y-2 pr-4 md:px-6">
              <h1 className="text-sm md:text-lg font-semibold">FLL Overview</h1>
              <p className="text-[12px] leading-5">
                {" "}
                FLL introduces students to science, technology, engineering, and
                math through robotics competitions.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              1
            </p>
          </div>
          <div className=" relative">
            <div className="space-y-2 px-6">
              <h1 className="text-sm md:text-lg font-semibold">Core Values</h1>
              <p className="text-[12px] leading-5">
                {" "}
                FLL teaches teamwork, innovation, and sharing knowledge through
                collaborative projects.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              2
            </p>
          </div>

          <div className=" relative">
            <div className="space-y-2 px-6">
              <h1 className="text-sm md:text-lg font-semibold">
                Robot Challenge
              </h1>
              <p className="text-[12px] leading-5">
                {" "}
                Teams build and program robots to complete tasks using LEGO
                kits.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              3
            </p>
          </div>
        </div>

        <div className=" md:pl-4 space-y-2 lg:space-y-4">
          <div className=" relative">
            <div className="space-y-2 px-6">
              <h1 className="text-sm md:text-lg font-semibold">
                Innovation Project
              </h1>
              <p className="text-[12px] leading-5">
                {" "}
                Teams create solutions to real-world problems based on FLL
                themes.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              4
            </p>
          </div>
          <div className=" relative">
            <div className="space-y-2 px-6">
              <h1 className="text-sm md:text-lg font-semibold">Annual Theme</h1>
              <p className="text-[12px] leading-5">
                {" "}
                FLL challenges each year focus on global topics like energy or
                transportation.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              5
            </p>
          </div>
          <div className=" relative">
            <div className="space-y-2 px-6">
              <h1 className="text-sm md:text-lg font-semibold">Competitions</h1>
              <p className="text-[12px] leading-6">
                {" "}
                Teams present their robots and projects at FLL events, promoting
                teamwork.
              </p>
            </div>
            <p className="absolute text-sm lg:text-lg bg-[#0d2b42] rounded-[50%] px-2 lg:px-3 py-1 top-6 font-bold -left-8 shadow-xl text-white">
              6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;

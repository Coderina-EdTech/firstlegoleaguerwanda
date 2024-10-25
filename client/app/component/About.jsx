"use client";

import Image from "next/image";
import React from "react";
import BlogBanner3 from "../../public/arrange.jpg";
import BlogBanner4 from "../../public/focus.jpg";
import media from "../../public/media1.jpg";
import media1 from "../../public/media3.jpg";
import Cards from "./Cards";
import Hero from "./Hero";
const About = () => {
  return (
    <div className="font-Lato">
      {/* Banner Image  */}
      <Hero />
      {/* <div className="h-[12rem] lg:h-[30vh] ">
        <Image src={media1} alt="" className="object-cover w-full h-full" />
      </div> */}

      {/* second */}
      <div className="mt-[20rem] md:mt-20 px-2 md:px-4 lg:px-24">
        <div className="bg-gray-100 space-y-6 p-2 md:p-4 lg:p-10">
          <h1 className="font-bold text-2xl ">What is FIRST® LEGO® League?</h1>
          <div className="space-y-4 text-[16px] md:text-[18px] lg:text-[20px] md:leading-8 font-normal">
            <p>
              FIRST® LEGO® League introduces science, technology, engineering,
              and math (STEM) to children ages 4-16* through fun, exciting
              hands-on learning. Participants gain real-world problem solving
              experience through a guided, global robotics program, helping
              today's students and teachers build a better future together.
            </p>
            <p>
              Our three divisions inspire youth to experiment and grow their
              critical thinking, coding, and design skills through hands-on STEM
              learning and robotics.
            </p>
            <p className="text-[13px]">*Ages vary by country</p>
          </div>
        </div>
      </div>

      {/* third aged */}

      <div className="mt-24 px-2 md:px-4 lg:px-24">
        <div className="space-y-4 lg:pr-36">
          <h1 className="font-bold text-xl md:text-2xl">
            FIRST LEGO League Divisions
          </h1>
          <p className="text-sm md:text-[16px]  md:leading-7 font-normal">
            From Discover, to Explore, and then to Challenge, students will
            understand the basics of STEM and apply their skills in an exciting
            competition while building habits of learning, confidence, and
            teamwork skills along the way.
          </p>
        </div>

        {/* cards */}
        <Cards />
      </div>

      {/* welcome */}
      <div className="w-full px-2 py-16  md:px-6 lg:px-24 md:space-y-6 lg:space-y-0 font-mulish">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-[350px] lg:w-[700px] h-[300px] lg:pr-10 rounded-3xl ">
            <Image
              src={BlogBanner3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4  pb-9 md:pb-0 lg:p-4 md:w-[50%] lg:w-[60%]">
            <h1 className="text-[24px] md:text-[32px] font-poppin font-semibold">
              {" "}
              Inspiring the Youth Through Hands-on STEM Learning
            </h1>
            <p className="text-[16px] leading-[20.7px]">
              FIRST® LEGO® League guides youth through STEM learning and
              exploration at an early age. From Discover, to Explore, and then
              to Challenge, students will understand the basics of STEM and
              apply their skills in an exciting competition while building
              habits of learning, confidence, and teamwork skills along the way.
            </p>
          </div>
        </div>

        <div className=" flex flex-col mt-9 md:mt-0 md:flex-row items-center justify-between lg:p-6 gap-6 ">
          <div className="space-y-4  md:w-[50%] lg:w-[60%]">
            <h1 className="text-[24px] md:text-[32px] font-poppin font-semibold">
              Code, Design, and Compete with Robots!
            </h1>
            <p className="text-[16px] leading-[20.7px]">
              FIRST Tech Challenge students learn to think like engineers. Teams
              design, build, and code robots to compete in an alliance format
              against other teams. Robots are built from a reusable platform,
              powered by Android technology, and can be coded using a variety of
              levels of Java-based programming.
            </p>
            <button
              to="login"
              className=" text-center w-[40%] lg:w-[25%] font-semibold rounded hover:bg-[#6b4343] p-2 hover:shadow-md text-[15px] text-[#6b4343] border-[#6b4343] border-[1px] hover:text-white transition-all ease-out"
            >
              Get Started
            </button>
          </div>

          <div className="w-full md:w-[350px] lg:w-[700px] h-[300px] lg:pr-10 rounded-3xl ">
            <Image
              src={BlogBanner4}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

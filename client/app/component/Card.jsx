"use client";
import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Arrow circle left.png";
import arrowLeft from "../../public/Arrow circle right.png";

export const testimonialData = [
  {
    id: 1,
    comment:
      "For children ages 4-6, this playful introductory STEM program ignites their natural curiosity and builds their habits of learning with hands-on activities in the classroom and at home using LEGO® DUPLO® bricks.",

    name: "First Logo League Discover",
    Age: "Ages",
    AgeN: " 4-6",
    bgColor: `#0d2b42`,
  },
  {
    id: 2,
    comment:
      "In Explore, students ages 6-10 learn engineering basics by solving real-world problems. They design, code, and build creative solutions using LEGO bricks and LEGO® Education WeDo 2.0, encouraging innovation.",

    name: "First Logo League Explore",
    Age: "Ages",
    AgeN: " 6-10",
    bgColor: `#4f60d5`,
  },
  {
    id: 3,
    comment:
      "Friendly competition drives the Challenge, where students ages 9-16 research, code, and engineer. Teams build and program LEGO robots to complete game missions, fostering creativity, problem-solving, and teamwork.",

    name: "First Logo League Challenge",
    Age: "Ages",
    AgeN: " 9-16",
    bgColor: `#4f60d5`,
  },
  {
    id: 4,
    comment:
      " FIRST Tech Challenge students learn to think like engineers. Teams design, build, and code robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology.",

    name: "First Tech Challenge",

    bgColor: `#0d2b42`,
  },
];

const Card = () => {
  // set sliderLeft
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // set sliderRight
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="py-4 md:py-6">
      <div className="flex flex-col items-center justify-center text-center  sm:px-12 ">
        <div
          id="slider"
          className="no-scrollbar w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth relative py-2 transition-all"
        >
          {testimonialData.map((data) => {
            return (
              <div
                key={data.id}
                className="md:w-96  inline-block cursor-pointer relative p-2 text-center mx-5 space-y-5 py-5"
              >
                <div
                  className="bg-[#0D154B] space-y-2 rounded-2xl text-[#FFFFFF] leading-[1.5rem] p-6 text-sm hover:shadow-lg shadow-[#0D154B] transition-all duration-200 whitespace-normal"
                  style={{ backgroundColor: `${data?.bgColor}` }}
                >
                  <p className="font-semibold text-xl text-center">
                    {data.name}
                  </p>

                  <div>
                    <p> {data.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-1 w-full relative">
          <div className="flex justify-center items-center bg-[#a8a4a4] absolute top-0 inset-0 z-10 ">
            <div className="flex bg-white p-2 space-x-3">
              <span id="slider" onClick={slideLeft} className="h-8">
                <Image
                  className="h-full w-full"
                  src={arrowLeft}
                  alt="arrowLeft"
                />
              </span>
              <span id="slider" onClick={slideRight} className="h-8">
                <Image
                  className="h-full w-full"
                  src={arrowRight}
                  alt="arrowLeft"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;

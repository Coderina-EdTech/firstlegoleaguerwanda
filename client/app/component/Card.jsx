"use client";
import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Arrow circle left.png";
import arrowLeft from "../../public/Arrow circle right.png";

export const testimonialData = [
  {
    id: 1,
    comment:
      "   In Explore, teams of students ages 6-10 focus on the fundamental of engineering as they explore real-world problems, learn to design, and code and create unique solutions made with LEGO bricks and powered by LEGO® Education WeDo 2.0.",

    name: "First Logo Leaque Explore",
    Age: "Ages",
    AgeN: " 6-10",
    bgColor: `#0d2b42`,
  },
  {
    id: 2,
    comment:
      "   In Explore, teams of students ages 6-10 focus on the fundamental of engineering as they explore real-world problems, learn to design, and code and create unique solutions made with LEGO bricks and powered by LEGO® Education WeDo 2.0.",

    name: "First Logo Leaque Explore",
    Age: "Ages",
    AgeN: " 6-10",
    bgColor: `#4f60d5`,
  },
  {
    id: 3,
    comment:
      "   In Explore, teams of students ages 6-10 focus on the fundamental of engineering as they explore real-world problems, learn to design, and code and create unique solutions made with LEGO bricks and powered by LEGO® Education WeDo 2.0.",

    name: "First Logo Leaque Explore",
    Age: "Ages",
    AgeN: " 6-10",
    bgColor: `#4f60d5`,
  },
  {
    id: 4,
    comment:
      "   In Explore, teams of students ages 6-10 focus on the fundamental of engineering as they explore real-world problems, learn to design, and code and create unique solutions made with LEGO bricks and powered by LEGO® Education WeDo 2.0.",

    name: "First Logo Leaque Explore",
    Age: "Ages",
    AgeN: " 6-10",
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
    <section>
      <div className="flex flex-col items-center justify-center text-center  sm:px-10 ">
        <div
          id="slider"
          className="w-full h-full overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth relative py-2 transition-all"
        >
          {testimonialData.map((data) => {
            return (
              <div
                key={data.id}
                className="md:w-96 inline-block cursor-pointer relative p-2 text-center mx-5 space-y-5 py-5"
              >
                <div
                  className="bg-[#0D154B] rounded-2xl text-[#FFFFFF] leading-[1.5rem] p-6 text-sm hover:shadow-lg shadow-[#0D154B] transition-all duration-200 whitespace-normal"
                  style={{ backgroundColor: `${data?.bgColor}` }}
                >
                  <div className="flex items-center justify-between p-2">
                    <p className="font-semibold text-2xl">{data.name}</p>
                    <div>
                      <p className="text-lg">{data.Age}</p>
                      <p className="text-lg">{data.AgeN}</p>
                    </div>
                  </div>
                  <div>
                    <p> {data.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-1 w-full relative">
          <div className="flex justify-center items-center bg-[#7582D6] absolute top-0 inset-0 z-10 ">
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

import React from "react";

import Image from "next/image";

export const testimonialData = [
  {
    id: 1,
    comment:
      "For children ages 4-6, this playful introductory STEM program ignites their natural curiosity and builds their habits of learning with hands-on activities in the classroom and at home using LEGO® DUPLO® bricks.",

    name: "Discover",
    age: "AGES",
    AgeN: " 4-6",
    bgColor: `#74259c`,
  },
  {
    id: 2,
    comment:
      "In Explore, students ages 6-10 learn engineering basics by solving real-world problems. They design, code, and build creative solutions using LEGO bricks and LEGO® Education WeDo 2.0, encouraging innovation.",

    name: "Explore",
    age: "AGES",
    AgeN: " 6-10",
    bgColor: `#2a9a5a`,
  },
  {
    id: 3,
    comment:
      "Friendly competition drives the Challenge, where students ages 9-16 research, code, and engineer. Teams build and program LEGO robots to complete game missions, fostering creativity, problem-solving, and teamwork.",

    name: "Challenge",
    age: "AGES",
    AgeN: " 9-16",
    bgColor: `#ea3232`,
    vary: "*ages vary by country",
  },
];
const Cards = () => {
  return (
    <div>
      {/* cards */}
      <div className="py-10 font-Lato">
        <div className="grid md:grid-cols-3 w-full text-black gap-3 items-center justify-center lg:px-[8rem]">
          {testimonialData.map((data) => {
            return (
              <div className="hover:cursor-pointer w-[20rem] sm:w-[15rem] sm:h-[26rem] lg:w-[17rem] lg:h-[24rem] bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border border-white border-opacity-20 ">
                <div
                  className="rounded-md flex items-center justify-between px-8 text-white py-2"
                  style={{ backgroundColor: `${data?.bgColor}` }}
                >
                  <div className="text-center text-[17px] font-bold">
                    <p>FIRST</p>
                    <p>LEGO</p>
                    <p>LEAGUE</p>
                    <p
                      className="bg-white py-1 px-2 rounded-[3px] shadow-inner"
                      style={{ color: `${data?.bgColor}` }}
                    >
                      {data.name}
                    </p>
                  </div>
                  <div></div>
                  <div className=" space-y-5">
                    <p className="text-sm">{data.age}</p>
                    <p className="text-2xl">{data.AgeN}</p>
                  </div>
                </div>

                <div className=" p-4">
                  <p className="text-[16px]">{data.comment}</p>
                  <p className="text-[13px] mt-6">{data.vary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const Cards = () => {
  return (
    <div className=" lg:px-24  bg-blue-50">
      <div className="md:py-10 gap-3 hidden lg:grid md:grid-cols-3 w-full text-black items-center justify-center lg:px-24">
        <div className="hover:cursor-pointer md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-inner border border-white border-opacity-20 py-5 px-4">
          <h1 className="text-2xl text-center">
            Most Effective ways to overcome
          </h1>
        </div>

        <div className="hover:cursor-pointer border-white md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border  border-opacity-20 py-5 px-4">
          <div className="flex items-center justify-between px-4">
            <div class=" text-opacity-80 text-center text-[15px]">
              <h1>First Logo</h1>

              <h3>Leaque</h3>
              <p>Discover</p>
            </div>
            <div className="space-y-6 shadow-sm">
              <p className="font-semibold text-sm">Ages</p>
              <p>4-6</p>
            </div>
          </div>

          <div className="">
            <p class=" text-opacity-80 text-[12px] leading-6">
              For children ages 4-6, this playful introductory STEM program
              ignites their natural curiosity and builds their habits of
              learning with hands-on activities in the classroom and at home
              using LEGO® DUPLO® bricks.
            </p>
          </div>
        </div>

        <div className="hover:cursor-pointer md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
          <div className="flex items-center justify-between px-4">
            <div class=" text-opacity-80 text-center text-[14px]">
              <h1>First Logo</h1>

              <h3>Leaque</h3>
              <p>Explore</p>
            </div>
            <div className="space-y-6 shadow-sm">
              <p className="font-semibold text-sm">Ages</p>
              <p>6-10</p>
            </div>
          </div>
          <div className="border-[1.2px] w-[14rem] border-black"></div>
          <div className="">
            <p class=" text-opacity-80 text-[12px] leading-5">
              In Explore, teams of students ages 6-10 focus on the fundamentals
              of engineering as they explore real-world problems, learn to
              design, and code and create unique solutions made with LEGO bricks
              and powered by LEGO® Education WeDo 2.0.
            </p>
          </div>
        </div>

        <div className="hover:cursor-pointer md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
          <div className="flex items-center justify-between px-4">
            <div class=" text-opacity-80 text-center">
              <h1>First Logo</h1>

              <h3>Leaque</h3>
            </div>
            <div className="space-y-6 shadow-sm">
              <p className="font-semibold text-sm">Ages</p>
              <p>9-16</p>
            </div>
          </div>
          <div className="border-[1.2px] w-[14rem] border-black"></div>
          <div className="">
            <p class=" text-opacity-80 text-[12px] leading-5">
              Friendly competition is at the heart of Challenge, as teams of
              students ages 9-16* engage in research, problem-solving, coding,
              and engineering – building and programming a LEGO robot that
              navigates the missions of a robot game.
            </p>
          </div>
        </div>

        <div className="hover:cursor-pointer md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
          <div className="flex items-center justify-between px-4">
            <div class=" text-opacity-80 text-center">
              <h1>First Logo</h1>

              <h3>Leaque</h3>
            </div>
            <div className="space-y-6 shadow-sm">
              <p className="font-semibold text-sm">Ages</p>
              <p>9-16</p>
            </div>
          </div>
          <div className="border-[1.2px] w-[14rem] border-black"></div>
          <div className="">
            <p class=" text-opacity-80 text-[12px] leading-5">
              Friendly competition is at the heart of Challenge, as teams of
              students ages 9-16* engage in research, problem-solving, coding,
              and engineering – building and programming a LEGO robot that
              navigates the missions of a robot game.
            </p>
          </div>
        </div>

        <div class="hover:cursor-pointer md:w-[17rem] h-[15.4rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
          <div className="flex items-center justify-center">
            <div className=" text-opacity-80 text-center">
              <h1>First Logo</h1>

              <h3>Challenge</h3>
            </div>
          </div>
          <div className="border-[1.2px] w-[14rem] border-black"></div>
          <div className="">
            <p class=" text-opacity-80 text-[12px] leading-6">
              For children ages 4-6, this playful introductory STEM program
              ignites their natural curiosity and builds their habits of
              learning with hands-on activities in the classroom and at home
              using LEGO® DUPLO® bricks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

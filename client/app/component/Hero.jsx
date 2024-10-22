import React, { useEffect, useState } from "react";
import BlogBanner1 from "../../public/look.jpg";
import BlogBanner2 from "../../public/table.jpg";
import BlogBanner3 from "../../public/arrange.jpg";
import BlogBanner4 from "../../public/focus.jpg";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image"; // Import Image for optimization

const Hero = () => {
  const banners = [BlogBanner1, BlogBanner2, BlogBanner3, BlogBanner4];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Function to handle manual banner selection
  const selectBanner = (index) => {
    setCurrentBannerIndex(index);
  };
  return (
    <div>
      <section className="relative h-[93vh]">
        {/* Banner Image Slider */}
        <div className="absolute inset-0">
          <Image
            src={banners[currentBannerIndex]}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/*================== Overlay content ====================*/}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-xl sm:text-5xl md:text-4xl mb-4 ">
            The home for young innovators and
          </h1>
          <h1 className="text-white text-xl sm:text-5xl md:text-4xl mb-4  ">
            future leaders in science and technology
          </h1>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex sm:flex-row flex-col mt-4">
            <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-12 py-3 rounded-md">
                Get Started
              </button>
            </Link>
            <Link href="/">
              <button className="border border-white text-white text-lg px-3 py-3 rounded-md hover:border-gray-400">
                Sign Up your School
              </button>
            </Link>
          </div>
        </div>

        {/*============= Banner Indicators =============*/}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentBannerIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => selectBanner(index)}
            ></button>
          ))}
        </div>

        {/* cards */}
        <div className=" absolute lg:-bottom-[15rem] hidden lg:grid md:grid-cols-4 w-full text-black items-center justify-center lg:px-[9rem]">
          <div class="hover:cursor-pointer md:w-[15rem] h-[18rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
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

          <div class="hover:cursor-pointer md:w-[15rem] h-[18rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
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
                In Explore, teams of students ages 6-10 focus on the
                fundamentals of engineering as they explore real-world problems,
                learn to design, and code and create unique solutions made with
                LEGO bricks and powered by LEGO® Education WeDo 2.0.
              </p>
            </div>
          </div>

          <div class="hover:cursor-pointer md:w-[15rem] h-[18rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
            <div className="flex items-center justify-between px-4">
              <div class=" text-opacity-80 text-center">
                <h1>First</h1>
                <h3>Logo</h3>
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

          <div class="hover:cursor-pointer md:w-[15rem] h-[18rem]  space-y-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 py-5 px-4">
            <div className="flex items-center justify-center">
              <div class=" text-opacity-80 text-center">
                <h1>First</h1>
                <h3>Logo</h3>
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
      </section>
    </div>
  );
};

export default Hero;

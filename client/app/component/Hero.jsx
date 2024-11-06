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
      <section className="relative h-[93vh] font-lato">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 md:px-4">
          <h1 className="text-white text-[22px] sm:text-5xl md:text-4xl mb-4 ">
            The home for young innovators and
          </h1>
          <h1 className="text-white text-[22px] sm:text-5xl md:text-4xl mb-4  ">
            future leaders in science and technology
          </h1>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex sm:flex-row flex-col mt-4">
            <Link href="/registering">
              <button className="bg-[#0d2b42] hover:bg-blue-600 text-white text-lg px-12 py-3 rounded-md">
                Get Started
              </button>
            </Link>
            <Link href="/registration">
              <button className="border border-white text-white text-[16px] px-3 py-3 rounded-md hover:border-gray-400">
                Register Your School
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
      </section>
    </div>
  );
};

export default Hero;

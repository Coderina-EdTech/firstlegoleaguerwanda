import React from "react";
import icon1 from "../../public/icon1.png";
import icon2 from "../../public/icon2.png";
import icon3 from "../../public/icon3.png";
import icon4 from "../../public/icon4.png";
import icon5 from "../../public/icon5.png";
import icon6 from "../../public/icon6.png";
import Image from "next/image";

const Featuredata = [
  {
    id: 1,
    icon: icon1,
    title: "Robotics Learning",
    text: "Introduce students to science and engineering through hands-on robotics activities.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Collaborative Teamwork",
    text: "Foster teamwork and innovation, encouraging students to work together to solve problems.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Mission Challenges",
    text: "Teams build and program robots to complete real-world missions using LEGO kits.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Innovative Solutions",
    text: "Encourage creativity as teams design innovative solutions to global challenges.",
  },
  {
    id: 5,
    icon: icon5,
    title: "Core Values",
    text: "Instill core values like discovery, impact, and fun, creating a culture of learning.",
  },
  {
    id: 6,
    icon: icon6,
    title: "Global Themes",
    text: "Compete with challenges based on annual global themes, such as energy and sustainability.",
  },
];

const Features = () => {
  return (
    <section id="feature" className="">
      <div className="bg-[#0d2b42] flex flex-col justify-center items-center p-5 pb-12">
        <div className="text-center space-y-5 p-5 pt-10 ">
          <p className="text-[#BCC2FF] text-4xl font-bold">Features</p>
          <p className="text-white text-lg  md:text-xl">
            Empowering Tools for Inspiring Innovation and Future Leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:m-6">
          {Featuredata.map((data) => {
            return (
              <div
                key={data.id}
                className="hover:shadow-2xl shadow-indigo-500 hover:scale-105  cursor-pointer transition-all duration-200 text-white bg-[#BCC2FF]/20 min-w-full lg:w-[23rem] h-[16rem] md:h-[20rem] lg:h-[16rem] rounded-lg flex flex-col items-center justify-center space-y-2 p-4 lg:p-8"
              >
                <p className="text-center h-[4rem] w-[4rem]">
                  <Image
                    src={data.icon}
                    alt="icon"
                    width="400"
                    height={"500"}
                    quality={100}
                    className="w-full h-full"
                  />
                </p>
                <p className="text-[#FFFFFF] font-bold">{data.title}</p>
                <p className="text-[1rem] font-[500] text-center p-2 text-[#F5F2FA]">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import color from "../../public/color.jpg";
import pic from "../../public/pic1.jpg";
const Conter = () => {
  const [counter, setCounter] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Triggers only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div className="h-[70vh] lg:h-[60vh] relative">
      {/* Banner Image Slider */}
      <div className="absolute inset-0">
        <Image src={color} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center lg:px-16 text-white">
        <div ref={ref} className=" hidden md:block md:w-[50%]">
          {inView && (
            <div className="hidden lg:grid md:grid-cols-2 items-center justify-center gap-5 w-full ">
              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <CountUp
                    start={0}
                    end={3}
                    suffix="k"
                    duration={2}
                    className=" text-lg md:text-3xl font-bold"
                  />
                  <p className="text-sm md:text-lg">Robots Built</p>
                </div>
                <p className="text-[13px]">
                  In the FIRST Tech Challenge, students design, build, and
                  program robots, enhancing engineering skills while competing
                  globally.
                </p>
              </div>

              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <CountUp
                    start={0}
                    end={150}
                    suffix="+"
                    duration={2}
                    className=" text-lg md:text-3xl font-bold"
                  />
                  <p className="text-sm md:text-lg">Teachers Trained</p>
                </div>
                <p className="text-[13px]">
                  Educators receive specialized training in the FIRST Tech
                  Challenge to effectively mentor students and promote STEM
                  learning.
                </p>
              </div>

              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <CountUp
                    start={0}
                    end={15}
                    suffix="k"
                    duration={2}
                    className=" text-lg md:text-3xl font-bold"
                  />
                  <p className="text-sm md:text-lg">Students Impacted </p>
                </div>
                <p className="text-[13px]">
                  The FIRST Tech Challenge empowers students to develop critical
                  STEM skills, fostering creativity, teamwork, and
                  problem-solving abilities for future success.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center justify-center cursor-pointer text-center counter font-bold">
                  <CountUp
                    start={0}
                    end={0}
                    suffix=""
                    duration={0}
                    className=" text-lg md:text-3xl font-bold"
                  />
                  <p className="text-sm md:text-lg">Projects Incubated </p>
                </div>
                <p className="text-[13px]">
                  The FIRST Tech Challenge empowers students to develop critical
                  STEM skills, fostering creativity, teamwork, and
                  problem-solving abilities for future success.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="px-3 lg:px-16 space-y-3">
          <div className="bg-[#0d2b42] lg:w-80 ">
            <div className="bg-white p-2 lg:w-80 rounded-3xl">
              <div>
                <Image src={pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conter;

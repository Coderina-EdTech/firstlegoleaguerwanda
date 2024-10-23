import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

//import ScrollTrigger from "react-scroll-trigger";

const NumberMetrics = () => {
  const [counter, setCounter] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Triggers only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });
  return (
    <div className="py-10 lg:mt-[12.3rem]" ref={ref}>
      {inView && (
        <div className="flex items-center justify-between md:justify-around py-5 px-3 md:px-10 bg-[#a8a4a4]">
          <div className="flex flex-col items-center justify-center text-[#0d2b42] cursor-pointer text-center counter font-bold">
            <CountUp
              start={0}
              end={3}
              suffix="k"
              duration={2}
              className=" text-lg md:text-3xl font-bold"
            />
            <p className="text-sm md:text-lg count">Teachers Trained</p>
          </div>
          <div className="flex flex-col items-center justify-center text-[#0d2b42] cursor-pointer text-center counter font-bold">
            <CountUp
              start={0}
              end={150}
              suffix="+"
              duration={2}
              className=" text-lg md:text-3xl font-bold"
            />
            <p className="text-sm md:text-lg">Positive Feedback</p>
          </div>
          <div className="flex flex-col items-center justify-center text-[#0d2b42] cursor-pointer text-center counter font-bold">
            <CountUp
              start={0}
              end={15}
              suffix="k"
              duration={2}
              className=" text-lg md:text-3xl font-bold"
            />
            <p className="text-sm md:text-lg">Student Impacted</p>
          </div>
          <div className="flex flex-col items-center justify-center text-[#0d2b42] cursor-pointer text-center counter font-bold">
            <CountUp
              start={0}
              end={5}
              suffix="K"
              duration={2}
              className=" text-lg md:text-3xl font-bold"
            />
            <p className="text-sm md:text-lg">Robot Built</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberMetrics;

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import color from "../../public/color.jpg";
import pic from "../../public/pic1.jpg";
const Conter = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% in view
  });

  if (inView && !hasStarted) {
    setHasStarted(true);
  }

  return (
    <div className="h-[70vh] md:h-[93vh] relative">
      {/* Banner Image Slider */}
      <div className="absolute inset-0">
        <Image src={color} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center lg:px-16 text-white">
        <div
          ref={ref}
          className="hidden lg:grid md:grid-cols-2 items-center justify-center gap-5 md:w-[50%] lg:px-8 "
        >
          {hasStarted && (
            <>
              <div className="space-y-2">
                <h1 className="text-2xl">
                  <CountUp end={754} duration={3} />
                </h1>
                <h4>Day of experience</h4>
                <p className="text-[13px]">
                  FIRST Tech Challenge students learn to think like engineers.
                  Teams design, build, and code robots to compete in an alliance
                  format against other teams.
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl">
                  <CountUp end={754} duration={3} />
                </h1>
                <h4>Day of experience</h4>
                <p className="text-[13px]">
                  FIRST Tech Challenge students learn to think like engineers.
                  Teams design, build, and code robots to compete in an alliance
                  format against other teams.
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl">
                  <CountUp end={754} duration={3} />
                </h1>
                <h4>Day of experience</h4>
                <p className="text-[13px]">
                  FIRST Tech Challenge students learn to think like engineers.
                  Teams design, build, and code robots to compete in an alliance
                  format against other teams.
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl">
                  <CountUp end={754} duration={3} />
                </h1>
                <h4>Day of experience</h4>
                <p className="text-[13px]">
                  FIRST Tech Challenge students learn to think like engineers.
                  Teams design, build, and code robots to compete in an alliance
                  format against other teams.
                </p>
              </div>
            </>
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

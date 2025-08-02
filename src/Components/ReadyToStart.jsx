import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ReadyToStart = () => {
  const [rotate, setRotate] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.35">
      <div className="ready_to_start w-full overflow-hidden cursor-pointer mt-32 lg:mt-0">
        <div className="relative w-full bg-[#CDEA68] py-16 sm:py-20">
          <h1 className="uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[12rem] text-black font-extrabold text-center tracking-tighter">
            Ready
          </h1>
          <h1 className="uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[12rem] text-black font-extrabold text-center tracking-tighter">
            to start
          </h1>
          <h1 className="uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[12rem] text-black font-extrabold text-center tracking-tighter">
            the project?
          </h1>

          {/* Rotating Circles */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 sm:gap-10">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="w-[35vw] sm:w-[25vw] lg:w-[13vw] h-[35vw] sm:h-[25vw] lg:h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center"
              >
                <div className="relative w-3/5 h-3/5 rounded-full bg-zinc-950">
                  <h5 className="text-white uppercase font-medium absolute top-1/3 left-1/3 lg:block hidden">
                    Play
                  </h5>
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="w-fit mx-auto mt-15 sm:mt-20 md:mt-10 mb-2">
            <button className="px-6 py-3 rounded-3xl bg-black text-white uppercase flex gap-5 items-center text-sm">
              Start the project
              <div
                className="w-2 h-2 rounded-full bg-white hover:scale-[5] transition duration-300 flex items-center justify-center text-[5px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && (
                  <FaArrowRight className="text-[5px] text-black rotate-[-45deg] font-light" />
                )}
              </div>
            </button>
          </div>

          <div className="w-fit mx-auto text-black">OR</div>

          <div className="w-fit mx-auto mb-9 mt-2">
            <button className="px-6 py-3 rounded-3xl text-black uppercase flex gap-5 items-center border border-black text-sm hover:bg-black hover:text-white transition duration-200 group">
              hello@ochi.design
              <div
                className="w-2 h-2 rounded-full bg-black group-hover:bg-white hover:scale-[5] transition duration-200 flex items-center justify-center text-[5px]"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                {isHovered2 && (
                  <FaArrowRight className="text-[5px] text-black rotate-[-45deg] font-light" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;


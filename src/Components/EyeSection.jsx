import React, { useEffect, useState } from "react";
import bg_img from "./Assets/Eye-section.jpg";

const EyeSection = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eye w-full h-screen overflow-hidden cursor-pointer">
      <div data-scroll data-scroll-section data-scroll-speed="-.7"
        className="relative h-full  w-full  bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10  ">
          <div className="lg:w-[13vw] w-[35vw] lg:h-[13vw] h-[35vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 rounded-full bg-zinc-900 ">
              <h5 className="text-white uppercase font-medium  absolute top-1/3 left-1/3 lg:block hidden">
                Play
              </h5>
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-[13vw] w-[35vw] lg:h-[13vw] h-[35vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 rounded-full bg-zinc-900 ">
              <h5 className="text-white uppercase font-medium  absolute top-1/3 left-1/3 lg:block hidden">
                Play
              </h5>
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5 w-full"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeSection;

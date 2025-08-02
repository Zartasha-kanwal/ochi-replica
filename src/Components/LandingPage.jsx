import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full  bg-white text-black">
      <div className="text-structure pt-40 px-6 sm:px-12">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center gap-2">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.75, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-16 sm:h-16 max-sm:h-10 2xl:h-32 bg-cover bg-center mt-2 rounded-md"
                    style={{
                      backgroundImage:
                        "url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')",
                    }}
                  />
                )}
                <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-[10rem] tracking-tight font-bold leading-none whitespace-nowrap">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-400 mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 sm:px-12 pt-6 gap-4 sm:gap-0 mb-10">
        <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="start flex items-center justify-center gap-5 group">
          <div className="px-4 py-2 rounded-3xl text-sm bg-white uppercase border-2 border-gray-400 font-semibold text-gray-700 group-hover:bg-black group-hover:text-white group-hover:border-black transition duration-300 cursor-pointer">
            Start the project
          </div>
          <div className="px-3 py-3 rounded-full text-gray-700 border border-gray-400 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition duration-300 cursor-pointer">
            <span className="rotate-[-45deg]">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

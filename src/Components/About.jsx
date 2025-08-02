import React, { useState } from "react";
import about_img from "./Assets/About.jpg";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.02"  className="w-full py-20 bg-[#CDEA68] rounded-tr-2xl rounded-tl-2xl">
      <h1 className="text-black text-[5vw] sm:text-[3vw] leading-snug px-6 sm:px-12">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, explain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full border-t-[1.5px] border-[#9fb550] mt-16 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 sm:px-12 pt-6 sm:pt-3 ">
          {/* Text + Button */}
          <div className="text-black flex flex-col gap-5">
            <h1 className="text-3xl sm:text-5xl font-medium">Our approach:</h1>
            <div className="group">
              <button className="px-6 py-3 rounded-3xl bg-black text-white uppercase flex gap-5 items-center">
                Read more
                <div
                  className="w-2 h-2 rounded-full bg-white hover:scale-[5] transition duration-300 flex items-center justify-center text-[5px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {" "}
                  {isHovered && (
                    <FaArrowRight className="text-[5px] text-black rotate-[-45deg] font-light " />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Image*/}
          <div
            className={`rounded-2xl cursor-pointer transition duration-300 ${
              isHovered ? "scale-95" : "scale-100"
            }`}
          >
            <img
              src={about_img}
              className="rounded-2xl w-full h-auto object-cover hover:scale-95 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

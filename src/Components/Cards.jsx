import React, { useState } from "react";
import Button from "./Button/Button";
import { delay, motion } from "framer-motion";
import { Power4 } from "gsap/all";

const Card = ({ image, title, buttons = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full ">
      {/* Title Bar */}
      <div className="flex gap-3 items-center py-4 px-2">
        <div className="h-2 w-2 bg-black rounded-full"></div>
        <h1 className="text-black text-base sm:text-lg md:text-xl">{title}</h1>
      </div>

      {/* Background Image Container */}
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer hover:scale-95 transition duration-200 bg-cover bg-center w-full h-[400px]" // adjust height as needed
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-[#b9d849] font-bold absolute top-[40%] px-[5rem] text-5xl whitespace-nowrap">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={
                isHovered ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
              }
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: isHovered ? index * 0.03 : 0,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4 py-5 px-3 cursor-pointer">
        {buttons.map((btnTitle, idx) => (
          <Button key={idx} title={btnTitle} />
        ))}
      </div>
    </div>
  );
};

export default Card;

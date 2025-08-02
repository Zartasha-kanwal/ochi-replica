import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const text = "We are Ochi";

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.07" className="w-full py-20 mt-10 bg-[#004D43] rounded-tr-2xl rounded-tl-2xl overflow-hidden">
      <div className="border-y-2 border-zinc-400">
        <motion.div
          className="flex whitespace-nowrap  "
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
          <span className="text-[13rem] font-bold uppercase leading-none text-white pr-4">
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

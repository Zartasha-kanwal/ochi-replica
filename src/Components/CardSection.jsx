import React from "react";
import Button from "./Button/Button";

const CardSection = () => {
  return (
    <div  className="sticky top-0 w-full h-screen lg:h-screen bg-zinc-100 pt-[7rem]  mb-[20rem] lg:mb-[5rem]">
      <div className="cardcontainer grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-12 gap-7 h-auto lg:h-[50vh]">
        {/* Left grid */}
        <div className="card relative w-full h-[250px] md:h-[300px] lg:h-full rounded-xl bg-[#004D43] flex items-center justify-center p-2">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="max-w-[80%] max-h-[80%] object-contain"
          />
          <button className="absolute bottom-4 left-4 py-1 px-2 text-sm rounded-3xl text-[#cdea68] border border-[#cdea68]">
            ©2019–2022
          </button>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 gap-3 h-auto">
          {/* Card 2 */}
          <div className="card relative h-[250px] md:h-[300px] lg:h-full rounded-xl bg-gray-950 flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
            <button className="absolute bottom-4 left-4 py-1 px-2 lg:text-sm text-[10px] rounded-3xl text-white border border-white hover:bg-white hover:text-black transition duration-200 uppercase">
              Rating 5.0 on Clutch
            </button>
          </div>

          
          <div className="card relative h-[250px] md:h-[300px]  lg:h-full rounded-xl bg-gray-950 flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              className="h-[102px] w-[104px] object-contain"
            />
            <button className="absolute bottom-4 lg:left-4 left-1 lg:right-0 right-1 py-1 px-2 lg:text-sm text-[10px] rounded-3xl text-white border border-white hover:bg-white hover:text-black transition duration-200 uppercase">
              Business Bootcamp 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

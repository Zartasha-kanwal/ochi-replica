import React, { useState } from "react";
import Cards from "./Cards";
import Feacture_img1 from "./Assets/Feature-project-Salience_Website_cover.png";
import Feacture_img2 from "./Assets/Feature-project-CS_Website.png";
import Feacture_img3 from "./Assets/Feature-project-Frame.png";
import Feacture_img4 from "./Assets/Feature-project-Fyde_Front.png";
import Feacture_img5 from "./Assets/Feature-project-Vise_Front.png";
import Feacture_img6 from "./Assets/Feature-project-ATG_Website.png";
import Feacture_img7 from "./Assets/Feature-project-Frame-3.jpg";
import Feacture_img8 from "./Assets/Feature-project-Frame-2-.jpg";
import Feacture_img9 from "./Assets/PB-Front-4-1326x1101.png";
import Feacture_img10 from "./Assets/Frame-3898-1-1326x1101.jpg";
import Feacture_img11 from "./Assets/Officevibe-Short-1-1326x1101.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Feature = () => {
  const cardsData = [
    {
      image: Feacture_img1,
      title: "Salience Labs",
      buttons: ["BRAND IDENTITY", "PITCH DECK"],
      hoverText: "This is Text A",
    },
    {
      image: Feacture_img2,
      title: "Cardboard Spaceship",
      buttons: ["BRAND TEMPLATE", "SALES DECK", "SOCIAL MEDIA TEMPLATES"],
      hoverText: "This is Text b",
    },
    {
      image: Feacture_img3,
      title: "AH2 & Matt Horn",
      buttons: ["PITCH DECK"],
      hoverText: "This is Text A",
    },
    {
      image: Feacture_img4,
      title: "Fyde",
      buttons: ["AUDIT", "COPY WRITING", "SALES DECK"],
    },
    {
      image: Feacture_img5,
      title: "Vise",
      buttons: ["AGENCY", "COMPANY PRESENTATION"],
    },
    {
      image: Feacture_img6,
      title: "All Things Go",
      buttons: ["BRAND IDENTITY", "PITCH DECK"],
    },
    {
      image: Feacture_img7,
      title: "Trawa",
      buttons: ["BRAND IDENTITY", "DESIGN REASERCH", "INVESTOR DECK"],
    },
    {
      image: Feacture_img8,
      title: "Black Book",
      buttons: ["INVESTOR DECK", "REDESIGN", "REVIEW"],
    },
    {
      image: Feacture_img9,
      title: "Premium Blend",
      buttons: ["BRANDED TEMPLATE", "SALES DECK"],
    },
    {
      image: Feacture_img10,
      title: "Softstart",
      buttons: ["SALES DECK"],
    },
    {
      image: Feacture_img11,
      title: "Officevibe",
      buttons: ["Branded template"],
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" w-full py-14 bg-zinc-100 ">
      {/* Title */}
      <div className="w-full px-6 sm:px-12 py-10 sm:py-14 border-b border-gray-400">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold">
          Featured projects
        </h1>
      </div>

      {/* Cards Grid */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7 lg:px-12 px-2 ">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            buttons={card.buttons}
          />
        ))}
      </div>

      <div className="w-fit mx-auto ">
        <button className="px-6 py-3 rounded-3xl bg-black text-white uppercase flex gap-5 items-center">
          VIEW ALL CASE STUDIES
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
  );
};

export default Feature;

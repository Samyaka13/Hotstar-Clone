import React from "react";
import disney from "./../assets/Images/disney.png";
import starwars from "./../assets/Images/starwar.png";
import marvel from "./../assets/Images/marvel.png";
import national from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import pixarV from "./../assets/Videos/pixar.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import nationalV from "./../assets/Videos/national-geographic.mp4";
import starwarsV from "./../assets/Videos/star-wars.mp4";

function Production() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsV,
    },
    {
      id: 5,
      image: national,
      video: nationalV,
    },
  ];
  return (
    <div className="flex gap-5 p-2 px-8 md:px-8">
      {productionHouseList.map((item) => (
        <div className="border-[2px] mt-10 md:mt-0 scale-y-125 md:scale-y-100 rounded-lg border-gray-600 hover:md:scale-110 cursor-pointer transition-all duration-300 shadow-xl shadow-gray-800">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute  rounded-md z-0 opacity-0 hover:opacity-75"
          />
          <img src={item.image} alt="" className="w-full z-1" />
        </div>
      ))}
    </div>
  );
}

export default Production;

import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import logom from "./../assets/Images/LogoMobile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";
function Header() {
  const isMobile = window.innerWidth <= 767;
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex gap-20 md:flex md:gap-20 items-center justify-evenly md:justify-start p-5">
      {/* <div className='flex gap-8 items-center'>  */}
      <img
        src={isMobile ? logom : logo}
        className="w-[450px] justify-between md:w-[115px]"
      />
      <div className="hidden md:flex gap-20">
        {menu.map((item) => (
          <Headeritem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <div
        className="flex justify-evenly md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {/* <Headeritem name={""} Icon={HiDotsVertical} /> */}
        <HiDotsVertical className=" left-0 absolute top-[80px] text-[150px]" />
        {toggle ? (
          <div className="left-3 mx-16 absolute bg-[#121212] border-[1px] p-3 border-gray-700 px-5">
            {menu.map(
              (item, index) =>
                index > 0 && <Headeritem name={item.name} Icon={item.icon} />
            )}
          </div>
        ) : null}
      </div>
      <img
        src="src\assets\Images\profile.jpg"
        alt="Profile"
        className=" absolute left-[1300px] w-[200px] md:w-[40px] rounded-full "
      />
    </div>
  );
}
export default Header;

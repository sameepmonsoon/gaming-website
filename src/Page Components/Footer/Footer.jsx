import React from "react";
import {
  RiDiscordFill,
  SiXbox,
  BsPlaystation,
  BsTwitch,
} from "react-icons/all";
const Footer = () => {
  return (
    <div className="h-[57vh] lg:h-[20rem] w-full bg-background flex flex-col justify-between lg:justify-center items-center lg:py-0 py-[11rem]">
      <div className="h-[10rem] w-full lg:flex-row flex-col gap-3 flex items-center justify-center lg:justify-around">
        <div
          className="logo font-[1000] font-[oswald,sans] uppercase text-white text-[30px] bg-red min-w-[10rem] flex items-center justify-center border-[4px] border-yellow rounded-[2px] p-2"
          style={{
            clipPath:
              "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
          }}>
          Game
        </div>
        <ul className="w-[60%]  lg:h-[80%] flex lg:flex-row flex-col gap-y-10 lg:gap-y-0 justify-start items-center gap-x-10 uppercase text-white">
          <li className="text-xl font-bold w-[4rem] h-10 flex items-center justify-center">
            FAQ
          </li>
          <li className="text-xl font-bold w-[10rem] h-10 flex items-center justify-center">
            Terms of use
          </li>
          <li className="text-xl font-bold w-[10rem] h-10 flex items-center justify-center">
            help center
          </li>
          <li className="text-xl font-bold w-[4rem] h-10 flex items-center justify-center">
            privacy
          </li>
          <li className="text-xl font-bold w-[4rem] h-10 flex items-center justify-center">
            FAQ
          </li>
        </ul>
        <div className="flex justify-start items-center gap-x-5">
          <RiDiscordFill size={30} className="text-[#738adb]" />
          <SiXbox size={25} className="text-[#107c11]" />
          <BsPlaystation size={25} className="text-white" />
          <BsTwitch size={25} className="text-[#6441a5]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

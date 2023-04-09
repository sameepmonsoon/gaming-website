import React from "react";
import {
  RiDiscordFill,
  SiXbox,
  BsPlaystation,
  BsTwitch,
} from "react-icons/all";
const Footer = () => {
  return (
    <div className="h-[20rem] w-full bg-background flex flex-col justify-center items-center">
      <p className="h-[10rem] w-full flex items-center justify-around">
        <div
          className="logo font-[1000] text-white text-[30px] bg-red min-w-[10rem] flex items-center justify-center border-[4px] border-yellow rounded-[2px] p-2"
          style={{
            clipPath:
              "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
          }}>
          Game
        </div>
        <ul className="w-[60%] h-[80%] flex justify-start items-center gap-x-10 uppercase text-white">
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
          <BsPlaystation size={25}  className="text-white"/>
          <BsTwitch size={25} className="text-[#6441a5]"/>
        </div>
      </p>
    </div>
  );
};

export default Footer;

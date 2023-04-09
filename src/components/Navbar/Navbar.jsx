import React, { useState, useEffect } from "react";
import { HiBars3, GiGamepadCross } from "react-icons/all";
const Navbar = (props) => {
  const { links } = props;
  const [openSider, setOpenSider] = useState(false);
  useEffect(() => {
    if (openSider) {
      // to Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // t0 Enable scrolling
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSider]);

  return (
    <>
      <div className="fixed z-[10] h-[6.5rem] w-full bg-background font-[oswald,sans] transition-all  duration-700 linear uppercase flex justify-between sm:justify-around items-center px-10 text-white">
        <div className="flex justify-start items-center gap-1">
          <GiGamepadCross size={50} style={{ color: "#2CBCE9" }} />
          <div
            className="logo font-[1000] text-white text-[30px] bg-background min-w-[8rem] flex items-center justify-center border-[4px] border-yellow rounded-[2px]"
            style={{
              clipPath:
                "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
            }}>
            Game
          </div>
        </div>
        <div className="list hidden h-[4rem] w-full lg:flex justify-center items-center gap-4">
          {links.map((name, index) => (
            <li
              key={index}
              className="group  relative h-[4rem] min-w-[8.4%] cursor-pointer hover:bg-gray/10  text-[17px] font-bold text-white flex items-center justify-center ">
              {name}
              <span className="group-hover:h-[4px] group-hover:bg-yellow w-full absolute left-0 bottom-0 h-0">
                &nbsp;
              </span>
            </li>
          ))}
        </div>
        <div
          className="group flex relative h-[3rem] min-w-[5rem] md:min-w-[16rem] p-2 bg-gray/10 items-center justify-center cursor-pointer"
          onClick={() => {
            setOpenSider(!openSider);
          }}>
          <span className="hidden lg:flex items-center justify-center md:w-full">
            login / register
          </span>
          <HiBars3 sizee={30} className=" flex lg:hidden" />
          <span className="h-[4px] bg-yellow w-full absolute left-0 bottom-0">
            &nbsp;
          </span>
        </div>
      </div>

      {/* modal*/}
      <div
        className={`fixed lg:hidden flex flex-col z-[10] h-screen top-0 
        ${
          openSider === true ? "left-0 top-0 " : "left-[-50rem] top-0"
        }  bg-background w-[50%] font-[oswald,sans]] uppercase justify-start items-center gap-y-10 py-7`}>
        <div className="flex justify-start items-center gap-1">
          <GiGamepadCross size={50} style={{ color: "#2CBCE9" }} />

          <div
            className="logo order-1 font-[1000] text-white text-[30px] bg-background/80 min-w-[8rem] flex items-center justify-center border-[4px] border-yellow rounded-[2px]"
            style={{
              clipPath:
                "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
            }}>
            Game
          </div>
        </div>
        <div className="list order-2 relative  min-h-[4rem] w-[10rem] flex flex-col justify-start items-center gap-4">
          {links.map((name, index) => (
            <li
              key={index}
              className="group  relative h-[4rem] w-full cursor-pointer hover:bg-gray/10  text-[17px] font-bold text-white flex items-center justify-center ">
              {name}
              <span className="group-hover:h-[4px] group-hover:bg-red w-full absolute left-0 bottom-0 h-0">
                &nbsp;
              </span>
            </li>
          ))}
        </div>
        <div className="order-3 group relative h-[3rem] min-w-[11rem] p-2 bg-gray/10 flex items-center justify-center cursor-pointer text-white">
          login / register{" "}
          <span className="h-[4px] bg-yellow w-full absolute left-0 bottom-0">
            &nbsp;
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

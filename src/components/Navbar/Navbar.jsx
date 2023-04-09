import React from "react";

const Navbar = (props) => {
  const { links } = props;
  console.log(links);
  return (
    <div className="fixed z-[10] h-[6.5rem] w-full bg-background font-[oswald,sans]] uppercase flex justify-start sm:justify-around items-center px-10 text-white">
      <div
        className="logo font-[1000] text-white text-[30px] bg-red min-w-[8rem] flex items-center justify-center border-[4px] border-yellow rounded-[2px]"
        style={{
          clipPath:
            "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
        }}>
        Game
      </div>
      <div className="list h-[4rem] w-full flex justify-center items-center gap-4">
        {links.map((name, index) => (
          <li
            key={index}
            className="group  relative h-[4rem] w-[8.4%] cursor-pointer hover:bg-gray/10  text-[17px] font-bold text-white flex items-center justify-center ">
            {name}
            <span className="group-hover:h-[4px] group-hover:bg-red w-full absolute left-0 bottom-0 h-0">
              &nbsp;
            </span>
          </li>
        ))}
      </div>
      <div className="group relative h-[3rem] min-w-[11rem] p-2 bg-gray/10 flex items-center justify-center cursor-pointer">
        login / register{" "}
        <span className="h-[4px] bg-red w-full absolute left-0 bottom-0">
          &nbsp;
        </span>
      </div>
    </div>
  );
};

export default Navbar;

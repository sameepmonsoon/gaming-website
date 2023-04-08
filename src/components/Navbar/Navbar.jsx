import React from "react";

const Navbar = (props) => {
  const {} = props;
  return (
    <div className="h-20 w-full bg-[rgb(38,40,49)] text-white font-[oswald,sans]] uppercase flex justify-start sm:justify-around items-center px-10">
      <div
        className="logo font-[1000] text-[30px] bg-[#FA1E4E] min-w-[8rem] flex items-center justify-center border-[2px] border-yellow-500 rounded-[2px]"
        style={{
          clipPath:
            "polygon(25% 0%, 100% 0, 100% 50%, 83% 100%, 0 100%, 0% 50%)",
        }}>
        Game
      </div>
      <div className="list bg-[#FA1E4E] h-10 w-full">list</div>
    </div>
  );
};

export default Navbar;

import React from "react";
import image from "../../assets/gaming.png";
import gamer from "../../assets/gamer.png";
import { RiCoinsLine, SiGamejolt } from "react-icons/all";
const MidSection = () => {
  return (
    <div className="h-screen w-full bg-background/90 flex  flex-col justify-center items-center pb-2">
      <div className="flex w-full h-[95%] items-center justify-around">
        <span className="bg-background w-[600px] h-[405px] rounded-[4px] flex flex-col items-start justify-start p-10 border-[1px] border-gray/20 hover:border-gray/30">
          <h4 className="font-bold text-white text-2xl">Find team member</h4>
          <h3 className="text-[3.5rem] font-[1000] text-yellow">
            Experience the new age gaming
          </h3>
          <span className="text-white text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            eos iure ad rem facilis sunt temporibus tempore dolorum maxime
            repellendus doloremque aperiam obcaecati quam autem error modi, non
            quisquam molestiae!
          </span>
        </span>
        <span className="h-[30rem] w-[23%]">
          <img src={image} alt="" className="h-full" />
        </span>
      </div>
      <div className="w-3/6 min-h-[20%] bg-transparent text-white rounded-[10px] border-[1px] border-gray/40 flex justify-between items-center px-10">
        <span className="tournament w-[300px] border-[1px] border-gray/20 hover:border-gray/30 h-[150px] rounded-md flex flex-col justify-between items-start p-2 bg-background">
          <p className="text-xl font-bold">Participate</p>
          <p className="text-2xl font-extrabold">Join Tournaments</p>
          <p className="overflow-hidden font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          </p>
        </span>
        <span className="tournament w-[150px] h-[150px] border-[1px] border-gray/20 hover:border-gray/30 rounded-md flex flex-col justify-between items-start p-2 bg-background">
          <p className="text-yellow font-bold flex flex-col justify-center items-center gap-y-5 uppercase text-[16px]">
            <span>Win big prizes</span> <RiCoinsLine size={45} />
            <span>rs 10,000</span>
          </p>
        </span>
        <span className="tournament w-[200px] h-[150px] rounded-md flex border-[1px] border-gray/20 hover:border-gray/30 flex-col justify-center items-center p-2 bg-background gap-y-2">
          <p className="text-white font-bold flex flex-col justify-center items-center gap-y-5 uppercase text-[16px]">
            <span>Recent Winner</span>
            <span>
              <SiGamejolt size={50} />
            </span>
          </p>
          <p className="h-[1.7rem] bg-black/50  border-[1pt] border-gray/20 hover:border-gray/30 cursor-pointer w-20 flex justify-center rounded-[4px] p-[2px]">
            Jolt
          </p>
        </span>
      </div>
    </div>
  );
};

export default MidSection;

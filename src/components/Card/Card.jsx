import React from "react";
import { HiPlusSm } from "react-icons/all";
import { HiOutlineHeart } from "react-icons/hi2";
const Card = (props) => {
  const { image, productName, price, productBrand } = props;
  return (
    <div className="h-[20rem] w-[30rem] p-4 gap-y-5 sm:h-[35rem] sm:w-[28rem] flex flex-col justify-start items-start ">
      <p className=" w-full h-3/5 bg-background cursor-pointer hover:border-gray/40 rounded-[10px] overflow-hidden border-[1px] border-gray/30">
        <img src={image} alt="" className="h-full w-full rounded-md" />
      </p>
      <p className="flex flex-col justify-center items-start w-full">
        <span className="font-[1000] text-[25px]">{productName}</span>
        <span className="flex justify-between items-center w-full text-xl">
          {productBrand}
          <span className="font-[1000] text-[25px] uppercase">
            {price}
          </span>{" "}
        </span>
      </p>
      <p className="flex justify-between items-center w-full">
        <button
          className="flex justify-center items-center text-lg font-bold bg-background h-[4rem] w-[10rem] rounded-[4px]"
          style={{
            clipPath:
              "polygon(25% 0%, 100% 0%, 100% 50%, 80% 100%, 0 100%, 0% 50%)",
          }}>
          <HiPlusSm size={30} />
          Add to cart
        </button>
        <button
          className="hover:text-red bg-background h-[3.5rem] w-[4.5rem] flex justify-center items-center rounded-[4px]"
          style={{
            clipPath:
              "polygon(35% 0%, 100% 0, 100% 50%, 70% 100%, 0 100%, 0% 50%)",
          }}>
          <HiOutlineHeart size={25} />
        </button>
      </p>
    </div>
  );
};

export default Card;

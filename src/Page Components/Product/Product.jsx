import React from "react";
import Card from "../../components/Card/Card";
import image from "../../assets/gaming.png";
import image1 from "../../assets/min.png";
const Product = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-start items-center bg-background/90 text-white gap-20">
      <h1 className="text-7xl font-[1000] leading-[10rem] font-sans uppercase border-b-4 border-b-red">
        Check <span className="text-yellow">our products</span>
      </h1>
      <div className="flex justify-start items-center gap-x-10 w-[90%]">
        <Card
          image={image}
          productName={"Gaming"}
          price={"Rs 1800"}
          productBrand={"E-sports"}
        />
        <Card
          image={image1}
          productName={"Controler"}
          price={"Rs 2000"}
          productBrand={"Nvdia"}
        />
        <Card
          image={image1}
          productName={"Controler"}
          price={"Rs 2000"}
          productBrand={"Nvdia"}
        />
        <Card
          image={image1}
          productName={"Controler"}
          price={"Rs 2000"}
          productBrand={"Nvdia"}
        />
      </div>
    </div>
  );
};

export default Product;

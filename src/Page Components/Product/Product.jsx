import React from "react";
import Card from "../../components/Card/Card";
import image from "../../assets/gaming.png";
import image1 from "../../assets/midsecton.png";
const Product = () => {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center bg-background/90 text-white gap-20">
      <h1 className="text-2xl sm:text-[5xl] lg:text-7xl font-[1000] leading-[5rem] sm:leading-[10rem] font-sans uppercase border-b-4 border-b-red">
        Check <span className="text-yellow">our products</span>
      </h1>
      <div className="flex lg:flex-row flex-col justify-start items-center gap-x-1 w-[100%] flex-wrap px-10">
        <Card
          image={image}
          productName={"Gaming"}
          price={"Rs 1800"}
          productBrand={"E-sports"}
        />
        <Card
          image={image1}
          productName={"Controller"}
          price={"Rs 2000"}
          productBrand={"Sony"}
        />
        <Card
          image={image}
          productName={"Controller"}
          price={"Rs 2000"}
          productBrand={"Sony"}
        />
        <Card
          image={image1}
          productName={"Controller"}
          price={"Rs 2000"}
          productBrand={"X-box"}
        />
      </div>
    </div>
  );
};

export default Product;

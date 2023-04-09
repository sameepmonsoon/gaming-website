import React from "react";
import Slider from "../../components/Slider/Slider";
import image2 from "../../assets/gaming.png";
import image3 from "../../assets/midsecton.png";
const SliderSection = () => {
  const images = [`${image2}`, `${image3}`];
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-background/90">
      <div className="slider">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default SliderSection;

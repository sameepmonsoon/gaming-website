import React, { useState } from "react";
import { VscCircleFilled, MdOutlineDoubleArrow } from "react-icons/all";

const Slider = (props) => {
  const { images } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(images.length - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  return (
    <div
      style={{
        clipPath:
          "polygon(15% 0%, 100% 0%, 100% 80%, 83% 100%, 0 100%, 0% 20%)",
      }}
      className="select-none h-[20rem] sm:h-[35rem] w-[20rem] sm:w-[40rem] transition-all duration-[] ease-linear focus:outline-none rounded-md bg-yellow flex flex-row  overflow-hidden justify-center relative  p-1 ">
      <div>
        <div className="image absolute w-full h-full top-0 left-0">
          <img src={images[slideIndex]} alt="" className="h-full w-full" />
        </div>
        <MdOutlineDoubleArrow
          size={75}
          className="absolute top-[45%] left-1 cursor-pointer fill-background text-background rotate-180"
          onClick={prevSlide}
        />
        <MdOutlineDoubleArrow
          size={75}
          className="absolute top-[45%] right-1 cursor-pointer fill-background text-background"
          onClick={nextSlide}
        />
      </div>
      <div className="absolute h-[10px]  flex bottom-7 text-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === slideIndex && "text-red  "
            } cursor-pointer `}>
            <VscCircleFilled
              size={45}
              onClick={() => setSlideIndex(index)}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const Hero = () => {
  const slides = [
    { img: "/imgSlider/promotion.jpg" },
    { img: "/imgSlider/slider-2.jpg" },
    { img: "/imgSlider/slider-3.jpeg" },
    { img: "/imgSlider/slider-4.jpg" },
    { img: "/imgSlider/slider-5.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const slideRight = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
      slideRight();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-[13rem] group p-3 md:h-[26rem] md:p-6 lg:h-[30rem] lg:p-8 xl:h-[40rem] xl:p-10 2xl:h-[70rem] 2xl:p-18 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="object-cover h-full w-full bg-center bg-cover duration-500 rounded-2xl "
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 lg:left-10 xl:left-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <MdKeyboardArrowLeft onClick={slideLeft} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 lg:right-10 xl:right-16 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <MdKeyboardArrowRight onClick={slideRight} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="text-2xl cursor-pointer"
            onClick={() => setCurrentIndex(slideIndex)}
          >
            <BsDot />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

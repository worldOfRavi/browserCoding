import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
function ImageSliderSecond() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftClick = () => {
    const currentIndex = (currentSlide - 1 + slides.length)%(slides.length);
    setCurrentSlide(currentIndex)
  };
  const handleRightClick = () => {
    const currentIndex = (currentSlide + 1)%(slides.length);
    setCurrentSlide(currentIndex)
  };

  const fetchImageData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const data = await response.json();
    setSlides(data);
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {slides &&
        slides.length > 0 &&
        slides.map((imageItem, index) => {
          return (
            <div
              key={imageItem.id}
              className="w-[400px] h-[200px] relative  overflow-hidden"
            >
              <img
                src={imageItem.download_url}
                className={`w-[500px] h-[320px] object-cover  top-0 left-0 absolute ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              />
              <div>
                <button onClick={handleLeftClick} className="absolute top-1/2 left-5 transform translate-y-1/2 text-white">
                  <FaCircleArrowLeft />
                </button>
                <button onClick={handleRightClick} className="absolute top-1/2 right-5 transform translate-y-1/2 text-white">
                  <FaCircleArrowRight />
                </button>
              </div>
              <div>
                {slides &&
                  slides.length > 0 &&
                  slides.map((imageItem) => {
                    return (
                      <span className="w-5 h-5 rounded-full bg-white absolute -bottom-20 left-10 z-10"></span>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ImageSliderSecond;

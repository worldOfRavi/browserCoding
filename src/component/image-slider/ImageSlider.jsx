// import React, { useEffect, useState } from "react";
// import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

// function ImageSliderSecond() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleLeftClick = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleRightClick = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const fetchImageData = async () => {
//     const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
//     const data = await response.json();
//     setSlides(data);
//   };

//   useEffect(() => {
//     fetchImageData();
//   }, []);

//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       {slides.length > 0 && (
//         <div className="w-[500px] h-[320px] relative overflow-hidden">
//           {/* Display only the current slide */}
//           <img
//             src={slides[currentSlide].download_url}
//             className="w-[500px] h-[320px] object-cover absolute top-0 left-0"
//           />

//           {/* Navigation buttons */}
//           <button onClick={handleLeftClick} className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white">
//             <FaCircleArrowLeft />
//           </button>
//           <button onClick={handleRightClick} className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white">
//             <FaCircleArrowRight />
//           </button>

//           {/* Dots Indicator */}
//           <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
//             {slides.map((_, index) => (
//               <span
//                 key={index}
//                 className={`w-3 h-3 rounded-full bg-white transition-all ${
//                   index === currentSlide ? "opacity-100 scale-110" : "opacity-50"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImageSliderSecond;

import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
function ImageSliderSecond({ url, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (getUrl) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=3&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

//   function to handle left slide
function handleLeftSlide(getCurrentSlide){
    setCurrentSlide((prev)=>((prev -1 + images.length))%images.length)
}

// function to handle right slide
function handleRighttSlide(getCurrentSlide){
    setCurrentSlide((prev)=>((prev + 1))%images.length)
}

  useEffect(() => {
    if (url != null) fetchImages(url);
  }, [url, limit]);

  console.log(images);

  if (isLoading) {
    return <p>Images are loading please wait...</p>;
  }

  if (error !== null) {
    return <p>Error Occured : {error}</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {images && images.length > 0 && (
        <div className="w-[450px] h-[300px] relative">
          <img
            src={images[currentSlide].download_url}
            alt="random image"
            className="w-full h-full absolute transition object-cover  duration-1000"
          />
            {/* navigation buttons */}
          <button onClick={handleLeftSlide} className="absolute left-5 top-1/2 text-white transform -traslate-y-1/2"><FaCircleArrowLeft /></button>
          <button onClick={handleRighttSlide} className="absolute right-5 top-1/2 text-white transform -traslate-y-1/2"><FaCircleArrowRight /></button>

          {/* dot buttons */}

          <div className="absolute bottom-5 transform left-1/2 -translate-x-1/2 flex gap-2">
          {
            images && images.length > 0  && images.map((_, index)=>{
                return <span  className={`w-4 h-4 bg-white rounded-full ${index === currentSlide ? "opacity-100 scale-110" : "opacity-50"}`}></span>
            })  
          }
          </div> 
        </div>
      )}
    </div>
  );
}

export default ImageSliderSecond;

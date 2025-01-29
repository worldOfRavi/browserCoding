import React, { useEffect, useState } from "react";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
const slides = [bannerOne, bannerTwo, bannerThree];
const IamgeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
    const timer = setInterval(()=>{
        setCurrentSlide(prevSlide=>(prevSlide+1)%slides.length)
    },5000);

    return ()=>clearInterval(timer);
  },[])
  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      {slides.map((item, index) => (
        <img
          src={item}
          alt="banner"
          className={` ${index === currentSlide ? "opacity-100" : "opacity-0"} object-cover absolute top-0 left-0 w-full height-full transition-opacity duration-1000`}
        />
      ))}

      <button 
      onClick={()=>setCurrentSlide(preSlide=>(preSlide - 1 + slides.length)%slides.length)}
      className="absolute top-1/2 left-4 cursor-pointer bg-slate-100 py-1.5 px-3 hover:bg-slate-400 rounded-md">
        <ChevronLeftIcon />
      </button>
      <button 
      onClick={()=>setCurrentSlide(preSlide=>(preSlide + 1)%slides.length)}
      className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2 bg-slate-100 py-1.5 px-3 hover:bg-slate-400 rounded-md">
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default IamgeSlider;

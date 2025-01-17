"use client";

import { sliderItems } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % sliderItems.length),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text container */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 font-bold text-primary lg:h-full">
        <h1 className="p-4 text-center text-5xl uppercase md:p-10 md:text-6xl xl:text-7xl">
          {sliderItems[currentSlide].title}
        </h1>
        <Button>Order Now</Button>
      </div>
      {/* Image container */}
      <div className="relative w-full flex-1 lg:h-full">
        <Image
          src={sliderItems[currentSlide].image}
          alt={""}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;

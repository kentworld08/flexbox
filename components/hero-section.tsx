"use client";

import { useState, useEffect } from "react";
import { heroImages } from "@/constants/Data";
import Navbar from "./Navbar";
import { people } from "@/constants/Data";

const maxVisible = 4;
const visiblePeople = people.slice(0, maxVisible);
const extraCount = people.length - maxVisible;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden md:px-[80px]">
      <div className="absolute inset-0">
        <img
          src={currentImage || "/placeholder.svg"}
          alt={`Hero background ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>
      <Navbar />

      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-100px)] px-4 md:px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white/90 text-sm md:text-base">
              Latest Movies
            </span>
            <div className="flex -space-x-2">
              {visiblePeople.map((person, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-${person.from} to-${person.to} border-2 border-white flex items-center justify-center`}
                >
                  <span className="text-xs font-bold text-white">
                    {person.name}
                  </span>
                </div>
              ))}

              {extraCount > 0 && (
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">
                    +{extraCount}
                  </span>
                </div>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            FLEXBOX WORLD
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Connect today and start your Adventure
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 ">
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-4 md:h-2 rounded-md transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[linear-gradient(to_right,_#F22801,_#FC9000)] scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

  
    </div>
  );
}

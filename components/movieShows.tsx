"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { movies, shows } from "@/constants/Data";

export default function MovieShowsCarousel() {
  const [activeTab, setActiveTab] = useState("movies");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const currentItems = activeTab === "movies" ? movies : shows;

  const cardWidth = 270;
  const cardHeight = 400;
  const cardGap = 32;

  const centerScale = 1.2;
  const sideScale = 0.9;

  const scaledSideCardWidth = cardWidth * sideScale;
  const scaledCenterCardWidth = cardWidth * centerScale;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(currentItems.length - 3, prevIndex + 1)
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const [trackTransform, setTrackTransform] = useState("translateX(0px)");

  useEffect(() => {
    if (carouselTrackRef.current && carouselContainerRef.current) {
      const containerWidth = carouselContainerRef.current.offsetWidth;

      const offsetToCurrentIndexStart = currentIndex * (cardWidth + cardGap);
      const offsetWithinGroupToMiddleCardCenter =
        scaledSideCardWidth + cardGap + scaledCenterCardWidth / 2;
      const totalOffsetToMiddleCardCenter =
        offsetToCurrentIndexStart + offsetWithinGroupToMiddleCardCenter;

      const newTransformX = containerWidth / 2 - totalOffsetToMiddleCardCenter;

      setTrackTransform(`translateX(${newTransformX}px)`);
    }
  }, [
    currentIndex,
    activeTab,
    currentItems.length,
    cardWidth,
    cardGap,
    scaledSideCardWidth,
    scaledCenterCardWidth,
  ]);

  const getCardStyle = (itemIndex: number) => {
    let scale = 1;
    let opacity = 0;
    let zIndex = 1;

    if (itemIndex === currentIndex) {
      scale = sideScale;
      opacity = 1;
      zIndex = 2;
    } else if (itemIndex === currentIndex + 1) {
      scale = centerScale;
      opacity = 1;
      zIndex = 3;
    } else if (itemIndex === currentIndex + 2) {
      scale = sideScale;
      opacity = 1;
      zIndex = 2;
    }

    return {
      transform: `scale(${scale})`,
      transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
      opacity: opacity,
      zIndex: zIndex,
    };
  };

  return (
    <section
      id="channels"
      className="bg-[#111111] text-white py-12 md:py-20 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 w-full max-w-5xl">
        <div className="flex justify-center mb-12 ">
          <div className="relative flex rounded-full p-1 bg-transparent border border-[#FC9000]">
            <Button
              onClick={() => setActiveTab("movies")}
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === "movies"
                  ? "bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              Movies
            </Button>
            <Button
              onClick={() => setActiveTab("shows")}
              className={`relative px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === "shows"
                  ? "bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              Shows
            </Button>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden py-4"
          ref={carouselContainerRef}
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselTrackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: trackTransform }}
          >
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-orange-500"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginRight:
                    index < currentItems.length - 1 ? `${cardGap}px` : "0",
                  ...getCardStyle(index),
                }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous item"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= currentItems.length - 3}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next item"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

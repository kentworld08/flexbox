"use client";
import { useState, useEffect } from "react";
import { movieCards } from "@/constants/Data";

export default function Channel() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentCardIndex < movieCards.length - visibleCards) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isPrevDisabled = currentCardIndex === 0;
  const isNextDisabled = currentCardIndex >= movieCards.length - visibleCards;

  return (
    <div
      id="channels"
      className="relative w-full mx-auto overflow-hidden px-4  py-20 bg-primaryC"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentCardIndex * (100 / visibleCards)}%)`,
        }}
      >
        {movieCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div
              className="relative w-full rounded-lg shadow-md h-96 flex items-end overflow-hidden hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('${card.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6 text-white text-left">
                <p className="text-[12px] mb-1 font-bold BG-GRADIENT w-fit px-2 py-1 rounded-full">
                  {card.channels}
                </p>
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white cursor-pointer text-white p-2 rounded-full ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Previous card"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-6 h-6 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white cursor-pointer text-white p-2 rounded-full ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Next card"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-6 h-6 text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

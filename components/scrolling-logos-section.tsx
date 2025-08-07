"use client";

import { useState, useRef, useEffect } from "react";
import { movieCards } from "@/constants/Data";

export default function ScrollingLogosSection() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);
  const cardGap = 24;
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateMeasurements = () => {
      if (containerRef.current && carouselRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        const cardEl = carouselRef.current.querySelector<HTMLDivElement>("div");
        if (cardEl) {
          const actualCardWidth = cardEl.getBoundingClientRect().width;
          const totalCardWidth = actualCardWidth + cardGap;
          setCardWidth(totalCardWidth);

          const visibleCards = Math.floor(containerWidth / totalCardWidth);
          setCardsPerView(visibleCards > 0 ? visibleCards : 1);

          setCurrentMovieIndex((prevIndex) => {
            const maxIndex = movieCards.length - visibleCards;

            return Math.min(Math.max(prevIndex, 0), Math.max(maxIndex, 0));
          });
        }
      }
    };

    updateMeasurements();

    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  // Scroll via transform only on desktop (md+)
  useEffect(() => {
    if (!carouselRef.current) return;

    const handleScrollTransform = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        const offset = currentMovieIndex * cardWidth;
        carouselRef.current!.style.transform = `translateX(-${offset}px)`;
      } else {
        carouselRef.current!.style.transform = "";
      }
    };

    handleScrollTransform();

    window.addEventListener("resize", handleScrollTransform);
    return () => window.removeEventListener("resize", handleScrollTransform);
  }, [currentMovieIndex, cardWidth]);

  const handleNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => {
      const maxIndex = movieCards.length - cardsPerView;
      return Math.min(prevIndex + 1, Math.max(maxIndex, 0));
    });
  };

  const handlePrevMovie = () => {
    setCurrentMovieIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="py-16 bg-[#111111] overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="mt-20">
          <div className="relative group">
            <button
              onClick={handlePrevMovie}
              disabled={currentMovieIndex === 0}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
              onClick={handleNextMovie}
              disabled={currentMovieIndex >= movieCards.length - cardsPerView}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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

            {/* Carousel container */}
            <div className="overflow-x-auto md:overflow-hidden rounded-2xl scroll-smooth">
              <div
                ref={carouselRef}
                className="flex gap-6 px-6 py-4 transition-transform duration-500 ease-in-out md:overflow-hidden"
                style={{ scrollBehavior: "smooth" }}
              >
                {movieCards.map((movie, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[85vw] sm:w-72 md:w-80 h-96 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url(${
                        movie.image || "/placeholder.svg"
                      })`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 p-6 z-10">
                      <h2 className="w-[91px] rounded-[16px] py-[2px] px-[8px] text-white bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-[12px] font-medium">
                        {movie.channels}
                      </h2>
                      <p className="text-white text-sm leading-relaxed">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

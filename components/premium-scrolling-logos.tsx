"use client";
import { logo } from "@/constants/Data";
import Image from "next/image";

interface infiniteLogosProps {
  name: string;
  url: string;
  color: string;
}
[];

export default function PremiumScrollingLogos() {
  const infiniteLogos: infiniteLogosProps[] = [...logo, ...logo, ...logo];

  return (
    <section className=" px-4 lg:px-[80px] py-20 bg-[#111111] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[#111111]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] leading-[1.2] text-center mb-8 font-mediumleading-[102px] bg-clip-text text-transparent bg-gradient-to-r from-[#F22801] to-[#FC9000] hover:text-transparent lg:w-[900px] mx-aut">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base lg:text-[17px] font-normal text-gray-300 max-w-[576px] mx-auto leading-[28px]">
            Partnering with the world's leading entertainment companies to bring
            you the best movie experience
          </p>
        </div>
        <div className="relative mb-12 ">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-smooth hover:pause-animation">
              {infiniteLogos.map((logo, index) => (
                <div
                  key={`main-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${logo.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 scale-110`}
                    />

                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-800/80">
                      <Image
                        height={80}
                        width={144}
                        src={logo.url || "/placeholder.svg"}
                        alt={`${logo.name} logo`}
                        className="w-48 h-32 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-reverse hover:pause-animation">
              {infiniteLogos
                .slice()
                .reverse()
                .map((logo, index) => (
                  <div
                    key={`secondary-${index}`}
                    className="flex-shrink-0 mx-6 group cursor-pointer"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${logo.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-110`}
                      />

                      <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-2 border border-gray-800/60 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800/60">
                        <Image
                          height={64}
                          width={112}
                          src={logo.url || "/placeholder.svg"}
                          alt={`${logo.name} logo`}
                          className="w-28 h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 opacity-60 group-hover:opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

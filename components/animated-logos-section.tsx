"use client"

import { useEffect, useState } from "react"

export default function AnimatedLogosSection() {
  const [isVisible, setIsVisible] = useState(false)

  const logos = [
    {
      name: "Netflix",
      url: "/placeholder.svg?height=80&width=140&text=Netflix",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Disney+",
      url: "/placeholder.svg?height=80&width=140&text=Disney%2B",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Warner Bros",
      url: "/placeholder.svg?height=80&width=140&text=Warner+Bros",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Universal",
      url: "/placeholder.svg?height=80&width=140&text=Universal",
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Paramount",
      url: "/placeholder.svg?height=80&width=140&text=Paramount",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "Sony Pictures",
      url: "/placeholder.svg?height=80&width=140&text=Sony+Pictures",
      color: "from-gray-700 to-gray-800",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium Content Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Featuring exclusive content from Hollywood's biggest studios and streaming platforms
          </p>
        </div>

        {/* Animated Logos */}
        <div className="relative">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${logo.color} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Logo Container */}
                  <div className="relative bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
                    <img
                      src={logo.url || "/placeholder.svg"}
                      alt={`${logo.name} logo`}
                      className="w-32 h-16 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Animation */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" />
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-50" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Movies Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400">Studio Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4K</div>
            <div className="text-gray-400">Ultra HD Quality</div>
          </div>
        </div>
      </div>
    </section>
  )
}

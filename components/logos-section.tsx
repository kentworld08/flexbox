import { Card } from "@/components/ui/card"

export default function Component() {
  const logos = [
    {
      name: "Netflix",
      url: "/placeholder.svg?height=60&width=120&text=Netflix",
      alt: "Netflix logo",
    },
    {
      name: "Disney+",
      url: "/placeholder.svg?height=60&width=120&text=Disney%2B",
      alt: "Disney Plus logo",
    },
    {
      name: "Warner Bros",
      url: "/placeholder.svg?height=60&width=120&text=Warner+Bros",
      alt: "Warner Bros logo",
    },
    {
      name: "Universal",
      url: "/placeholder.svg?height=60&width=120&text=Universal",
      alt: "Universal Studios logo",
    },
    {
      name: "Paramount",
      url: "/placeholder.svg?height=60&width=120&text=Paramount",
      alt: "Paramount Pictures logo",
    },
    {
      name: "Sony Pictures",
      url: "/placeholder.svg?height=60&width=120&text=Sony+Pictures",
      alt: "Sony Pictures logo",
    },
    {
      name: "HBO Max",
      url: "/placeholder.svg?height=60&width=120&text=HBO+Max",
      alt: "HBO Max logo",
    },
    {
      name: "Amazon Prime",
      url: "/placeholder.svg?height=60&width=120&text=Prime+Video",
      alt: "Amazon Prime Video logo",
    },
    {
      name: "Apple TV+",
      url: "/placeholder.svg?height=60&width=120&text=Apple+TV%2B",
      alt: "Apple TV Plus logo",
    },
    {
      name: "Hulu",
      url: "/placeholder.svg?height=60&width=120&text=Hulu",
      alt: "Hulu logo",
    },
    {
      name: "MGM",
      url: "/placeholder.svg?height=60&width=120&text=MGM",
      alt: "MGM Studios logo",
    },
    {
      name: "20th Century",
      url: "/placeholder.svg?height=60&width=120&text=20th+Century",
      alt: "20th Century Studios logo",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with the world's leading entertainment companies to bring you the best movie experience
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border border-gray-200 w-full h-24 flex items-center justify-center group cursor-pointer"
            >
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">And many more entertainment partners worldwide</p>
        </div>
      </div>
    </section>
  )
}

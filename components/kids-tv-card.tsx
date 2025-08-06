import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star } from "lucide-react"

export default function Component() {
  return (
    <Card className="w-full max-w-md overflow-hidden relative group cursor-pointer transition-transform hover:scale-105">
      <div className="relative h-64">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=256&width=384')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <CardContent className="relative h-full p-6 flex flex-col justify-between text-white">
          {/* Top Badge */}
          <div className="flex justify-between items-start">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-1">12k channels</Badge>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Premium</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Play className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">For Kids</h2>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed">
              We have a huge amount of TV content for children. Watch only the best channels with children's cartoons
              and educational programs.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                Cartoons
              </Badge>
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                Educational
              </Badge>
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                Safe Content
              </Badge>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

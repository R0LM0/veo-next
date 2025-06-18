import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Sparkles, ArrowRight, Recycle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="py-20 md:py-32">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                ✨ 100% Artesanal
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Cuida tu piel con
                <span className="text-purple-600"> VEO</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-[600px] text-justify">
                VEO es una línea de jabones artesanales elaborados con ingredientes naturales, pensada para adolescentes y adultos que desean cuidar su piel de forma saludable, divertida y personalizada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Conoce Nuestra Historia
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span>100% Ecológico</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="h-4 w-4 text-pink-500" />
                <span>Reutilizable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span>Artesanal</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Jabones VEO"
              width={600}
              height={600}
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 
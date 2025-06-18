import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonios = [
  {
    nombre: "María González",
    testimonio:
      "Los jabones de VEO han transformado mi rutina de cuidado. Mi piel nunca se había sentido tan suave y nutrida.",
    rating: 5,
  },
  {
    nombre: "Carlos Rodríguez",
    testimonio: "Increíble calidad y aromas naturales. Se nota que están hechos con amor y dedicación.",
    rating: 5,
  },
  {
    nombre: "Ana Martínez",
    testimonio: "Perfectos para pieles sensibles. Mis hijos y yo los usamos todos los días sin problemas.",
    rating: 5,
  },
]

export default function TestimoniosSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-yellow-100 text-yellow-800">
            Testimonios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <Card key={index} className="p-6 border-purple-100">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-center italic text-gray-600">"{testimonio.testimonio}"</blockquote>
                <p className="text-center font-semibold text-purple-800">{testimonio.nombre}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
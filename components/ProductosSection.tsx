import { Badge } from "@/components/ui/badge"
import ProductCard from "./ProductCard"

interface Producto {
  id: number
  nombre: string
  precio: string
  imagen: string
  descripcion: string
  ingredientes: string[]
  beneficios: string[]
  proceso: string
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Jabón de Zanahoria",
    precio: "C$00.00",
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Jabón artesanal elaborado con zanahoria, miel de abeja y vitamina E, ideal para piel seca o sensible.",
    ingredientes: [
      "Extracto natural de zanahoria",
    "Miel de abeja pura",
    "Vitamina E natural",
    "Aceite de coco virgen",
    "Manteca de karité",
    "Glicerina vegetal"
    ],
    beneficios: [
      "Hidrata profundamente la piel",
      "Nutre & revitaliza la piel",
      "Suaviza y ayuda a equilibrar la piel seca o sensible",
      "Libre de químicos agresivos",
    ],
    proceso:
      "Elaborado mediante el método de saponificación en frío, curado durante 6 semanas para obtener la máxima suavidad y durabilidad.",
  },
  {
    id: 2,
    nombre: "Jabón de Flor de Jamaica",
    precio: "C$00.00",
    imagen: "/placeholder.svg?height=300&width=300",
    descripcion: "Jabón artesanal con flor de jamaica, aceite de coco y esencia de rosa. Exfolia suavemente, hidrata y equilibra la piel.",
    ingredientes: [
      "Flor de jamaica seca",
      "Aceite de coco virgen",
      "Esencia de rosa natural",
      "Glicerina vegetal",
      "Manteca de karité"
    ],
    beneficios: [
      "Exfolia e hidrata suavemente el rostro",
      "Mejora la textura de la piel",
      "Aporta luminosidad natural",
      "Calma y equilibra la piel",
      "Deja una sensación fresca y suave"
    ],
    proceso:
      "Elaborado mediante saponificación en frío, infusionado con flor de jamaica y curado durante 5-6 semanas para preservar sus propiedades naturales.",
  }
  
]

export default function ProductosSection() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-purple-100 text-purple-800">
            Productos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Nuestros Jabones Artesanales
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Cada jabón es único, elaborado a mano con ingredientes naturales seleccionados
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  )
} 
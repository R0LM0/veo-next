"use client"

import { Badge } from "@/components/ui/badge"
import ProductCard from "./ProductCard"
import productos from "@/lib/productos"

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

        {/* Responsive y con tarjetas iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {productos.map((producto) => (
  <div key={producto.id} id={producto.slug}>
    <ProductCard producto={producto} />
  </div>
))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useParams } from "next/navigation"
import productos from "@/lib/productos"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Leaf, Sparkles, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductoPage() {
  const params = useParams()
  const slug = params?.slug as string

  const producto = productos.find((p) => p.slug === slug)
  if (!producto) return notFound()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-purple-800 mb-2">{producto.nombre}</h1>
            <p className="text-lg text-gray-700">{producto.descripcion}</p>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold mt-4 md:mt-0">
            {producto.precio}
          </Badge>
        </div>

        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={producto.imagen || "/placeholder.svg"}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-purple-800">Ingredientes Naturales</h4>
            <ul className="space-y-2">
              {producto.ingredientes.map((ing, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{ing}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3 text-purple-800">Beneficios</h4>
            <ul className="space-y-2">
              {producto.beneficios.map((ben, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-purple-800">Proceso Artesanal</h4>
          <p className="text-gray-600">{producto.proceso}</p>
        </div>

        <div className="flex gap-4 pt-4">
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Agregar al Carrito - {producto.precio}
          </Button>
          <Button variant="outline" className="border-purple-300 text-purple-700">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

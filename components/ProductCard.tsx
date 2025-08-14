"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Leaf, Sparkles, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Producto {
  id: number
  nombre: string
  precio: string
  imagen: string
  descripcion: string
  ingredientes: string[]
  beneficios: string[]
  proceso: string
  slug: string
}

interface ProductCardProps {
  producto: Producto
}

export default function ProductCard({ producto }: ProductCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <Card className="flex flex-col justify-between h-full overflow-hidden hover:shadow-lg transition-shadow border-purple-100">
      <div>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={imgError ? "/placeholder.svg" : producto.imagen}
            alt={producto.nombre}
            fill
            onError={() => setImgError(true)}
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl text-gray-900">{producto.nombre}</CardTitle>
              <CardDescription className="mt-2">{producto.descripcion}</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">
              {producto.precio}
            </Badge>
          </div>
        </CardHeader>
      </div>

      <CardContent className="space-y-4 mt-auto">
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Ver Detalles</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-purple-800">{producto.nombre}</DialogTitle>
                <DialogDescription className="text-lg">{producto.descripcion}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={imgError ? "/placeholder.svg" : producto.imagen}
                    alt={producto.nombre}
                    height={300}
                   width={300}
                    fill
                    className="object-cover "
                    onError={() => setImgError(true)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-purple-800">Ingredientes Naturales</h4>
                    <ul className="space-y-2">
                      {producto.ingredientes.map((ingrediente, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Leaf className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{ingrediente}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-purple-800">Beneficios</h4>
                    <ul className="space-y-2">
                      {producto.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Sparkles className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">{beneficio}</span>
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

                <div className="pt-6 text-center text-sm text-gray-400">
                  ¿Desde un QR o link?{" "}
                  <Link
                    href={`/producto/${producto.slug}`}
                    className="text-purple-600 hover:underline"
                  >
                    Ver versión completa
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

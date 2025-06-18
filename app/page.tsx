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
import {
  Heart,
  Leaf,
  Sparkles,
  ShoppingCart,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VeoLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const productos = [
    {
      id: 1,
      nombre: "Jabón de Lavanda Relajante",
      precio: "$25.000",
      imagen: "/placeholder.svg?height=300&width=300",
      descripcion: "Jabón artesanal elaborado con aceites esenciales de lavanda francesa",
      ingredientes: [
        "Aceite esencial de lavanda orgánica",
        "Aceite de coco virgen",
        "Manteca de karité pura",
        "Glicerina vegetal",
        "Flores de lavanda secas",
      ],
      beneficios: [
        "Propiedades relajantes y calmantes",
        "Hidrata profundamente la piel",
        "Aroma terapéutico natural",
        "Libre de químicos agresivos",
      ],
      proceso:
        "Elaborado mediante el método de saponificación en frío, curado durante 6 semanas para obtener la máxima suavidad y durabilidad.",
    },
    {
      id: 2,
      nombre: "Jabón Exfoliante de Café",
      precio: "$28.000",
      imagen: "/placeholder.svg?height=300&width=300",
      descripcion: "Jabón energizante con granos de café molido para exfoliación natural",
      ingredientes: [
        "Café orgánico molido",
        "Aceite de oliva extra virgen",
        "Aceite de almendras dulces",
        "Miel de abeja pura",
        "Aceite esencial de naranja",
      ],
      beneficios: [
        "Exfoliación suave y natural",
        "Estimula la circulación sanguínea",
        "Reduce la apariencia de celulitis",
        "Aroma energizante y revitalizante",
      ],
      proceso:
        "Creado con café recién molido y curado artesanalmente. Los granos proporcionan una exfoliación perfecta sin dañar la piel.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-purple-100">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Image src="/veo-logo.png" alt="VEO Logo" width={50} height={50} className="rounded-full" />
            <div>
              <span className="text-2xl font-bold text-purple-800">VEO</span>
              <p className="text-xs text-purple-600">Lo que mi piel siente</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Inicio
            </Link>
            <Link href="#productos" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Productos
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Comprar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#inicio" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Inicio
              </Link>
              <Link href="#productos" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Productos
              </Link>
              <Link href="#nosotros" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Contacto
              </Link>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Comprar
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 md:py-32">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  ✨ 100% Natural y Artesanal
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Cuida tu piel con
                  <span className="text-purple-600"> VEO</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Jabones artesanales elaborados con ingredientes naturales y amor. Siente la diferencia que hace el
                  cuidado auténtico en tu piel.
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
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span>Hecho con Amor</span>
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

      {/* Productos Section */}
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
              <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow border-purple-100">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    fill
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
                <CardContent className="space-y-4">
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
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section id="nosotros" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-pink-100 text-pink-800">
              Nosotros
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">Nuestra Esencia</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/80 backdrop-blur border-purple-100">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-800">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Crear jabones artesanales de la más alta calidad, utilizando únicamente ingredientes naturales y
                  procesos tradicionales. Nos comprometemos a cuidar tu piel mientras respetamos el medio ambiente,
                  ofreciendo productos que nutren tanto el cuerpo como el alma.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur border-blue-100">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Ser la marca líder en jabones artesanales naturales, reconocida por la excelencia de nuestros
                  productos y nuestro compromiso con la sostenibilidad. Aspiramos a transformar la rutina diaria de
                  cuidado personal en una experiencia sensorial única y consciente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-100">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nuestros Valores</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Naturalidad</h4>
                    <p className="text-sm text-gray-600">Solo ingredientes puros y naturales</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Artesanía</h4>
                    <p className="text-sm text-gray-600">Cada jabón hecho a mano con dedicación</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Sostenibilidad</h4>
                    <p className="text-sm text-gray-600">Respeto por el medio ambiente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
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
            {[
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
            ].map((testimonio, index) => (
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

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              ¿Listo para cuidar tu piel naturalmente?
            </h2>
            <p className="text-xl text-purple-100">
              Descubre la diferencia que hacen nuestros jabones artesanales. Tu piel te lo agradecerá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-600"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/veo-logo.png" alt="VEO Logo" width={40} height={40} className="rounded-full" />
                <div>
                  <span className="text-xl font-bold">VEO</span>
                  <p className="text-xs text-gray-400">Lo que mi piel siente</p>
                </div>
              </div>
              <p className="text-gray-400">Jabones artesanales naturales que cuidan tu piel con amor y dedicación.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Jabón de Lavanda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Jabón de Café
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Todos los Productos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Proceso Artesanal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+57 300 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hola@veo.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bogotá, Colombia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VEO - Jabones Artesanales. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, Leaf } from "lucide-react"

export default function NosotrosSection() {
  return (
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
  )
} 
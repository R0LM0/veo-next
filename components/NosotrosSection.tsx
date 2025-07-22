import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, Leaf, QrCode, Award, Lightbulb, Users } from "lucide-react"

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
                Satisfacer la necesidad de cuidado personal saludable y sostenible, ofreciendo jabones artesanales
                formulados con ingredientes naturales que nutren, equilibran y revitalizan la piel de consumidores
                conscientes
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
                A 5 años: Ser la marca referente en Centroamérica de jabones artesanales, reconocida por su compromiso
                con la sostenibilidad, la innovación en formulaciones vegetales y la transparencia en la trazabilidad de
                sus ingredientes, inspirando a consumidores conscientes a cuidar su piel y el planeta en cada uso.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-100">
            <CardContent className="space-y-8">
              <div className="flex justify-center">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestros Valores</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <QrCode className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-800 text-lg">Transparencia</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Brindamos información clara y accesible (orígenes, métodos y beneficios) a través de etiquetas con
                    código QR, fomentando la confianza y la trazabilidad en cada producto.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-800 text-lg">Calidad</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Elaboramos nuestros jabones en lotes pequeños, con curado manual y seleccionando sólo materias
                    primas de primera para garantizar eficacia y frescura en cada barra.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-center">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 text-lg">Innovación</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Buscamos constantemente mejorar nuestras formulaciones y experiencias de uso, incorporando
                    componentes vegetales funcionales y herramientas digitales para la comunidad VEO.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-center">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-orange-800 text-lg">Cercanía</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mantenemos una comunicación directa y rápida con nuestros clientes, atendiendo dudas, sugerencias y
                    ofreciendo asesoría personalizada para maximizar los beneficios de nuestros jabones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

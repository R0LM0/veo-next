import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
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
  )
} 
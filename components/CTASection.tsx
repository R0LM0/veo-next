"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [pulseCount, setPulseCount] = useState(0)

  const whatsappNumber = "+50577043202"
  const whatsappMessage = "Hola! Me interesan los jabones artesanales de VEO. ¿Podrían darme más información?"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-green-300/20 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute w-4 h-4 text-yellow-300/60 animate-pulse`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center relative z-10">
        <div
          className={`max-w-3xl mx-auto space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated title */}
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in">
              ¿Listo para cuidar tu piel{" "}
              <span className="relative inline-block">
                naturalmente?
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"></div>
              </span>
            </h2>
          </div>

          {/* Animated subtitle */}
          <p
            className={`text-xl text-purple-100 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Descubre la diferencia que hacen nuestros jabones artesanales. Tu piel te lo agradecerá.
          </p>

          {/* Animated buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Ver Productos Button */}
            <Link href="#productos">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            {/* WhatsApp Contact Button - Super Animated */}
            <div className="relative">
              {/* Pulsing ring effect */}
              <div
                className={`absolute inset-0 rounded-lg bg-green-400/30 animate-ping ${
                  pulseCount % 2 === 0 ? "opacity-75" : "opacity-0"
                } transition-opacity duration-1000`}
              ></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-sm animate-pulse"></div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-purple-600 group hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/25 bg-gradient-to-r hover:from-green-50 hover:to-blue-50"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  <span className="relative">
                    Contactar
                    <Heart className="absolute -top-1 -right-1 w-3 h-3 text-red-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-px overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Animated call to action text */}
          <div
            className={`mt-8 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-sm text-purple-200 animate-pulse">✨ Respuesta rápida por WhatsApp ✨</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}

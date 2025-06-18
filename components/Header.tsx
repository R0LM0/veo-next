"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
  )
} 
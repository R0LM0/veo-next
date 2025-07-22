"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Productos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 border-b border-purple-200 shadow-lg"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-purple-100"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo Section - Animated */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <Image
              src="/veo-logo.png"
              alt="VEO Logo"
              width={60}
              height={60}
              className="rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <span className="text-3xl font-bold text-purple-800 relative">
              VEO
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </span>
            <p className="text-xs text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
              Lo que mi piel siente
            </p>
          </div>
        </div>

        {/* Desktop Navigation - Enhanced */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 group py-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Desktop Buy Button - Super Enhanced */}
          <div className="hidden md:block relative group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>

            <Button className="relative bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              <span className="relative">Comprar</span>

              {/* Sparkle effect */}
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group hover:bg-purple-50 transition-all duration-300"
            onClick={handleMenuClick}
          >
            <div className="relative">
              {/* Menu/Close icon with rotation animation */}
              <div
                className={`transition-all duration-300 ${isMenuOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-purple-600" />
                ) : (
                  <Menu className="h-5 w-5 group-hover:text-purple-600 transition-colors duration-300" />
                )}
              </div>

              {/* Pulse effect on click */}
              <div className="absolute inset-0 bg-purple-400/30 rounded-full scale-0 group-active:scale-150 transition-transform duration-200"></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced with animations */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 bg-white/95 backdrop-blur-md border-t border-purple-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-purple-50 transform ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Buy Button */}
            <div
              className={`transform transition-all duration-500 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 group">
                <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Comprar
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

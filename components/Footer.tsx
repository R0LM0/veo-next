import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
                  Jabón de Flor de Jamaica
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Jabón de Zanahoria
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
                <span>+505 78567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hola@veo.es</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Managua, Nicaragua</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VEO - Jabones Artesanales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 
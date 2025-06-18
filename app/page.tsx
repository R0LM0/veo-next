import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductosSection from "@/components/ProductosSection"
import NosotrosSection from "@/components/NosotrosSection"
import TestimoniosSection from "@/components/TestimoniosSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function VeoLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <HeroSection />
      <ProductosSection />
      <NosotrosSection />
      <TestimoniosSection />
      <CTASection />
      <Footer />
    </div>
  )
}

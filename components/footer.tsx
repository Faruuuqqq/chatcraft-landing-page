import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/chatcraft-logo.png" alt="ChatCraft" width={40} height={40} className="w-8 h-8" />
              <span className="font-bold text-lg sm:text-xl">ChatCraft</span>
            </div>
            <p className="text-xs sm:text-sm text-background/70">Solusi chatbot AI terpercaya untuk UMKM Indonesia</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Produk</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:chatcraft.co@gmail.com" className="hover:text-background transition break-all">
                  chatcraft.co@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="https://wa.me/6285117552412" className="hover:text-background transition">
                  +62 851-1755-2412
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <span>Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-background/70 text-xs sm:text-sm">
            <p>&copy; 2025 ChatCraft. Semua hak dilindungi.</p>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="/privacy-policy" className="hover:text-background transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-background transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

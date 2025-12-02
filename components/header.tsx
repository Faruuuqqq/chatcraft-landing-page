"use client"

import { useState } from "react"
import { Menu, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink =
    "https://wa.me/6285117552412?text=Halo%20ChatCraft,%20saya%20tertarik%20dengan%20layanan%20otomatisasi%20AI%20Anda."

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <Image src="/chatcraft-logo.png" alt="ChatCraft" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="font-bold text-lg sm:text-xl text-foreground transition-colors duration-300">ChatCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#services"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-300"
          >
            Layanan
          </a>
          <a
            href="#integrations"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-300"
          >
            Platform
          </a>
          <a
            href="#faq"
            className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Desktop CTA - Update Bagian Ini */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <ThemeToggle />
          
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
              <Send className="w-4 h-4" />
              Mulai Konsultasi Gratis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="transition-transform duration-200 text-foreground p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background transition-colors duration-300 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-3 py-4 space-y-3 sm:px-4 sm:space-y-4">
            <a
              href="#services"
              className="block text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#integrations"
              className="block text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Platform
            </a>
            <a
              href="#faq"
              className="block text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-3 sm:pt-4 border-t border-border">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300 text-sm flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Mulai Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

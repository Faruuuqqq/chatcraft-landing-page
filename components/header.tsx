"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/chatcraft-logo.svg" alt="ChatCraft" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-xl text-foreground transition-colors duration-300">ChatCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">
            Layanan
          </a>
          <a href="#integrations" className="text-foreground hover:text-primary transition-colors duration-300">
            Platform
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors duration-300">
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300">
              Konsultasi Gratis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="transition-transform duration-200 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background transition-colors duration-300 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-foreground hover:text-primary transition-colors duration-300">
              Layanan
            </a>
            <a href="#integrations" className="block text-foreground hover:text-primary transition-colors duration-300">
              Platform
            </a>
            <a href="#faq" className="block text-foreground hover:text-primary transition-colors duration-300">
              FAQ
            </a>
            <div className="pt-4 border-t border-border">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300">
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

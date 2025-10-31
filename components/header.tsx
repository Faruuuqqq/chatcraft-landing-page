"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="ChatCraft" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-xl text-foreground">ChatCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200">
            Fitur
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-200">
            Harga
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">
            Tentang
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="ghost" className="hover:bg-muted transition-colors duration-200">
              Masuk
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
              Daftar Gratis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors duration-200">
              Fitur
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors duration-200">
              Harga
            </a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors duration-200">
              Tentang
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full bg-transparent transition-colors duration-200">
                  Masuk
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 transition-colors duration-200">
                  Daftar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

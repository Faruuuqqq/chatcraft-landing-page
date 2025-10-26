"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ChatCraft" width={32} height={32} className="w-8 h-8" />
          <span className="font-bold text-xl text-foreground">ChatCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition">
            Fitur
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition">
            Harga
          </a>
          <a href="#" className="text-foreground hover:text-primary transition">
            Tentang
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Masuk</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Daftar Gratis</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary">
              Fitur
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Harga
            </a>
            <a href="#" className="block text-foreground hover:text-primary">
              Tentang
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Masuk
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90">Daftar Gratis</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

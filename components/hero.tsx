"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, MessageCircle, TrendingUp } from "lucide-react"

export default function Hero() {
  const whatsappLink =
    "https://wa.me/628XXXXXXXXX?text=Halo%20ChatCraft,%20saya%20tertarik%20dengan%20layanan%20otomatisasi%20AI%20Anda."

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Agensi Otomatisasi AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Agensi Otomatisasi AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  untuk UMKM Indonesia
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-lg">
                Maksimalkan penjualan di Instagram, TikTok, dan WhatsApp. Biarkan AI membalas chat, mengumpulkan leads,
                dan melayani pelanggan 24/7.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">UMKM Aktif</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Interactive Card */}
          <div className="relative h-96 lg:h-full flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>

            {/* Main Card */}
            <div className="relative w-full max-w-sm">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">ChatCraft AI</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3 h-48 overflow-y-auto">
                  <div className="flex gap-2">
                    <div className="bg-muted rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-muted-foreground">Halo! Ada yang bisa saya bantu?</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/20 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-foreground">Berapa biaya untuk Instagram automation?</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-muted rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-muted-foreground">Kami punya berbagai paket yang fleksibel...</p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <input
                    type="text"
                    placeholder="Ketik pesan..."
                    className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">+300% ROI</p>
                    <p className="text-xs text-muted-foreground">Rata-rata klien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

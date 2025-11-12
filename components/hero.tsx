"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, MessageCircle, TrendingUp } from "lucide-react"

export default function Hero() {
  const whatsappLink =
    "https://wa.me/6285117552412?text=Halo%20ChatCraft,%20saya%20tertarik%20dengan%20layanan%20otomatisasi%20AI%20Anda."

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16 sm:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-100px)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-xs sm:text-sm">
              <Zap className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-medium text-primary">Agensi Otomatisasi AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                Agensi Otomatisasi AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  untuk UMKM Indonesia
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-lg">
                Maksimalkan penjualan di Instagram, TikTok, dan WhatsApp. Biarkan AI membalas chat, mengumpulkan leads,
                dan melayani pelanggan 24/7.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full text-sm sm:text-base"
                >
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-sm sm:text-base bg-transparent">
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">10</p>
                <p className="text-xs sm:text-sm text-muted-foreground">UMKM Aktif</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Uptime</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Interactive Card */}
          <div className="relative h-96 lg:h-full flex items-center justify-center z-10 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>

            {/* Main Card */}
            <div className="relative w-full max-w-sm px-3 sm:px-0">
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs sm:text-sm">ChatCraft AI</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-2 sm:space-y-3 h-40 sm:h-48 overflow-y-auto text-xs sm:text-sm">
                  <div className="flex gap-2">
                    <div className="bg-muted rounded-lg p-2 sm:p-3 max-w-xs">
                      <p className="text-muted-foreground">Halo! Ada yang bisa saya bantu?</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary/20 rounded-lg p-2 sm:p-3 max-w-xs">
                      <p className="text-foreground">Berapa biaya untuk Instagram automation?</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-muted rounded-lg p-2 sm:p-3 max-w-xs">
                      <p className="text-muted-foreground">Kami punya berbagai paket yang fleksibel...</p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2 pt-3 sm:pt-4 border-t border-border">
                  <input
                    type="text"
                    placeholder="Ketik pesan..."
                    className="flex-1 bg-muted rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90 px-2 sm:px-3">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-lg text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">+300% ROI</p>
                    <p className="text-muted-foreground">Rata-rata klien</p>
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

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, Music, Facebook, Mail, FileSpreadsheet, ShoppingBag, Store } from "lucide-react"

const integrations = [
  {
    name: "WhatsApp",
    description: "Blast Promo & AI Chatbot.",
    icon: MessageCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Instagram",
    description: "Auto-DM Komentar & Leads dari Story.",
    icon: Instagram,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "TikTok",
    description: "Otomatisasi Komentar & DM.",
    icon: Music,
    color: "text-black dark:text-white",
    bgColor: "bg-black/10 dark:bg-white/10",
  },
  {
    name: "Facebook",
    description: "Integrasi Facebook Messenger otomatis.",
    icon: Facebook,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Shopee",
    description: "Follow-up order & notifikasi otomatis.",
    icon: ShoppingBag,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Tokopedia",
    description: "Follow-up order & notifikasi otomatis.",
    icon: Store,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
  },
  {
    name: "Google Sheets",
    description: "Simpan data leads otomatis ke spreadsheet.",
    icon: FileSpreadsheet,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    name: "Email Marketing",
    description: "Kirim data pelanggan ke list email marketing.",
    icon: Mail,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Satu Agensi, Seluruh Ekosistem Digital Anda
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in max-w-2xl mx-auto">
            Kami bukan hanya menghubungkan media sosial. Kami menghubungkan alur kerja bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon

            return (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`${integration.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${integration.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-10">
          <p className="text-muted-foreground leading-relaxed text-center text-sm md:text-base">
            Ini adalah kekuatan agensi kami. Bayangkan: Seseorang komentar di Reels Instagram Anda, data mereka otomatis
            masuk ke Google Sheets, lalu 3 hari kemudian mereka mendapat promo khusus via WhatsApp. Semua berjalan
            otomatis. Anda tidak perlu pusing mengurus banyak vendor.{" "}
            <span className="text-foreground font-semibold">
              ChatCraft bertindak sebagai technical partner Anda untuk merancang dan mengelola semua alur otomatisasi
              ini.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

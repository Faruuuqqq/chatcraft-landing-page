import { Send, Zap } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Otomatisasi Instagram & TikTok",
    description: "Ubah komentar dan interaksi menjadi penjualan otomatis",
    features: [
      "Auto-DM dari Komentar: Balas otomatis setiap komentar di Postingan atau Reels untuk kirim link produk, promo, atau freebie.",
      "AI untuk Jawab FAQ: Hemat waktu admin. Biarkan AI otomatis membalas pertanyaan umum seperti harga atau cara beli.",
      "Generate Leads dari Stories: Dapatkan calon pelanggan baru saat mereka membalas Story Anda.",
      "Otomatisasi Giveaway: Jalankan giveaway secara otomatis untuk meningkatkan engagement dan followers.",
      "TikTok Auto-DM: Arahkan audiens TikTok otomatis ke website atau formulir pengumpulan data.",
    ],
  },
  {
    icon: Send,
    title: "WhatsApp Blast & AI Chatbot",
    description: "Jangkau ribuan pelanggan dan layani mereka dengan AI cerdas",
    features: [
      "WhatsApp Blast Terarah: Kirim pesan promosi ke ribuan kontak dengan aman dan terukur.",
      "AI Chatbot Cerdas: AI yang dilatih khusus untuk memahami konteks bisnis Indonesia.",
      "Manajemen Kontak: Kelola dan segmentasikan kontak pelanggan Anda dengan mudah.",
      "Fitur Balas Otomatis: Jawab pesan pelanggan secara instan 24/7 tanpa henti.",
      "Integrasi Seamless: Hubungkan langsung dengan sistem penjualan Anda.",
    ],
  },
]

export default function FeaturesShowcase() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Katalog Layanan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dua layanan utama untuk mengotomatisasi customer service dan meningkatkan penjualan Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Instagram, TrendingUp, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Instagram,
    title: "Otomatisasi Instagram",
    description: "Ubah engagement di Reels & Postingan Anda menjadi penjualan otomatis.",
    features: [
      "Auto-DM dari Komentar: Kirim link produk/promo ke setiap orang yang komentar di Reels atau Postingan Anda.",
      'AI Jawab FAQ 24/7: Biarkan AI membalas pertanyaan umum seperti "Harga berapa?" atau "Beli di mana?".',
      "Tangkap Leads dari Story: Dapatkan data (WA/email) pelanggan secara otomatis saat mereka membalas Story Anda.",
      "Otomatisasi Giveaway: Jalankan giveaway viral tanpa pusing rekap manual untuk menaikkan followers.",
      "Sapa Followers Baru: Kirim pesan sambutan otomatis ke followers baru Anda untuk menawarkan promo.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Otomatisasi TikTok",
    description: "Konversi audiens FYP Anda menjadi database pelanggan yang loyal.",
    features: [
      "Auto-DM ke Website: Arahkan audiens dari DM TikTok ke link website, Shopee, atau Tokopedia Anda.",
      "Koleksi Data Pelanggan: Kumpulkan email atau nomor WhatsApp audiens Anda langsung dari TikTok.",
      "Auto-Reply Komentar: Balas pertanyaan umum di komentar video Anda secara otomatis.",
      "Teruskan ke Live Agent: Otomatis teruskan chat ke admin (manusia) jika AI tidak bisa menjawab.",
      "Otomatisasi Giveaway TikTok: Jalankan giveaway untuk meningkatkan engagement di akun TikTok Anda.",
    ],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Blast & AI Chatbot",
    description: "Jangkau ribuan pelanggan & kirim promo terarah via platform chat No. 1 di Indonesia.",
    features: [
      "WA Blast Promosi: Kirim pesan promo, notifikasi, atau update ke ribuan database kontak Anda dengan aman.",
      "AI Konteks Indonesia: Gunakan Chatbot AI yang dilatih khusus untuk memahami bahasa dan konteks bisnis UMKM.",
      "AI Pembuat Caption: Bingung buat kata-kata promo? Biarkan AI membuatkan caption WA Blast yang menarik.",
      "Manajemen Kontak: Segmentasikan kontak pelanggan (Reseller, Pelanggan Baru, dll) untuk promosi tertarget.",
      "Layanan Setup Penuh: Kami bantu siapkan semuanya. Anda tinggal fokus melayani pelanggan.",
    ],
  },
]

export default function FeaturesShowcase() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Katalog Layanan Otomatisasi AI Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Pilih platform utama Anda dan biarkan tim kami yang mengurus setup-nya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Icon and title */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-base text-muted-foreground mb-6 font-medium">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-3 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="leading-relaxed">{feature}</span>
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

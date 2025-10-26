import { MessageSquare, Zap, BarChart3, Shield, Smartphone, Headphones } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Omni-Channel",
    description: "Kelola semua chat dari WhatsApp, Instagram, Shopee, Tokopedia dalam satu dashboard",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Balas pelanggan dalam hitungan detik, 24/7 tanpa henti",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Lihat insight mendalam tentang perilaku pelanggan dan performa chatbot",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Data Anda aman dengan enkripsi tingkat enterprise dan backup otomatis",
  },
  {
    icon: Smartphone,
    title: "Easy Integration",
    description: "Setup dalam 5 menit tanpa perlu coding atau technical knowledge",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Tim support kami siap membantu Anda kapan saja",
  },
]

export default function FeaturesShowcase() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Fitur yang Anda Butuhkan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua tools yang Anda perlukan untuk mengotomatisasi customer service dan meningkatkan penjualan
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

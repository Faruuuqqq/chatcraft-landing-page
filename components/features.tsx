import { Card } from "@/components/ui/card"
import { Globe, BarChart3, DollarSign, Headphones } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Globe,
      title: "Integrasi Omni-Channel",
      description: "Satu chatbot untuk WhatsApp, Instagram, Shopee, dan Tokopedia.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Dapatkan data dan tren pelanggan untuk optimasi produk.",
    },
    {
      icon: DollarSign,
      title: "Skema 'Pay As You Grow'",
      description: "Harga fleksibel yang menyesuaikan skala bisnis UMKM Anda.",
    },
    {
      icon: Headphones,
      title: "Fallback Cerdas ke Admin",
      description: "Ambil alih percakapan kapanpun saat AI tidak bisa menjawab.",
    },
  ]

  return (
    <section id="layanan" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Kenapa Memilih ChatCraft?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Fitur-fitur unggulan yang dirancang khusus untuk UMKM Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { MessageSquare, BarChart3, Zap, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      title: "Omni-Channel Support",
      description: "Kelola semua percakapan pelanggan dari satu dashboard",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Dapatkan data mendalam tentang perilaku pelanggan Anda",
    },
    {
      icon: Zap,
      title: "Respons Instan",
      description: "AI yang menjawab pertanyaan pelanggan 24/7 tanpa henti",
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Data pelanggan Anda aman dengan enkripsi tingkat enterprise",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kenapa Memilih ChatCraft?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fitur-fitur unggulan yang dirancang khusus untuk kebutuhan UMKM Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

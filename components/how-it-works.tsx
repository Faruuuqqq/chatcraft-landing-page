import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Konsultasi & Strategi",
      description: "Kami analisis kebutuhan bisnis Anda dan merancang solusi chatbot yang tepat.",
    },
    {
      number: "2",
      title: "Setup & Integrasi",
      description: "Tim kami siapkan chatbot di semua channel Anda dengan konfigurasi optimal.",
    },
    {
      number: "3",
      title: "Maintenance & Report",
      description: "Chatbot berjalan 24/7, Anda terima laporan performa dan insights setiap bulan.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Solusi Mudah dalam 3 Langkah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Proses yang sederhana dan transparan untuk memulai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <Card className="p-8 relative z-10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary hidden md:block" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Apa itu ChatCraft?",
      answer:
        "ChatCraft adalah platform AI chatbot yang dirancang khusus untuk UMKM Indonesia. Kami membantu bisnis Anda memberikan layanan pelanggan 24/7 dengan respons otomatis yang cerdas dan personal.",
    },
    {
      question: "Berapa biaya untuk menggunakan ChatCraft?",
      answer:
        "ChatCraft menawarkan berbagai paket harga yang fleksibel mulai dari Starter hingga Enterprise. Anda bisa memilih paket yang sesuai dengan kebutuhan bisnis Anda. Tidak ada biaya tersembunyi!",
    },
    {
      question: "Apakah ChatCraft mudah diintegrasikan?",
      answer:
        "Ya! ChatCraft dapat diintegrasikan dengan mudah ke berbagai platform seperti WhatsApp, Instagram, Facebook, dan website Anda. Proses setup hanya membutuhkan beberapa menit.",
    },
    {
      question: "Apakah ada dukungan pelanggan 24/7?",
      answer:
        "Tentu saja! Tim support kami siap membantu Anda kapan saja melalui chat, email, dan telepon. Kami berkomitmen untuk memberikan respons cepat dan solusi terbaik.",
    },
    {
      question: "Bagaimana dengan keamanan data pelanggan saya?",
      answer:
        "Keamanan data adalah prioritas utama kami. Semua data dienkripsi dan disimpan di server yang aman. Kami mematuhi standar keamanan internasional dan regulasi privasi data.",
    },
    {
      question: "Bisakah saya mencoba ChatCraft secara gratis?",
      answer:
        "Ya! Kami menawarkan trial gratis selama 14 hari tanpa perlu kartu kredit. Anda bisa mencoba semua fitur dan melihat sendiri bagaimana ChatCraft dapat membantu bisnis Anda.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang ChatCraft dan bagaimana kami dapat membantu bisnis Anda
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Masih ada pertanyaan?</p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Hubungi Tim Support Kami
          </a>
        </div>
      </div>
    </section>
  )
}

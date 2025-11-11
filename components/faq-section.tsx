"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Apa layanan yang ditawarkan ChatCraft?",
      answer:
        "ChatCraft adalah agensi otomatisasi AI yang membantu UMKM Indonesia mengotomatisasi layanan pelanggan di Instagram, TikTok, dan WhatsApp. Kami menyediakan setup dan management untuk auto-reply, lead generation, dan customer service 24/7 yang dipowered oleh AI.",
    },
    {
      question: "Bagaimana model harganya?",
      answer:
        "Kami menyediakan paket setup dan layanan bulanan yang fleksibel sesuai kebutuhan bisnis Anda. Harga berbeda-beda tergantung platform, jumlah channel, dan tingkat kustomisasi. Silakan hubungi tim kami via WhatsApp untuk konsultasi gratis dan penawaran khusus.",
    },
    {
      question: "Platform apa saja yang bisa diintegrasikan?",
      answer:
        "Kami mendukung WhatsApp, Instagram, TikTok, dan Facebook Messenger. Setiap platform memiliki fitur otomatisasi yang disesuaikan dengan kemampuan dan keunikan setiap channel.",
    },
    {
      question: "Berapa lama proses setup?",
      answer:
        "Proses setup biasanya membutuhkan 3-5 hari kerja tergantung kompleksitas kebutuhan Anda. Kami akan melakukan konsultasi mendalam terlebih dahulu untuk memastikan semua fitur sesuai dengan bisnis Anda.",
    },
    {
      question: "Apakah ada dukungan setelah setup?",
      answer:
        "Tentu saja! Tim support kami siap membantu Anda kapan saja. Kami menyediakan training, troubleshooting, dan optimisasi berkelanjutan untuk memastikan ROI maksimal dari otomatisasi Anda.",
    },
    {
      question: "Bagaimana dengan keamanan data pelanggan?",
      answer:
        "Keamanan data adalah prioritas utama kami. Semua data dienkripsi dan disimpan di server yang aman. Kami mematuhi standar keamanan internasional dan regulasi privasi data Indonesia.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan otomatisasi AI ChatCraft
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
            href="https://wa.me/6285117552412?text=Halo%20ChatCraft,%20saya%20tertarik%20dengan%20layanan%20otomatisasi%20AI%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Hubungi Tim Support Kami
          </a>
        </div>
      </div>
    </section>
  )
}

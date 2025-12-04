"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/data" // Import data dari file terpisah

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Pastikan variabel 'faqs' TIDAK dideklarasikan ulang di sini

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* ... (kode header section sama seperti sebelumnya) ... */}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan otomatisasi AI ChatCraft
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {/* Tambahkan fallback (faqs || []) untuk keamanan */}
          {(faqs || []).map((faq, index) => (
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

        {/* ... (kode footer section sama seperti sebelumnya) ... */}
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
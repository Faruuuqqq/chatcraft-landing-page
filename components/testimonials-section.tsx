"use client"

import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner Toko Online",
      content: "ChatCraft sangat membantu meningkatkan respons pelanggan kami. Penjualan naik 40% dalam 3 bulan!",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      role: "Manager Customer Service",
      content: "Implementasinya mudah dan tim support sangat responsif. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ahmad Wijaya",
      role: "CEO Startup Tech",
      content: "Solusi terbaik untuk UMKM. Harga terjangkau dengan fitur yang lengkap.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testimoni Pelanggan</h2>
          <p className="text-foreground/70">Apa kata pelanggan kami tentang ChatCraft</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg shadow-sm transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/70 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

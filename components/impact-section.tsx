"use client"

export default function ImpactSection() {
  const stats = [
    { number: "7000+", label: "Bisnis Terlayani" },
    { number: "1500+", label: "Percakapan Harian" },
    { number: "1.1M+", label: "Pelanggan Terjangkau" },
    { number: "1000+", label: "Integrasi Berhasil" },
    { number: "80+", label: "Kota di Indonesia" },
    { number: "25+", label: "Industri Berbeda" },
    { number: "21+", label: "Bahasa Didukung" },
    { number: "14+", label: "Tahun Pengalaman" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dampak ChatCraft</h2>
          <p className="text-gray-600">Pertumbuhan dan pencapaian kami bersama UMKM Indonesia</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

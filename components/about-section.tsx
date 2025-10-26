"use client"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">TENTANG CHATCRAFT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ChatCraft Indonesia. Solusi AI Chatbot untuk UMKM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami membantu UMKM Indonesia meningkatkan layanan pelanggan dengan teknologi AI terdepan
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Misi</h3>
            <p className="text-sm text-gray-600">
              Memberdayakan UMKM dengan teknologi AI yang terjangkau dan mudah digunakan
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Visi</h3>
            <p className="text-sm text-gray-600">
              Menjadi solusi chatbot nomor satu untuk bisnis kecil dan menengah di Indonesia
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Nilai</h3>
            <p className="text-sm text-gray-600">
              Inovasi, kepercayaan, dan komitmen terhadap kesuksesan pelanggan kami
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Komitmen</h3>
            <p className="text-sm text-gray-600">Dukungan 24/7 dan peningkatan berkelanjutan untuk hasil maksimal</p>
          </div>
        </div>
      </div>
    </section>
  )
}

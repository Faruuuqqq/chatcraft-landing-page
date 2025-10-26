import { Card } from "@/components/ui/card"
import { Clock, RotateCw, TrendingDown } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Kewalahan membalas chat di luar jam kerja.",
      description: "Pelanggan menunggu lama untuk respon, potensi penjualan terlewat.",
    },
    {
      icon: RotateCw,
      title: "Capek menjawab pertanyaan yang sama berulang-ulang.",
      description: "Tim Anda menghabiskan waktu untuk pertanyaan yang sama setiap hari.",
    },
    {
      icon: TrendingDown,
      title: "Potensi penjualan hilang karena respon lambat.",
      description: "Pelanggan beralih ke kompetitor karena tidak mendapat respon cepat.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Apakah Ini yang Anda Rasakan?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Banyak UMKM menghadapi tantangan yang sama dalam mengelola chat pelanggan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

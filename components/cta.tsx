import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Siap Meningkatkan Penjualan Anda?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Diskusikan kebutuhan bisnis Anda dengan tim kami. Gratis, tanpa komitmen.
        </p>
        <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
          Jadwalkan Konsultasi Gratis
        </Button>
      </div>
    </section>
  )
}

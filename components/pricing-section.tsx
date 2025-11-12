import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Rp 299K",
    period: "/bulan",
    description: "Untuk bisnis yang baru mulai",
    features: [
      "1 Channel (WhatsApp/Instagram)",
      "Unlimited conversations",
      "Basic AI responses",
      "Email support",
      "Analytics dashboard",
    ],
    cta: "Mulai Gratis",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Rp 799K",
    period: "/bulan",
    description: "Untuk bisnis yang berkembang",
    features: [
      "Semua fitur Starter",
      "3 Channels (WhatsApp, Instagram, Shopee)",
      "Advanced AI responses",
      "Priority support",
      "Custom workflows",
      "Team collaboration",
    ],
    cta: "Mulai Gratis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Untuk bisnis besar",
    features: [
      "Semua fitur Professional",
      "Unlimited channels",
      "Custom AI training",
      "Dedicated account manager",
      "API access",
      "White-label option",
    ],
    cta: "Hubungi Sales",
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Harga yang Terjangkau
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Tidak ada biaya tersembunyi.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card border-2 border-primary shadow-xl md:scale-105"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  Paling Populer
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/70 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>

              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-foreground/60 text-xs sm:text-sm ml-2">{plan.period}</span>
              </div>

              <Link href="/register" className="w-full block mb-6 sm:mb-8">
                <Button className="w-full text-sm sm:text-base" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </Link>

              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

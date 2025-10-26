import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Gratis",
      description: "Sempurna untuk mencoba",
      features: ["Hingga 100 percakapan/bulan", "1 channel integrasi", "Analytics dasar", "Email support"],
      cta: "Mulai Gratis",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Rp 299.000",
      period: "/bulan",
      description: "Untuk bisnis berkembang",
      features: [
        "Unlimited percakapan",
        "Hingga 5 channel",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access",
      ],
      cta: "Mulai Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Untuk skala besar",
      features: [
        "Semua fitur Professional",
        "Unlimited channels",
        "Dedicated account manager",
        "Custom integration",
        "SLA guarantee",
        "On-premise option",
      ],
      cta: "Hubungi Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Harga Transparan & Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${
                plan.highlighted ? "border-primary border-2 shadow-lg scale-105 md:scale-100" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary/10 rounded-full w-fit">
                  <span className="text-primary text-sm font-semibold">Paling Populer</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

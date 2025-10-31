import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesShowcase from "@/components/features-showcase"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import { PricingCalculator } from "@/components/pricing-calculator"
import { ContactForm } from "@/components/contact-form"
import { ReferralSection } from "@/components/referral-section"
import { IntegrationShowcase } from "@/components/integration-showcase"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesShowcase />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingCalculator />
      <IntegrationShowcase />
      <ReferralSection />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}

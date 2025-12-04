import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesShowcase from "@/components/features-showcase"
// import PricingSection from "@/components/pricing-section"
// import { PricingCalculator } from "@/components/pricing-calculator"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import { faqs } from "@/components/faq-section" // Import faqs directly
import { IntegrationShowcase } from "@/components/integration-showcase"
import { ContactForm } from "@/components/contact-form"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Inject Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />
      <Hero />
      <FeaturesShowcase />
      {/* <PricingSection /> */}
      {/* <PricingCalculator /> */}
      <TestimonialsSection />
      <IntegrationShowcase />
      <FAQSection />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}

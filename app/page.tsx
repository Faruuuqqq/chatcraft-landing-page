import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesShowcase from "@/components/features-showcase"
import TestimonialsSection from "@/components/testimonials-section"
// 1. Update Import FAQSection untuk mengambil juga 'faqs'
import FAQSection, { faqs } from "@/components/faq-section" 
import { IntegrationShowcase } from "@/components/integration-showcase"
import { ContactForm } from "@/components/contact-form"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

// 2. Buat JSON-LD Schema secara dinamis dari data faqs
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
      {/* 3. Inject Schema JSON-LD */}
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
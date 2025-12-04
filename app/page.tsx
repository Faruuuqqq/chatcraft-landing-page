import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesShowcase from "@/components/features-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section" 
import { IntegrationShowcase } from "@/components/integration-showcase"
import { ContactForm } from "@/components/contact-form"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
// Pastikan path import ini benar dan sesuai dengan lokasi file data Anda
import { faqs } from "@/lib/data" 

export default function Home() {
  // SOLUSI: Pindahkan logika ini ke DALAM function component
  // Tambahkan 'faqs || []' untuk mencegah error jika data undefined
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqs || []).map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
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
"use client"

export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: "🏢" },
    { name: "Partner 2", logo: "🏪" },
    { name: "Partner 3", logo: "🏭" },
    { name: "Partner 4", logo: "🏗️" },
    { name: "Partner 5", logo: "🏛️" },
    { name: "Partner 6", logo: "🏢" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stakeholders & Mitra</h2>
          <p className="text-gray-600">Dipercaya oleh perusahaan-perusahaan terkemuka</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-4xl">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

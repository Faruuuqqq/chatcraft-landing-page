export default function SocialProof() {
  const companies = [
    { name: "TechStart Indonesia", logo: "🚀" },
    { name: "Fashion Hub", logo: "👗" },
    { name: "Food Delivery Pro", logo: "🍕" },
    { name: "E-Learning Plus", logo: "📚" },
    { name: "Beauty Studio", logo: "💄" },
  ]

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-semibold mb-8">
          Dipercaya oleh ribuan UMKM di Indonesia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div key={company.name} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{company.logo}</span>
              <p className="text-sm text-muted-foreground text-center">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

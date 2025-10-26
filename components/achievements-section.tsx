"use client"

export default function AchievementsSection() {
  const achievements = [
    { icon: "🏆", title: "Best AI Solution 2024", org: "Tech Indonesia Awards" },
    { icon: "⭐", title: "Top 10 Startup", org: "Indonesia Startup Ranking" },
    { icon: "🎯", title: "Customer Choice Award", org: "E-Commerce Indonesia" },
    { icon: "💡", title: "Innovation Excellence", org: "Digital Indonesia Forum" },
    { icon: "🚀", title: "Fastest Growing", org: "SaaS Indonesia 2024" },
    { icon: "✨", title: "Best Support Team", org: "Customer Service Awards" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prestasi & Penghargaan</h2>
          <p className="text-gray-600">Diakui oleh industri sebagai solusi terbaik</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
              <p className="text-3xl mb-2">{achievement.icon}</p>
              <p className="text-xs font-semibold text-foreground mb-1">{achievement.title}</p>
              <p className="text-xs text-gray-500">{achievement.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

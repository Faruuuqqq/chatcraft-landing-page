import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function TeamSection() {
  const team = [
    {
      name: "Rivaldi Natanael",
      title: "CEO",
      image: "/professional-man-ceo.jpg",
    },
    {
      name: "Dian Suryaning Ratri",
      title: "CMO",
      image: "/professional-woman-cmo.jpg",
    },
    {
      name: "Achmad Faruq Mahdison",
      title: "CTO",
      image: "/professional-man-cto.jpg",
    },
  ]

  return (
    <section id="tentang" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tim Profesional Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Dipimpin oleh para ahli di bidang AI dan bisnis digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

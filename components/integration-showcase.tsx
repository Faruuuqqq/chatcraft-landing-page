"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, Facebook, Send } from "lucide-react"

const integrations = [
  {
    name: "WhatsApp",
    description: "Kelola chat WhatsApp dengan AI chatbot",
    icon: MessageCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Instagram",
    description: "Respons otomatis untuk DM Instagram",
    icon: Instagram,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Facebook",
    description: "Integrasi dengan Facebook Messenger",
    icon: Facebook,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Telegram",
    description: "Bot otomatis untuk Telegram",
    icon: Send,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
]

export function IntegrationShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">Integrasi Platform</h2>
          <p className="text-muted-foreground text-lg animate-fade-in">Hubungkan dengan platform favorit Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`${integration.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${integration.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

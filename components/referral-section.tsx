"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Users, TrendingUp, Zap } from "lucide-react"

export function ReferralSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">Program Referral</h2>
          <p className="text-muted-foreground text-lg animate-fade-in">Ajak teman dan dapatkan komisi menarik</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Komisi Seumur Hidup</h3>
                  <p className="text-muted-foreground">
                    Dapatkan 20% komisi dari setiap referral yang berhasil, selamanya
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Bonus Tier</h3>
                  <p className="text-muted-foreground">
                    Bonus tambahan hingga 5% untuk setiap 10 referral yang berhasil
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Dashboard Tracking</h3>
                  <p className="text-muted-foreground">Monitor referral, komisi, dan earnings Anda secara real-time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pembayaran Cepat</h3>
                  <p className="text-muted-foreground">Withdraw komisi Anda setiap bulan tanpa minimum threshold</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Bergabung dengan Program Referral
          </Button>
        </div>
      </div>
    </section>
  )
}

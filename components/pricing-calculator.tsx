"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function PricingCalculator() {
  const [chatsPerMonth, setChatsPerMonth] = useState(1000)

  const calculatePrice = () => {
    if (chatsPerMonth <= 1000) return 0
    if (chatsPerMonth <= 5000) return 99
    if (chatsPerMonth <= 10000) return 199
    if (chatsPerMonth <= 50000) return 499
    return 999
  }

  const price = calculatePrice()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">Kalkulator Harga</h2>
          <p className="text-muted-foreground text-lg animate-fade-in">Hitung biaya berdasarkan kebutuhan Anda</p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Estimasi Biaya Bulanan</CardTitle>
            <CardDescription>Sesuaikan jumlah chat per bulan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Chat per Bulan</label>
                <span className="text-2xl font-bold text-primary">{chatsPerMonth.toLocaleString()}</span>
              </div>
              <Slider
                value={[chatsPerMonth]}
                onValueChange={(value) => setChatsPerMonth(value[0])}
                min={100}
                max={100000}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100</span>
                <span>100,000+</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Harga Bulanan:</span>
                <span className="text-4xl font-bold text-primary">Rp {price.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {price === 0 ? "Gratis untuk hingga 1000 chat/bulan" : "per bulan"}
              </p>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Mulai Uji Coba Gratis
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

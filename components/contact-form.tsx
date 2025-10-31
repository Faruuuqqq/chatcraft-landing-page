"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/lib/toast-context"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { addToast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      addToast("Mohon isi semua field yang diperlukan", "error")
      return
    }

    setIsLoading(true)
    try {
      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1500))
      addToast("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.", "success")
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      addToast("Gagal mengirim pesan. Silakan coba lagi.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">Mari Berkolaborasi</h2>
          <p className="text-muted-foreground text-lg animate-fade-in">Hubungi tim kami untuk konsultasi gratis</p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Hubungi Kami</CardTitle>
            <CardDescription>Isi form di bawah dan kami akan segera merespons</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <Input
                placeholder="Nama Perusahaan"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading}
              />
              <textarea
                placeholder="Pesan Anda"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                rows={5}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

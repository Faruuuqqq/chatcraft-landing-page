"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/lib/toast-context";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      addToast("Mohon isi semua field yang diperlukan", "error");
      return;
    }

    setIsLoading(true);

    try {
      // Menggunakan Web3Forms (Gratis, tanpa server backend)
      // Ganti 'YOUR_ACCESS_KEY_HERE' dengan Access Key Anda nanti
      // Untuk testing bisa pakai demo key, tapi disarankan buat key sendiri di web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b6dd7fd3-1194-4fb3-9d7e-ffcf4f65821d", // TODO: Ganti dengan key dari web3forms
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: "New Lead from ChatCraft Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        addToast(
          "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
          "success",
        );
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        addToast("Gagal mengirim pesan. Silakan coba lagi.", "error");
      }
    } catch (error) {
      addToast("Terjadi kesalahan jaringan.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Mari Berkolaborasi
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in">
            Hubungi tim kami untuk konsultasi gratis
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Hubungi Kami</CardTitle>
            <CardDescription>
              Isi form di bawah dan kami akan segera merespons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden input for bot protection if needed */}
              <input
                type="hidden"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
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
                required
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
  );
}

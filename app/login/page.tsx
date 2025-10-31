"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Mail, Lock } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/lib/toast-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const { login } = useAuth()
  const { addToast } = useToast()
  const router = useRouter()

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!email.trim()) {
      newErrors.email = "Email harus diisi"
    } else if (!email.includes("@")) {
      newErrors.email = "Format email tidak valid"
    }

    if (!password) {
      newErrors.password = "Password harus diisi"
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      addToast("Mohon periksa kembali form Anda", "error")
      return
    }

    setIsLoading(true)

    try {
      await login(email, password)
      addToast("Login berhasil! Selamat datang kembali", "success")
      router.push("/dashboard")
    } catch (err) {
      addToast("Email atau password salah", "error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke beranda
        </Link>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.svg" alt="ChatCraft" width={40} height={40} className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Masuk ke ChatCraft</h1>
            <p className="text-muted-foreground text-sm">Kelola chatbot AI Anda dengan mudah</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: undefined })
                  }}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: undefined })
                  }}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.password ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Sedang masuk..." : "Masuk"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">atau</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-primary hover:text-primary/90 font-semibold transition-colors duration-200"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Lupa password?
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Dengan masuk, Anda setuju dengan{" "}
          <a href="#" className="hover:text-foreground transition-colors duration-200">
            Syarat Layanan
          </a>{" "}
          dan{" "}
          <a href="#" className="hover:text-foreground transition-colors duration-200">
            Kebijakan Privasi
          </a>
        </p>
      </div>
    </div>
  )
}

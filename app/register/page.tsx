"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, User, Building2, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/lib/toast-context"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const { register } = useAuth()
  const { addToast } = useToast()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap harus diisi"
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Nama bisnis harus diisi"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi"
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Format email tidak valid"
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok"
    }

    if (!agreeTerms) {
      newErrors.terms = "Anda harus setuju dengan syarat dan ketentuan"
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
      await register(formData.fullName, formData.businessName, formData.email, formData.password)
      setSuccess(true)
      addToast("Pendaftaran berhasil! Selamat datang di ChatCraft", "success")

      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } catch (err) {
      addToast("Email sudah terdaftar atau terjadi kesalahan", "error")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 transition-colors duration-300">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-6 animate-in fade-in scale-95 duration-500">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto animate-in zoom-in duration-500">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Pendaftaran Berhasil!</h2>
              <p className="text-muted-foreground">Silakan cek email Anda untuk verifikasi akun</p>
            </div>
            <Link href="/login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:shadow-lg">
                Masuk ke Akun
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
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
            <h1 className="text-2xl font-bold text-foreground">Daftar ChatCraft</h1>
            <p className="text-muted-foreground text-sm">Mulai otomatisasi customer service Anda hari ini</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">
                Nama Lengkap
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Nama Anda"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.fullName ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
            </div>

            {/* Business Name */}
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-foreground">
                Nama Bisnis
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Nama toko/bisnis Anda"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.businessName ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.businessName && <p className="text-sm text-red-500">{errors.businessName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.password ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">
                Konfirmasi Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground transition-colors duration-200 ${
                    errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
              </div>
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => {
                  setAgreeTerms(checked as boolean)
                  if (errors.terms) {
                    setErrors((prev) => ({ ...prev, terms: "" }))
                  }
                }}
                className="mt-1 transition-colors duration-200"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                Saya setuju dengan{" "}
                <a href="#" className="text-primary hover:text-primary/90 transition-colors duration-200">
                  Syarat Layanan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-primary hover:text-primary/90 transition-colors duration-200">
                  Kebijakan Privasi
                </a>
              </label>
            </div>
            {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Sedang mendaftar..." : "Daftar Sekarang"}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/90 font-semibold transition-colors duration-200"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

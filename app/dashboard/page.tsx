"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LogOut, MessageSquare, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm">Selamat datang, {user.fullName}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              logout()
              router.push("/")
            }}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Chatbots</p>
                <p className="text-3xl font-bold text-foreground mt-2">0</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Conversations</p>
                <p className="text-3xl font-bold text-foreground mt-2">0</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Response Rate</p>
                <p className="text-3xl font-bold text-foreground mt-2">0%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Satisfaction</p>
                <p className="text-3xl font-bold text-foreground mt-2">0%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent opacity-20" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-4">Mulai Membuat Chatbot</h2>
          <p className="text-muted-foreground mb-6">Belum ada chatbot? Buat yang pertama sekarang</p>
          <Button className="bg-primary hover:bg-primary/90">Buat Chatbot Baru</Button>
        </div>
      </main>
    </div>
  )
}

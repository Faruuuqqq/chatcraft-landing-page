import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/auth-context"
import { ToastProvider } from "@/lib/toast-context"
import { ToastContainer } from "@/components/toast-container"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
  description:
    "Tingkatkan layanan pelanggan dengan AI chatbot cerdas. Hemat waktu, tingkatkan kepuasan pelanggan, dan otomatisasi respons chat Anda.",
  keywords: "chatbot, AI, UMKM, customer service, otomasi, WhatsApp, Instagram",
  authors: [{ name: "ChatCraft" }],
  creator: "ChatCraft",
  publisher: "ChatCraft",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://chatcraft.app",
    siteName: "ChatCraft",
    title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
    description: "Tingkatkan layanan pelanggan dengan AI chatbot cerdas",
    images: [
      {
        url: "https://chatcraft.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChatCraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
    description: "Tingkatkan layanan pelanggan dengan AI chatbot cerdas",
    images: ["https://chatcraft.app/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={`font-sans antialiased`}>
        <ToastProvider>
          <AuthProvider>
            {children}
            <ToastContainer />
          </AuthProvider>
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  )
}

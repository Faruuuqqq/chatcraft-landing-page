import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/lib/toast-context";
import { ToastContainer } from "@/components/toast-container";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// URL website kamu (sesuai laporan audit)
const BASE_URL = "https://www.chatcraft.store";

export const metadata: Metadata = {
  // PENTING: metadataBase diperlukan untuk menyelesaikan URL relatif
  metadataBase: new URL(BASE_URL),
  title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
  description:
    "Tingkatkan layanan pelanggan dengan AI chatbot cerdas. Hemat waktu, tingkatkan kepuasan pelanggan, dan otomatisasi respons chat Anda.",
  keywords: "chatbot, AI, UMKM, customer service, otomasi, WhatsApp, Instagram, ChatCraft Indonesia",
  authors: [{ name: "ChatCraft Team" }],
  creator: "ChatCraft",
  publisher: "ChatCraft",
  verification: {
    google: "KODE_VERIFIKASI_DARI_GSC_DISINI", // Dapatkan dari Google Search Console
    other: {
      "facebook-domain-verification": "KODE_FB_DISINI", // Jika nanti pakai FB Ads
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // PENTING: Ini memperbaiki error "Canonical Tag"
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "ChatCraft",
    title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
    description: "Tingkatkan layanan pelanggan dengan AI chatbot cerdas",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "ChatCraft Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatCraft - AI Chatbot untuk UMKM Indonesia",
    description: "Tingkatkan layanan pelanggan dengan AI chatbot cerdas",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup untuk Bisnis/Software (Memperbaiki "No Schema.org data found")
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChatCraft",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR"
    },
    "description": "Platform AI Chatbot otomatisasi untuk UMKM Indonesia di WhatsApp, Instagram, dan TikTok.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "author": {
      "@type": "Organization",
      "name": "ChatCraft Indonesia",
      "url": BASE_URL
    }
  };

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
          {/* Inject Schema.org JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`font-sans antialiased`}>
          <ToastProvider>
            {children}
            <ToastContainer />
          </ToastProvider>
          <Analytics />
        </body>
      </html>
  );
}
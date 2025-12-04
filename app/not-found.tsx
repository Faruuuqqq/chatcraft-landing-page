import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground mb-8">Maaf, halaman yang Anda cari tidak tersedia.</p>
      <Link href="/">
        <Button>Kembali ke Beranda</Button>
      </Link>
    </div>
  )
}

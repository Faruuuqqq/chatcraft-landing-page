// app/terms/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
          <div className="space-y-6 text-muted-foreground">
            <p>Last updated: December 04, 2025</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">1. Terms</h2>
            <p>
              By accessing the website at{' '}
              <Link href="/" className="text-primary hover:underline">https://chatcraft.com</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on ChatCraft's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on ChatCraft's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by ChatCraft at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">3. Disclaimer</h2>
            <p>
              The materials on ChatCraft's website are provided on an 'as is' basis. ChatCraft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground pt-4">4. Limitations</h2>
            <p>
              In no event shall ChatCraft or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ChatCraft's website, even if ChatCraft or a ChatCraft authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
          <div className="text-center mt-12">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
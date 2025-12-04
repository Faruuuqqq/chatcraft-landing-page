// app/privacy-policy/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <p>Last updated: December 04, 2025</p>
            
            <p>
              Your privacy is important to us. It is ChatCraft's policy to respect your privacy regarding any information we may collect from you across our website,{' '}
              <Link href="/" className="text-primary hover:underline">https://chatcraft.com</Link>, and other sites we own and operate.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">2. How We Use Your Information</h2>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">3. Sharing Information</h2>
            <p>
              We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">4. Links to Other Sites</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            
            <p>
              Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
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
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: '%s | Auto-école Mazarin',
    default: 'Auto-école Mazarin - Permis & Formation Chilly-Mazarin',
  },
  description: 'Passez votre permis de conduire (B, AAC) et formations pro (SST, FIMO) à Chilly-Mazarin. 20 ans d\'expertise, taux de réussite élevé et pédagogie moderne.',
  keywords: ['Auto-école Chilly-Mazarin', 'Permis de conduire 91', 'Conduite accompagnée Essonne', 'Code de la route', 'Formation SST Chilly-Mazarin', 'FIMO', 'Permis accéléré'],
  openGraph: {
    title: 'Auto-école Mazarin - Votre réussite commence ici',
    description: 'Formation au permis de conduire et professionnelle à Chilly-Mazarin. Rejoignez une auto-école reconnue pour son excellence.',
    url: 'https://auto-ecole-mazarin.fr',
    siteName: 'Auto-école Mazarin',
    images: [
      {
        url: '/images/home-hero.jpg', // Assuming this path based on previous context, or use a general one
        width: 1200,
        height: 630,
        alt: 'Auto-école Mazarin à Chilly-Mazarin',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto-école Mazarin - Permis & Formation',
    description: 'Passez votre permis à Chilly-Mazarin avec des experts. Taux de réussite élevé.',
    images: ['/images/home-hero.jpg'], // Consistent with OG
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
          {/* <script src="https://static.elfsight.com/platform/platform.js" async></script> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

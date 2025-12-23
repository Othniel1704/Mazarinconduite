import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: 'MAZARIN CONDUITE & FORMATION',
  description: 'MAZARIN CONDUITE & FORMATION vous accueille au cœur de Chilly-Mazarin. 20 ans d\'expérience dans la formation à la conduite et formation professionnelle (SST, habilitation électrique, FIMO).',
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
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
        </ThemeProvider>
      </body>
    </html>
  );
}

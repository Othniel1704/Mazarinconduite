import { Suspense } from 'react';
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionDivider } from "@/components/ui/section-divider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from '@/lib/utils';

function ContactFormWrapper() {
  return <ContactForm />;
}

export default function ContactPage() {
  const address = "Chilly-Mazarin, France";
  const mapQuery = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-background min-h-screen">
      <HeroSection
        title="MAZARIN"
        subtitle="Entrez en contact avec nos experts en formation routière et professionnelle."
        imageUrl="https://images.pexels.com/photos/7433831/pexels-photo-7433831.jpeg"
        imageAlt="Contact Mazarin"
      />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12 animate-fade-in-up">
              <SectionTitle
                title="Parlons de votre projet"
                subtitle="Inscriptions, devis de formation professionnelle ou simple question : nous vous répondons sous 24h."
                centered
              />
            </div>

            <div className="lg:col-span-7 animate-fade-in-up animation-delay-200ms">
              <div className="rounded-[2.5rem] bg-secondary/30 backdrop-blur-xl border border-white/5 p-8 md:p-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary rounded-2xl text-primary-foreground shadow-lg shadow-primary/20">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-black">Envoyez un message</h3>
                </div>
                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-muted-foreground">Chargement du formulaire...</div>}>
                  <ContactFormWrapper />
                </Suspense>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8 animate-fade-in-up animation-delay-400ms">
              <div className="grid gap-6">
                {[
                  { icon: <MapPin className="h-6 w-6" />, title: "Localisation", content: address, sub: "Parking à proximité" },
                  { icon: <Phone className="h-6 w-6" />, title: "Téléphone", content: "01 69 56 10 70", href: "tel:+33169561070" },
                  { icon: <Mail className="h-6 w-6" />, title: "E-mail", content: "contact@mazarinconduite.fr", href: "mailto:contact@mazarinconduite.fr" },
                  { icon: <Clock className="h-6 w-6" />, title: "Accueil", content: "Lun-Ven: 09h-19h", sub: "Sam: 09h-16h" }
                ].map((item, i) => (
                  <div key={i} className="group p-6 rounded-3xl bg-secondary/20 border border-white/5 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-60 mb-1">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-xl font-black hover:text-primary transition-colors">{item.content}</a>
                        ) : (
                          <p className="text-xl font-black">{item.content}</p>
                        )}
                        {item.sub && <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 h-[300px] relative group">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Carte de ${address}`}
                  className="grayscale invert contrast-[0.9] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

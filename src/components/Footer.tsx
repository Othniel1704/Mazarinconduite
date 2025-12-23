import Link from "next/link";
import Image from "next/image";
import { CarFront, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6" prefetch={false}>
            <Image src="/images/mc-f-logo-shiny.png" alt="Logo MC&F" width={80} height={80} className="object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-foreground tracking-tight">AUTO-ÉCOLE MAZARIN</span>
              <span className="text-[13px] font-black text-primary tracking-[0.15em]">CONDUITE & FORMATION</span>
            </div>
          </Link>
          <p className="text-sm">
            {siteConfig.name} - Votre partenaire pour la réussite de votre permis de conduire et formations professionnelles.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Contactez-nous</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 shrink-0 text-primary" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{siteConfig.contact.phone}</a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/formations-tarifs" className="hover:text-primary transition-colors">Nos formations</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">L'auto-école</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="/legal" className="hover:text-primary transition-colors">Mentions légales & RGPD</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border text-center text-sm">
        <p>&copy; {currentYear} {siteConfig.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

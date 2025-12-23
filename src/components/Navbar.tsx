
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, CarFront } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { siteConfig } from "@/config/siteConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "L’auto-école" },
  { href: "/formations-tarifs", label: "Formules" },
  { href: "/courses", label: "Formation" },
  { href: "/testimonials", label: "Avis" },
  { href: "/code-de-la-route", label: "code" },
  { href: "/contact", label: "Contact" },
];

const moreItems = [
  { href: "/labels", label: "Labels" },
  { href: "/engagements", label: "Nos Engagements" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "Actualités" },

];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn("flex items-center gap-1 lg:gap-2", mobile ? "flex-col space-y-4 pt-6" : "hidden md:flex")}>
      {mainItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            "px-2.5 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-accent/50",
            mobile && "text-base w-full text-left px-3"
          )}
        >
          {item.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className="px-2.5 py-1 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md data-[state=open]:bg-primary/10 data-[state=open]:text-primary focus:outline-none flex items-center gap-1 whitespace-nowrap">
          Plus <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 min-w-max" sideOffset={8}>
          {moreItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="px-3 py-2">
              <Link
                href={item.href}
                className={cn(
                  "text-sm w-full",
                  pathname === item.href ? "bg-primary/10 text-primary" : ""
                )}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-7xl h-16 pointer-events-auto rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-2xl flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/images/mc-f-logo-shiny.png" alt="Logo MC&F" width={64} height={64} className="object-contain" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-base font-black text-foreground tracking-tight">AUTO-ÉCOLE MAZARIN</span>
            <span className="text-[11px] font-black text-primary tracking-[0.12em]">CONDUITE & FORMATION</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-nowrap">
          <NavLinks />
          <div className="flex items-center gap-2 border-l pl-4 border-border">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>

            <ThemeToggleButton />
          </div>
        </div>

        <div className="flex items-center md:hidden gap-1">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/images/mc-f-logo-shiny.png" alt="Logo MC&F" width={40} height={40} className="object-contain" />
                    <div className="flex flex-col leading-none">
                      <span className="text-[11px] font-black text-foreground tracking-tight">AUTO-ÉCOLE MAZARIN</span>
                      <span className="text-[8px] font-black text-primary tracking-[0.1em]">CONDUITE & FORMATION</span>
                    </div>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fermer le menu</span>
                  </Button>
                </div>
                <div className="p-4 flex flex-col flex-grow gap-4">
                  <NavLinks mobile />
                  <Button
                    asChild
                    variant="default"
                    className="mt-auto w-full"
                    size="lg"
                  >
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

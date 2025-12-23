"use client";

import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  imageUrl,
  imageAlt = "Hero image",
  imageHint,
  ctaText,
  ctaLink,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className={cn(
              "text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter",
              "animate-fade-in-up"
            )}>
              <span className="text-foreground">MAZARIN</span><br />
              <span className="text-primary font-outline-2">CONDUITE</span>
            </h1>
            {subtitle && (
              <p className={cn(
                "text-xl md:text-2xl mb-10 max-w-xl text-muted-foreground font-medium",
                "animate-fade-in-up animation-delay-200ms"
              )}>
                {subtitle}
              </p>
            )}
            {ctaText && ctaLink && (
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400ms">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105">
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5">
                  <Link href="#notre-auto-ecole">En savoir plus</Link>
                </Button>
              </div>
            )}
            {children && (
              <div className={cn("mt-12", "animate-fade-in-up animation-delay-600ms")}>
                {children}
              </div>
            )}
          </div>

          <div className="relative group perspective-1000 hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={800}
                  height={1000}
                  className="object-cover hero-bg-image-animate"
                  data-ai-hint={imageHint}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            {/* Geometric Accent */}
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-3xl -z-10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleZoomPan {
          0% {
            transform: scale(1.05) translate(0%, 0%);
          }
          50% {
            transform: scale(1.1) translate(-1%, 1%);
          }
          100% {
            transform: scale(1.05) translate(1%, -1%);
          }
        }
        .hero-bg-image-animate {
          animation: subtleZoomPan 30s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
import { SectionTitle } from "@/components/ui/section-title";
// import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard"; // Removed
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section";


export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        title="La Parole à Nos Élèves"
        subtitle="Découvrez ce que nos anciens élèves pensent de leur expérience chez MAZARIN CONDUITE & FORMATION."
        imageUrl="https://placehold.co/1920x800.png"
        imageAlt="Happy students with driving licenses"
        imageHint="happy people"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">


      </div>
    </>
  );
}

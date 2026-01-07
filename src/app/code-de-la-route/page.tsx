import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CodeDeLaRoutePage: React.FC = () => {
  const sections = [
    {
      title: "La Signalisation",
      content: "Maîtrisez tous les panneaux et marquages routiers",
      image: "https://images.pexels.com/photos/5644439/pexels-photo-5644439.jpeg"
    },
    {
      title: "Les Règles de Priorité",
      content: "Comprendre qui passe en premier et pourquoi",
      image: "https://images.pexels.com/photos/4391480/pexels-photo-4391480.jpeg"
    },
    {
      title: "La Conduite de Nuit",
      content: "Les spécificités de la conduite nocturne",
      image: "https://images.pexels.com/photos/3737094/pexels-photo-3737094.jpeg"
    }
  ];

  return (
    <>
      <HeroSection
        title="CODE DE LA ROUTE"
        subtitle="Votre passeport pour la route commence ici. Apprentissage accéléré et réussite garantie à Chilly-Mazarin."
        imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Apprentissage du code de la route"
        imageHint="student studying"
        ctaText="Je commence maintenant"
        ctaLink="/contact"
      />
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Mettez toutes les chances de votre côté"
          subtitle="Des outils modernes pour une formation théorique efficace."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden hover:shadow-lg transition-all duration-300",
                "animate-fade-in-up",
                `animation-delay-${index * 200}ms`
              )}
            >
              <div className="relative h-48">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
              alt="Séance de code à l'auto-école"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-black">Notre Méthode Exclusive</h3>
            <p className="text-lg text-muted-foreground">
              À <strong>Chilly-Mazarin</strong>, nous combinons le meilleur de la technologie et de l'humain.
              Nos moniteurs ne sont pas juste des correcteurs, ce sont des coachs dédiés à votre réussite.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center"><span className="mr-2 text-primary">✔</span> Cours en salle interactifs</li>
              <li className="flex items-center"><span className="mr-2 text-primary">✔</span> Accès 24/7 au Code en ligne</li>
              <li className="flex items-center"><span className="mr-2 text-primary">✔</span> Suivi de progression en temps réel</li>
              <li className="flex items-center"><span className="mr-2 text-primary">✔</span> Examens blancs en conditions réelles</li>
            </ul>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full font-bold shadow-lg shadow-primary/20">
                <Link href="/contact">S'inscrire en ligne</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeDeLaRoutePage;
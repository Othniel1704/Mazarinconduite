import React from 'react';
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionDivider } from "@/components/ui/section-divider";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ListChecks, AlertTriangle, Info, Briefcase, Users, University, CreditCardIcon, Landmark, Banknote, CheckCircle, ArrowRight, Star } from "lucide-react";
import { coursesData, type Course, type PackageItem } from '../courses/page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const financingOptions = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "CPF",
    description: "Utilisez vos droits CPF pour financer votre permis. Éligibilité garantie.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "France Travail",
    description: "Aides disponibles pour les demandeurs d'emploi. Accompagnement complet.",
  },
  {
    icon: <CreditCardIcon className="h-8 w-8 text-primary" />,
    title: "Paiement 4X",
    description: "Facilités de paiement sans frais pour s'adapter à votre budget.",
  },
];

const FormationsTarifsPage: React.FC = () => {
  const mainFormations = coursesData.filter(course => course.id !== "prestations-unites");

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection
        title="NOS FORMATIONS"
        subtitle="De l'apprentissage classique à la formation professionnelle, découvrez l'excellence Mazarin."
        imageUrl="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg"
      />

      <section id="main-formations" className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Formules & Packs"
            subtitle="Des parcours sur mesure conçus pour votre réussite totale."
            centered
          />

          <div className="space-y-32 mt-20">
            {mainFormations.map((course: Course, courseIndex: number) => (
              <div key={course.id} className="animate-fade-in-up">
                <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
                  <div className="lg:w-1/3">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                      {course.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "text-primary italic" : ""}>{word} </span>
                      ))}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {course.details?.description || "Une formation complète et rigoureuse pour maîtriser la route en toute confiance."}
                    </p>
                    <div className="mt-8 flex gap-2">
                      <div className="h-1 w-12 bg-primary rounded-full" />
                      <div className="h-1 w-4 bg-primary/30 rounded-full" />
                    </div>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {course.packages.map((pkg: PackageItem, index: number) => (
                      <Card
                        key={`${course.id}-${index}`}
                        className="group relative bg-secondary/20 border-white/5 hover:border-primary/20 transition-all duration-500 rounded-[2.5rem] overflow-hidden shadow-2xl"
                      >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Star className="h-12 w-12 text-primary" />
                        </div>
                        <CardHeader className="pt-10 px-8 pb-4">
                          <CardTitle className="text-2xl font-black mb-2">{pkg.title}</CardTitle>
                          <div className="text-4xl font-black text-primary">
                            {typeof pkg.price === 'number' ? `${pkg.price} €` : pkg.price}
                          </div>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 space-y-6">
                          {pkg.features && (
                            <ul className="space-y-3">
                              {pkg.features.slice(0, 5).map((f, fi) => (
                                <li key={fi} className="flex items-start gap-3 text-muted-foreground text-sm">
                                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                        <CardFooter className="px-8 pb-10">
                          <Button asChild className="w-full h-12 rounded-2xl font-bold group-hover:scale-105 transition-transform">
                            <Link href={`/contact?course=${encodeURIComponent(course.title + " - " + pkg.title)}`}>Réserver</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-secondary/30">
        <SectionDivider color="hsl(var(--background))" direction="up" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Financement"
            subtitle="Parce que votre avenir ne doit pas être un frein financier."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {financingOptions.map((option, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-background border border-white/5 hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                <div className="mb-6 p-4 w-fit bg-primary/10 rounded-2xl text-primary">
                  {option.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{option.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        <SectionDivider color="hsl(var(--background))" direction="down" />
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">Prêt à <span className="text-primary italic">Réussir</span> ?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Rejoignez Mazarin Conduite & Formation et bénéficiez de 20 ans d&apos;expertise à Chilly-Mazarin.</p>
          <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full font-bold shadow-2xl shadow-primary/30">
            <Link href="/contact">Commencer l&apos;aventure</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FormationsTarifsPage;


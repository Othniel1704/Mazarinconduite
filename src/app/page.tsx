import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MapPin, Phone, Mail, Clock, Car, ShieldCheck, TrendingUp, BookOpen, CalendarClock, Presentation, Star } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionDivider } from "@/components/ui/section-divider";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div className="relative">
        <HeroSection
          title="MAZARIN CONDUITE & FORMATION"
          subtitle="Votre auto-école à Chilly-Mazarin pour le permis de conduire, la conduite accompagnée et le code de la route. Forgez votre indépendance dès aujourd'hui."
          imageUrl="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg"
          imageAlt="Formation à la conduite"
          ctaText="S'inscrire en ligne"
          ctaLink="/contact"
        />
      </div>

      <section id="notre-auto-ecole" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                20 Ans d&apos;Expertise
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Une Pédagogie <span className="text-primary italic">Signature</span>
              </h2>
              <div className="prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Forte d&apos;une expérience de 20 ans dans la formation à la conduite, <strong>MAZARIN CONDUITE & FORMATION</strong> n&apos;est pas qu&apos;une simple auto-école. C&apos;est un engagement pour votre réussite et votre sécurité.
                </p>
                <p>
                  Nous vous accueillons au cœur de Chilly-Mazarin dans des locaux pensés pour l&apos;apprentissage moderne. Notre approche pédagogique personnalisée transforme chaque heure de conduite en une étape vers votre totale autonomie.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative group animate-fade-in-up animation-delay-400ms">
              <div className="relative z-10 rounded-[3rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                  alt="Mazarin Driving Experience"
                  width={600}
                  height={800}
                  className="object-cover h-[500px]"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-[3rem] -z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section id="avantages" className="relative py-24 md:py-32 bg-secondary/30">
        <SectionDivider color="hsl(var(--background))" direction="up" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="L'Excellence Mazarin"
            subtitle="Pourquoi plus de 1000 élèves nous font confiance chaque année."
            centered
          />

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:grid-rows-2">
            {[
              {
                title: "Qualiopi",
                desc: "Certification d'État garantissant une formation de haute qualité.",
                icon: <Award className="h-10 w-10 text-primary" />,
                span: "md:col-span-2 md:row-span-2"
              },
              {
                title: "Experts Diplômés",
                desc: "Moniteurs passionnés et patients.",
                icon: <Users className="h-10 w-10 text-primary" />,
                span: "md:col-span-2 md:row-span-1"
              },
              {
                title: "Modernité",
                desc: "Véhicules récents et connectés.",
                icon: <Car className="h-10 w-10 text-primary" />,
                span: "md:col-span-2 md:row-span-1"
              },
              {
                title: "Flexibilité",
                desc: "Plannings adaptés à votre vie active.",
                icon: <CalendarClock className="h-10 w-10 text-primary" />,
                span: "md:col-span-2 md:row-span-1"
              },
              {
                title: "Espace Code",
                desc: "Salle équipée des derniers logiciels Rousseau.",
                icon: <Presentation className="h-10 w-10 text-primary" />,
                span: "md:col-span-2 md:row-span-1"
              }
            ].map((avantage, index) => (
              <Card
                key={avantage.title}
                className={cn(
                  "hover-card-effect border-white/5 bg-card/50 backdrop-blur pb-6",
                  avantage.span,
                  "animate-fade-in-up",
                  `animation-delay-${index * 150}ms`
                )}
              >
                <CardHeader>
                  <div className="p-3 w-fit bg-primary/5 rounded-2xl mb-4">
                    {avantage.icon}
                  </div>
                  <CardTitle className="text-2xl">{avantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{avantage.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionDivider color="hsl(var(--background))" direction="down" />
      </section>

      <section id="partenaires" className="py-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4 text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Organismes Partenaires & Certifications</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
          {[
            { name: "Qualiopi", url: "/images/LogoQualiopi.png" },
            { name: "France Travail", url: "/images/logo-france-travail.png" },
            { name: "CPF", url: "/images/Logo-Mon-Compte-Formation-Appli-CPF.jpg" },
            { name: "Région Île-de-France", url: "/images/logo.jpg" },
            { name: "Sécurité Routière", url: "/images/logo_ecole_de_conduite_qualité.png" }
          ].map((partner) => (
            <img key={partner.name} src={partner.url} alt={partner.name} className="h-10 md:h-14 w-auto object-contain" />
          ))}
        </div>
      </section>

      <section id="formation-professionnelle" className="relative py-24 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
          <SectionTitle
            title="Formation Professionnelle"
            subtitle="Propulsez votre carrière avec nos modules certifiés."
            centered
          />
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "SST", desc: "Sauveteur Secouriste (2j)", icon: <ShieldCheck className="h-8 w-8" /> },
              { title: "FIMO", desc: "Module Formateur", icon: <BookOpen className="h-8 w-8" /> },
              { title: "Habilitation", desc: "Risques Électriques", icon: <Presentation className="h-8 w-8" /> }
            ].map((formation, index) => (
              <div
                key={formation.title}
                className={cn(
                  "p-8 rounded-[2rem] bg-card border border-white/5 shadow-xl hover:-translate-y-4 transition-all duration-500 w-full max-w-[300px] text-center",
                  "animate-fade-in-up",
                  `animation-delay-${index * 100}ms`
                )}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  {formation.icon}
                </div>
                <h4 className="text-2xl font-black mb-2">{formation.title}</h4>
                <p className="text-muted-foreground">{formation.desc}</p>
                <Button variant="link" className="mt-4 text-primary p-0">Détails <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
            Prêt à <span className="text-primary italic underline decoration-wavy decoration-primary/20 underline-offset-8">Démarrer</span> ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Un projet, une question ? Nos experts sont là pour vous accompagner vers votre future indépendance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full font-bold shadow-2xl shadow-primary/30">
              <Link href="/contact">Nous Contacter</Link>
            </Button>
            <div className="flex items-center gap-4 px-8 border-l border-white/10 text-left">
              <div className="p-3 bg-primary/10 rounded-xl text-primary"><Phone className="h-6 w-6" /></div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">Ligne Directe</p>
                <p className="text-xl font-black">01 69 56 10 70</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <Card className="rounded-[2.5rem] bg-secondary/30 backdrop-blur-xl border-white/5 p-4 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-black"><Clock className="mr-3 h-6 w-6 text-primary" />Horaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-lg text-muted-foreground">
                <p>Lundi - Vendredi : 09h - 19h</p>
                <p>Samedi : 09h - 16h</p>
              </CardContent>
            </Card>
            <Card className="rounded-[2.5rem] bg-secondary/30 backdrop-blur-xl border-white/5 p-4 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-black"><MapPin className="mr-3 h-6 w-6 text-primary" />Lieu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-muted-foreground">
                <p>Chilly-Mazarin, France</p>
                <Button variant="outline" className="rounded-full border-primary/20">Voir sur Google Maps</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

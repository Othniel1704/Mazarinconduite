import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, MapPin, Phone, Mail, Clock, Car, ShieldCheck, TrendingUp, BookOpen, CalendarClock, Presentation, Star } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionDivider } from "@/components/ui/section-divider";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const testimonials: Testimonial[] = [
    {
      name: "Thomas D.",
      text: "Formation au top ! J'ai eu mon permis du premier coup grâce à la patience de mon moniteur. L'équipe est super sympa et à l'écoute.",
      rating: 5,
      course: "Permis B"
    },
    {
      name: "Sarah L.",
      text: "Le code en accéléré m'a permis de tout valider en 2 semaines. Les explications en salle sont vraiment utiles par rapport aux applis seules.",
      rating: 5,
      course: "Code de la route"
    },
    {
      name: "Mehdi K.",
      text: "Conduite accompagnée faite ici. Le suivi pédagogique est sérieux et on se sent vraiment prêt pour l'examen. Je recommande !",
      rating: 5,
      course: "AAC"
    }
  ];

  const faqData = [
    {
      question: "Quels documents pour l'inscription ?",
      answer: "Pièce d'identité, photos ANTS, justificatif de domicile (-6 mois) et attestation JDC/recensement."
    },
    {
      question: "Combien de temps dure la formation ?",
      answer: "Minimum légal de 20h (13h en boîte auto). En moyenne, comptez 25-35h selon votre progression."
    },
    {
      question: "Proposez-vous le paiement en plusieurs fois ?",
      answer: "Oui, nous acceptons le paiement en 3 ou 4 fois sans frais, ainsi que le financement CPF et France Travail."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div className="relative">
        <HeroSection
          title="MAZARIN CONDUITE & FORMATION"
          subtitle="Votre auto-école à Chilly-Mazarin : Permis de conduire, Conduite Accompagnée et Code de la route. Prenez le volant de votre avenir dès aujourd'hui."
          imageUrl="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Conduite au coucher du soleil"
          ctaText="S'inscrire en ligne"
          ctaLink="/contact"
        />
      </div>

      <section id="notre-auto-ecole" className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                Expertise & Innovation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Apprendre à conduire à <span className="text-primary italic">Chilly-Mazarin</span>
              </h2>
              <div className="prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Avec plus de <strong>20 ans d&apos;expérience</strong>, MAZARIN CONDUITE & FORMATION réinvente l&apos;apprentissage de la conduite. Notre mission ? Vous offrir bien plus qu&apos;un permis : une véritable éducation à la sécurité routière.
                </p>
                <p>
                  Situés au cœur de <strong>Chilly-Mazarin</strong>, nous vous accueillons dans un espace moderne et convivial. Que ce soit pour la <strong>conduite accompagnée</strong>, le <strong>permis B</strong> ou le <strong>code de la route</strong>, notre pédagogie sur-mesure s&apos;adapte à votre rythme pour garantir votre réussite.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative group animate-fade-in-up animation-delay-400ms">
              <div className="relative z-10 rounded-[3rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
                  alt="Véhicule auto-école moderne"
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

      <section id="temoignages" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Avis de nos Élèves"
            subtitle="Ils ont passé leur permis avec nous. Voici ce qu'ils en pensent."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, i) => (
              <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button variant="outline" className="rounded-full" asChild>
                <a href="https://g.page/r/C..." target="_blank" rel="noopener noreferrer">Voir plus d'avis sur Google</a>
             </Button>
          </div>
        </div>
      </section>

      <section id="faq-home" className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-black mb-6">Questions Fréquentes</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Vous avez des interrogations avant de vous lancer ? Voici les réponses aux questions les plus courantes.
                </p>
                <Button asChild>
                  <Link href="/faq">Voir toute la FAQ</Link>
                </Button>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
           </div>
        </div>
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

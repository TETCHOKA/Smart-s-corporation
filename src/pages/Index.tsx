import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formationCategories } from "@/data/formations";
import { testimonials } from "@/data/testimonials";
import InscriptionModal from "@/components/InscriptionModal";
import {
  GraduationCap,
  Users,
  Trophy,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle,
  MapPin,
} from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Étudiants formés" },
  { icon: Trophy, value: "85%", label: "Taux de réussite" },
  { icon: Clock, value: "10+", label: "Années d'expérience" },
  { icon: GraduationCap, value: "15+", label: "Concours préparés" },
];
const centres = [
  {
    id: 1,
    nom: "GSB ÉLITE – Logpom",
    adresse: "Face Tradex Logpom, entre le rond  Poulain et l'ancien ÉNEO",
    quartier: "Logpom, Douala",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6756887899323!2d9.755946873603417!3d4.086282995887476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610dd0d243add7%3A0xc60b55801808a465!2sTradex%20Rh%C3%B4ne%20Poulenc%2C%20Douala!5e0!3m2!1sfr!2scm!4v1776758102492!5m2!1sfr!2scm",
  },
  {
    id: 2,
    nom: "Collège IPPB – Bonamoussadi",
    adresse: "Entre le marché Bonamoussadi et le carrefour des immeubles",
    quartier: "Bonamoussadi, Douala",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.284322666972!2d9.73874635285856!3d4.093034095880721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610fb2f1299c9b%3A0xd606a0fbfadf9fa9!2sKMC%20BONAMOUSSADI!5e0!3m2!1sfr!2scm!4v1776757659286!5m2!1sfr!2scm",
  },
];

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary section-padding">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground">
              <Star className="w-4 h-4" />
              Centre d'excellence au Cameroun : Un bachelier un concour
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Votre réussite aux{" "}
              <span className="text-gradient">concours</span>{" "}
              commence ici
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Smart's Corporation vous prépare aux concours d'entrée dans les plus grandes écoles et facultés du Cameroun et de l'étranger avec des méthodes aprouvées et un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base font-semibold shadow-lg px-8" onClick={() => setModalOpen(true)}>
                S'inscrire maintenant
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Link to="/formations">
                <Button size="lg" variant="outline" className="text-base font-semibold px-8 w-full sm:w-auto">
                  Voir les formations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nos formations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Découvrez nos programmes de préparation aux concours les plus prestigieux du Cameroun.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formationCategories.map((cat) => (
              <Link to="/formations" key={cat.id}>
                <Card className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{cat.icon}</div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <ul className="space-y-2">
                      {cat.formations.map((f) => (
                        <li key={f.id} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {f.name}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* Section Centres */}
<section className="section-padding">
  <div className="container mx-auto">
    <div className="text-center mb-8 space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nos centres de formation</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Retrouvez-nous dans deux centres stratégiquement situés à Douala.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {centres.map((centre) => (
        <Card key={centre.id} className="shadow-lg overflow-hidden">
          {/* Carte Maps */}
          <div className="w-full h-48">
            <iframe
              src={centre.maps}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={centre.nom}
            />
          </div>

          {/* Infos */}
          <CardContent className="p-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{centre.nom}</h3>
                <p className="text-sm text-muted-foreground mt-1">{centre.adresse}</p>
                <span className="inline-block mt-2 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {centre.quartier}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
    
      {/* Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ils nous font confiance</h2>
            <p className="text-muted-foreground">Témoignages de nos anciens étudiants</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-lg text-foreground italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].formation} – {testimonials[currentTestimonial].year}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button onClick={prevTestimonial} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Précédent">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentTestimonial(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? "bg-primary" : "bg-border"}`}
                        aria-label={`Témoignage ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextTestimonial} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Suivant">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à réussir votre concours ?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Rejoignez Smart's Corporation et donnez-vous les moyens de réussir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold px-8"
              onClick={() => setModalOpen(true)}
            >
              S'inscrire maintenant
            </Button>
            <a
              href={`https://wa.me/237655785620?text=${encodeURIComponent("Bonjour, je souhaite m'inscrire !")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-base font-semibold px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Contacter via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <InscriptionModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;

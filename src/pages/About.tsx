import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque programme de formation." },
  { icon: Heart, title: "Engagement", description: "Un accompagnement personnalisé pour chaque étudiant." },
  { icon: Award, title: "Résultats", description: "Un taux de réussite parmi les meilleurs du Cameroun." },
  { icon: Users, title: "Communauté", description: "Une communauté d'entraide entre étudiants et formateurs." },
];

const team = [
  { name: "Dr. Emmanuel Nguema", role: "Directeur & Fondateur", initials: "EN", speciality: "Mathématiques & Physique" },
  { name: "Prof. Hélène Atangana", role: "Responsable pédagogique", initials: "HA", speciality: "Sciences biologiques" },
  { name: "M. Patrick Eboumbou", role: "Formateur senior", initials: "PE", speciality: "Chimie & Physique" },
  { name: "Mme. Sandrine Kamga", role: "Coordinatrice", initials: "SK", speciality: "Économie & Gestion" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            À propos de <span className="text-gradient">Smart's Corporation</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Depuis plus de 10 ans, nous accompagnons les étudiants camerounais vers la réussite aux concours les plus exigeants.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Notre Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Offrir une préparation de qualité supérieure aux concours, accessible à tous les étudiants camerounais, en combinant rigueur académique et méthodes pédagogiques innovantes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Notre Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le centre de référence en Afrique centrale pour la préparation aux concours, en formant les leaders de demain avec excellence et passion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <v.icon className="w-10 h-10 mx-auto text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notre Équipe</h2>
            <p className="text-muted-foreground">Des formateurs expérimentés et passionnés</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ce qui nous distingue</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Cours en petits groupes (max 20 étudiants)",
                "Simulations d'examens régulières",
                "Suivi personnalisé de chaque étudiant",
                "Enseignants issus des grandes écoles",
                "Supports de cours actualisés chaque année",
                "Flexibilité : cours en groupe ou à domicile",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                  <p className="opacity-90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

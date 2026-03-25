import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, Users, CheckCircle, ArrowRight } from "lucide-react";

const subjects = [
  { name: "Mathématiques", description: "Algèbre, analyse, géométrie, probabilités et statistiques", icon: "📐" },
  { name: "Physique", description: "Mécanique, électricité, optique, thermodynamique", icon: "⚡" },
  { name: "Chimie", description: "Chimie organique, chimie minérale, thermochimie", icon: "🧪" },
  { name: "Culture générale", description: "Actualités, histoire, géographie, expression française", icon: "📚" },
];

const advantages = [
  "Programmes adaptés au niveau de chaque étudiant",
  "Enseignants qualifiés et expérimentés",
  "Supports de cours complets et actualisés",
  "Exercices pratiques et corrections détaillées",
  "Suivi régulier des progrès",
  "Horaires flexibles selon vos disponibilités",
  "Possibilité de cours individuels ou en groupe",
  "Tarifs compétitifs et abordables",
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Cours de <span className="text-gradient">remise à niveau</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Renforcez vos bases et comblez vos lacunes avec nos cours de soutien personnalisés.
          </p>
        </div>
      </section>

      {/* Modes */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Cours en groupe</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Apprenez en petits groupes de 5 à 15 étudiants pour une dynamique collective stimulante. Échanges, émulation et entraide au programme.
                </p>
                <ul className="space-y-2">
                  {["Groupes de 5 à 15 étudiants", "Horaires fixes et réguliers", "Tarifs avantageux"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Cours à domicile</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un enseignant se déplace chez vous pour des cours particuliers adaptés à votre rythme et vos besoins spécifiques.
                </p>
                <ul className="space-y-2">
                  {["Cours individuels personnalisés", "Horaires flexibles", "Suivi sur mesure"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Matières enseignées</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((s) => (
              <Card key={s.name} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Nos avantages</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{adv}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button size="lg" className="font-semibold px-8">
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

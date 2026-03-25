import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formationCategories } from "@/data/formations";
import InscriptionModal from "@/components/InscriptionModal";
import { Clock, Users, Home, CheckCircle } from "lucide-react";

const Formations = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState("");

  const filteredCategories = activeCategory
    ? formationCategories.filter((c) => c.id === activeCategory)
    : formationCategories;

  const openInscription = (formationId: string) => {
    setSelectedFormation(formationId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Nos <span className="text-gradient">Formations</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez nos programmes de préparation aux concours les plus prestigieux du Cameroun.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-card/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              Toutes
            </Button>
            {formationCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations list */}
      <section className="section-padding">
        <div className="container mx-auto space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cat.name}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {cat.formations.map((formation) => (
                  <Card key={formation.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-foreground">{formation.name}</h3>
                        <Badge variant="secondary" className="flex-shrink-0 text-xs">
                          {formation.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{formation.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Conditions :</strong> {formation.conditions}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Durée :</strong> {formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {formation.modes.includes("À domicile") ? (
                            <Home className="w-4 h-4 text-primary flex-shrink-0" />
                          ) : (
                            <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          )}
                          <span className="text-muted-foreground">
                            <strong>Mode :</strong> {formation.modes.join(" / ")}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full font-semibold" onClick={() => openInscription(formation.id)}>
                        S'inscrire à cette formation
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <InscriptionModal open={modalOpen} onOpenChange={setModalOpen} defaultFormation={selectedFormation} />
    </div>
  );
};

export default Formations;

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
 

const categories = ["Tout", "Cours", "Centre", "Activités", "Événements"];

const galleryItems = [
  { id: 1, category: "Cours", title: "Session de préparation en mathématiques", img:"src/images/salle.jpeg"},
  { id: 2, category: "Centre", title: "Smat's Challenge", img:"src/images/chalenge1.jpeg" },
  { id: 3, category: "Activités", title: "Promoteur", img:"src/images/chalenge4.jpeg" },
  { id: 4, category: "Événements", title: "Smat's Challenge", img:"src/images/chalenge.jpeg" },
  { id: 5, category: "Cours", title: "Smat's Challenge", img:"src/images/chal.jpeg" },
  { id: 6, category: "Centre", title: "Smat's Challenge", img:"src/images/chalenge3.jpeg" },
  { id: 7, category: "Activités", title: "Simulation d'examen", img:"src/images/adja.jpeg" },
  { id: 8, category: "Événements", title: "Journée portes ouvertes",  img:"src/images/journe.jpeg"},
  { id: 9, category: "Cours", title: "Tutorat individuel", img:"src/images/chalenge2.jpeg" },
];

 

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const filtered = activeFilter === "Tout" ? galleryItems : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Notre <span className="text-gradient">Galerie</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez en images la vie au sein de Smart's Corporation.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { CalendarDays, ArrowRight } from "lucide-react";

// const articles = [
//   {
//     id: 1,
//     title: "5 conseils pour réussir le concours de Polytechnique",
//     excerpt: "Découvrez nos meilleures stratégies pour aborder sereinement le concours d'entrée à l'École Polytechnique.",
//     date: "15 Mars 2025",
//     category: "Conseils",
//   },
//   {
//     id: 2,
//     title: "Calendrier des concours 2025 au Cameroun",
//     excerpt: "Retrouvez toutes les dates importantes des concours pour l'année académique 2025-2026.",
//     date: "10 Mars 2025",
//     category: "Informations",
//   },
//   {
//     id: 3,
//     title: "Comment bien organiser ses révisions ?",
//     excerpt: "Un planning de révision efficace est la clé de la réussite. Voici comment le mettre en place.",
//     date: "5 Mars 2025",
//     category: "Astuces",
//   },
//   {
//     id: 4,
//     title: "Résultats exceptionnels de nos étudiants en 2024",
//     excerpt: "Nous sommes fiers d'annoncer un taux de réussite de 85% pour la session 2024.",
//     date: "1 Mars 2025",
//     category: "Actualités",
//   },
//   {
//     id: 5,
//     title: "Nouvelle session de préparation FMSB",
//     excerpt: "Inscription ouverte pour la nouvelle session intensive de préparation au concours de médecine.",
//     date: "25 Février 2025",
//     category: "Actualités",
//   },
//   {
//     id: 6,
//     title: "Les erreurs à éviter lors d'un concours",
//     excerpt: "Analyse des erreurs les plus fréquentes commises par les candidats et comment les éviter.",
//     date: "20 Février 2025",
//     category: "Conseils",
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="min-h-screen">
//       <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
//         <div className="container mx-auto text-center max-w-3xl space-y-4">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
//             <span className="text-gradient">Actualités</span> & Conseils
//           </h1>
//           <p className="text-lg text-muted-foreground">
//             Restez informé des dernières nouvelles et profitez de nos conseils pour réussir.
//           </p>
//         </div>
//       </section>

//       <section className="section-padding">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {articles.map((article) => (
//               <Card key={article.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="flex items-center justify-between">
//                     <Badge variant="secondary" className="text-xs">{article.category}</Badge>
//                     <div className="flex items-center gap-1 text-xs text-muted-foreground">
//                       <CalendarDays className="w-3.5 h-3.5" />
//                       {article.date}
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
//                     {article.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
//                   <div className="flex items-center gap-1 text-sm font-medium text-primary">
//                     Lire la suite <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "5 conseils pour réussir le concours de Polytechnique",
    excerpt: "Découvrez nos meilleures stratégies pour aborder sereinement le concours d'entrée à l'École Polytechnique.",
    date: "5 Mars 2026", 
    category: "Conseils",
  },
  {
    id: 2,
    title: "Calendrier des concours 2026 au Cameroun",
    excerpt: "Retrouvez toutes les dates importantes des concours pour l'année académique 2026-2027.",
    date: "10 Mars 2026",
    category: "Informations",
  },
  {
    id: 3,
    title: "Comment bien organiser ses révisions ?",
    excerpt: "Un planning de révision efficace est la clé de la réussite. Voici comment le mettre en place.",
    date: "5 Mars 2026",
    category: "Astuces",
  },
  {
    id: 4,
    title: "Résultats exceptionnels de nos étudiants en 2024",
    excerpt: "Nous sommes fiers d'annoncer un taux de réussite de 85% pour la session 2024.",
    date: "1 Mars 2026",
    category: "Actualités",
  },
  {
    id: 5,
    title: "Nouvelle session de préparation FMSB",
    excerpt: "Inscription ouverte pour la nouvelle session intensive de préparation au concours de médecine.",
    date: "25 Février 2026",
    category: "Actualités",
  },
  {
    id: 6,
    title: "Les erreurs à éviter lors d'un concours",
    excerpt: "Analyse des erreurs les plus fréquentes commises par les candidats et comment les éviter.",
    date: "20 Février 2026",
    category: "Conseils",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            <span className="text-gradient">Actualités</span> & Conseils
          </h1>
          <p className="text-lg text-muted-foreground">
            Restez informé des dernières nouvelles et profitez de nos conseils pour réussir.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.id} to={`/actualites/${article.id}`}>
                <Card className="hover:shadow-lg transition-shadow group cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary">
                      Lire la suite <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

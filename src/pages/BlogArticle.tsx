import { useParams, Link } from "react-router-dom";
import { CalendarDays, ArrowLeft, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 2,
    title: "5 conseils pour réussir le concours de Polytechnique",
    excerpt: "Découvrez nos meilleures stratégies pour aborder sereinement le concours d'entrée à l'École Polytechnique.",
    date: "15 Mars 2025",
    category: "Conseils",
    author: "Équipe Smart's Corporation",
    content: `
Le concours d'entrée à l'École Polytechnique est l'un des plus exigeants au Cameroun. Voici nos 5 conseils essentiels pour maximiser vos chances de réussite.

**1. Commencez tôt votre préparation**

Ne sous-estimez jamais le temps nécessaire pour bien se préparer. Cela vous laisse le temps de couvrir l'ensemble du programme, de faire des révisions et de vous entraîner sur les épreuves passées.

**2. Maîtrisez les mathématiques et la physique**

Ces deux matières représentent le cœur du concours. Concentrez-vous sur la résolution de problèmes complexes et la compréhension profonde des concepts fondamentaux. Chez Smart's Corporation, nos enseignants vous guident à travers les sujets les plus fréquemment posés.

**3. Entraînez-vous sur les annales**

Les annales des années précédentes sont une mine d'or. Elles vous permettent de comprendre la structure des épreuves, le niveau de difficulté attendu et les thèmes récurrents. Faites au minimum 10 sujets complets en conditions réelles.

**4. Gérez votre temps efficacement**

Pendant le concours, le temps est votre ennemi. Apprenez à répartir votre temps entre les différentes questions. Ne restez pas bloqué sur une question difficile — passez à la suite et revenez-y si le temps le permet.

**5. Prenez soin de votre santé mentale et physique**

Un esprit sain dans un corps sain. Dormez suffisamment, mangez équilibré et faites de l'exercice. Le stress est normal, mais il ne doit pas vous paralyser. Pratiquez des techniques de relaxation et gardez confiance en vos capacités.

Chez **Smart's Corporation**, nous accompagnons chaque année des dizaines d'étudiants vers la réussite au concours de Polytechnique. Rejoignez-nous pour mettre toutes les chances de votre côté !
    `,
  },
  {
    // id: 2,
    title: "Calendrier des concours 2025 au Cameroun",
    excerpt: "Retrouvez toutes les dates importantes des concours pour l'année académique 2025-2026.",
    date: "10 Mars 2025",
    category: "Informations",
    author: "Équipe Smart's Corporation",
    content: `
L'année 2025 s'annonce riche en concours d'entrée dans les grandes écoles du Cameroun. Voici le calendrier prévisionnel pour vous aider à planifier vos révisions.

**Concours d'ingénierie**

- **Polytechnique Yaoundé** : Juillet 2025
- **Polytechnique Douala** : Août 2025
- **IUT (toutes filières)** : Septembre 2025

**Concours d'enseignement**

- **ENS Yaoundé** : Août 2025
- **ENS Maroua** : Août 2025
- **ENSET Douala** : Septembre 2025

**Concours de management**

- **ESSEC** : Juillet 2025
- **IUT Tertiaire** : Septembre 2025

**Concours de médecine**

- **FMSB Yaoundé** : Septembre 2025
- **FMSP Dschang** : Octobre 2025

**Écoles de bourse**

- **ISSEA** : Juin 2025
- **ASECNA (EAMAC)** : Juillet 2025
- **EAMAU** : Août 2025

⚠️ **Important** : Ces dates sont indicatives et peuvent être modifiées par les autorités compétentes. Consultez régulièrement les sites officiels des établissements pour les confirmations.

**Conseil** : Inscrivez-vous dès maintenant à nos sessions de préparation pour être prêt le jour J. Smart's Corporation propose des programmes adaptés à chaque concours.
    `,
  },
  {
    id: 3,
    title: "Comment bien organiser ses révisions ?",
    excerpt: "Un planning de révision efficace est la clé de la réussite. Voici comment le mettre en place.",
    date: "5 Mars 2025",
    category: "Astuces",
    author: "Équipe Smart's Corporation",
    content: `
La réussite à un concours ne repose pas uniquement sur l'intelligence, mais surtout sur une préparation méthodique et bien organisée.

**Étape 1 : Faites un état des lieux**

Avant de commencer, évaluez vos forces et vos faiblesses dans chaque matière. Cela vous permettra de consacrer plus de temps aux domaines où vous avez le plus besoin de progresser.

**Étape 2 : Créez un planning réaliste**

Divisez votre temps de révision en blocs de 2 à 3 heures avec des pauses régulières. Alternez entre les matières pour éviter la monotonie. Prévoyez des jours de repos pour éviter le surmenage.

**Étape 3 : Utilisez la méthode des fiches**

Résumez chaque chapitre sur des fiches synthétiques. Elles seront vos meilleures alliées pour les révisions de dernière minute. Utilisez des couleurs et des schémas pour faciliter la mémorisation.

**Étape 4 : Pratiquez régulièrement**

La théorie seule ne suffit pas. Faites des exercices et des sujets d'examen régulièrement. Chronométrez-vous pour vous habituer aux contraintes de temps du concours.

**Étape 5 : Révisez en groupe**

Rejoindre un groupe de révision peut être très bénéfique. Expliquer un concept à quelqu'un d'autre est l'une des meilleures façons de le maîtriser. Chez Smart's Corporation, nos sessions en groupe favorisent cet apprentissage collaboratif.

**Étape 6 : Suivez vos progrès**

Tenez un journal de vos révisions et notez vos scores aux exercices. Cela vous permettra de voir votre progression et d'ajuster votre planning si nécessaire.

N'hésitez pas à nous contacter pour bénéficier d'un accompagnement personnalisé dans l'organisation de vos révisions.
    `,
  },
  {
    // id: 4,
    title: "Résultats exceptionnels de nos étudiants en 2024",
    excerpt: "Nous sommes fiers d'annoncer un taux de réussite de 85% pour la session 2024.",
    date: "1 Mars 2025",
    category: "Actualités",
    author: "Équipe Smart's Corporation",
    content: `
L'année 2024 a été une année exceptionnelle pour Smart's Corporation et ses étudiants. Nous sommes fiers de partager ces résultats remarquables.

**Taux de réussite global : 85%**

Sur l'ensemble de nos formations, 85% de nos étudiants ont réussi le concours qu'ils préparaient. Un chiffre qui témoigne de la qualité de notre encadrement et de la détermination de nos apprenants.

**Résultats par filière :**

- **Polytechnique** : 78% de réussite
- **ENS/ENSET** : 88% de réussite
- **FMSB/FMSP** : 82% de réussite
- **ESSEC** : 90% de réussite
- **Écoles de bourse (ISSEA, ASECNA)** : 85% de réussite

**Témoignages de nos lauréats**

*"Smart's Corporation m'a donné les outils et la confiance nécessaires pour réussir le concours de Polytechnique. Les enseignants sont compétents et disponibles."* — Paul M., admis à Polytechnique Yaoundé

*"Grâce aux cours intensifs et aux exercices corrigés, j'ai pu décrocher une place à la FMSB. Merci à toute l'équipe !"* — Marie N., admise à la FMSB

**Notre engagement pour 2025**

Forts de ces résultats, nous renforçons notre offre de formation pour 2025 avec de nouveaux modules, des enseignants supplémentaires et des conditions d'apprentissage encore meilleures.

Rejoignez la promotion 2025 et faites partie des prochains lauréats de Smart's Corporation !
    `,
  },
  {
    // id: 5,
    title: "Nouvelle session de préparation FMSB",
    excerpt: "Inscription ouverte pour la nouvelle session intensive de préparation au concours de médecine.",
    date: "25 Février 2025",
    category: "Actualités",
    author: "Équipe Smart's Corporation",
    content: `
Smart's Corporation lance une nouvelle session intensive de préparation au concours d'entrée à la Faculté de Médecine et des Sciences Biomédicales (FMSB) de Yaoundé.

**Détails de la session :**

- **Début** : 1er Avril 2025
- **Durée** : 4 mois (Avril - Juillet 2025)
- **Horaires** : Du lundi au vendredi, 8h - 14h
- **Lieu** : Centre Smart's Corporation, Yaoundé

**Programme couvert :**

- Biologie cellulaire et moléculaire
- Chimie organique et minérale
- Physique (optique, mécanique, électricité)
- Mathématiques (analyse, probabilités, statistiques)
- Culture générale et actualité médicale

**Ce qui est inclus :**

✅ Cours théoriques par des enseignants expérimentés
✅ Travaux dirigés et exercices corrigés
✅ Examens blancs hebdomadaires en conditions réelles
✅ Correction détaillée des annales (5 dernières années)
✅ Suivi personnalisé de chaque étudiant
✅ Support de cours complet

**Places limitées**

Pour garantir un encadrement de qualité, le nombre de places est limité à 30 étudiants par groupe. Les inscriptions se font par ordre d'arrivée.

**Comment s'inscrire ?**

Contactez-nous via WhatsApp ou remplissez le formulaire d'inscription sur notre site. Notre équipe vous recontactera dans les 24h.

Ne manquez pas cette opportunité de vous préparer dans les meilleures conditions !
    `,
  },
  {
    id: 6,
    title: "Les erreurs à éviter lors d'un concours",
    excerpt: "Analyse des erreurs les plus fréquentes commises par les candidats et comment les éviter.",
    date: "20 Février 2025",
    category: "Conseils",
    author: "Équipe Smart's Corporation",
    content: `
Chaque année, de nombreux candidats échouent aux concours non pas par manque de compétences, mais à cause d'erreurs évitables. Voici les pièges les plus courants et comment les contourner.

**Erreur n°1 : Mal gérer son temps**

C'est l'erreur la plus fréquente. Beaucoup de candidats passent trop de temps sur les premières questions et n'ont plus le temps de terminer l'épreuve. Solution : lisez d'abord l'ensemble du sujet, commencez par les questions que vous maîtrisez, puis revenez aux plus difficiles.

**Erreur n°2 : Négliger la présentation**

Un correcteur qui doit déchiffrer votre copie sera moins indulgent. Soignez votre écriture, structurez vos réponses et numérotez clairement les questions. Une copie propre et bien organisée fait toujours bonne impression.

**Erreur n°3 : Ne pas lire les consignes**

Cela paraît évident, mais beaucoup de candidats perdent des points parce qu'ils n'ont pas lu attentivement les consignes. Prenez 5 minutes au début de chaque épreuve pour bien comprendre ce qui est demandé.

**Erreur n°4 : Réviser la veille du concours**

Les révisions de dernière minute créent plus de stress qu'elles n'apportent de connaissances. La veille du concours, détendez-vous, relisez vos fiches rapidement et couchez-vous tôt.

**Erreur n°5 : Sous-estimer les matières "secondaires"**

Beaucoup de candidats se concentrent uniquement sur les matières à fort coefficient et négligent les autres. Pourtant, quelques points gagnés en culture générale ou en langue peuvent faire la différence.

**Erreur n°6 : Paniquer face à un sujet difficile**

Si le sujet vous semble difficile, dites-vous qu'il l'est probablement pour tout le monde. Restez calme, concentrez-vous sur ce que vous savez faire et maximisez les points sur les questions accessibles.

Chez Smart's Corporation, nous préparons nos étudiants à éviter toutes ces erreurs grâce à des examens blancs réguliers en conditions réelles. Rejoignez-nous !
    `,
  },
];

const BlogArticle = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Article introuvable</h1>
          <Button asChild>
            <Link to="/actualites"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux actualités</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto max-w-3xl space-y-4">
          <Link to="/actualites" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Retour aux actualités
          </Link>
          <Badge variant="secondary">{article.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />{article.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{article.author}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none text-foreground">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                return <h2 key={i} className="text-xl font-bold mt-8 mb-3 text-foreground">{paragraph.replace(/\*\*/g, "")}</h2>;
              }
              if (paragraph.trim().startsWith("*\"")) {
                return <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">{paragraph.replace(/\*/g, "")}</blockquote>;
              }
              const formatted = paragraph
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(/^- /gm, "• ")
                .replace(/\n/g, "<br/>");
              return <p key={i} className="mb-4 leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatted }} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;

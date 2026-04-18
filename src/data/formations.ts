export interface Formation {
  id: string;
  name: string;
  category: string;
  categoryIcon: string;
  description: string;
  conditions: string;
  modes: string[];
}

export interface FormationCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  formations: Formation[];
}

export const formationCategories: FormationCategory[] = [
  {
    id: "ingenierie",
    name: "Ingénierie",
    icon: "🔧",
    color: "hsl(199, 100%, 44%)",
    formations: [
      {
        id: "polytechnique",
        name: "Polytechnique",
        category: "Ingénierie",
        categoryIcon: "🔧",
        description:
          "Préparation intensive au concours d'entrée à l'École Nationale Supérieure Polytechnique. Programme couvrant les mathématiques avancées et la physique.",
        conditions: "Baccalauréat série C, D, E ou F ",
        modes: ["En groupe", "À domicile"],
      },
      {
        id: "iut-tech",
        name: "IUT (filières techniques)",
        category: "Ingénierie",
        categoryIcon: "🔧",
        description:
          "Préparation au concours d'entrée aux Instituts Universitaires de Technologie, filières techniques. Focus sur les sciences appliquées et la technologie.",
        conditions: "Baccalauréat série C, D, E ou F",
         modes: ["En groupe", "À domicile"],
      },
      {
        id: "ENSTP",
        name: "ENSTP",
        category: "Ingénierie",
        categoryIcon: "🔧",
        description:
          "Préparation au concours d'entrée a l'ecole nationale superieure des travaux publiques.",
        conditions: "Baccalauréat série C, D, E ou F",
         modes: ["En groupe", "À domicile"],
      },
       {
        id: "ESTMO",
        name: "ESTMO",
        category: "Ingénierie",
        categoryIcon: "🔧",
        description:
          "Préparation au concours d'entrée a l'ecole nationale superieure des sciences et techniques maritimes et oceaniques.",
        conditions: "Baccalauréat série C, D, E ou F",
        modes: ["En groupe", "À domicile"],
      },

    ],
  },
  {
    id: "enseignement",
    name: "Enseignement",
    icon: "👨‍🏫",
    color: "hsl(145, 63%, 42%)",
    formations: [
      {
        id: "ens",
        name: "ENS (École Normale Supérieure)",
        category: "Enseignement",
        categoryIcon: "👨‍🏫",
        description:
          "Préparation complète au concours d'entrée à l'ENS. Formation pédagogique et disciplinaire pour devenir enseignant du secondaire.",
        conditions: "Baccalauréat toutes séries selon la filière choisie",
        modes: ["En groupe", "À domicile"],
      },
      {
        id: "enset",
        name: "ENSET (École Normale Supérieure d'Enseignement Technique)",
        category: "Enseignement",
        categoryIcon: "👨‍🏫",
        description:
          "Préparation au concours ENSET pour les filières d'enseignement technique. Programme adapté aux spécialités techniques et professionnelles.",
        conditions: "Baccalauréat technique ou général selon la filière",
         modes: ["En groupe", "À domicile"],
      },
    ],
  },
  {
    id: "management",
    name: "Management",
    icon: "💼",
    color: "hsl(40, 95%, 55%)",
    formations: [
      {
        id: "essec",
        name: "ESSEC (École Supérieure des Sciences Économiques et Commerciales)",
        category: "Management",
        categoryIcon: "💼",
        description:
          "Préparation au concours d'entrée à l'ESSEC. Programme axé sur l'économie, la gestion, les mathématiques commerciales et la culture générale.",
        conditions: "Baccalauréat série A, C ou D",
        modes: ["En groupe", "À domicile"],
      },
      {
        id: "iut-tertiaire",
        name: "IUT (filières tertiaires)",
        category: "Management",
        categoryIcon: "💼",
        description:
          "Préparation aux concours des IUT en gestion, comptabilité et commerce. Formation pratique et théorique.",
        conditions: "Baccalauréat toutes séries",
         modes: ["En groupe", "À domicile"],
      },
    ],
  },
  {
    id: "medecine",
    name: "Médecine",
    icon: "🏥",
    color: "hsl(0, 84%, 60%)",
    formations: [
      {
        id: "fmsb",
        name: "FMSB (Faculté de Médecine et des Sciences Biomédicales)",
        category: "Médecine",
        categoryIcon: "🏥",
        description:
          "Préparation intensive au concours d'entrée en médecine à la FMSB. Programme rigoureux couvrant la biologie, la chimie, la physique et les mathématiques.",
        conditions: "Baccalauréat série C ou D ",
        modes: ["En groupe", "À domicile"],
      },
      {
        id: "fmsp",
        name: "FMSP (Faculté de Médecine et des Sciences Pharmaceutiques)",
        category: "Médecine",
        categoryIcon: "🏥",
        description:
          "Préparation au concours FMSP, spécialisée en sciences pharmaceutiques.",
        conditions: "Baccalauréat série C ou D",
         modes: ["En groupe", "À domicile"],
      },
    ],
  },
  {
    id: "ecoles-bourse",
    name: "Écoles de bourse",
    icon: "🌍",
    color: "hsl(270, 60%, 55%)",
    formations: [
      {
        id: "issea",
        name: "ISSEA (Institut Sous-régional de Statistique et d'Économie Appliquée)",
        category: "Écoles de bourse",
        categoryIcon: "🌍",
        description:
          "Préparation au concours ISSEA. Formation en statistiques, économie appliquée et mathématiques avancées.",
        conditions: "Baccalauréat série C, D ou E avec d'excellents résultats en mathématiques", 
        modes: ["En groupe", "À domicile"],
      },
      {
        id: "asecna",
        name: "ASECNA (Agence pour la Sécurité de la Navigation Aérienne)",
        category: "Écoles de bourse",
        categoryIcon: "🌍",
        description:
          "Préparation aux concours de l'ASECNA pour les métiers de l'aéronautique et de la navigation aérienne.",
        conditions: "Baccalauréat série C, D ou E",
         modes: ["En groupe", "À domicile"],
      },
      {
        id: "eamau",
        name: "EAMAU (École Africaine des Métiers de l'Architecture et de l'Urbanisme)",
        category: "Écoles de bourse",
        categoryIcon: "🌍",
        description:
          "Préparation au concours d'entrée à l'EAMAU. Formation en dessin technique, mathématiques et culture architecturale.",
        conditions: "Baccalauréat série C, D ou E",
        modes: ["En groupe", "À domicile"],
      },
    ],
  },
];

export const allFormations = formationCategories.flatMap((cat) => cat.formations);

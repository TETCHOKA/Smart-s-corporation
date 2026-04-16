export interface Testimonial {
  id: string;
  name: string;
  formation: string;
  year: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "KEMO DONGMO PHERIL",
    formation: "Polytechnique",
    year: "2025",
    quote:
      "Grâce à Smart's Corporation, j'ai réussi le concours d'entrée à Polytechnique de douala dès ma première tentative. Les cours étaient excellents et les enseignants très disponibles.",
    avatar: "src/images/dongmo.jpeg",
  },
  {
    id: "2",
    name: "SIEKAN CRIS",
    formation: "IUT DE DOUALA",
    year: "2025",
    quote:
      "La préparation à la FMSB était intense mais structurée. Les exercices pratiques et les simulations d'examens m'ont permis d'être prête le jour J.",
    avatar: "src/images/cris.jpeg",
  },
  {
    id: "3",
    name: "KOUOTOU YEYAP COPSON",
    formation: "ESSEC DE DOUALA",
    year: "2025",
    quote:
      "Je recommande Smart's Corporation à tous ceux qui veulent réussir leur concours. L'accompagnement personnalisé fait toute la différence.",
    avatar: "src/images/copson.jpeg",
  },
  {
    id: "4",
    name: "JORELLE ELZIE",
    formation: "FMSP",
    year: "2024",
    quote:
      "Les méthodes d'enseignement innovantes et le suivi régulier m'ont aidée à décrocher une place à la faculté de médécine et science pharmaceutique de douala. Merci Smart's Corporation !",
    avatar: "src/images/jorelle.jpeg",
  },
  {
    id: "5",
    name: "SINGHE EVANS",
    formation: "IBA",
    year: "2025",
    quote:
      "Le niveau d'exigence des formateurs de Smart's Corporation est exactement ce qui m'a permis de reussir le concours d'enntree dans l'institut des beaux arts de nkongsamba et ainsi pouvoir realiser mon reve d'etre architecte.",
    avatar: "src/images/evans.jpeg",
  },
];

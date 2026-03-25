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
    name: "Jean-Pierre Nkoulou",
    formation: "Polytechnique",
    year: "2024",
    quote:
      "Grâce à Smart's Corporation, j'ai réussi le concours d'entrée à Polytechnique dès ma première tentative. Les cours étaient excellents et les enseignants très disponibles.",
    avatar: "JP",
  },
  {
    id: "2",
    name: "Marie-Claire Fotso",
    formation: "FMSB - Médecine",
    year: "2024",
    quote:
      "La préparation à la FMSB était intense mais structurée. Les exercices pratiques et les simulations d'examens m'ont permis d'être prête le jour J.",
    avatar: "MF",
  },
  {
    id: "3",
    name: "Paul Eyanga",
    formation: "ENS",
    year: "2023",
    quote:
      "Je recommande Smart's Corporation à tous ceux qui veulent réussir leur concours. L'accompagnement personnalisé fait toute la différence.",
    avatar: "PE",
  },
  {
    id: "4",
    name: "Adrienne Mbarga",
    formation: "ESSEC",
    year: "2023",
    quote:
      "Les méthodes d'enseignement innovantes et le suivi régulier m'ont aidée à décrocher une place à l'ESSEC. Merci Smart's Corporation !",
    avatar: "AM",
  },
  {
    id: "5",
    name: "David Tchatchouang",
    formation: "ISSEA",
    year: "2024",
    quote:
      "Le niveau d'exigence des formateurs de Smart's Corporation est exactement ce qu'il faut pour réussir les concours des écoles de bourse.",
    avatar: "DT",
  },
];

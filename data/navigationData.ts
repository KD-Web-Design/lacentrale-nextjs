import {
  Car,
  CircleHelp,
  LucideIcon,
  MessageCircleQuestion,
  NotepadText,
  PencilLine,
  Sparkles,
  StickyNote,
  Truck,
  UserRoundMinus,
  Wind,
} from "lucide-react";

export interface NavigationItem {
  id?: number;
  name: string;
  description?: string;
  href: string;
  current?: boolean;
  Icon?: LucideIcon;
  categories?: NavigationItem[];
  tableImage?: string;
}

export const acheterCategories: NavigationItem[] = [
  {
    name: "Voitures occasions",
    description: "Découvrez toutes nos meilleures offres",
    href: "#",
    current: true,
    Icon: Car,
  },
  {
    name: "Voitures neuves",
    description: "Notre meilleure sélection de véhicules",
    href: "#",
    Icon: Sparkles,
  },
  {
    name: "Utilitaires occasions",
    description: "Trouvez l'utilitaire qui vous correspond",
    href: "#",
    Icon: Truck,
  },
  {
    name: "Motos occasions",
    description: "Un large choix de motos, scooters, quads",
    href: "#",
    Icon: Wind,
  },
];

export const vendreCategories: NavigationItem[] = [
  {
    name: "Vendez à un particulier",
    description: "Déposez gratuitement votre annonce",
    href: "#",
    Icon: PencilLine,
  },
  {
    name: "Vendez à un professionnel",
    description: "Vendez votre véhicule en 48h",
    href: "#",
    Icon: UserRoundMinus,
  },
];

export const laCoteCategories: NavigationItem[] = [
  {
    name: "Cote voiture",
    description: "Estimez la valeur d'un véhicule",
    href: "#",
    Icon: Car,
  },
  {
    name: "Cote utilitaire",
    description: "Estimez la valeur d'un utilitaire",
    href: "#",
    Icon: Truck,
  },
  {
    name: "Cote moto",
    description: "Estimez la valeur d'un deux roues",
    href: "#",
    Icon: Wind,
  },
];

export const vousConseillerCategories: NavigationItem[] = [
  {
    name: "IA La Centrale",
    description: "Testez votre nouvelle recherche auto",
    href: "#",
    Icon: MessageCircleQuestion,
  },
  {
    name: "Trouvez un professionnel",
    description: "Explorez l'annuaire des professionnels",
    href: "#",
    Icon: UserRoundMinus,
  },
  {
    name: "Fiches techniques",
    description: "Retrouvez toutes les infos d'un véhicule",
    href: "#",
    Icon: StickyNote,
  },
  {
    name: "Conseils",
    description: "Découvrez nos conseils pour votre projet",
    href: "#",
    Icon: NotepadText,
  },
  {
    name: "FAQ",
    description: "Toutes les réponses à vos questions",
    href: "#",
    Icon: CircleHelp,
  },
];

export const navigation: NavigationItem[] = [
  { id: 1, name: "Acheter", href: "#", current: true, categories: acheterCategories, tableImage: "/images/acheter-desktop.png" },
  { id: 2, name: "Vendre", href: "#", categories: vendreCategories, tableImage: "/images/vendre-desktop.png" },
  { id: 3, name: "La Cote", href: "#", categories: laCoteCategories, tableImage: "/images/lacote-desktop.png" },
  { id: 4, name: "Vous conseiller", href: "#", categories: vousConseillerCategories, tableImage: "/images/vous-conseiller-desktop.png" },
];
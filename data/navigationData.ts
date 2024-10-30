
interface NavigationItem {
    name: string;
    href: string;
    current?: boolean;
}

export const navigation: NavigationItem[] = [
    { name: "Acheter", href: "#", current: true },
    { name: "Vendre", href: "#" },
    { name: "La Cote", href: "#" },
    { name: "Vous conseiller", href: "#" },
];
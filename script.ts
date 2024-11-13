// createEquipements.ts
import prisma from "./lib/prisma" // Assure-toi que le chemin vers Prisma est correct

async function main() {
  const regions = [
    { nom: "Auvergne-Rhône-Alpes" },
    { nom: "Bourgogne-Franche-Comté" },
    { nom: "Bretagne" },
    { nom: "Centre-Val de Loire" },
    { nom: "Corse" },
    { nom: "Grand Est" },
    { nom: "Hauts-de-France" },
    { nom: "Île-de-France" },
    { nom: "Normandie" },
    { nom: "Nouvelle-Aquitaine" },
    { nom: "Occitanie" },
    { nom: "Pays de la Loire" },
    { nom: "Provence-Alpes-Côte d'Azur" },
  ]

  try {
    // Insère les données dans la table Equipements
    const result = await prisma.regions.createMany({
      data: regions
    })

    console.log('Données initiales insérées:', result)
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Exécute la fonction d’insertion
main()

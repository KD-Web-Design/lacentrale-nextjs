import prisma from "./lib/prisma";


async function main() {
  try {
    // Exemple de mise à jour du `marque_id` pour chaque modèle
    await prisma.modeles.update({
      where: { id: 1 }, // ID du modèle
      data: { marque_id: 4 }, // ID de la marque correspondante
    });

    

    // Ajoute ici les autres mises à jour pour chaque modèle
    console.log("Modification des marque_id effectuée avec succès !");
  } catch (error) {
    console.error("Erreur lors de la modification des marque_id:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

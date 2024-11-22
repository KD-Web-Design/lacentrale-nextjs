import prisma from "./lib/prisma";

async function main() {
  try {
    // Exemple de mise à jour du `marque_id` pour chaque modèle
    await prisma.modeles.update({
      where: { id: 1 }, // ID du modèle
      data: { marque_id: 4 }, // ID de la marque correspondante
    });

    await prisma.modeles.update({
      where: { id: 2 },
      data: { marque_id: 1 }, // ID de la marque pour Toyota, par exemple
    });

    await prisma.modeles.update({
      where: { id: 3 },
      data: { marque_id: 4 }, // ID de la marque pour Honda
    });

    await prisma.modeles.update({
      where: { id: 4 },
      data: { marque_id: 1 }, // ID de la marque pour Honda
    });

    await prisma.modeles.update({
      where: { id: 5 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 6 },
      data: { marque_id: 7 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 7 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 8 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 9 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 10 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 11 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 12 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 13 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 14 },
      data: { marque_id: 2 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 15 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 16 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 17 },
      data: { marque_id: 8 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 18 },
      data: { marque_id: 13 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 19 },
      data: { marque_id: 2 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 20 },
      data: { marque_id: 4 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 21 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 22 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 23 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 24 },
      data: { marque_id: 6 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 25 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 26 },
      data: { marque_id: 7 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 27 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 28 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 29 },
      data: { marque_id: 2 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 30 },
      data: { marque_id: 7 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 31 },
      data: { marque_id: 6 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 32 },
      data: { marque_id: 14 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 33 },
      data: { marque_id: 10 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 34 },
      data: { marque_id: 1 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 35 },
      data: { marque_id: 6 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 36 },
      data: { marque_id: 14 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 37 },
      data: { marque_id: 16 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 38 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 39 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 40 },
      data: { marque_id: 16 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 41 },
      data: { marque_id: 14 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 42 },
      data: { marque_id: 4 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 43 },
      data: { marque_id: 35 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 44 },
      data: { marque_id: 20 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 45 },
      data: { marque_id: 7 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 46 },
      data: { marque_id: 8 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 47 },
      data: { marque_id: 3 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 48 },
      data: { marque_id: 5 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 49 },
      data: { marque_id: 6 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 50 },
      data: { marque_id: 21 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 51 },
      data: { marque_id: 13 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 52 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 53 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 54 },
      data: { marque_id: 7 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 55 },
      data: { marque_id: 16 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 56 },
      data: { marque_id: 22 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 57 },
      data: { marque_id: 13 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 58 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 59 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 60 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
    });
    await prisma.modeles.update({
      where: { id: 61 },
      data: { marque_id: 27 }, // ID de la marque pour Chevrolet
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

import prisma from "@/lib/prisma"


async function createInitialEquipements() {
  await prisma.equipements.createMany({
    data: [
      { name: 'Toit ouvrant', nombre_de_vehicules: 43649 },
      { name: 'Attelage', nombre_de_vehicules: 27121 },
      { name: 'Climatisation', nombre_de_vehicules: 276322 },
    ],
  })
  console.log('Données initiales insérées')
  await prisma.$disconnect()
}

createInitialEquipements()
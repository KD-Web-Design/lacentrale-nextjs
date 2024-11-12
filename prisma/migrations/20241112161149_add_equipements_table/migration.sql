/*
  Warnings:

  - You are about to drop the column `categorie_id` on the `Modeles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Modeles" DROP CONSTRAINT "Modeles_marque_id_fkey";

-- AlterTable
ALTER TABLE "Modeles" DROP COLUMN "categorie_id";

-- CreateTable
CREATE TABLE "Equipements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "Equipements_pkey" PRIMARY KEY ("id")
);

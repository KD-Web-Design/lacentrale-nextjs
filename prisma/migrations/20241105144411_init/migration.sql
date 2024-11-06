-- CreateTable
CREATE TABLE "Carburant" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Carburant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marques" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "Marques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modeles" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "marque_id" INTEGER NOT NULL,
    "categorie_id" INTEGER NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "Modeles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regions" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Regions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modeles" ADD CONSTRAINT "Modeles_marque_id_fkey" FOREIGN KEY ("marque_id") REFERENCES "Marques"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

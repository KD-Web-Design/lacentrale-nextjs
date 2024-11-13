-- CreateTable
CREATE TABLE "NiveauEquipements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "NiveauEquipements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CouleursExt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "CouleursExt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CouleursInt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "CouleursInt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsoMax" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "ConsoMax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CritAir" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nombre_de_vehicules" INTEGER NOT NULL,

    CONSTRAINT "CritAir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NbPlaces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NbPlaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NbPortes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NbPortes_pkey" PRIMARY KEY ("id")
);

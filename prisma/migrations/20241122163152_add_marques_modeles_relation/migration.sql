-- AddForeignKey
ALTER TABLE "Modeles" ADD CONSTRAINT "Modeles_marque_id_fkey" FOREIGN KEY ("marque_id") REFERENCES "Marques"("id") ON DELETE SET NULL ON UPDATE CASCADE;

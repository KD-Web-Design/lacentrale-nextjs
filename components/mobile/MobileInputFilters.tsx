import React from "react";
import { Input } from "../ui/input";
import { MobileFilterLayout } from "./layout/MobileFilterLayout";

export const MobileInputFiltersCategories = [
  {
    id: 1,
    nom: "Année",
  },
  {
    id: 2,
    nom: "Kilométrage",
  },
];

type MinMaxInputsProps = {
  placeholder1?: string;
  placeholder2?: string;
};

function MinMaxInputs({
  placeholder1 = "min",
  placeholder2 = "max",
}: MinMaxInputsProps) {
  return (
    <div className="w-full h-full flex items-center justify-between gap-3">
      <Input placeholder={placeholder1} type="text" className="font-normal" />
      <Input placeholder={placeholder2} type="text" />
    </div>
  );
}

export default function MobileInputFilters() {
  return (
    <main className="flex flex-col gap-4">
      {MobileInputFiltersCategories.map((category) => (
        <MobileFilterLayout key={category.id} title={category.nom}>
          <MinMaxInputs />
        </MobileFilterLayout>
      ))}
    </main>
  );
}

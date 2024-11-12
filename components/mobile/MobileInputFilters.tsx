import { Input } from "../ui/input";

const MobileInputFiltersCategories = [
  {
    id: 1,
    nom: "Année",
  },
  {
    id: 2,
    nom: "Kilométrage",
  },
];

export default function MobileInputFilters() {
  return (
    <main className="flex flex-col gap-4">
      {MobileInputFiltersCategories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col font-semibold text-lg rounded-lg border h-28 overflow-hidden"
        >
          <header className="bg-gray-100 w-full h-1/3 px-4 flex items-center">
            <span className="font-semibold">{category.nom}</span>
          </header>
          <div className="w-full h-2/3 flex items-center justify-between gap-3 px-4 border">
            <Input placeholder="min" type="number" />
            <Input placeholder="max" type="number" />
          </div>
        </div>
      ))}
    </main>
  );
}

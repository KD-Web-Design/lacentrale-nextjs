import React from "react";
import { Input } from "./ui/input";
import { MobileInputFiltersCategories } from "./mobile/MobileInputFilters";

export default function InputFilters() {
  return (
    <section className="space-y-5">
      {MobileInputFiltersCategories.map((category) => (
        <div key={category.id} className="rounded-lg border overflow-hidden">
          <div>
            <div className="bg-slate-100 py-2 px-4 border-b">
              <span className="font-semibold text-md">{category.nom}</span>
            </div>
            <div className="flex gap-2 p-4">
              <Input placeholder="min" className="rounded" />
              <Input placeholder="max" className="rounded" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
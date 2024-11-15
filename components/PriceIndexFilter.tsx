import { priceIndex } from "@/data/navigationData";
import React from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export default function PriceIndexFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Indicateur de prix</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          {priceIndex.map((item) => (
            <Label
              key={item.id}
              className="cursor-pointer flex items-center gap-2 rounded-sm relative"
              htmlFor={`priceIndex-${item.id}`}
            >
              <Checkbox id={`priceIndex-${item.id}`} />
              {item.name}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}

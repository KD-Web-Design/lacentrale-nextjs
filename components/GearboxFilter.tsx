import { gearBox } from "@/data/navigationData";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function GearboxFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Carburant</span>
        </div>
        <RadioGroup className="flex flex-col gap-2 p-4 space-y-2">
          {gearBox.map((item) => (
            <Label
              key={item.id}
              className="cursor-pointer flex items-center gap-2 rounded-sm relative"
              htmlFor={`gearbox-${item.id}`}
            >
              <RadioGroupItem
                id={`gearbox-${item.id}`}
                value={`gearbox-${item.id}`}
              />
              {item.name}
            </Label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

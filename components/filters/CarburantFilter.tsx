"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function CarburantFilter() {
  const [carburants, setCarburants] = useState<string[]>([]);

  useEffect(() => {
    const fetchCarburants = async () => {
      try {
        const response = await fetch("/api/carburant");
        const data = await response.json();
        setCarburants(
          data.map((carburant: { type: string }) => carburant.type)
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des carburants:", error);
      }
    };

    fetchCarburants();
  }, []);
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Carburant</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          {carburants.map((type, index) => (
            <Label
              key={index}
              className="cursor-pointer flex items-center gap-2 rounded-sm relative"
              htmlFor={`carburant-${index}`}
            >
              <Checkbox id={`carburant-${index}`} />
              {type}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}

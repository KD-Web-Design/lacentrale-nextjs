"use client";

import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { formatNumber } from "@/lib/formatNumber";
import { EquipementsType } from "../mobile/filters/MobileEquipmentFilter";

export default function ColorFilter() {
  const [couleursExt, setCouleursExt] = useState<EquipementsType[]>([]);
  const [couleursInt, setCouleursInt] = useState<EquipementsType[]>([]);

  useEffect(() => {
    const fetchCouleursExt = async () => {
      try {
        const response = await fetch("/api/couleursExt");
        const data = await response.json();
        setCouleursExt(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchCouleursExt();
  }, []);

  useEffect(() => {
    const fetchCouleursInt = async () => {
      try {
        const response = await fetch("/api/couleursInt");
        const data = await response.json();
        setCouleursInt(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchCouleursInt();
  }, []);
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Couleurs</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Couleurs extérieur</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Couleurs extérieur</h1>

              <div className="grid grid-cols-2 gap-2">
                {couleursExt.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 space-y-2 rounded-sm"
                  >
                    <Checkbox id={`equipement-${item.id}`} />
                    <Label
                      htmlFor={`equipement-${item.id}`}
                      className="cursor-pointer"
                    >
                      {item.name}
                      <span className="text-gray-400 text-xs ml-2">
                        ({formatNumber(item.nombre_de_vehicules)})
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Couleurs intérieur</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Couleurs intérieur</h1>

              <div className="grid grid-cols-2 gap-2">
                {couleursInt.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 space-y-2 rounded-sm"
                  >
                    <Checkbox id={`equipement-${item.id}`} />
                    <Label
                      htmlFor={`equipement-${item.id}`}
                      className="cursor-pointer"
                    >
                      {item.name}
                      <span className="text-gray-400 text-xs ml-2">
                        ({formatNumber(item.nombre_de_vehicules)})
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

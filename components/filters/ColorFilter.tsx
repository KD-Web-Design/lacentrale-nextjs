"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { formatNumber } from "@/lib/formatNumber";
import { useApi } from "@/hooks/useApi";
import { EquipementsType } from "@/data/navigationData";

export default function ColorFilter() {
  const couleursExt = useApi<EquipementsType>("/api/couleursExt");
  const couleursInt = useApi<EquipementsType>("/api/couleursInt");

  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
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

"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight, Search } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { formatNumber } from "@/lib/formatNumber";
import { EquipementsType } from "@/data/navigationData";
import { useApi } from "@/hooks/useApi";

export default function EquipmentFilter() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const equipements = useApi<EquipementsType>("/api/equipements");
  const niveauEquipements = useApi<EquipementsType>("/api/niveauEquipements");

  const filteredEquipements = equipements.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Equipements & options</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Equipements & options</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Equipements & options</h1>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Rechercher un équipement"
                  className="pl-8 font-normal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search
                  size={16}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {filteredEquipements.map((item) => (
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
              <span className="text-sm">Niveau d&apos;équipements</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Niveau d&apos;équipements</h1>

              <div className="grid grid-cols-2 gap-2">
                {niveauEquipements.map((item) => (
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

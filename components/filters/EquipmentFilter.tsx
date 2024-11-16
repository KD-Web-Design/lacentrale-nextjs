"use client";

import React, { useEffect, useState } from "react";
import { EquipementsType } from "../mobile/filters/MobileEquipmentFilter";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight, Search } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { formatNumber } from "@/lib/formatNumber";

export default function EquipmentFilter() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [equipements, setEquipements] = useState<EquipementsType[]>([]);
  const [niveauEquipements, setNiveauEquipements] = useState<EquipementsType[]>(
    []
  );

  const filteredEquipements = equipements.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );
  useEffect(() => {
    const fetchEquipements = async () => {
      try {
        const response = await fetch("/api/equipements");
        const data = await response.json();
        setEquipements(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchEquipements();
  }, []);

  useEffect(() => {
    const fetchNiveauEquipements = async () => {
      try {
        const response = await fetch("/api/niveauEquipements");
        const data = await response.json();
        setNiveauEquipements(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchNiveauEquipements();
  }, []);

  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
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

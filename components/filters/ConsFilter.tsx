"use client";

import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import { EquipementsType } from "../mobile/filters/MobileEquipmentFilter";
import { Label } from "../ui/label";
import { formatNumber } from "@/lib/formatNumber";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function ConsFilter() {
  const [consoMax, setConsoMax] = useState<EquipementsType[]>([]);
  const [critair, setCritair] = useState<EquipementsType[]>([]);
  useEffect(() => {
    const fetchConsoMax = async () => {
      try {
        const response = await fetch("/api/consoMax");
        const data = await response.json();
        setConsoMax(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchConsoMax();
  }, []);

  useEffect(() => {
    const fetchCritair = async () => {
      try {
        const response = await fetch("/api/critair");
        const data = await response.json();
        setCritair(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchCritair();
  }, []);
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Consommation</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Consommation max</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Consommation max</h1>

              <RadioGroup
                className="grid grid-cols-2 gap-2"
                defaultValue={`option-${consoMax[0]?.id}`}
              >
                {consoMax.map((item) => (
                  <Label
                    htmlFor={`option-${item.id}`}
                    className="cursor-pointer flex items-center gap-2 rounded-sm"
                    key={item.id}
                  >
                    <RadioGroupItem
                      id={`option-${item.id}`}
                      value={`option-${item.id}`}
                    />
                    {item.name}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                  </Label>
                ))}
              </RadioGroup>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Emission de CO2</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Emission de CO2</h1>

              <div className="flex gap-2">
                <Input type="text" placeholder="min" />
                <Input type="text" placeholder="max" />
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Crit&apos;air max</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Crit&apos;air max</h1>

              <RadioGroup className="grid grid-cols-2 gap-2">
                {critair.map((item) => (
                  <Label
                    htmlFor={`option-${item.id}`}
                    className="cursor-pointer flex items-center gap-2 rounded-sm"
                    key={item.id}
                  >
                    <RadioGroupItem
                      id={`option-${item.id}`}
                      value={`option-${item.id}`}
                    />
                    {item.name}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                  </Label>
                ))}
              </RadioGroup>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
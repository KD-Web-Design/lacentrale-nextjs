"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { Region } from "@/data/navigationData";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function VehicleLocFilter() {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch("/api/regions");
      const data = await response.json();
      const sortedData = data.sort((a: Region, b: Region) =>
        a.nom.localeCompare(b.nom)
      );
      setRegions(sortedData);
    };

    fetchRegions();
  }, []);
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">
            Localisation des véhicules
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <div className="relative">
            <Input
              type="number"
              placeholder="Code postal"
              className="pl-8 font-normal"
            />
            <MapPin
              size={16}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Par régions</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white z-10"
            >
              <h1 className="font-semibold">Par régions</h1>

              <div className="grid grid-cols-2 gap-2">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className="flex items-center space-x-2 space-y-2 rounded-sm"
                  >
                    <Checkbox id={`region-${region.id}`} />
                    <Label
                      htmlFor={`region-${region.id}`}
                      className="cursor-pointer"
                    >
                      {region.nom}
                    </Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Link href="" className="flex justify-between">
            <span className="text-sm font-normal">Avec livraison</span>
            <Switch />
          </Link>
        </div>
      </div>
    </div>
  );
}

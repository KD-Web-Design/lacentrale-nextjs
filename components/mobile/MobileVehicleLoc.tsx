import React, { useEffect, useState } from "react";
import { XIcon, ChevronRight, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Switch } from "../ui/switch";
import MobileValidateBtn from "./MobileValidateBtn";

interface Region {
  id: number;
  nom: string;
}

export default function MobileVehicleLoc() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

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

  const filteredRegions = regions.filter((region) => region.nom.toLowerCase());

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Localisation des véhicules</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <div className="relative">
            <Input
              type="text"
              placeholder="Code postal"
              className="pl-8 font-normal"
            />
            <MapPin
              size={16}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <a
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => setIsOverlayVisible(true)}
          >
            <span className="text-sm font-normal">Par régions</span>
            <ChevronRight size={24} />
          </a>
          <Link href="#" className="flex justify-between">
            <span className="text-sm font-normal">Avec livraison</span>
            <Switch />
          </Link>
        </div>
      </div>

      {isOverlayVisible && (
        <div
          id="overlay"
          className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
        >
          <header className="p-4 relative">
            <h1 className="text-center font-semibold text-lg">Par régions</h1>
            <XIcon
              size={42}
              strokeWidth={1}
              className="cursor-pointer absolute right-2 top-2"
              onClick={() => setIsOverlayVisible(false)}
            />
          </header>

          <ScrollArea className="border-b-2 focus:bg-gray-100 flex-grow px-2">
            {filteredRegions.map((region) => (
              <div key={region.id} className="mb-1">
                <Label
                  htmlFor={`region-${region.id}`}
                  className="cursor-pointer flex items-center p-2 rounded-sm relative"
                >
                  {region.nom}
                  <Checkbox
                    id={`region-${region.id}`}
                    className="absolute right-2 w-5 h-5"
                  />
                </Label>
              </div>
            ))}
          </ScrollArea>
          <footer className="inline-flex w-full justify-between items-center px-2 py-4">
            <a
              className="font-semibold underline w-1/2 text-center hover:text-gray-400"
              href="#"
              onClick={() => setIsOverlayVisible(false)}
            >
              Annuler
            </a>
            <MobileValidateBtn />
          </footer>
        </div>
      )}
    </main>
  );
}

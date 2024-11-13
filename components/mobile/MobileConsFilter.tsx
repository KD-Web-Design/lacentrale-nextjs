"use client";

import { ChevronRight, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import MobileValidateBtn from "./MobileValidateBtn";
import { EquipementsType } from "./MobileEquipmentFilter";

export default function MobileConsFilter() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [consoMax, setConsoMax] = useState<EquipementsType[]>([]);

  const handleMenuClick = () => {
    setIsOverlayVisible(true);
  };

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
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Consommation</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick()}
          >
            <span className="text-sm font-normal">Consommation max</span>
            <ChevronRight size={24} />
          </Link>
          <Link href="#" className="flex justify-between hover:text-accent">
            <span className="text-sm font-normal">Emission de CO2</span>
            <ChevronRight size={24} />
          </Link>
          <Link href="#" className="flex justify-between hover:text-accent">
            <span className="text-sm font-normal">Crit&apos;air max</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>

      {/* {isOverlayVisible && ( */}
      <div
        id="overlay"
        className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col hidden"
      >
        <header className="p-4 relative">
          <h1 className="text-center font-semibold text-lg">Par régions</h1>
          <XIcon
            size={42}
            strokeWidth={1}
            className="cursor-pointer absolute right-2 top-2"
            //   onClick={() => setIsOverlayVisible(false)}
          />
        </header>

        <ScrollArea className="border-b-2 focus:bg-gray-100 flex-grow px-2">
          {/* {filteredRegions.map((region) => ( */}
          <div className="mb-1">
            <Label className="cursor-pointer flex items-center p-2 rounded-sm relative">
              <Checkbox className="absolute right-2 w-5 h-5" />
            </Label>
          </div>
          {/* ))} */}
        </ScrollArea>
        <footer className="inline-flex w-full justify-between items-center px-2 py-4">
          <a
            className="font-semibold underline w-1/2 text-center hover:text-gray-400"
            href="#"
            //   onClick={() => setIsOverlayVisible(false)}
          >
            Annuler
          </a>
          <MobileValidateBtn />
        </footer>
      </div>
      {/* )} */}
    </main>
  );
}

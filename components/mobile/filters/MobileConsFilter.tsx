"use client";

import { ChevronRight, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../../ui/scroll-area";
import { Label } from "../../ui/label";
import MobileValidateBtn from "./MobileValidateBtn";
import { EquipementsType } from "./MobileEquipmentFilter";
import { formatNumber } from "@/lib/formatNumber";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Input } from "../../ui/input";

type MenuType = "consoMax" | "critair" | "CO2" | null;

export default function MobileConsFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [consoMax, setConsoMax] = useState<EquipementsType[]>([]);
  const [critair, setCritair] = useState<EquipementsType[]>([]);

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
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
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-muted w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Consommation</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("consoMax")}
          >
            <span className="text-sm font-normal">Consommation max</span>
            <ChevronRight size={24} />
          </Link>
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("CO2")}
          >
            <span className="text-sm font-normal">Emission de CO2</span>
            <ChevronRight size={24} />
          </Link>
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("critair")}
          >
            <span className="text-sm font-normal">Crit&apos;air max</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>

      {isOverlayVisible && (
        <div
          id="overlay"
          className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
        >
          <header className="p-4 relative">
            <h1 className="text-center font-semibold text-lg">
              {activeMenu === "consoMax"
                ? "Consommation max"
                : activeMenu === "CO2"
                ? "Emission de CO2"
                : activeMenu === "critair"
                ? "Crit'air max"
                : ""}
            </h1>
            <XIcon
              size={42}
              strokeWidth={1}
              className="cursor-pointer absolute right-2 top-2"
              onClick={() => {
                setIsOverlayVisible(false);
                setActiveMenu(null);
              }}
            />
          </header>

          <ScrollArea className="border-b-2 focus:bg-muted flex-grow px-2">
            <RadioGroup
              defaultValue={`option-${consoMax[0]?.id}`}
              className="mt-3 space-y-2"
            >
              {activeMenu === "consoMax" ? (
                consoMax.map((item) => (
                  <Label
                    key={item.id}
                    htmlFor={`option-${item.id}`}
                    className="cursor-pointer flex items-center rounded-sm relative mb-1"
                  >
                    {item.name} {""}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                    <RadioGroupItem
                      value={`option-${item.id}`}
                      id={`option-${item.id}`}
                      className="absolute right-2"
                    />
                  </Label>
                ))
              ) : activeMenu === "critair" ? (
                critair.map((item) => (
                  <Label
                    key={item.id}
                    htmlFor={`option-${item.id}`}
                    className="cursor-pointer flex items-center rounded-sm relative mb-1"
                  >
                    {item.name} {""}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                    <RadioGroupItem
                      value={`option-${item.id}`}
                      id={`option-${item.id}`}
                      className="absolute right-2"
                    />
                  </Label>
                ))
              ) : (
                <div className="flex gap-2 p-2">
                  <Input
                    type="text"
                    placeholder="min"
                    className="border rounded p-2"
                  />
                  <Input
                    type="text"
                    placeholder="max"
                    className="border rounded p-2"
                  />
                </div>
              )}
            </RadioGroup>
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

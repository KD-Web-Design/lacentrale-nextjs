"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronRight, XIcon } from "lucide-react";
import { EquipementsType } from "./MobileEquipmentFilter";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { formatNumber } from "@/lib/formatNumber";
import { Checkbox } from "../ui/checkbox";
import MobileValidateBtn from "./MobileValidateBtn";

type MenuType = "couleursExt" | "couleursInt" | null;
export default function MobileColorFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [couleursExt, setCouleursExt] = useState<EquipementsType[]>([]);
  const [couleursInt, setCouleursInt] = useState<EquipementsType[]>([]);

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
  };

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
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Couleurs</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("couleursExt")}
          >
            <span className="text-sm font-normal">Couleurs extérieur</span>
            <ChevronRight size={24} />
          </Link>
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("couleursInt")}
          >
            <span className="text-sm font-normal">Couleurs intérieur</span>
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
              {activeMenu === "couleursExt"
                ? "Couleurs extérieur"
                : "Couleurs intérieur"}
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

          <ScrollArea className="border-b-2 focus:bg-gray-100 flex-grow px-2">
            {activeMenu === "couleursExt"
              ? couleursExt.map((item) => (
                  <div key={item.id} className="mb-1">
                    <Label
                      htmlFor={`couleurExt-${item.id}`}
                      className="cursor-pointer flex items-center p-2 rounded-sm relative"
                    >
                      {item.name} {""}
                      <span className="text-gray-400 text-xs ml-2">
                        ({formatNumber(item.nombre_de_vehicules)})
                      </span>
                      <Checkbox
                        id={`couleurExt-${item.id}`}
                        className="absolute right-2 w-5 h-5"
                      />
                    </Label>
                  </div>
                ))
              : couleursInt.map((item) => (
                  <div key={item.id} className="mb-1">
                    <Label
                      htmlFor={`couleurInt-${item.id}`}
                      className="cursor-pointer flex items-center p-2 rounded-sm relative"
                    >
                      {item.name} {""}
                      <span className="text-gray-400 text-xs ml-2">
                        ({formatNumber(item.nombre_de_vehicules)})
                      </span>
                      <Checkbox
                        id={`couleurInt-${item.id}`}
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

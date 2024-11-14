import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronRight, XIcon } from "lucide-react";
import { EquipementsType } from "./MobileEquipmentFilter";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import MobileValidateBtn from "./MobileValidateBtn";

type MenuType = "nbPlaces" | "nbPortes" | null;

export default function MobileDoorsFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [nbPlaces, setNbPlaces] = useState<EquipementsType[]>([]);
  const [nbPortes, setNbPortes] = useState<EquipementsType[]>([]);

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
  };

  useEffect(() => {
    const fetchNbPlaces = async () => {
      try {
        const response = await fetch("/api/nbplaces");
        const data = await response.json();
        setNbPlaces(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchNbPlaces();
  }, []);

  useEffect(() => {
    const fetchNbPortes = async () => {
      try {
        const response = await fetch("/api/nbportes");
        const data = await response.json();
        setNbPortes(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
      }
    };

    fetchNbPortes();
  }, []);
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Places & Portes</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("nbPlaces")}
          >
            <span className="text-sm font-normal">Nombre de places</span>
            <ChevronRight size={24} />
          </Link>
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => handleMenuClick("nbPortes")}
          >
            <span className="text-sm font-normal">Nombre de portes</span>
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
              {activeMenu === "nbPlaces"
                ? "Nombre de places"
                : "Nombre de portes"}
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
            {activeMenu === "nbPlaces"
              ? nbPlaces.map((item) => (
                  <div key={item.id} className="mb-1">
                    <Label
                      htmlFor={`couleurExt-${item.id}`}
                      className="cursor-pointer flex items-center p-2 rounded-sm relative"
                    >
                      {item.name}
                      <Checkbox
                        id={`couleurExt-${item.id}`}
                        className="absolute right-2 w-5 h-5"
                      />
                    </Label>
                  </div>
                ))
              : nbPortes.map((item) => (
                  <div key={item.id} className="mb-1">
                    <Label
                      htmlFor={`couleurInt-${item.id}`}
                      className="cursor-pointer flex items-center p-2 rounded-sm relative"
                    >
                      {item.name}
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

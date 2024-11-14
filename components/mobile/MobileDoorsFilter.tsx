"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { MobileFilterLayout } from "./layout/MobileFilterLayout";
import { MobileFilterOverlay } from "./overlay/MobileFilterOverlay";
import { EquipementsType } from "./MobileEquipmentFilter";

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

  const handleClose = () => {
    setIsOverlayVisible(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const fetchNbPlaces = async () => {
      try {
        const response = await fetch("/api/nbplaces");
        const data = await response.json();
        setNbPlaces(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des places:", error);
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
        console.error("Erreur lors de la récupération des portes:", error);
      }
    };

    fetchNbPortes();
  }, []);

  return (
    <MobileFilterLayout title="Places & Portes">
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

      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title={
          activeMenu === "nbPlaces" ? "Nombre de places" : "Nombre de portes"
        }
        onClose={handleClose}
      >
        <ScrollArea className="border-b-2 focus:bg-gray-100 flex-grow px-2">
          {activeMenu === "nbPlaces"
            ? nbPlaces.map((item) => (
                <div key={item.id} className="mb-1">
                  <Label
                    htmlFor={`places-${item.id}`}
                    className="cursor-pointer flex items-center p-2 rounded-sm relative"
                  >
                    {item.name}
                    <Checkbox
                      id={`places-${item.id}`}
                      className="absolute right-2 w-5 h-5"
                    />
                  </Label>
                </div>
              ))
            : nbPortes.map((item) => (
                <div key={item.id} className="mb-1">
                  <Label
                    htmlFor={`portes-${item.id}`}
                    className="cursor-pointer flex items-center p-2 rounded-sm relative"
                  >
                    {item.name}
                    <Checkbox
                      id={`portes-${item.id}`}
                      className="absolute right-2 w-5 h-5"
                    />
                  </Label>
                </div>
              ))}
        </ScrollArea>
      </MobileFilterOverlay>
    </MobileFilterLayout>
  );
}

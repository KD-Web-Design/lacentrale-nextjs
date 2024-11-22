"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";
import { formatNumber } from "@/lib/formatNumber";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";
import { MobileFilterOverlay } from "../overlay/MobileFilterOverlay";

export type EquipementsType = {
  id: number;
  name: string;
  nombre_de_vehicules: number;
};

type MenuType = "equipements" | "niveauEquipements" | null;

export default function MobileEquipmentFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [equipements, setEquipements] = useState<EquipementsType[]>([]);
  const [niveauEquipements, setNiveauEquipements] = useState<EquipementsType[]>(
    []
  );

  const filteredEquipements = equipements.filter((item) =>
    item?.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
    setSearchTerm("");
  };

  const handleClose = () => {
    setIsOverlayVisible(false);
    setActiveMenu(null);
  };

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
    <MobileFilterLayout title="Equipements & options">
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("equipements")}
      >
        <span className="text-sm font-normal">Equipements & options</span>
        <ChevronRight size={24} />
      </Link>
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("niveauEquipements")}
      >
        <span className="text-sm font-normal">Niveau d&apos;équipement</span>
        <ChevronRight size={24} />
      </Link>

      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title={
          activeMenu === "equipements"
            ? "Equipements et options"
            : "Niveau d'équipement"
        }
        onClose={handleClose}
      >
        {activeMenu === "equipements" && (
          <div className="px-4 mb-4 relative">
            <Input
              type="text"
              className="pl-6"
              placeholder="Rechercher un équipement"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              size={14}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        )}

        <ScrollArea className="border-b-2 focus:bg-muted flex-grow px-2">
          {activeMenu === "equipements"
            ? filteredEquipements.map((item) => (
                <div key={item.id} className="mb-1">
                  <Label
                    htmlFor={`equipment-${item.id}`}
                    className="cursor-pointer flex items-center p-2 rounded-sm relative"
                  >
                    {item.name}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                    <Checkbox
                      id={`equipment-${item.id}`}
                      className="absolute right-2 w-5 h-5"
                    />
                  </Label>
                </div>
              ))
            : niveauEquipements.map((item) => (
                <div key={item.id} className="mb-1">
                  <Label
                    htmlFor={`equipment-${item.id}`}
                    className="cursor-pointer flex items-center p-2 rounded-sm relative"
                  >
                    {item.name}
                    <span className="text-gray-400 text-xs ml-2">
                      ({formatNumber(item.nombre_de_vehicules)})
                    </span>
                    <Checkbox
                      id={`equipment-${item.id}`}
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

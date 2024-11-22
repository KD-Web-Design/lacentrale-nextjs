"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { formatNumber } from "@/lib/formatNumber";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";
import { MobileFilterOverlay } from "../overlay/MobileFilterOverlay";
import { useApi } from "@/hooks/useApi";
import { EquipementsType } from "@/data/navigationData";

type MenuType = "couleursExt" | "couleursInt" | null;

export default function MobileColorFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const couleursExt = useApi<EquipementsType>("/api/couleursExt");
  const couleursInt = useApi<EquipementsType>("/api/couleursInt");

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
  };

  const handleClose = () => {
    setIsOverlayVisible(false);
    setActiveMenu(null);
  };

  return (
    <MobileFilterLayout title="Couleurs">
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

      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title={
          activeMenu === "couleursExt"
            ? "Couleurs extérieur"
            : "Couleurs intérieur"
        }
        onClose={handleClose}
      >
        <ScrollArea className="border-b-2 focus:bg-muted flex-grow px-2">
          {activeMenu === "couleursExt"
            ? couleursExt.map((item) => (
                <div key={item.id} className="mb-1">
                  <Label
                    htmlFor={`couleurExt-${item.id}`}
                    className="cursor-pointer flex items-center p-2 rounded-sm relative"
                  >
                    {item.name}
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
                    {item.name}
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
      </MobileFilterOverlay>
    </MobileFilterLayout>
  );
}

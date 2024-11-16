"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "../../ui/input";
import { Switch } from "../../ui/switch";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";
import { MobileFilterOverlay } from "../overlay/MobileFilterOverlay";

type MenuType = "puissanceFiscale" | "puissanceDin" | null;

export default function MobilePerformanceFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
  };

  const handleClose = () => {
    setIsOverlayVisible(false);
    setActiveMenu(null);
  };

  return (
    <MobileFilterLayout title="Performance">
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("puissanceFiscale")}
      >
        <span className="text-sm font-normal">Puissance fiscale</span>
        <ChevronRight size={24} />
      </Link>
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("puissanceDin")}
      >
        <span className="text-sm font-normal">Puissance DIN (ch)</span>
        <ChevronRight size={24} />
      </Link>
      <Link href="#" className="flex justify-between">
        <span className="text-sm font-normal">4 roues motrices</span>
        <Switch />
      </Link>

      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title={
          activeMenu === "puissanceFiscale"
            ? "Puissance fiscale"
            : "Puissance DIN (ch)"
        }
        onClose={handleClose}
      >
        <div className="flex gap-4 p-4">
          <Input type="text" placeholder="min" className="border rounded p-2" />
          <Input type="text" placeholder="max" className="border rounded p-2" />
        </div>
      </MobileFilterOverlay>
    </MobileFilterLayout>
  );
}

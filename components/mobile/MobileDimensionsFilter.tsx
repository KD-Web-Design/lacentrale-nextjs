import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { MobileFilterLayout } from "./layout/MobileFilterLayout";
import { MobileFilterOverlay } from "./overlay/MobileFilterOverlay";

type MenuType = "dimensions" | "volume" | null;

export default function MobileDimensionsFilter() {
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
    <MobileFilterLayout title="Dimensions">
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("dimensions")}
      >
        <span className="text-sm font-normal">Dimensions du véhicule</span>
        <ChevronRight size={24} />
      </Link>
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => handleMenuClick("volume")}
      >
        <span className="text-sm font-normal">Volume du coffre</span>
        <ChevronRight size={24} />
      </Link>

      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title={
          activeMenu === "dimensions"
            ? "Dimensions du véhicule"
            : "Volume du coffre"
        }
        onClose={handleClose}
      >
        {activeMenu === "dimensions" ? (
          <div className="flex gap-2 p-2">
            <Input
              type="text"
              placeholder="L max"
              className="border rounded p-2"
            />
            <Input
              type="text"
              placeholder="l max"
              className="border rounded p-2"
            />
            <Input
              type="text"
              placeholder="h max"
              className="border rounded p-2"
            />
          </div>
        ) : (
          <div className="flex gap-2 p-2">
            <Input
              type="text"
              placeholder="Volume min"
              className="border rounded p-2"
            />
          </div>
        )}
      </MobileFilterOverlay>
    </MobileFilterLayout>
  );
}

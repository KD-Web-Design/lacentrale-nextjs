import { ChevronRight, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import MobileValidateBtn from "./MobileValidateBtn";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";

type MenuType = "puissanceFiscale" | "puissanceDin" | null;

export default function MobilePerformanceFilter() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleMenuClick = (menuType: MenuType) => {
    setActiveMenu(menuType);
    setIsOverlayVisible(true);
  };
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Performance</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
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
        </div>
      </div>

      {isOverlayVisible && (
        <div
          id="overlay"
          className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
        >
          <header className="p-4 relative">
            <h1 className="text-center font-semibold text-lg">
              {activeMenu === "puissanceFiscale"
                ? "Puissance fiscale"
                : "Puissance DIN (ch)"}
            </h1>
            <XIcon
              size={42}
              strokeWidth={1}
              className="cursor-pointer absolute right-2 top-2"
              onClick={() => setIsOverlayVisible(false)}
            />
          </header>
          {activeMenu === "puissanceFiscale" ? (
            <div className="flex gap-4 p-4">
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
          ) : (
            <div className="flex gap-4 p-4">
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

          <footer className="inline-flex w-full justify-between items-center px-2 py-4 mt-auto">
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

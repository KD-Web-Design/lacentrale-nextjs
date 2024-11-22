import React, { useState } from "react";
import {
  BaseEntity,
  SideFiltersButtonPopoverName,
} from "@/data/navigationData";
import { ChevronRight, Search, XIcon } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { ScrollArea } from "../../ui/scroll-area";
import MobileValidateBtn from "./MobileValidateBtn";
import { useApi } from "@/hooks/useApi";

export default function MobileSideFiltersButton() {
  const categories = useApi<BaseEntity>("/api/categories");
  const marques = useApi<BaseEntity>("/api/marques");
  const modeles = useApi<BaseEntity>("/api/modeles");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const filterItems = (items: BaseEntity[]) =>
    items.filter((item) =>
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredCategories = filterItems(categories);
  const filteredMarques = filterItems(marques);
  const filteredModeles = filterItems(modeles);

  // Fonction pour gérer les Popovers
  const handlePopoverChange = (isOpen: boolean, popoverName: string) => {
    if (isOpen) {
      setActivePopover(popoverName);
      setIsOverlayVisible(true);
    } else {
      setSearchTerm("");
      setActivePopover(null);
      setIsOverlayVisible(false);
    }
  };

  // Fonction générique pour afficher les items des Popovers
  const renderPopoverItems = (items: BaseEntity[], type: string) => {
    return items.map((item: BaseEntity) => (
      <div key={item.id} className="">
        <Label
          htmlFor={`${type}-${item.id}`}
          className="cursor-pointer flex items-center hover:bg-muted p-2 rounded-sm relative"
        >
          {item.nom}{" "}
          <span className="text-gray-400 text-xs ml-2">
            ({item.nombre_de_vehicules})
          </span>
          <Checkbox id={`${type}-${item.id}`} className="absolute right-2" />
        </Label>
      </div>
    ));
  };

  return (
    <main className="flex flex-col gap-4">
      {SideFiltersButtonPopoverName.map((item) => (
        <section key={item.id}>
          <div
            id="trigger"
            className="flex justify-between items-center text-black font-semibold text-lg bg-muted rounded-lg py-1 px-4 border hover:border-black cursor-pointer"
            onClick={() => handlePopoverChange(true, item.name)}
          >
            <span className="font-semibold text-md">{item.name}</span>
            <ChevronRight size={24} />
          </div>
          {isOverlayVisible && activePopover === item.name && (
            <div
              id="overlay"
              className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
            >
              <header className="p-4 relative">
                <h1 className="text-center font-semibold text-lg">
                  {activePopover}
                </h1>
                <XIcon
                  size={42}
                  strokeWidth={1}
                  className="cursor-pointer absolute right-2 top-2"
                  onClick={() => handlePopoverChange(false, item.name)}
                />
              </header>
              <div className="p-3 relative mb-3">
                <Input
                  type="text"
                  className="pl-6"
                  placeholder={item.name}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search
                  size={14}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <ScrollArea className="border-b-2 focus:bg-muted flex-grow px-4">
                {activePopover === "Type de véhicule" &&
                  renderPopoverItems(filteredCategories, "category")}
                {activePopover === "Marque" &&
                  renderPopoverItems(filteredMarques, "marque")}
                {activePopover === "Modèle" &&
                  renderPopoverItems(filteredModeles, "modele")}
              </ScrollArea>
              <footer className="inline-flex w-full justify-between items-center px-2 py-4">
                <a
                  className="font-semibold underline w-1/2 text-center hover:text-gray-400"
                  href="#"
                  onClick={() => handlePopoverChange(false, item.name)}
                >
                  Annuler
                </a>
                <MobileValidateBtn />
              </footer>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
